<template>
  <div class="player-page">
    <header class="top-nav">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">软工队球员列表</h1>
    </header>

    <div class="team-summary">
      <div class="team-logo">⚽</div>
      <div class="team-info">
        <div class="team-name">软件工程学院足球队</div>
        <div class="team-stats">
          <span>成立时间：2022年</span>
          <span>成员数量：22人</span>
          <span>胜率：58%</span>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h2>球员信息</h2>
      <span class="count">{{ players.length }}名球员</span>
    </div>

    <div class="players-list">
      <div class="player-card" v-for="(player, index) in players" :key="index">
        <div class="player-avatar">
          <img :src="player.avatar" alt="球员头像" class="avatar-img">
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
            <div class="stat-label">进球数</div>
            <div class="stat-value">{{ player.goals }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">助攻</div>
            <div class="stat-value">{{ player.assists }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">出场</div>
            <div class="stat-value">{{ player.appearances }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootballTeam',
  data() {
    return {
      players: [
        {
          name: '张明',
          number: 1,
          position: '门将',
          height: '192cm',
          weight: '85kg',
          age: 22,
          goals: 0,
          assists: 0,
          appearances: 15,
          avatar: 'https://via.placeholder.com/60?text=1'
        },
        {
          name: '李军',
          number: 5,
          position: '中后卫',
          height: '188cm',
          weight: '82kg',
          age: 21,
          goals: 2,
          assists: 1,
          appearances: 14,
          avatar: 'https://via.placeholder.com/60?text=5'
        },
        {
          name: '王浩',
          number: 10,
          position: '前腰',
          height: '178cm',
          weight: '70kg',
          age: 20,
          goals: 8,
          assists: 10,
          appearances: 15,
          avatar: 'https://via.placeholder.com/60?text=10'
        },
        {
          name: '赵峰',
          number: 9,
          position: '前锋',
          height: '185cm',
          weight: '78kg',
          age: 22,
          goals: 12,
          assists: 3,
          appearances: 13,
          avatar: 'https://via.placeholder.com/60?text=9'
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
  padding-bottom: 5.3333vw;
}

.top-nav {
  display: flex;
  align-items: center;
  padding: 4.2667vw;
  background-color: #fff;
  box-shadow: 0 0.2667vw 0.8vw rgba(0,0,0,0.1);
  margin-bottom: 4.2667vw;
}

.back-btn {
  background: none;
  border: none;
  font-size: 5.3333vw;
  cursor: pointer;
  padding: 1.0667vw 2.1333vw;
}

.page-title {
  font-size: 4.8vw;
  font-weight: 600;
  margin: 0 0 0 3.2vw;
}

.team-summary {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 4.2667vw;
  border-radius: 2.1333vw;
  margin: 0 4.2667vw 4.2667vw;
  box-shadow: 0 0.2667vw 0.8vw rgba(0,0,0,0.05);
}

.team-logo {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6.4vw;
  margin-right: 4.2667vw;
}

.team-name {
  font-size: 4.2667vw;
  font-weight: 600;
  margin-bottom: 2.1333vw;
}

.team-stats {
  display: flex;
  gap: 4.2667vw;
  font-size: 3.2vw;
  color: #666;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.2667vw 3.2vw;
  margin: 0 4.2667vw 3.2vw;
  border-bottom: 0.2667vw solid #eee;
}

.section-header h2 {
  font-size: 4.2667vw;
  margin: 0;
}

.count {
  font-size: 3.2vw;
  color: #888;
}

.players-list {
  padding: 0 4.2667vw;
}

.player-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2.1333vw;
  padding: 3.2vw;
  margin-bottom: 3.2vw;
  box-shadow: 0 0.2667vw 0.8vw rgba(0,0,0,0.05);
}

.player-avatar {
  position: relative;
  margin-right: 4.2667vw;
}

.avatar-img {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;
}

.player-number {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 5.8667vw;
  height: 5.8667vw;
  background-color: #1677ff;
  color: white;
  border-radius: 50%;
  font-size: 3.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player-basic {
  flex: 1;
  margin-right: 4.2667vw;
}

.player-name {
  font-size: 4.2667vw;
  font-weight: 500;
  margin-bottom: 1.6vw;
}

.player-position {
  font-size: 3.2vw;
  color: white;
  background-color: #666;
  padding: 0.5333vw 1.6vw;
  border-radius: 1.0667vw;
  margin-left: 2.1333vw;
}

.player-details {
  display: flex;
  gap: 3.2vw;
  font-size: 3.2vw;
  color: #666;
}

.player-stats {
  display: flex;
  gap: 4.2667vw;
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 3.2vw;
  color: #888;
  margin-bottom: 1.0667vw;
  display: block;
}

.stat-value {
  font-size: 3.7333vw;
  font-weight: 600;
  color: #333;
}
</style>
