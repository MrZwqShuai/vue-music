<template>
  <div id="wrapper">
    <HomeTop></HomeTop>
    <div class="home-body">
      <div class="home-nav">
        <Tabbar></Tabbar>
      </div>
      <div class="home-main" @touchstart="tStart" @touchmove="tMove" >
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
      tilte: '嗡嗡嗡'
    }
  },
  methods: {
    tStart (e) {
      let slide = new SlidePages(e)
      slide.flip()
    },
    tMove (e) {
      let slide = new SlidePages(e)
      slide.flip()
    }
  },
  mounted () {
    console.log(SlidePages)
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
</style>
