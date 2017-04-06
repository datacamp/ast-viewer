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
