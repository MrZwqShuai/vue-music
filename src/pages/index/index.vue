<template>
  <div id="wrapper">
    <HomeTop></HomeTop>
    <div class="home-body">
      <div class="home-nav">
        <Tabbar :data="myData"></Tabbar>
      </div>
      <div style="display: block" class="home-main" @touchstart="tStart" @touchmove="tMove" @touchend="tEnd" ref="songPages">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import HomeTop from '../../components/head'
import Tabbar from '../../components/tabbar'
import { SlidePages } from '../../utils/touch'
export default {
  name: 'index',
  components: {
    HomeTop,
    Tabbar
  },
  data () {
    return {
      tilte: '嗡嗡嗡',
      distance: 0,
      myData: {
        index: 2
      }
    }
  },
  methods: {
    tStart (e) {
      this.slide = new SlidePages(e)
      this.slide.touchStartFunc()
    },
    tMove (e) {
      this.distance = this.slide.touchDistance(e)
      this.$refs.songPages.style.WebkitTransform = `translate(${this.distance}px)`
      console.log('distance', this.distance)
    },
    tEnd (e) {
      console.log('触摸结束', this.distance, this.$refs.songPages.getBoundingClientRect().width / 2)
      if (this.distance > this.$refs.songPages.getBoundingClientRect().width / 2) {
        this.$router.push('hot')
        this.$refs.songPages.style.WebkitTransform = 'translate(0px)'
        this.distance = 0
        this.myData.index = 1
        return
      }
      this.$refs.songPages.style.WebkitTransform = 'translate(0px)'
    }
  },
  mounted () {
    console.log(this.$refs.songPages.style)
  }
}
</script>
<style scoped>
.home-body {
  position: fixed;
  width: 100%;
  left: 0;
  top: 3rem;
}

.home-nav {
  width: 100%;
  border-bottom: 1px solid rgb(228, 216, 216);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
  /* opacity: 0; */
  transform: translate(100%, 0);
}
.home-main{
  display: block;
}
</style>
