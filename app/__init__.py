from flask import Flask
from whitenoise import WhiteNoise

app = Flask(__name__)
app.config.from_object('config')

app.wsgi_app = WhiteNoise(app.wsgi_app, root='app/static/', prefix='static/')

# Helper funcs ----------------------------------------------------------------
from antlr_plsql import ast as plsql_ast
from antlr_tsql  import ast as tsql_ast
import ast as python_ast
from .ast_dump import dump_node, dump_bash, dump_vorpal_bash, get_vorpal_bash_ast
import bashlex

def get_parser(parser_name):
    parsers = {'plsql': plsql_ast, 'tsql': tsql_ast}

    return parsers.get(parser_name)

def get_ast(code, start, parser_name):
    if parser_name == "plsql":
        return plsql_ast.parse(code, start)
    elif parser_name == "tsql":
        return tsql_ast.parse(code, start)
    elif parser_name == "python":
        return python_ast.parse(code)
    elif parser_name == "bash-simple":
        return bashlex.parse(code)
    elif parser_name == "bash-verbose":
        return bashlex.parse(code)
    elif parser_name == "bash-vorpal":
        return get_vorpal_bash_ast(code)

    return None

# Views -----------------------------------------------------------------------
from flask import Flask, request,  url_for, redirect, jsonify, make_response
import yaml

def str_or_dump(ast, parser):
    if parser == 'bash-simple': return dump_bash(ast)
    elif parser == 'bash-verbose': return dump_bash(ast, v = True)
    elif parser == 'bash-vorpal': return dump_vorpal_bash(ast)
    elif isinstance(ast, str): return {'type': 'PYTHON_OBJECT', 'data': {"": ast}}
    elif hasattr(ast, '_dump'): return ast._dump()
    else: return dump_node(ast)

@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))

@app.route('/ast')
def ast_postgres():
    args = request.args
    print(args)

    ast = get_ast(args['code'], args['start'], args['parser'])
    if ast is None: return make_response("Incorrect parser name", 400)

    return jsonify(str_or_dump(ast, args['parser']))

@app.route('/ast-from-config', methods = ['GET', 'POST'])
def ast_from_config():
    files = request.files
    print(files['file'])
    data = yaml.load(files['file'])
    print(data)
    ast_parser = get_parser(data['parser_name'])
    
    code = data['code']
    trees = ast_parser.parse_from_yaml(code)

    out = {}
    for k, v in trees.items(): 
        json_asts = [str_or_dump(tree, args['parser_name']) for tree in v]
        sql_cmds = code[k]
        zipped = zip(sql_cmds, json_asts)
        # entry with attrs code: sql_cmd, ast: json_ast
        out[k] = [{'code': code, 'ast': json_ast} for code, json_ast in zipped]
        print(out)
    return jsonify(out)




