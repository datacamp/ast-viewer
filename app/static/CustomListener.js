var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function Listener() {
	antlr4.tree.ParseTreeListener.call(this);
    this.nodeMap = {};
    this.nodeEdges = [];
    this.trivialRoot = null;
    this.crnt_id = -1;
    this.makeCytoNode = makeCytoNode;
	return this;
}

Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
Listener.prototype.constructor = Listener;

Listener.prototype.enterEveryRule = function(ctx) {
    //console.log(`entering node ${ctx.constructor.name}`);
    console.log(ctx);
    this.crnt_id++;
    ctx.cytoId = this.crnt_id;
    this.nodeMap[this.crnt_id] = this.makeCytoNode(ctx);
    // this is redundant..
    if (isTrivial(ctx) && !this.trivialRoot) this.trivialRoot = ctx.parentCtx.cytoId;
    if (!isTrivial(ctx) && this.trivialRoot) {
        this.nodeEdges.push({
            data: {
                source: this.trivialRoot,
                target: ctx.cytoId
            },
            classes: "collapsed"
        });
        this.trivialRoot = null;
    }
};

Listener.prototype.exitEveryRule = function(ctx) {
    var edges = this.nodeEdges;
    ctx.children.forEach(function(v){
        edges.push({
            data: {
                id: `${ctx.cytoId}-${v.cytoId}`, 
                source: ctx.cytoId,
                target: v.cytoId
            }
        });
    });

    //console.log('exiting node');
};

Listener.prototype.visitTerminal = Listener.prototype.enterEveryRule;
Listener.prototype.visitErrorNode = Listener.prototype.enterEveryRule;

function makeCytoNode(ctx){
    var start = ctx.start ? ctx.start : ctx.symbol;
    var stop  = ctx.stop  ? ctx.stop  : ctx.symbol;
    var data = {
        id: this.crnt_id,
        text: ctx.getText(),
        // Note, this is because antlr4 adds Context to end of each
        // name by default. This approach could break if Context is part of
        // nodes actual name
        name: ctx.constructor.name.replace("Context", ""),
        trivial: isTrivial(ctx),
        lineInfo: {
            col_start: start.start,
            line_start: start.line,
            col_end: stop.stop,
            line_end: stop.line
        }
    }

    if (ctx.constructor.name == "TerminalNodeImpl") var classes = "terminal";
    else if (ctx.constructor.name == "ErrorNodeImpl") var classes = "error";
    else var classes = "context";

    return {data, classes}
};

function tokenToCytoNode(ctx){
    var data = {
        id: this.crnt_id,
        text: ctx.getText(),
        name: ctx.constructor.name,
        lineInfo: {
            col_start: ctx.symbol.column,
            line_start: ctx.symbol.line,
            col_end: ctx.symbol.column,
            line_end: ctx.symbol.line
        }
    }
}

function isTrivial(ctx){
    if (   
           ctx.parentCtx != null 
        && ctx.parentCtx.children.length == 1 
        && ctx.children != null
        && ctx.children.length == 1
        && ctx.children[0].constructor.name != "TerminalNodeImpl"
        ) return true
    else return false
}

// visitErrorNode
// visitTerminal
//
exports.Listener = Listener;
