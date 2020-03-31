class WorldMap {
  frame
  intervalo

  constructor() {
    this.frame = 0
  }

  load() {

  }

  update() {
    this.frame++
  }

  draw() {

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