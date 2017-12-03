export function listen() {
  return new Promise(resolve => {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'de-DE'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onresult = event => {
      resolve(event.results[0][0].transcript)
    }
  })
}
