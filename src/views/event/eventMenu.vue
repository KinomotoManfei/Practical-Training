<template>
  <div id="app">
    <header class="top-header">
      <div class="tab-bar">
        <button
          class="tab-btn"
          :class="{ active: currentTab === 'all' }"
          @click="currentTab = 'all'"
        >
          全部
        </button>

        <button
          class="tab-btn"
          :class="{ active: currentTab === 'follow' }"
          @click="currentTab = 'follow'"
        >
          订阅
        </button>
        <button
          class="tab-btn"
          :class="{ active: currentTab === 'important' }"
          @click="currentTab = 'important'"
        >
          热门
        </button>
        <button
          class="tab-btn"
          :class="{ active: currentTab === 'football' }"
          @click="currentTab = 'football'"
        >
          足球
        </button>
        <button
          class="tab-btn"
          :class="{ active: currentTab === 'basketball' }"
          @click="currentTab = 'basketball'"
        >
          篮球
        </button>
        <button
        class="tab-btn"
        :class="{ active: currentTab === 'pingpong' }"
          @click="currentTab = 'pingpong'"
        >
        乒乓球
      </button>
      <button
        class="tab-btn"
        :class="{ active: currentTab === 'badminton' }"
          @click="currentTab = 'badminton'"
        >羽毛球
      </button>
      <button
        class="tab-btn"
        :class="{ active: currentTab === 'watersports' }"
          @click="currentTab = 'watersports'"
        >水上运动
      </button>
      </div>
    </header>

    <div class="date-section">今天 10月27日 星期一</div>

    <div class="match-list">
      <MatchCard v-for="(item, index) in filteredMatches" :key="index" :match="item" />
    </div>

  </div>
</template>

<script>
import MatchCard from './matchCard.vue';

export default {
  name: 'App',
  components: { MatchCard },
  data() {
    return {
      currentTab: 'all',
      showMore: false,
      matchData: [
        { id: 1, type: 'follow', league: '校足球联赛', home: '计算机学院', away: '管理学院', num:11, score: '2-1', status: '已结束',teamIcon: '⚽',time:'2025-10-11',single: false,sports:'football',sportsType:'足球' },
        { id: 2, type: 'football', league: '校足球联赛', home: '电子学院', away: '文学院', num:10, score: '0-0', status: '进行中',teamIcon: '⚽',time:'2025-10-11',single: false,sports:'football' ,sportsType:'足球'},
        { id: 3, type: 'important', league: '省大学生篮球赛', home: '法学院', away: '医学院', num:9, score: '56-48', status: '已结束',teamIcon: '🏀' ,time:'2025-10-11',single: false,sports:'basketball',sportsType:'篮球'},
        { id: 4, type: 'basketball', league: '校篮球联赛', home: '外语学院', away: '工学院', num:8, score: '32-28', status: '未开始',teamIcon: '🏀' ,time:'2025-10-11',single: false,sports:'basketball',sportsType:'篮球'},
        { id: 5, type: 'badminton', league: '木之本曼飛', home:'友枝小学',away:'友枝中学', num:7, score: '12-22', status: '未开始',teamIcon: '🏸',time:'2025-10-11',single: true,sports:'badminton',sportsType:'羽毛球'}
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
  /* 移除justify-content: center，避免居中导致两侧留白 */
  gap: 3.2vw;
  overflow-x: auto;
  padding: 0 4.2667vw;
  white-space: nowrap; /* 强制不换行 */
}


/* 增加滚动指示器（可选） */
.tab-bar::after {
  content: '→';
  position: absolute;
  right: 2vw;
  top: 50%;
  transform: translateY(-50%);
  color: #1677ff;
  font-size: 4vw;
  pointer-events: none;
  opacity: 0.7;
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
