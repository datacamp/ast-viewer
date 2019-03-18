from collections import OrderedDict

def dump_node(obj, parent_cls):
    # pull element out of single entry lists
    if isinstance(obj, (list, tuple)) and len(obj) == 1: obj = obj[0]
    # dump to dict
    if isinstance(obj, parent_cls):
        fields = OrderedDict()
        for name in [el for el in obj.__dict__.keys() if el != 'kind']:
            attr = getattr(obj, name)
            if   isinstance(attr, parent_cls): fields[name] = dump_node(attr, parent_cls)
            elif isinstance(attr, list) and len(attr) == 0: continue
            elif isinstance(attr, list): fields[name] = [dump_node(x, parent_cls) for x in attr]
            else: fields[name] = attr
        return {'type': obj.kind, 'data': fields}
    elif isinstance(obj, list):
        return [dump_node(x) for x in obj]
    else: raise Exception("received non-node object?") 

import bashlex

parts = bashlex.parse('true && echo hey')

out = dump_node(parts, bashlex.ast.node)
