from flask import Flask, render_template, request, url_for, flash, redirect, session
from flask_mysqldb import MySQL
import requests
import yaml
import sys
import hashlib
import os
from moneywagon import generate_keypair
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.path.basename('uploads')
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'dont tell any one'

db = yaml.load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    elif request.method == 'POST':
        userDetails = request.form
        username = userDetails['uname']
        password = userDetails['pswd']
        usertype = userDetails['utype']
        hash = hashlib.md5(password.encode())
        password = hash.hexdigest()
        cur = mysql.connection.cursor()
        query = "select * from usertable1 where username ='"+username+"' AND password='"+password+"' AND usertype='"+usertype+"'"
        # return query
        cur.execute(query)
        records = cur.fetchall()
        num = cur.rowcount
        # flash(num)
        if num >= 1:
            session['username'] = username
            session['usertype'] = usertype
            if usertype == 'Tenant':
                return redirect('tenantDashboard')
            else:
                return redirect('landlordDashboard')
        else:
            flash("invalid username or password")
            return redirect('login')


        cur.close()

@app.route('/addproperty', methods=['GET','POST'])
def addproperty():
    if request.method == 'GET':
        if session.get('usertype') == 'Landlord':
            return render_template('addProperty.html')
        else:
            return redirect('login')
    elif request.method == 'POST':
        details = request.form
        name = details['pname']
        description = details['description']
        lCity = details['lcity']
        eth_address = details['eth_address']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM properties WHERE eth_address='"+eth_address+"'")
        num = str(cur.rowcount)
        pid = num
        if 'file' in request.files:
            file = request.files['file']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img_name = filename
        cur.execute("INSERT INTO properties(pid,eth_address,title,description,location,img_name) VALUES(%s, %s,%s,%s,%s,%s)", (pid, eth_address,name,description,lCity,img_name))
        mysql.connection.commit()
        cur.close()
        flash("Property listed, Thank you..!!!")
        return render_template('success.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        userDetails = request.form
        name = userDetails['name'];
        uname = userDetails['uname']
        h = hashlib.md5(userDetails['pswd'].encode())
        password = h.hexdigest()
        mobile = userDetails['phn']
        address = userDetails['addr']
        type = userDetails['purp']
        ethaddress = userDetails['ethaddress']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO usertable1(name, username, password, mobileno, address, usertype, eth_address) VALUES(%s, %s, %s, %s, %s, %s, %s)", (name, uname, password, mobile, address, type, ethaddress))
        mysql.connection.commit()
        cur.close()
        flash("Register successfull !! login to continue..")
        return render_template('success.html')
    elif request.method == 'GET':
        return render_template('register.html')

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/tenantDashboard')
def tenantDashboard():
    if session.get('usertype') == 'Tenant':
        cur = mysql.connection.cursor()
        query = "select * from properties";
        cur.execute(query)
        records = cur.fetchall()
        num = cur.rowcount
        return render_template('tenantDashboard.html', data = records, len = num)
    else:
        return redirect('login')

@app.route('/landlordDashboard')
def landlordDashboard():
    if session.get('usertype') == 'Landlord':
        return render_template('landlordDashboard.html')
    else:
        return redirect('login')

@app.route('/propertydetails')
def propertydetails():
    if session.get('usertype') == 'Tenant' or session.get('usertype') == 'Landlord':
        return render_template('propertyDetails.html')
    else:
        return redirect('login')

@app.route('/showproperty')
def showproperty():
    if session.get('usertype') == 'Tenant' or session.get('usertype') == 'Landlord':
        return render_template('showproperties.html')
    else:
        return redirect('login')

@app.route('/logout')
def logout():
   # remove the username from the session if it is there
   session.pop('username', None)
   session.pop('usertype', None)
   return redirect('/')

@app.route('/agreements')
def agreements():
    if session.get('usertype') == 'Tenant' or session.get('usertype') == 'Landlord':
        return render_template('showproperties.html')
    else:
        return redirect('login');

if __name__ =='__main__':
    app.run(debug=True)
