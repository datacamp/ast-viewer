from flask import Flask
app = Flask(__name__, static_folder='static/frontend', static_url_path='/static')
app.config.from_object('config')

# Views -----------------------------------------------------------------------
from flask import Flask, request,  url_for, redirect, jsonify
from sqlwhat.grammar.plsql import ast

@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))

@app.route('/ast-postgres')
def ast_postgres():
    args = request.args
    print(args)
    return jsonify(ast.parse(args['code'], args['start'])._dump())

