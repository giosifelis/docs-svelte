// https://poopcode.com/add-remove-and-update-elements-in-a-json-tree-using-javascript/
const deleteNodeFromTree =(node, nodeId) =>{
	if (node.children != null) {
      for (let i = 0; i < node.children.length; i++) {
				let filtered = node.children.filter(f => f.nodeId == nodeId);
				if (filtered && filtered.length > 0) {
					node.children = node.children.filter(f => f.nodeId != nodeId);
					return;
        }
      deleteNodeFromTree(node.children[i], nodeId,);
    }
  }

}

export default deleteNodeFromTree
