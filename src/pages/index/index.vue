<template>
  <div id="wrapper">
    <HomeTop></HomeTop>
    <div class="home-body">
      <div class="home-nav">
       <Tabbar></Tabbar>
      </div>
      <div class="home-main">

      </div>
    </div>
  </div>
</template>
<script>
import HomeTop from '../../components/head'
import Tabbar from '../../components/tabbar'
export default {
  name: 'index',
  components: {
    HomeTop,
    Tabbar
  },
  data () {
    return {
      tilte: 'hhh'
    }
  }
}
</script>
<style scoped>
.home-body{
  width: 100%;
  height: 2rem;
  margin-top: 3.5rem;
}
.home-nav{
  position: fixed;
  width: 100%;
  top: 3.5rem;
}
</style>
