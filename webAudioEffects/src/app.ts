console.log('hello world')

document.getElementById('start').addEventListener('click', async () => {

  const audioCtx = new AudioContext()
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true
  })
  const input = audioCtx.createMediaStreamSource(stream)

})
