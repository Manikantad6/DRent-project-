import requests
import sys
from moneywagon import generate_keypair


coin = sys.argv[1]
coin = str(coin)

fa = open(coin+'address.txt', 'a')
fp = open(coin+'private.txt', 'a')


if (coin=='eth'):
	for i in range(250):
		ret = requests.post('https://api.blockcypher.com/v1/eth/main/addrs?token=5d4921e36bb74890bbb2507e96f402d1')
		data = ret.json()
		print (data)
		priv = data['private']
		addr = data['address']
		fa.write(addr+',')
		data = str(data)
		fp.write(data+'\n\n\n')
		print (i)
else:
	for i in range(500):
		temp = generate_keypair(coin, 'random')
		addr = temp['public']['address']
		temp = str(temp)
		fa.write(addr+',')
		fp.write(temp+'\n\n\n')
		print (i)




