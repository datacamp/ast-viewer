from flask import Flask
from whitenoise import WhiteNoise

app = Flask(__name__, static_folder='static/frontend', static_url_path='/static')
app.config.from_object('config')

app.wsgi_app = WhiteNoise(app.wsgi_app)
app.wsgi_app.add_files('static/frontend')
app.wsgi_app.add_files('static')

# Helper funcs ----------------------------------------------------------------
from antlr_plsql import ast as plsql_ast
from antlr_tsql  import ast as tsql_ast

def get_ast(code, start, parser_name):
    if parser_name == "plsql":
        return plsql_ast.parse(code, start)
    elif parser_name == "tsql":
        return tsql_ast.parse(code, start)
    else: raise NameError("No parser by that name")

# Views -----------------------------------------------------------------------
from flask import Flask, request,  url_for, redirect, jsonify

@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))

@app.route('/ast')
def ast_postgres():
    args = request.args
    print(args)
    try:
        return jsonify(get_ast(args['code'], args['start'], args['parser'])._dump())
    except NameError:
        return make_response("Incorrect parser name", 400)


