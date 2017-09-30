<template>
  <div class="container">
    <div class="remd-main">
      <div class="remd-item">
        <h4>推荐歌单</h4>
        <div class="remd-songs">
          <ul class="songs-box">
            <li v-for="remdSong in remdSongs">
              <div class="remd-img">
                <img src="" alt="">
                <span>90.3万</span>
              </div>
              <p class="remd-txt">「粤」动情深，何以你不懂</p>
            </li>
          </ul>
          </div> 
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'recommend',
    data () {
      return {
        remdSongs: [1, 2, 3, 4, 5, 6]
      }
    }
  }
</script>
<style scoped>
ul{
  padding-left: 0;
}
li{
  width: 33.3%;
  float: left;
  list-style: none;
}
.remd-main .remd-item {
  width: 100%;
}

.remd-main .remd-item h4::before {
  content: '';
  position: absolute;
  left: 0;
  top: .1rem;
  width: 2px;
  height: .65rem;
  background-color: #d33a31;
}

.remd-main .remd-item h4 {
  position: relative;
  text-align: left;
  text-indent: .3rem;
}
.remd-txt{
  font-size: .4rem;
}
.songs-box{
  overflow: hidden;
}
</style>
