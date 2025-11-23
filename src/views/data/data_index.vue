<template>
  <div class="data">
    <div class="chance_index">
      <ul @click="handleClickclass">
        <router-link to="/data/hotsport">
          <li :class="{ active: currentindex == 1 }" data-index="1" >热门</li>
        </router-link>
        <router-link to="/data/soccer">
          <li :class="{ active: currentindex == 2 }" data-index="2" >足球</li>
        </router-link>
        <router-link to="/data/basketball">
          <li :class="{ active: currentindex == 3 }" data-index="3" >篮球</li>
        </router-link>
        <router-link to="/data/badmintaton">
          <li :class="{ active: currentindex == 4 }" data-index="4" >羽毛球</li>
        </router-link>
        <router-link to="/data/volleyball">
          <li :class="{ active: currentindex == 5 }" data-index="5" >排球</li>
        </router-link>
        <router-link to="/data/watersport">
          <li :class="{ active: currentindex == 6 }" data-index="6" >水上运动</li>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
    <!-- //足球积分榜 -->

    <!-- //篮球积分榜 -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const currentindex = ref(2)
// 点击导航栏触发事件
const handleClickclass = (e) => {
  // currentindex.value = index.dataset.index;
  e.stopPropagation();
  if (e.target.tagName == 'LI') {
    currentindex.value = e.target.dataset.index
    //更新数据
    updateData()
  }
}
const  updateData=()=>{

}
</script>
<style scoped>
/* 运动类型导航栏 */
.chance_index {
  width: 100%;
  height: 16.9082vw;
  /* background-color: #f5f5f5; */
  padding: 4.8309vw;
}
.chance_index ul {
  display: flex;
  justify-content: space-between;
}
.chance_index ul li {
  font-size: 4.8309vw;
  color: #333;
  flex: auto;
  text-align: center;
}
.chance_index ul .active {
  position: relative;
  color: #000;
  font-weight: bold;
  /* border-bottom: 0.4831vw solid #3775f6; */
}
.chance_index ul .active::after {
  content: '';
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2px;
  width: 60%;
  height: .4831vw;
  background-color: #000;
}



</style>
