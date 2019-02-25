from antlr4.tree import Tree
from antlr_ast.ast import parse as parse_ast


class CytoListener(Tree.ParseTreeListener):
    """This class defines a complete listener for a parse tree produced by ExprParser."""

    def __init__(self):
        super(CytoListener, self).__init__()
        self.node_map = {}
        self.node_edges = []
        self.trivial_root = None
        self.current_id = -1

    def enterEveryRule(self, ctx):
        self.current_id += 1
        ctx.cyto_id = self.current_id
        self.node_map[self.current_id] = self.make_cyto_node(ctx)
        # this is redundant..
        if self.is_trivial(ctx) and not self.trivial_root:
            self.trivial_root = ctx.parentCtx.cyto_id
        if not self.is_trivial(ctx) and self.trivial_root:
            self.node_edges.append(
                {
                    "data": {"source": self.trivial_root, "target": ctx.cyto_id},
                    "classes": "collapsed",
                }
            )
            self.trivial_root = None

    def exitEveryRule(self, ctx):
        if not ctx.children:
            return

        edges = self.node_edges
        for child in ctx.children:
            edges.append(
                {
                    "data": {
                        "id": "%s-%s" % (ctx.cyto_id, child.cyto_id),
                        "source": ctx.cyto_id,
                        "target": child.cyto_id,
                    }
                }
            )

    def visitTerminal(self, node):
        self.enterEveryRule(node)

    def visitErrorNode(self, node):
        self.enterEveryRule(node)

    def make_cyto_node(self, ctx):
        name = ctx.__class__.__name__
        start = ctx.start if hasattr(ctx, "start") else ctx.symbol
        stop = ctx.stop if getattr(ctx, "stop", None) else getattr(ctx, "symbol", {})
        data = {
            "id": self.current_id,
            "text": ctx.getText(),
            # Note, this is because antlr adds Context to end of each
            # name by default. This approach could break if Context is part of
            # nodes actual name
            "name": name.replace("Context", ""),
            "trivial": self.is_trivial(ctx),
            "lineInfo": {
                "col_start": start.start,
                "line_start": start.line,
                "col_end": getattr(stop, "stop", -1),
                "line_end": getattr(stop, "line", -1),
            },
        }

        if name == "TerminalNodeImpl":
            classes = "terminal"
        elif name == "ErrorNodeImpl":
            classes = "error"
        else:
            classes = "context"

        return {"data": data, "classes": classes}

    @staticmethod
    def is_trivial(ctx):
        if (
            ctx.parentCtx is not None
            and len(ctx.parentCtx.children) == 1
            and getattr(ctx, "children", None)
            and len(ctx.children) == 1
            and ctx.children[0].__class__.__name__ != "TerminalNodeImpl"
        ):
            return True
        else:
            return False


def parse_from_grammar(grammar, text, start):
    tree = parse_ast(grammar, text, start)
    listener = CytoListener()
    Tree.ParseTreeWalker.DEFAULT.walk(listener, tree)

    elements = {
        "nodes": [listener.node_map[key] for key in listener.node_map.keys()],
        "edges": listener.node_edges,
    }
    return elements


if __name__ == "__main__":
    from app.__init__ import grammars

    antlr_ast = parse_from_grammar(
        grammars["plsql"], "SELECT id FROM artists WHERE id > 100", "sql_script"
    )

    print(antlr_ast)
