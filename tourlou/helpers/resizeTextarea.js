const resizeTextarea = (value) => (value.match(/\n/g) || []).length + 1 || 1
  

  export default resizeTextarea