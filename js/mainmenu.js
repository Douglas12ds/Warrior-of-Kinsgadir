class MainMenu {
  frame
  intervalo
  frameAnim

  constructor() {
    this.frame = 0
  }

  load() {

  }

  update() {
    this.frame++
    if (this.frame > 10000) {
      this.frame = 0
    } else {
      if (Math.floor(this.frame / 16) % 2 == 0) {
        this.frameAnim = 0
      } else {
        this.frameAnim = 1
      }
    }
  }

  draw() {
    GAME.fillStyle = "#000000"
    GAME.fillRect(0, 0, WIDTH, HEIGHT)

    GAME.font = FONT

    if ( this.frameAnim == 1 ){
      GAME.fillStyle = "#ffffff"
    } else {
      GAME.fillStyle = "#000000"
    }
    GAME.textAlign = "center"
    GAME.fillText("Aperte Enter", WIDTH/2, HEIGHT/2)
  }

  start() {
    this.load()
    this.intervalo = setInterval(() => {
      this.update()
      this.draw()
    }, 33)
  }

  sleep(){
    clearInterval(this.intervalo)
  }
}