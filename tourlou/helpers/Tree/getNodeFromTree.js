// https://poopcode.com/add-remove-and-update-elements-in-a-json-tree-using-javascript/
const getNodeFromTree = (element, key, matchingTitle) => {
  if (element[key] == matchingTitle) {
    return element
  } else if (element.children != null) {
    var i
    var result = null
    for (i = 0; result == null && i < element.children.length; i++) {
      result = getNodeFromTree(element.children[i], key, matchingTitle)
    }
    return result
  }
  return null
}

export default getNodeFromTree
