<template>
  <nav class="tab-title">
    <li v-for="title in tabTitle">
      <div><span class="tabtxt">{{title.txt}}</span></div>
      </li>
  </nav>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      tabTitle: [{
        txt: '推荐音乐'
      }, {
        txt: '热歌榜'
      }, {
        txt: '搜索'
      }
      ]
    }
  }
}
</script>
<style scoped>
.tab-title{
  width: 100%;
  
}
.tab-title li{
  width: 33%;
  float: left;
  font-size: .65rem;
}
.tabtxt{
  padding-bottom: .4rem;
  border-bottom: 2px solid #d33a31;
}
</style>
