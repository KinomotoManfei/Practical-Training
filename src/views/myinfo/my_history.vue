<template>
  <div class="MyHistory">
    <div class="tobber">
      <van-nav-bar title="我的历史" left-arrow @click-left="onClickLeft" />
    </div>
    <GameDisplay v-for="match in matchList" v-bind="match" key="match.gameid" @update:issaved="handleUpdateIssaved"/>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
// // import { ref } from 'vue'
const router = useRouter()
const onClickLeft = () => {
  router.back()
}

import { ref, onBeforeMount } from 'vue';
const matchList = ref([
  {
    datatime: '2023-08-01 10:00:00',
    gameid: '0',
    teamA: '软件工程',
    teamB: '微电子科学与技术',
    scoreA: 0,
    scoreB: 0,
    gamestate: 2,
    issaved: true,
    gameclass:'篮球',
    location:'珠海校区',
  },
  {
    datatime: '2023-08-01 12:00:00',
    gameid: '1',
    teamA: '软件工程',
    teamB: '微电子科学与技术',
    scoreA: 0,
    scoreB: 0,
    gamestate: 1,
    issaved: true,
    gameclass:'篮球',
    location:'珠海校区',
  },
])

function handleUpdateIssaved(gameid, issaved) {
  const match = matchList.value.find((match) => match.gameid === gameid);
  if (match) {
    match.issaved = issaved;
  }
  //将更新的参数传给服务器
}
onBeforeMount(() => {
  // 从服务器获取数据
  // 更新 matchList.value
})
</script>
<style scoped></style>
