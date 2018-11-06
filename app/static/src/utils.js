module.exports = {
    AstCytoBuilder
}

function AstCytoBuilder() {
    self = {
        crnt_id: 0,
        astToCyto,
        isTerminal
    };
    return self

    function astToCyto(ast, parent_node, field, arr_indx) {
        // recurse for arrays -------------------------------------------------
        if (Array.isArray(ast)) {
            result = [].concat.apply([], ast.map( (v, ii) => this.astToCyto(v, parent_node, field, ii)));
            return result
        }

        // otherwise create a new node and recurse ----------------------------
        var node = makeCytoNode(ast, this.crnt_id, isTerminal(ast));
        this.crnt_id += 1;

        var result = [node]
        
        // make edge to parent node
        if (parent_node) result.push(makeCytoEdge(parent_node.data.id, node.data.id, field, arr_indx));

        if (ast && ast.type) {
            for (const key of Object.keys(ast.data)) {
                var d = ast.data[key]
                if ( d != null) {
                    var key_node = this.astToCyto(ast.data[key], node, key);
                    result = result.concat(key_node);
                }
            }

            if (ast.type == 'Unshaped') node.classes += " unshaped"
        }
        
        return result
    };
}

function isTerminal(ast_node) {
    return ast_node === null || !(ast_node.type || Array.isArray(ast_node))
}

function makeCytoNode(ast_node, id, terminal) {
    var data = {
        id,
        text: terminal ? ast_node   : ast_node.type,
        name: terminal ? ast_node   : ast_node.type,
        type: terminal ? 'terminal' : ast_node.type
    };

    var classes = terminal ? 'terminal' : '' ;

    return {data, classes}
};

function makeCytoEdge(source, target, text, arr_indx) {
    if (arr_indx != null) var text = `${text} [${arr_indx}]`

    return {
        data: { source, target, text }
    }
};

