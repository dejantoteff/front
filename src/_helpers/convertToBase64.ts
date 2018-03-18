// const toDataURL = url => fetch(url)
//   .then(response => response.blob())
//   .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
//   }))

export function convertToBase64(url) {
  return new Promise(resolve => {
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
      var reader = new FileReader()
      reader.onloadend = function() {
        resolve(reader.result)
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  })
}
