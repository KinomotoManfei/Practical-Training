<template>
  <div class="GameDisplay">
    <div class="topline">
      <div class="gameinfo">
        <span>{{ datatime }}</span>
        <span>{{ location }}</span>
      </div>
      <div class="shouchang">
        <van-icon name="star" :color="issaved ? '#bd3124' : '#bbbbbb'" @click="toggleShouchang" />
      </div>
      <div class="gameclass">{{ gameclass }}</div>
    </div>
    <div class="middleline">
      <div class="matchinfo">
        <img src="@/assets/d195641d8c27c510.webp" alt="" />
        <span>{{ teamA }}</span>
      </div>
      <div class="gameres">
        <p>VS</p>
        <p>{{ scoreA }}:{{ scoreB }}</p>
      </div>
      <div class="matchinfo">
        <img src="@/assets/d195641d8c27c510.webp" alt="" />
        <span>{{ teamB }}</span>
      </div>
    </div>
    <!-- 最下面一行 -->
    <div class="bottomline">
      <button class="joinbtn tostart" v-if="gamestate === 1">未开始</button>
      <button class="joinbtn underway" v-else-if="gamestate === 2">进行中</button>
      <button class="joinbtn finished" v-else>已结束</button>
      <button class="detailbtn" @click="toDetail">查看比赛详情</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  datatime: {
    type: String,
    default: '2023-01-01 12:00'
  },
  location: {
    type: String,
    default: '珠海校区'
  },
  gameclass: {
    type: String,
    default: '篮球'
  },
  issaved: {
    type: Boolean,
    default: false
  },
  teamA: {
    type: String,
    default: '软件工程'
  },
  teamB: {
    type: String,
    default: '微电子科学与技术'
  },
  scoreA: {
    type: Number,
    default: 0
  },
  scoreB: {
    type: Number,
    default: 0
  },
  gamestate: {
    type: Number,
    default: 1
  },
  gameid: {
    type: String,
    default: '0'
  }
})

// 定义 emit 事件
const emit = defineEmits(['update:issaved'])

const toggleShouchang = () => {
  // 发出事件通知父组件修改 issaved 值
  emit('update:issaved', props.gameid, !props.issaved)
  //上传到服务器
}
const toDetail = () => {
  //跳转到比赛详情页
  // router.push({
  //   path: '/gameDetail',
  //   query: {
  //     gameid: props.gameid
  //   }
  // })
}
</script>
<style scoped>
.GameDisplay {
  width: 79.7101vw;
  height: 43.4783vw;
  border-radius: 3.6232vw;
  border: .2415vw solid #bbbbbb;
  margin: 2.4155vw auto;
  padding: 2.4155vw 7.2464vw 4.8309vw 4.8309vw;
}
/* 最上面一行 */
.topline {
  height: 4.8309vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gameinfo {
  font-size: 2.8986vw;
  font-family: '宋体';
  color: #101010;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8309vw;
}
.gameclass {
  font-size: 3.3816vw;
  font-family: '黑体';
  color: #7f83f7;
}
/* 中间一行 */
.middleline {
  height: 19.3237vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.4155vw auto;
  /* padding: 0 4.8309vw; */
  /* border-bottom: .2415vw solid #bbbbbb; */
}
.matchinfo {
  font-size: 2.8986vw;
  font-family: '宋体';
  font-weight: 300;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4155vw;
  flex-direction: column;
}
.matchinfo img {
  width: 12.8019vw;
  height: 12.8019vw;
}
.gameres {
  font-size: 3.3816vw;
  font-family: '宋体';
  color: #101010;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4155vw;
  flex-direction: column;
}
/* 最下面一行 */
.bottomline {
  /* height: 9.6618vw; */
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 2.4155vw auto;
}
.joinbtn {
  width: 16.9082vw;
  height: 7.2464vw;
  border-radius: 3.6232vw;
  /* border: .2415vw solid #7f83f7; */
  font-size: 3.3816vw;
  font-family: '宋体';
  /* color: #7f83f7; */
}
.bottomline .finished {
  background-color: #a4adb3;
  color: #000;
  border: .2415vw solid #a4adb3;
}
.bottomline .underway {
  background-color: rgba(162, 239, 77, 0.43);
  color: #81b337;
  border: .2415vw solid rgba(162, 239, 77, 0.43);
}
.bottomline .tostart {
  background-color: rgba(84, 188, 189, 0.73);
  color: #0f40f5;
  border: .2415vw solid rgba(84, 188, 189, 0.73);
}
.detailbtn {
  width: 24.1546vw;
  height: 7.2464vw;
  border-radius: 4.8309vw;
  border: .2415vw solid #e99d42;
  background-color: #e99d42;
  font-size: 3.3816vw;
  font-family: '宋体';
  color: #fff;
}
</style>
