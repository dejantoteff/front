export const getJSON: GetRequest = async (url) => {
  const result = await (fetch as any)(url, {
    method: 'GET',
  })

  return result.json()
}