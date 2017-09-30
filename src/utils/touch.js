export class SlidePages {
  constructor (el) {
    this.el = el
    this.clientX = this.el.targetTouches[0].clientX
    this.clientY = this.el.targetTouches[0].clientY
    this.initPosition = {
      x: 0,
      y: 0
    }
  }
  flip () {
    console.log(this.el.targetTouches[0].clientX, this.el.targetTouches[0].clientY)
  }
  touchDistance () {
    this.touchMoveFunc()
  }
  touchMoveFunc () {
    return this.clientX - this.initPosition.x
  }
  touchStartFunc () {
    this.initPosition.x = this.clientX
  }
}
