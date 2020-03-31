const WIDTH = 256
const HEIGHT = 240
const FONT = "12px monospace"

const CANVAS = document.getElementById("canvas")
const GAME = canvas.getContext("2d")
GAME.imageSmoothingEnabled = 0;
GAME.canvas.width = WIDTH
GAME.canvas.height = HEIGHT

var MainMenuState = new MainMenu()
var WorldMapState = new WorldMap()
var stateStack = []



stateStack.push(MainMenuState)
run()

window.addEventListener('keydown', (e) => {
  if (e.keyCode == 32) {
    if (!stateStack.includes(WorldMapState)) {
      stateStack.push(WorldMapState)
      run()
    }
  }
  if (e.keyCode == 27) {
    if (stateStack.length > 1) {
      stateStack[stateStack.length - 1].sleep()
      stateStack.pop()
      run()
    }
  }
})

function run() {
  for (let estado = 0; estado < stateStack.length - 1; estado++) {

    stateStack[estado].sleep()
  }
  stateStack[stateStack.length - 1].start()
}