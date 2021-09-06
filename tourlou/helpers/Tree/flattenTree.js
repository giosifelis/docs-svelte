// http://plnkr.co/edit/JmrQukZWNHZK4Z0A?open=lib%2Fscript.js
const flattenTree = (treeArray) => {
  let flatArray = [];

  const flattenNode = (treeNode) => {
    treeNode.forEach((subNode) => {
      flattenNode(subNode.children);
      const child = { ...subNode };
      delete child.children;
      flatArray = [...flatArray, child];
    });
    return flatArray;
  };

  return flattenNode(treeArray);
};

export default flattenTree
