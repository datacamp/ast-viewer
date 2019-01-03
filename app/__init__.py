from flask import Flask
from whitenoise import WhiteNoise

app = Flask(__name__)
app.config.from_object('config')

app.wsgi_app = WhiteNoise(app.wsgi_app, root='app/static/', prefix='/', index_file=True)

# Helper funcs ----------------------------------------------------------------
from antlr_plsql import grammar as plsql_grammar, ast as plsql_ast
from antlr_tsql import grammar as tsql_grammar, ast as tsql_ast
from shellwhat.State import State
shell_ast = State.get_dispatcher().ast

import ast as python_ast
from .CytoListener import parse_from_grammar
from .ast_dump import dump_node

grammars = {
    'plsql': plsql_grammar,
    'tsql': tsql_grammar
}

ast_parsers = {
    'python': python_ast,
    'plsql': plsql_ast,
    'tsql': tsql_ast,
    'shell': shell_ast
}


def get_raw_ast(code, start, grammar_name):
    grammar = grammars.get(grammar_name)
    return parse_from_grammar(grammar, code, start)


def get_ast(code, start, parser_name):
    parser = ast_parsers.get(parser_name)
    if 'sql' in parser_name:
        return parser.parse(code, start)
    else:
        try:
            return parser.parse(code)
        except SyntaxError:
            pass

    return None

# Views -----------------------------------------------------------------------
from flask import Flask, request, url_for, redirect, jsonify, make_response, send_file
import yaml


def str_or_dump(ast):
    if isinstance(ast, str): return {'type': 'PYTHON_OBJECT', 'data': {"": ast}}
    elif hasattr(ast, '_dump'): return ast._dump()
    else: return dump_node(ast)


@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))


@app.route('/raw-ast')
def raw_ast():
    args = request.args
    print(args)

    ast = get_raw_ast(args['code'], args['start'], args['parser'])
    if ast is None: return make_response("Incorrect parser name", 400)

    return jsonify(str_or_dump(ast))


@app.route('/ast')
def ast_postgres():
    args = request.args
    print(args)

    ast = get_ast(args['code'], args['start'], args['parser'])
    if ast is None: return make_response("Incorrect parser name", 400)

    return jsonify(str_or_dump(ast))


@app.route('/ast-from-config', methods = ['GET', 'POST'])
def ast_from_config():
    files = request.files
    print(files['file'])
    data = yaml.safe_load(files['file'])
    print(data)
    ast_parser = ast_parsers.get(data['parser_name'])

    code = data['code']
    trees = ast_parser.parse_from_yaml(code)

    out = {}
    for k, v in trees.items():
        json_asts = [str_or_dump(tree) for tree in v]
        sql_cmds = code[k]
        zipped = zip(sql_cmds, json_asts)
        # entry with attrs code: sql_cmd, ast: json_ast
        out[k] = [{'code': code, 'ast': json_ast} for code, json_ast in zipped]
        print(out)
    return jsonify(out)


@app.errorhandler(404)
def page_not_found(error):
    return send_file('./static/index.html')
