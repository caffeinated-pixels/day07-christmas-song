const playBtn = document.getElementById('play-btn')
const pauseBtn = document.getElementById('pause-btn')
const stopBtn = document.getElementById('stop-btn')

const xmasAudio = new Audio('./fire-and-ice.mp3')
console.log('dave')

playBtn.addEventListener('click', () => xmasAudio.play())
pauseBtn.addEventListener('click', () => xmasAudio.pause())
stopBtn.addEventListener('click', () => {
  xmasAudio.pause()
  xmasAudio.currentTime = 0
})

// playBtn.onclick =
// pauseBtn.onclick = xmasAudio.pause()

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
