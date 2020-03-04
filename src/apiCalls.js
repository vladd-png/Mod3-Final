export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (options) => {
  return fetch('http://localhost:3001/api/v1/urls', options)
    .then(response => response.json())
}
