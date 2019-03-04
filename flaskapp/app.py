from flask import Flask, render_template, request, url_for, flash, redirect, session
from flask_mysqldb import MySQL
import requests
import yaml
import sys
import hashlib
from moneywagon import generate_keypair

app = Flask(__name__)
app.secret_key = 'dont tell any one'

db = yaml.load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

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
        return ''

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        ret = requests.post('https://api.blockcypher.com/v1/eth/main/addrs?token=5d4921e36bb74890bbb2507e96f402d1')
        data = ret.json();
        userDetails = request.form
        uname = userDetails['uname']
        h = hashlib.md5(userDetails['pswd'].encode())
        password = h.hexdigest()
        mobile = userDetails['phn']
        address = userDetails['addr']
        type = userDetails['purp']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO usertable1(username, password, mobileno, address, usertype) VALUES(%s, %s, %s, %s, %s)", (uname, password, mobile, address, type))
        mysql.connection.commit()
        cur.close()
        flash("Register successfull please save following details:")
        return render_template('success.html', data = data)
    elif request.method == 'GET':
        return render_template('register.html')

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/tenantDashboard')
def tenantDashboard():
    if session.get('usertype') == 'Tenant':
        return render_template('tenantDashboard.html')
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

@app.route('/logout')
def logout():
   # remove the username from the session if it is there
   session.pop('username', None)
   session.pop('usertype', None)
   return redirect('/')



if __name__ =='__main__':
    app.run(debug=True)
