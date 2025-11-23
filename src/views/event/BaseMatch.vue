<template>
  <div class="match-detail-container">
    <!-- 顶部导航 -->
    <header class="top-header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="match-title">{{ matchInfo.title }}</h1>
      <span class="match-type">{{ matchInfo.sportType }}</span>
    </header>

    <!-- 比赛状态 -->
    <div class="match-status" :class="statusClass">{{ matchStatusText }}</div>

    <!-- 子组件内容根据状态动态渲染 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    matchInfo: {
      type: Object,
      required: true,
      default: () => ({
        title: '比赛标题',
        sportType: '未知项目',
        status: 'ongoing', // ongoing, upcoming, finished
        teamA: { name: '主队', logo: '🏟️' },
        teamB: { name: '客队', logo: '🏟️' }
      })
    }
  },
  computed: {
    matchStatusText() {
      const statusMap = {
        ongoing: '进行中',
        upcoming: '未开始',
        finished: '已结束'
      }
      return statusMap[this.matchInfo.status] || '未知状态'
    },
    statusClass() {
      const classMap = {
        ongoing: 'status-ongoing',
        upcoming: 'status-upcoming',
        finished: 'status-finished'
      }
      return classMap[this.matchInfo.status]
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
/* 基础样式 */
.match-detail-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fff;
  min-height: 100vh;
}

/* 顶部导航 */
.top-header {
  display: flex;
  align-items: center;
  padding: 4.267vw; /* 16px */
  background-color: #f8f9fa;
  border-bottom: 0.267vw solid #eee; /* 1px */
  position: relative;
}

.back-btn {
  background: none;
  border: none;
  font-size: 5.333vw; /* 20px */
  cursor: pointer;
  padding: 1.067vw 2.133vw; /* 4px 8px */
}

.match-title {
  font-size: 4.8vw; /* 18px */
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: center;
}

.match-type {
  position: absolute;
  right: 4.267vw; /* 16px */
  font-size: 3.733vw; /* 14px */
}

/* 状态样式 */
.match-status {
  font-size: 4.267vw; /* 16px */
  text-align: center;
  padding: 3.2vw 0; /* 12px 0 */
  font-weight: 500;
}

.status-ongoing { color: #f5222d; }
.status-upcoming { color: #4285f4; }
.status-finished { color: #666; }

/* 运动项目颜色 */
.sport-football { color: #4caf50; }
.sport-basketball { color: #ff5722; }
.sport-tabletennis { color: #9c27b0; }
.sport-badminton { color: #ff9800; }
.sport-water { color: #2196f3; }
</style>
