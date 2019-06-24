from flask import Flask
from whitenoise import WhiteNoise

app = Flask(__name__)
app.config.from_object('config')

app.wsgi_app = WhiteNoise(app.wsgi_app, root='app/static/', prefix='/', index_file=True)

# Helper funcs ----------------------------------------------------------------
from antlr_plsql import grammar as plsql_grammar, ast as plsql_ast
from antlr_tsql import grammar as tsql_grammar, ast as tsql_ast
from antlr_scala import grammar as scala_grammar, ast as scala_ast
from shellwhat.State import State
from shellwhat.parsers import DEFAULT_PARSER as shell_ast

import ast as python_ast
from antlr_ast.ast import parse as parse_ast, process_tree
from .CytoListener import parse_from_grammar
from .ast_dump import dump_node

grammars = {
    'plsql': plsql_grammar,
    'tsql': tsql_grammar,
    'scala': scala_grammar
}

ast_parsers = {
    'python': python_ast,
    'plsql': plsql_ast,
    'tsql': tsql_ast,
    'scala': scala_ast,
    'shell': shell_ast
}


def get_antlr_ast(grammar_name, code, start):
    grammar = grammars.get(grammar_name)
    return parse_from_grammar(grammar, code, start)


def get_base_ast(grammar_name, code, start):
    if 'sql' in grammar_name or 'scala' in grammar_name:
        grammar = grammars.get(grammar_name)
        tree = parse_ast(grammar, code, start)
        return process_tree(tree, simplify=False)
    # else:  # TODO

    return None


def get_alias_ast(grammar_name, code, start):
    if 'sql' in grammar_name or 'scala' in grammar_name:
        grammar = grammars.get(grammar_name)
        parser = ast_parsers.get(grammar_name)
        tree = parse_ast(grammar, code, start)
        return process_tree(tree, transformer_cls=parser.Transformer, simplify=False)
    # else:  # TODO

    return None


def get_ast(parser_name, code, start):
    parser = ast_parsers.get(parser_name)
    if 'sql' in parser_name or 'scala' in parser_name:
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
    else: return dump_node(ast)


def parse_from_yaml(fname, parser):
    data = yaml.safe_load(open(fname)) if isinstance(fname, str) else fname
    out = {}
    for start, cmds in data.items():
        out[start] = [parser.parse(cmd, start) for cmd in cmds]
    return out


@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))


@app.route('/antlr-ast')
def antlr_ast():
    return ast_request(get_antlr_ast)


@app.route('/base-ast')
def base_ast():
    return ast_request(get_base_ast)


@app.route('/alias-ast')
def alias_ast():
    return ast_request(get_alias_ast)


@app.route('/ast')
def final_ast():
    return ast_request(get_ast)


def ast_request(ast_function):
    args = request.args
    ast = ast_function(args['parser'], args['code'], args['start'])
    if ast is None: return make_response("Incorrect parser name", 400)

    return jsonify(str_or_dump(ast))


@app.route('/ast-from-config', methods = ['GET', 'POST'])
def ast_from_config():
    files = request.files
    data = yaml.safe_load(files['file'])
    ast_parser = ast_parsers.get(data['parser_name'])

    code = data['code']
    trees = parse_from_yaml(code, ast_parser)

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
