const parseUrlParams = (url) => {
  const params = url.split('/')
  params.shift()

  return params
}

export default parseUrlParams
