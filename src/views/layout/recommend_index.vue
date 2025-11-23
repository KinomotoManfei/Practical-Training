<template>
  <div class="recommend">
    <div class="search">
      <van-search
        v-model="value"
        placeholder="羽毛球"
        shape="round"
        background="#fff"
        border
        @click="goToSearch"
      />
      <!-- <van-button round type="primary"  @click="handleSearch">搜索</van-button> -->
      <button type="button" @click="handleSearch">搜索</button>
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <ul @click="handleClickclass">
        <li :class="{ active: currentindex == 1 }" data-index="1">推荐</li>
        <li :class="{ active: currentindex == 2 }" data-index="2">足球</li>
        <li :class="{ active: currentindex == 3 }" data-index="3">篮球</li>
        <li :class="{ active: currentindex == 4 }" data-index="4">羽毛球</li>
        <li :class="{ active: currentindex == 5 }" data-index="5">排球</li>
        <li :class="{ active: currentindex == 6 }" data-index="6">水上运动</li>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @click="handleClickswiper">
        <van-swipe-item v-for="item in swipedata" :key="item.id" @click="handleClickswiper(item)">
          <van-image :src="item.image" fit="cover" style="width: 100%; height: 100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 推荐运动 -->
    <div class="myrecommend">
      <!-- <div class="recommend-item">
      </div> -->
      <div class="recommend-item" v-for="item in recommenddata" :key="item.id" @click="handleClickrecommend(item)">
        <van-image :src="item.image" fit="cover" style="width: 100%; height: 80%" />
        <div class="recommend-item-text-container">
          <div class="recommend-item-text">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
  .
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
// 搜索框绑定的值
const value = ref('')
const currentindex = ref(1)
// 点击导航栏触发事件
const handleClickclass = (e) => {
  // currentindex.value = index.dataset.index;
  if (e.target.tagName == 'LI') {
    currentindex.value = e.target.dataset.index
  }
}
const swipedata=ref([
  {
    id: 1,
    name: '推荐',
    image: 'https://img1.baidu.com/it/u=3422222422,2822892228&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  {
    id: 2,
    name: '足球',
    image: 'https://img2.baidu.com/it/u=3422222422,2822892228&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  }])
  // 点击轮播图触发事件
const handleClickswiper = (item) => {
  // currentindex.value = index.dataset.index;
    //获取当前轮播图的id
    const id = item.id
    //跳转到对应id的页面
    // router.push({
    //   path: '/recommend_detail',
    //   query: {
    //     id: id,
    //   },
    // })
}
//推荐项数据
const recommenddata = ref([
  {
    id: 1,
    title: '推荐',
    image: 'https://img1.baidu.com/it/u=3422222422,2822892228&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  {
    id: 2,
    title: '足球',
    image: 'https://img2.baidu.com/it/u=3422222422,2822892228&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  }])
  // 点击推荐项触发事件
const handleClickrecommend = (item) => {
  const id=item.id
  //跳转到对应id的页面
  // router.push({
  //   path: '/recommend_detail',
  //   query: {
  //     id: id,
  //   },
  // })
}
const handleSearch = () => {
  router.push({
    path: '/search_result',
    query: {
      keyword: value.value,
    },
  })
}
const goToSearch = () => {
  router.push({
    path: '/search',
  })
}
</script>

<style scoped>
.recommend {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative; */
}
/* 输入框样式 */
.search {
  width: 100%;
  height: 13.0435vw;
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  /* padding: 0 2.4155vw; */
  /* border-bottom:.2415vw solid #4095E5; */

  /* background-color: #f5f5f500; */
}
.search .van-search {
  width: 80%;
  height: 100%;
  /* background-color: #fff; */
}
/* 搜索按钮样式 */
.search button {
  width: 18%;
  height: 50%;
  margin: auto;
  background-color: #4095e5;
  border: 0.2415vw solid #4095e5;
  border-radius: 3.6232vw;
}
/* 导航栏样式 */
.nav {
  padding-top: 2.4155vw;
  width: 100%;
  height: 8.6957vw;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  /* padding: 0 2.4155vw; */
  background-color: #fff;
  /* opacity: 0.9; */
  z-index: 100;
  /* background-color: #f5f5f500; */
}
.nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4155vw;
}
.nav ul li {
  font-size: 3.6232vw;
  /* width: 10%; */
  height: 100%;
  flex: 1;
  /* justify-content: center; */
  /* align-items: center; */
}
.nav ul .active {
  color: #4095e5;
}
/* 轮播图样式 */
.swiper {
  width: 100%;
  height: 36.715vw;
  /* margin-top: 4vh; */
  padding: 0 2.4155vw;
}

.swiper .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 5.314vw;
  line-height: 36.2319vw;
  text-align: center;
  background-color: #39a9ed;
}
/* 推荐运动样式 */
.myrecommend {
  width: 100%;
  padding: 2.4155vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4155vw;
}
/* 推荐运动项目样式 */
.recommend-item {
  width: 100%;
  height: 43.4783vw;
  background-color: pink;
}
.recommend-item .van-image {
  width: 100%;
  height: 80%;
}
.recommend-item-text-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.2077vw; /* 添加一点内边距防止文本紧贴边缘 */
}
.recommend-item-text {
  width: 100%;
  /* height: 20%; */
  /* line-height: 100%; */
  font-size: 3.1401vw;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 1.4; /* 调整行高以改善文本间距 */
}
</style>
