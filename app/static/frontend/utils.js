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

    function astToCyto(ast, parent_node) {
        // recurse for arrays -------------------------------------------------
        if (Array.isArray(ast)) {
            result = [].concat.apply([], ast.map( (v) => this.astToCyto(v, parent_node)));
            return result
        }

        // otherwise create a new node and recurse ----------------------------
        var node = makeCytoNode(ast, this.crnt_id, isTerminal(ast));
        this.crnt_id += 1;

        var result = [node]
        
        // make edge to parent node
        if (parent_node) result.push(makeCytoEdge(parent_node.data.id, node.data.id));

        console.log(`is terminal: ${isTerminal(ast)}`)

        if (ast.type) {
            console.log('FIELDS')
            for (const key of Object.keys(ast.data)) {
                console.log(`KEY: ${key}`);
                var d = ast.data[key]
                if ( d != null) {
                    var key_node = this.astToCyto(ast.data[key], node);
                    result = result.concat(key_node);
                }
            }
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


    console.log(`made node for ${data.type}, id ${data.id}`);
    return {data, classes}
};

function makeCytoEdge(source, target) {
    console.log(`made edge for ${source} -> ${target}`);
    return {
        data: { source, target }
    }
};

