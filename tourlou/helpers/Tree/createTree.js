// http://plnkr.co/edit/JmrQukZWNHZK4Z0A?open=lib%2Fscript.js
const createTree = (items, id = null, link = 'parentId') =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: createTree(items, item.id) }));

export default createTree
