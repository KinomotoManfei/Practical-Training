<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {  },
  data() {
    return {
      currentTab: 'all',
      showMore: false,
      matchData: [
        { id: 1, type: 'follow', league: '校足球联赛', home: '计算机学院', away: '管理学院', num:11, score: '2-1', status: '已结束',teamIcon: '⚽' },
        { id: 2, type: 'football', league: '校足球联赛', home: '电子学院', away: '文学院', num:10, score: '0-0', status: '进行中',teamIcon: '⚽' },
        { id: 3, type: 'important', league: '省大学生篮球赛', home: '法学院', away: '医学院', num:9, score: '56-48', status: '已结束',teamIcon: '🏀' },
        { id: 4, type: 'basketball', league: '校篮球联赛', home: '外语学院', away: '工学院', num:8, score: '32-28', status: '未开始',teamIcon: '🏀' },
        { id: 5, type: 'badminton', league: '木之本曼飛', home:'友枝小学',away:'友枝中学', num:7, score: '12-22', status: '已结束',teamIcon: '🏸'}
      ]
    };
  },
  computed: {
    filteredMatches() {
      if (this.currentTab === 'all') {
        return this.matchData;
      }
      return this.matchData.filter(item => item.type === this.currentTab);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  color: #333;
}

.top-header {
  background-color: #fff;
  padding: 4.2667vw 0;
  border-bottom: 0.2667vw solid #eaeaea;
}
.top-header h1 {
  font-size: 5.3333vw;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3.2vw 0;
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 3.2vw;
  overflow-x: auto;
  padding: 0 4.2667vw;
  white-space: nowrap; /* 确保内容不换行 */
  -webkit-overflow-scrolling: touch; /* 优化移动端滚动体验 */
}
.tab-btn {
  padding: 1.6vw 3.2vw;
    min-width: auto; /* 允许按钮根据内容自适应宽度 */
  border: none;
  background: transparent;
  font-size: 3.7333vw;
  color: #666;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color 0.2s;
}
.tab-btn.active {
  color: #1677ff;
  font-weight: 500;
}
.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 0.5333vw;
  background-color: #1677ff;
  border-radius: 0.2667vw;
}
.tab-btn:not(.active):hover {
  color: #333;
}

.tab-more {
  border: none;
  background: transparent;
  font-size: 4.2667vw;
  color: #666;
  cursor: pointer;
  padding: 0 2.1333vw;
}

.more-tabs {
  display: flex;
  justify-content: center;
  gap: 3.2vw;
  padding: 2.1333vw 4.2667vw;
  background-color: #fff;
  border-top: 0.2667vw solid #f0f0f0;
}

.date-section {
  padding: 3.2vw 4.2667vw;
  color: #888;
  font-size: 3.4667vw;
  background-color: #f8f9fa;
  border-bottom: 0.2667vw solid #eaeaea;
}

.match-list {
  padding: 4.2667vw;
  display: flex;
  flex-direction: column;
  gap: 3.2vw;
}

.footer-nav {
  display: flex;
  justify-content: space-around;
  padding: 2.1333vw 0;
  border-top: 0.2667vw solid #eee;
  background-color: #fff;
  margin-top: auto;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.nav-item.active .nav-label {
  color: #4285f4;
}
.icon {
  font-size: 5.3333vw;
}
.nav-label {
  font-size: 3.2vw;
  margin-top: 1.0667vw;
}
</style>
