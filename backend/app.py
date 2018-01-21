from flask import Flask,request
from command_to_script import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/compile",methods=["GET"])
def compile():
	q = request.args.get('q')
	x = request.args.get('x')
	y = request.args.get('y')
	z = request.args.get('z')
	print(q,x,y,z)
	body = process(q,[x,y,z],pathVar)
	print(body)
	return body

@app.route("/imgPath",methods=["GET"])
def path():
	n = request.args.get('n')
	global pathVar
	pathVar = n
	return "<p>H</p>"
if __name__ == "__main__":

	app.run(debug=True,threaded=True)
