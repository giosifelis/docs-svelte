// https://poopcode.com/add-remove-and-update-elements-in-a-json-tree-using-javascript/
const updateNodeInTree = (node, nodeId, newNode) => {
  
  if(node === node.id) {
    node = {...newNode}
  } else if (node.children != null) {

    for (let i = 0; i < node.children.length; i++) {
      let childNode = node.children[i]

      childNode.id === nodeId ? 
       node.children[i] = { ...newNode} : updateNodeInTree(childNode, nodeId, newNode)
      }
    }


  }

export default updateNodeInTree
