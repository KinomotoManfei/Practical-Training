<template>
  <base-match :match-info="matchInfo">
    <div class="score-section">
      <div class="team team-left">
        <div class="team-logo">{{ matchInfo.teamA.logo }}</div>
        <div class="team-name">{{ matchInfo.teamA.name }}</div>
      </div>

      <div class="score-info">
        <div class="main-score">{{ matchInfo.scoreA }} VS {{ matchInfo.scoreB }}</div>
        <div class="half-score">{{ periodScore }}</div>
        <div class="extra-time" v-if="matchInfo.extraTime">{{ matchInfo.extraTime }}</div>
      </div>

      <div class="team team-right">
        <div class="team-logo">{{ matchInfo.teamB.logo }}</div>
        <div class="team-name">{{ matchInfo.teamB.name }}</div>
      </div>
    </div>

    <div class="match-events">
      <div class="section-title">
        比赛事件
        <i class="expand-icon">▼</i>
      </div>
      <ul class="event-list">
        <li class="event-item" :class="event.type" v-for="(event, i) in filteredEvents" :key="i">
          <span class="event-time">{{ event.time }}</span>
          <span class="event-content">{{ event.content }}</span>
        </li>
      </ul>
    </div>

    <div class="tech-stats">
      <div class="section-title">技术统计</div>
      <div class="stats-grid">
        <div class="stat-item" v-for="(stat, i) in matchInfo.stats" :key="i">
          <span class="stat-name">{{ stat.name }}</span>
          <span class="stat-value">{{ stat.teamA }}-{{ stat.teamB }}</span>
        </div>
      </div>
    </div>

    <div class="lineup-section">
      <div class="section-title">首发阵容</div>
      <div class="lineup-placeholder">
        <div class="empty-hint">点击查看详细阵容</div>
      </div>
    </div>

    <div class="comments-section">
      <div class="section-title">观众评论 ({{ comments.length }})</div>
      <div class="comments-list">
        <div class="comment-item" v-for="(comment, index) in comments" :key="index">
          <div class="comment-author">{{ comment.author }}：</div>
          <div class="comment-content">{{ comment.content }}</div>
          <div class="comment-actions">
            <span class="like-btn">👍 {{ comment.likes }}</span>
            <span class="comment-time">{{ comment.time }}</span>
          </div>
        </div>
      </div>

      <div class="comment-input-area">
        <input
          type="text"
          placeholder="说点什么..."
          v-model="newComment"
          class="comment-input"
        >
        <button class="publish-btn" @click="publishComment">发布</button>
      </div>
    </div>
  </base-match>
</template>

<script>
import BaseMatch from './BaseMatch.vue'
import { sportIcons, sportColors } from '@/utils/sportConfig.js'

export default {
  components: { BaseMatch },
  props: {
    sportType: {
      type: String,
      required: true,
      validator: value => ['football', 'basketball', 'tabletennis', 'badminton', 'water'].includes(value)
    },
    matchType: {
      type: String,
      default: 'doubles',
      validator: value => ['singles', 'doubles'].includes(value)
    }
  },
  created() {
    console.log('当前matchType:', this.matchType);
  },
  data() {
    return {
      newComment: '',
      sportIcons,
      sportColors,
      comments: [
        { author: '球迷小四', content: '太精彩了！', likes: 10, time: '10:42' },
        { author: '球迷小五', content: '期待更多精彩表现', likes: 5, time: '9:28' }
      ]
    }
  },
  computed: {
    matchInfo() {
      const sportConfigs = {
        football: {
          title: '足球联赛半决赛',
          sportType: '足球',
          status: 'finished',
          teamA: { name: '软工队', logo: '⚽' },
          teamB: { name: '计院队', logo: '⚽' },
          scoreA: 1,
          scoreB: 1,
          extraTime: '伤停补时3分钟',
          events: [
            { time: '75\'', content: '李明进球 (1-1)', type: 'green' },
            { time: '60\'', content: '张三黄牌', type: 'yellow' },
            { time: '46\'', content: '换人 李四→王五', type: 'blue' },
            { time: '45\'', content: '上半场结束', type: 'gray' }
          ],
          stats: [
            { name: '射门', teamA: 8, teamB: 6 },
            { name: '射正', teamA: 3, teamB: 2 },
            { name: '角球', teamA: 4, teamB: 2 },
            { name: '犯规', teamA: 8, teamB: 10 }
          ]
        },
        basketball: {
          title: '篮球友谊赛',
          sportType: '篮球',
          status: 'finished',
          teamA: { name: '经管队', logo: '🏀' },
          teamB: { name: '外语队', logo: '🏀' },
          scoreA: 56,
          scoreB: 48,
          extraTime: '',
          events: [
            { time: 'Q3 02:45', content: '张三三分球', type: 'green' },
            { time: 'Q3 05:10', content: '李四犯规', type: 'yellow' },
            { time: 'Q2 10:30', content: '暂停', type: 'blue' }
          ],
          stats: [
            { name: '得分', teamA: 56, teamB: 48 },
            { name: '篮板', teamA: 22, teamB: 18 },
            { name: '助攻', teamA: 8, teamB: 12 },
            { name: '抢断', teamA: 5, teamB: 3 }
          ]
        },
        tabletennis: {
          title: '乒乓球团体赛',
          sportType: '乒乓球',
          status: 'finished',
          teamA: { name: '研究生院队', logo: '🏓' },
          teamB: { name: '本科生队', logo: '🏓' },
          scoreA: 2,
          scoreB: 1,
          extraTime: '',
          events: [
            { time: '第3场', content: '王浩 3-1 战胜 张伟', type: 'green' },
            { time: '第2场', content: '李娜 0-3 不敌 赵敏', type: 'red' },
            { time: '第1场', content: '双打组合获胜', type: 'green' }
          ],
          stats: [
            { name: '总胜场', teamA: 2, teamB: 1 },
            { name: '总得分', teamA: 58, teamB: 42 },
            { name: '失误数', teamA: 12, teamB: 18 },
            { name: '扣杀得分', teamA: 15, teamB: 9 }
          ]
        },
        badminton: {
          ...(this.matchType === 'singles'
            ? {
                title: '羽毛球单打决赛',
                sportType: '羽毛球',
                status: 'finished',
                teamA: { name: '林丹', logo: '🏸' },
                teamB: { name: '李宗伟', logo: '🏸' },
                scoreA: 1,
                scoreB: 1,
                extraTime: '决胜局进行中',
                events: [
                  { time: '第3局 19-18', content: '林丹正手劈杀得分', type: 'green' },
                  { time: '第3局 15-15', content: '李宗伟网前放小球得分', type: 'red' },
                  { time: '第2局', content: '李宗伟 21-18 扳平', type: 'red' },
                  { time: '第1局', content: '林丹 21-16 获胜', type: 'green' },
                  { time: '第1局 10-8', content: '林丹连续扣杀得分', type: 'green' }
                ],
                stats: [
                  { name: '局分', teamA: 1, teamB: 1 },
                  { name: '发球得分', teamA: 6, teamB: 5 },
                  { name: '网前得分', teamA: 9, teamB: 12 },
                  { name: '扣杀得分', teamA: 18, teamB: 14 },
                  { name: '失误', teamA: 7, teamB: 6 }
                ]
              }
            : {
                title: '羽毛球混双决赛',
                sportType: '羽毛球',
                status: 'finished',
                teamA: { name: '赵阳/孙梅', logo: '🏸' },
                teamB: { name: '钱峰/周琳', logo: '🏸' },
                scoreA: 1,
                scoreB: 1,
                extraTime: '决胜局进行中',
                events: [
                  { time: '第3局 18-17', content: '赵阳扣杀得分', type: 'green' },
                  { time: '第2局', content: '钱峰/周琳 21-19 扳平', type: 'red' },
                  { time: '第1局', content: '赵阳/孙梅 21-15 获胜', type: 'green' }
                ],
                stats: [
                  { name: '局分', teamA: 1, teamB: 1 },
                  { name: '发球得分', teamA: 8, teamB: 6 },
                  { name: '网前得分', teamA: 12, teamB: 15 },
                  { name: '失误', teamA: 5, teamB: 7 }
                ]
              })
        },
        water: {
          title: '游泳4x100米接力',
          sportType: '水上运动',
          status: 'finished',
          teamA: { name: '红队', logo: '🏊' },
          teamB: { name: '蓝队', logo: '🏊' },
          scoreA: 3,
          scoreB: 2,
          extraTime: '',
          events: [
            { time: '第3棒', content: '红队反超1.2秒', type: 'green' },
            { time: '第2棒', content: '蓝队领先0.8秒', type: 'red' },
            { time: '第1棒', content: '双方持平', type: 'blue' }
          ],
          stats: [
            { name: '当前棒次', teamA: '第4棒', teamB: '第4棒' },
            { name: '累计时间', teamA: '2:58.3', teamB: '2:59.1' },
            { name: '交接次数', teamA: 3, teamB: 3 },
            { name: '最佳单棒', teamA: '42.1秒', teamB: '41.8秒' }
          ]
        }
      }
      return sportConfigs[this.sportType]
    },
    periodScore() {
      const periodMap = {
        football: '半场1-1',
        basketball: '第三节 56-48',
        tabletennis: '局分 2-1',
        badminton: this.matchType === 'singles'
          ? '决胜局 19-18'
          : '局分 1-1',
        water: '第3圈 1:24.5-1:26.3'
      }
      return periodMap[this.sportType]
    },
    filteredEvents() {
      return this.matchInfo.events.filter(event => {
        if (this.sportType === 'football') {
          return event.type !== 'gray';
        }
        return true;
      });
    }
  },
  methods: {
    publishComment() {
      if (this.newComment.trim()) {
        this.comments.unshift({
          author: '我',
          content: this.newComment.trim(),
          likes: 0,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        })
        this.newComment = ''
      }
    }
  }
}
</script>

<style scoped>
.score-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5.3333vw 0;
  border-bottom: 0.2667vw solid #eee;
}
.half-scores {
  font-size: 3.7333vw;
  color: #666;
  margin: 0 0 1.0667vw 0;
}

.half-scores span {
  margin: 0 1.0667vw;
}

.star.filled::before {
  content: "★";
  color: #ffcc00;
}

.star.empty::before {
  content: "☆";
  color: #ddd;
}
.match-detail {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fff;
  min-height: 100vh;
  padding-bottom: 5.3333vw;
}

.top-nav {
  display: flex;
  align-items: center;
  padding: 4.2667vw;
  background-color: #f8f9fa;
  border-bottom: 0.2667vw solid #eee;
  position: relative;
}

.back-btn {
  background: none;
  border: none;
  font-size: 5.3333vw;
  cursor: pointer;
  padding: 1.0667vw 2.1333vw;
}

.match-title {
  font-size: 4.8vw;
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: center;
}

.match-type {
  color: #4caf50;
  font-size: 3.7333vw;
  position: absolute;
  right: 4.2667vw;
}

.match-status {
  color: #666;
  font-size: 4.2667vw;
  text-align: center;
  padding: 3.2vw 0;
  font-weight: 500;
  border-bottom: 0.2667vw solid #eee;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.team-logo {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6.4vw;
  margin-bottom: 2.1333vw;
}

.team-name {
  font-size: 4.2667vw;
  font-weight: 500;
}

.score-info {
  text-align: center;
}

.main-score {
  font-size: 9.6vw;
  font-weight: bold;
  margin: 0 0 2.1333vw 0;
}

.half-scores {
  font-size: 3.7333vw;
  color: #666;
  margin: 0 0 1.0667vw 0;
}

.match-time, .match-venue {
  font-size: 3.2vw;
  color: #888;
  margin: 0.5333vw 0;
}

.section-title {
  font-size: 4.2667vw;
  font-weight: 600;
  padding: 4.2667vw 4.2667vw 2.1333vw;
  margin: 0;
  color: #333;
}

.report-content {
  padding: 0 4.2667vw 4.2667vw;
  margin: 0;
  font-size: 3.7333vw;
  line-height: 1.6;
  color: #555;
  border-bottom: 0.2667vw solid #eee;
}

.stats-section {
  border-bottom: 0.2667vw solid #eee;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.2667vw;
  background-color: #f5f5f5;
}

.stat-item {
  background-color: #fff;
  padding: 3.2vw 4.2667vw;
  display: flex;
  justify-content: space-between;
  font-size: 3.7333vw;
}

.stat-name {
  color: #666;
}

.stat-value {
  font-weight: 500;
}

.players-rating {
  border-bottom: 0.2667vw solid #eee;
}

.team-ratings {
  margin-bottom: 4.2667vw;
}

.player-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2vw 4.2667vw;
  border-bottom: 0.2667vw solid #f5f5f5;
}

.player-info {
  display: flex;
  align-items: center;
}

.player-icon {
  margin-right: 2.1333vw;
  font-size: 4.2667vw;
}

.player-name {
  font-size: 3.7333vw;
  margin-right: 4.2667vw;
}

.player-score {
  font-size: 3.7333vw;
  font-weight: 500;
  color: #1677ff;
}

.rating-stars {
  display: flex;
}

.star {
  color: #ddd;
  margin-left: 0.5333vw;
}

.star.filled {
  color: #ffcc00;
}

.highlights-tabs {
  display: flex;
  padding: 0 4.2667vw;
  margin-bottom: 3.2vw;
}

.tab-btn {
  flex: 1;
  padding: 2.1333vw 0;
  background-color: #f5f5f5;
  border: none;
  font-size: 3.7333vw;
  cursor: pointer;
  margin-right: 2.1333vw;
  border-radius: 1.0667vw;
}

.tab-btn:last-child {
  margin-right: 0;
}

.tab-btn.active {
  background-color: #1677ff;
  color: white;
}

.highlights-carousel {
  position: relative;
  padding: 0 4.2667vw;
}

.highlight-img {
  width: 100%;
  border-radius: 2.1333vw;
  display: block;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 3.2vw;
}

.dot {
  width: 2.1333vw;
  height: 2.1333vw;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 1.0667vw;
}

.dot.active {
  background-color: #1677ff;
}
</style>
