<template>
  <div class="match-card">
    <div class="card-header">
      <span class="match-time">{{ match.time }}</span>
      <span class="match-title">{{ match.league }}</span>
      <span class="match-sports">{{ match.sportsType }}</span>
    </div>
    <div class="team-info">
      <div class="team-left">
        <div class="team-name" @click="gototeampage()">
          {{ match.home }} <span class="team-icon">{{ match.teamIcon }}</span>
        </div>
        <div class="player-info">{{ playerInfoText }}{{ match.num }}人</div>
      </div>
      <div class="score-info">
        <div class="actual-score">{{ match.score }}</div>
        <div class="match-status">{{ match.status }}</div>
        <button class="detail-btn" @click="gotonextpage()">{{ detailBtnText }}</button>
      </div>
      <div class="team-right">
        <div class="team-name" @click="gototeampage()">
          {{ match.away }} <span class="team-icon">{{ match.teamIcon }}</span>
        </div>
        <div class="player-info">{{ playerInfoText }}{{ match.num }}人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchCard',
  props: {
    match: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      playerInfoText: "首发：",
      detailBtnText: "详情"
    };
  },
  watch: {
    match: {
      immediate: true,
      handler(newVal) {
        this.event_status = newVal.status;
      }
    }
  },
  methods: {
    gotonextpage() {
      let sportsType = this.match.sports;
      let singleType = this.match.single;
      if (this.event_status === "未开始") {
        if (sportsType === 'badminton'&&singleType) {
            this.$router.push({
            path: '/event-to-start/badminton',
            query: { matchType: 'singles' }
            });
        }
        else if(sportsType === 'badminton'&&!singleType){
          this.$router.push({
            path: '/event-to-start/badminton',
            query: { matchType: 'double' }
            });
        }
        else{
          this.$router.push({
            path: '/event-to-start/'+sportsType,
            });
        }
      } else if (this.event_status === "进行中") {
        if (sportsType === 'badminton'&&singleType) {
            this.$router.push({
            path: '/ongoing/badminton',
            query: { matchType: 'singles' }
            });
        }
        else if(sportsType === 'badminton'&&!singleType){
          this.$router.push({
            path: '/ongoing/badminton',
            query: { matchType: 'double' }
            });
        }
        else{
          this.$router.push({
            path: '/ongoing/'+sportsType,
            });
        }
      } else if (this.event_status === "已结束") {
          if (sportsType === 'badminton'&&singleType) {
            this.$router.push({
            path: '/finished/badminton',
            query: { matchType: 'singles' }
            });
        }
        else if(sportsType === 'badminton'&&!singleType){
          this.$router.push({
            path: '/finished/badminton',
            query: { matchType: 'double' }
            });
        }
        else{
          this.$router.push({
            path: '/finished/'+sportsType,
            });
        }
      }
    },
    gototeampage() {
      let sportsType = this.match.sports;
      this.$router.push('/event/teampage/'+sportsType)
    }
  }
};
</script>

<style scoped>
.match-card {
  border: 0.2667vw solid #eee;
  border-radius: 1.0667vw;
  padding: 4.2667vw;
  background-color: #fff;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 4.2667vw;
  color: #666;
  position: relative;
}
.match-time {
  font-size: 3.7333vw;
}
.match-title {
  font-size: 3.7333vw;
  position: absolute;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
}
.match-sports {
  font-size: 3.7333vw;
  margin-left: auto;
}
.team-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.team-left, .team-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
}
.team-name {
  font-size: 4.2667vw;
  margin: 0 0 2.1333vw 0;
  font-weight: 500;
}
.team-icon {
  margin-left: 1.0667vw;
  font-size: 3.7333vw;
  color: #ccc;
}
.player-info {
  font-size: 3.2vw;
  color: #888;
  margin: 0;
}
.score-info {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.actual-score {
  font-size: 5.3333vw;
  font-weight: bold;
  margin-bottom: 2.1333vw;
}
.match-status {
  font-size: 3.7333vw;
  color: #f5222d;
  margin-bottom: 3.2vw;
}
.detail-btn {
  border: 0.2667vw solid #4285f4;
  color: #4285f4;
  background-color: transparent;
  border-radius: 1.0667vw;
  padding: 1.6vw 3.2vw;
  font-size: 3.7333vw;
  cursor: pointer;
}
.detail-btn:hover {
  background-color: #1677ff;
  color: white;
}
</style>
