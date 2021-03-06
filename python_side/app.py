from flask import Flask, jsonify, request, render_template, Response
import subprocess, sys
import json

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():

    if request.method == 'POST':
        # path = request.get_json()
        # path = path['path']
        #path = r"D:\projects\GetPermissions\powershell_side\restAPI.ps1"
        #path = request.form['path']
        path = request.get_json("path")["path"]
        print(path)
        return jsonify(get_permissions(path))
    else:
        return render_template("main.html")


@app.after_request
def apply_access_control(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.errorhandler(404)
def error_404(err):
    return "404"

@app.errorhandler(500)
def error_500(err):
    return "invalid path!"


def get_permissions(path):
    p = subprocess.Popen(["powershell.exe", r"D:\projects\GetPermissions\powershell_side\restAPI.ps1", path], stdout=subprocess.PIPE)
    text = p.communicate()[0]
    text = json.loads(text)
    print(text)
    return text

app.run(debug=True, port=8000)