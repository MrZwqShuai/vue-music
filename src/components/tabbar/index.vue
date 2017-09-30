<template>
  <nav class="tab-title">
    <li v-for="(title, index) in tabTitle" @click="toggleTabbar(index)">
      <div>
        <span :class="{'tabtxt': true, 'jumpy-line': index===currentTabbar}">{{title.txt}}</span>
      </div>
    </li>
    <span :class="{'skip-line': true, 'activeO': currentTabbar === 1, 'activeT': currentTabbar === 2}"></span>
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
      ],
      tabUrl: ['/recommend', 'hot', 'search'],
      currentIndex: 0
    }
  },
  computed: {
    currentTabbar () {
      return this.currentIndex
    }
  },
  methods: {
    toggleTabbar (index) {
      console.log(index)
      this.currentIndex = index
      this.$router.push({path: this.tabUrl[index]})
    }
  }
}
</script>
<style scoped>
.tab-title {
  position: relative;
  width: 100%;
  height: 1.6rem;
}

.tab-title li {
  width: 33.33%;
  height: 100%;
  padding-top: .3rem;
  float: left;
  font-size: .65rem;
}

.tabtxt {
  padding-bottom: .25rem;
}

.jumpy-line {
  color: #d33a31;
  transition: all .1s;
  -webkit-transition: all .1s;

}
.skip-line {
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 1.33rem;
  width: 2.7rem;
  height: 2px;
  background: #d33a31;
  transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
}
.activeO {
  width: 1.94rem;
  -webkit-transform: translateX(5.6rem);
  transform: translateX(5.7rem);
}

.activeT {
  width: 1.44rem;
  -webkit-transform: translateX(11.3rem);
  transform: translateX(11.3rem);
}



</style>
