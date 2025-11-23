<template>
  <div class="player-page">
    <header class="top-nav">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">软工队队员列表</h1>
    </header>

    <div class="team-summary">
      <div class="team-logo">🏸</div>
      <div class="team-info">
        <div class="team-name">软件工程学院羽毛球队</div>
        <div class="team-stats">
          <span>成立时间：2020年</span>
          <span>成员数量：10人</span>
          <span>胜率：65%</span>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h2>队员信息</h2>
      <span class="count">{{ players.length }}名队员</span>
    </div>

    <div class="players-list">
      <div class="player-card" v-for="(player, index) in players" :key="index">
        <div class="player-avatar">
          <img :src="player.avatar" alt="队员头像" class="avatar-img">
          <div class="player-number">{{ player.number }}</div>
        </div>

        <div class="player-basic">
          <div class="player-name">
            {{ player.name }}
            <span class="player-position">{{ player.position }}</span>
          </div>
          <div class="player-details">
            <span>身高：{{ player.height }}</span>
            <span>体重：{{ player.weight }}</span>
            <span>年龄：{{ player.age }}岁</span>
          </div>
        </div>

        <div class="player-stats">
          <div class="stat-item">
            <div class="stat-label">场均得分</div>
            <div class="stat-value">{{ player.pointsPerMatch }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">胜率</div>
            <div class="stat-value">{{ player.winRate }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">参赛数</div>
            <div class="stat-value">{{ player.tournaments }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadmintonTeam',
  data() {
    return {
      players: [
        {
          name: '黄强',
          number: 4,
          position: '男双',
          height: '180cm',
          weight: '70kg',
          age: 21,
          pointsPerMatch: 18.2,
          winRate: '68%',
          tournaments: 12,
          avatar: 'https://via.placeholder.com/60?text=4'
        },
        {
          name: '林小',
          number: 5,
          position: '女单',
          height: '163cm',
          weight: '53kg',
          age: 20,
          pointsPerMatch: 15.8,
          winRate: '72%',
          tournaments: 10,
          avatar: 'https://via.placeholder.com/60?text=5'
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.push('/event/menu')
    }
  }
}
</script>

<style scoped>
.player-page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 5.333vw; /* 20px */
}

/* 顶部导航 */
.top-nav {
  display: flex;
  align-items: center;
  padding: 4.267vw; /* 16px */
  background-color: #fff;
  box-shadow: 0 0.267vw 0.8vw rgba(0,0,0,0.1); /* 0 1px 3px */
  margin-bottom: 4.267vw; /* 16px */
}

.back-btn {
  background: none;
  border: none;
  font-size: 5.333vw; /* 20px */
  cursor: pointer;
  padding: 1.067vw 2.133vw; /* 4px 8px */
}

.page-title {
  font-size: 4.8vw; /* 18px */
  font-weight: 600;
  margin: 0 0 0 3.2vw; /* 0 0 0 12px */
}

/* 球队信息摘要 */
.team-summary {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 4.267vw; /* 16px */
  border-radius: 2.133vw; /* 8px */
  margin: 0 4.267vw 4.267vw; /* 0 16px 16px */
  box-shadow: 0 0.267vw 0.8vw rgba(0,0,0,0.05); /* 0 1px 3px */
}

.team-logo {
  width: 16vw; /* 60px */
  height: 16vw; /* 60px */
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6.4vw; /* 24px */
  margin-right: 4.267vw; /* 16px */
}

.team-name {
  font-size: 4.267vw; /* 16px */
  font-weight: 600;
  margin-bottom: 2.133vw; /* 8px */
}

.team-stats {
  display: flex;
  gap: 4.267vw; /* 16px */
  font-size: 3.2vw; /* 12px */
  color: #666;
}

/* 列表标题 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.267vw 3.2vw; /* 0 16px 12px */
  margin: 0 4.267vw 3.2vw; /* 0 16px 12px */
  border-bottom: 0.267vw solid #eee; /* 1px */
}

.section-header h2 {
  font-size: 4.267vw; /* 16px */
  margin: 0;
}

.count {
  font-size: 3.2vw; /* 12px */
  color: #888;
}

/* 球员列表 */
.players-list {
  padding: 0 4.267vw; /* 0 16px */
}

/* 球员卡片 */
.player-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2.133vw; /* 8px */
  padding: 3.2vw; /* 12px */
  margin-bottom: 3.2vw; /* 12px */
  box-shadow: 0 0.267vw 0.8vw rgba(0,0,0,0.05); /* 0 1px 3px */
}

/* 球员头像与号码 */
.player-avatar {
  position: relative;
  margin-right: 4.267vw; /* 16px */
}

.avatar-img {
  width: 16vw; /* 60px */
  height: 16vw; /* 60px */
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;
}

.player-number {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 5.867vw; /* 22px */
  height: 5.867vw; /* 22px */
  background-color: #1677ff;
  color: white;
  border-radius: 50%;
  font-size: 3.2vw; /* 12px */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 球员基本信息 */
.player-basic {
  flex: 1;
  margin-right: 4.267vw; /* 16px */
}

.player-name {
  font-size: 4.267vw; /* 16px */
  font-weight: 500;
  margin-bottom: 1.6vw; /* 6px */
}

.player-position {
  font-size: 3.2vw; /* 12px */
  color: white;
  background-color: #666;
  padding: 0.533vw 1.6vw; /* 2px 6px */
  border-radius: 1.067vw; /* 4px */
  margin-left: 2.133vw; /* 8px */
}

.player-details {
  display: flex;
  gap: 3.2vw; /* 12px */
  font-size: 3.2vw; /* 12px */
  color: #666;
}

/* 球员数据统计 */
.player-stats {
  display: flex;
  gap: 4.267vw; /* 16px */
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 3.2vw; /* 12px */
  color: #888;
  margin-bottom: 1.067vw; /* 4px */
  display: block;
}

.stat-value {
  font-size: 3.733vw; /* 14px */
  font-weight: 600;
  color: #333;
}
</style>
