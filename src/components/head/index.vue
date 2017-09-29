<template>
  <div class="header">
    <header>
      <div class="top">
        <div class="logo">
          <img src="./images/logo.png" alt="">
        </div>
        <span class="music-title">网易云音乐</span>
        <div class="top-down">
          <span>下载App</span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
header {
  background-color: #d43c33;
  width: 100%;
  height: 3rem;
}

.top {
  height: 100%;
  display: -webkit-flex;
  padding: 0 .4rem ;
}

.top .logo {
  display: -webkit-flex;
  -webkit-align-items: center;
  height: 100%;
}
.music-title{
  display: -webkit-flex;
  -webkit-align-items: center;
  color: #fff;
  font-size: .8rem;
}
.top-down{
  display: -webkit-flex;
  -webkit-align-items: center;
  margin-left: 6.2rem;
  color: #fff;
  font-size: .6rem;
}
.top-down span{
  border: 1px solid #fff;
  border-radius: 1rem;
  padding: .1rem .4rem;
}
</style>
