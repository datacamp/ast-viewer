import ast
from collections import OrderedDict

def dump_node(obj):
    if isinstance(obj, ast.AST):
        fields = OrderedDict()
        for name in obj._fields:
            attr = getattr(obj, name, None)
            if attr is None: continue
            elif isinstance(attr, ast.AST): fields[name] = dump_node(attr)
            elif isinstance(attr, list):    fields[name] = [dump_node(x) for x in attr]
            else:                           fields[name] = attr
        return {'type': obj.__class__.__name__, 'data': fields}
    elif isinstance(obj, list):
        return [dump_node(x) for x in obj]
    else:
        return obj

import bashlex
def dump_bash(obj, parent_cls = bashlex.ast.node, v = False):
    # pull element out of single entry lists
    if isinstance(obj, (list, tuple)) and len(obj) == 1: obj = obj[0]
    # dump to dict
    if isinstance(obj, parent_cls):
        if obj.kind in ['word', 'reservedword'] and not v:
            return obj.word
        fields = OrderedDict()
        for name in [el for el in obj.__dict__.keys() if el not in ('kind', 'pos')]:
            attr = getattr(obj, name)
            if   isinstance(attr, parent_cls): fields[name] = dump_bash(attr, parent_cls, v)
            elif isinstance(attr, list) and len(attr) == 0: continue
            elif isinstance(attr, list): fields[name] = [dump_bash(x, parent_cls, v) for x in attr]
            else: fields[name] = attr
        return {'type': obj.kind, 'data': fields}
    elif isinstance(obj, list):
        return [dump_bash(x, parent_cls, v) for x in obj]
    else: raise Exception("received non-node object?") 


def dump_vorpal_bash(obj, v = False):
    # pull element out of single entry lists
    if isinstance(obj, (list, tuple)) and len(obj) == 1: obj = obj[0]
    # dump to dict
    if isinstance(obj, list):
        return [dump_vorpal_bash(x, v) for x in obj]
    elif isinstance(obj, dict):
        if obj['type'] in ['Word'] and not v:
            return obj['text']
        fields = OrderedDict()
        for name in [el for el in obj.keys() if el not in ('loc', 'type')]:
            attr = obj[name]
            if   isinstance(attr, dict): fields[name] = dump_vorpal_bash(attr, v)
            elif isinstance(attr, list) and len(attr) == 0: continue
            elif isinstance(attr, list): fields[name] = [dump_vorpal_bash(x, v) for x in attr]
            else: fields[name] = attr
        return {'type': obj['type'], 'data': fields}
    else: raise Exception("received non-node object?") 

import execjs
import os
node_path = os.getcwd() + '/node_modules'
os.environ['NODE_PATH'] = node_path + ':' + os.environ.get('NODE_PATH', "")
def get_vorpal_bash_ast(src):
    node = execjs.get('node')
    return node.eval("""require('bash-parser')(`%s`)"""%src.replace('"', r'\"'))

