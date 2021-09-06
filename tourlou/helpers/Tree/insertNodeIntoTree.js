// https://poopcode.com/add-remove-and-update-elements-in-a-json-tree-using-javascript/
const insertNodeIntoTree = (node, nodeId, newNode) => {
  if (node.nodeId == nodeId) {
      // get new id
      let n = 0;
      /** Your logic to generate new Id **/
     
      if (newNode) {
          newNode.nodeId = n;
          newNode.children = [];
          node.children.push(newNode);
      }

  } else if (node.children != null) {
      for (let i = 0; i < node.children.length; i++) {
          insertNodeIntoTree(node.children[i], nodeId, newNode);
      }

  }

}

// let newNode = {level:5};
// let newTree = insertNodeIntoTree(tree, 5, newNode);

export default insertNodeIntoTree
