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
    console.log(this.el.targetTouches[0].clientX)
  }
  touchDistance (e) {
    return this.touchMoveFunc(e)
  }
  touchMoveFunc (e) {
    console.log('滑动的距离: ', e.targetTouches[0].clientX, this.initPosition.x)
    return e.targetTouches[0].clientX - this.initPosition.x
  }
  touchStartFunc () {
    this.initPosition.x = this.clientX
    console.log('记录手指按下的x距离: ', this.initPosition.x)
  }
}
