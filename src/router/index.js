import { createRouter, createWebHistory } from 'vue-router'
import LoginPassword from '@/views/login/login_password.vue'
import LoginPhone from '@/views/login/login_phone.vue'
import Register from '@/views/login/regis_index.vue'
import Recommend from '@/views/layout/recommend_index.vue'
import SearchIndex from '@/views/layout/search_index.vue'
import SearchResult from '@/views/layout/search_result.vue'
import MyDate from '@/views/data/data_index.vue'
import Event from '@/views/event/eventPage.vue'
import Menu from '@/views/event/eventMenu.vue'
import Finished from '@/views/event/event_finished.vue'
import ToStart from '@/views/event/event_to_start.vue'
import Underway from '@/views/event/event_underway.vue'
import SporterScore from '@/views/event/sporter_score.vue'
import TeamScore from '@/views/event/team_score.vue'
import InfoIndex from '@/views/myinfo/info_index.vue'
import MyFollow from '@/views/myinfo/my_follow.vue'
import MyInformation from '@/views/myinfo/my_information.vue'
import MyRating from '@/views/myinfo/my_rating.vue'
import MyHistory from '@/views/myinfo/my_history.vue'
import PasswordChange from '@/views/myinfo/password_change.vue'
import Layout from '@/views/layout/layout_index.vue'
import ChangeMyName from '@/views/myinfo/change_myname.vue'
import Team from '@/views/event/team_score.vue'

import ScoccerIndex from '@/views/data/soccer/soccer_index.vue'
import SoccerScore from '@/views/data/soccer/soccer_score.vue'
import SoccerTeam from '@/views/data/soccer/soccer_team.vue'
import SoccerPlayer from '@/views/data/soccer/soccer_player.vue'
import SoccerSchedule from '@/views/data/soccer/soccer_schedule.vue'
import SoccerHistory from '@/views/data/soccer/soccer_history.vue'

import BasketBallIndex from '@/views/data/basketball/basketball_index.vue'
import BasketBallScore from '@/views/data/basketball/basketball_score.vue'
import BasketBallTeam from '@/views/data/basketball/basketball_team.vue'
import BasketBallPlayer from '@/views/data/basketball/basketball_player.vue'
import BasketBallSchedule from '@/views/data/basketball/basketball_schedule.vue'
import BasketBallHistory from '@/views/data/basketball/basketball_history.vue'

import VolleyballIndex from '@/views/data/volleyball/volleyball_index.vue'
import VolleyballScore from '@/views/data/volleyball/volleyball_score.vue'
import VolleyballTeam from '@/views/data/volleyball/volleyball_team.vue'
import VolleyballPlayer from '@/views/data/volleyball/volleyball_player.vue'
import VolleyballSchedule from '@/views/data/volleyball/volleyball_schedule.vue'
import VolleyballHistory from '@/views/data/volleyball/volleyball_history.vue'

import BadmintonIndex from '@/views/data/badmintaton/badmintaton_index.vue'
import BadmintonScore from '@/views/data/badmintaton/badmintaton_score.vue'
import BadmintonTeam from '@/views/data/badmintaton/badmintaton_team.vue'
import BadmintonPlayer from '@/views/data/badmintaton/badmintaton_player.vue'
import BadmintonSchedule from '@/views/data/badmintaton/badmintaton_schedule.vue'
import BadmintonHistory from '@/views/data/badmintaton/badmintaton_history.vue'

import WatersportIndex from '@/views/data/watersport/watersport_index.vue'
import Dargonboat from '@/views/data/watersport/dragonboat.vue'
import Kayak from '@/views/data/watersport/kayak.vue'
import Paddleboard from '@/views/data/watersport/paddleboard.vue'
import WatersportSchedule from '@/views/data/watersport/watersport_schedule.vue'
import HotsportIndex from '@/views/data/hotsport/hotsport_index.vue'

import Admin from '@/views/admin/admin_main.vue'
import AdEvent from '@/views/admin/admin_event.vue'
import Rule from '@/views/admin/admin_rule.vue'
import Grade from '@/views/admin/admin_grade.vue'
import AdTeam from '@/views/admin/admin_team.vue'
import OngoingMatch from '@/views/event/OngoingMatch.vue'
import BaseMatch from '@/views/event/BaseMatch.vue'
import Start from '@/views/event/startMatch.vue'
import Finish from '@/views/event/finishMatch.vue'
import Football from '@/views/event/football_team.vue'
import TableTennis from '@/views/event/table_tennis_team.vue'
import Badminton from '@/views/event/badminton_team.vue'
import Water from '@/views/event/water_sports_team.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login_phone', component: LoginPhone },
    { path: '/login_password', component: LoginPassword },
    { path: '/register', component: Register },
    {
      path: '/',
      component: Layout,
      redirect: '/recommend',
      children: [
        {path: '/event', component:Event,
          children:[
            {path: 'menu', component: Menu},
          ]
        },
        { path: '/recommend', component: Recommend },
        { path: '/data', component: MyDate ,
          redirect: '/data/soccer',
          children:[
            // {path: '', component: ScoccerIndex},
            {path: '/data/hotsport', component: HotsportIndex},
            {path: '/data/soccer', component: ScoccerIndex,
              redirect: '/data/soccer/score',
              children:[
                // {path: '', component: SoccerScore},
                {path: 'score', component: SoccerScore},
                {path: 'team', component: SoccerTeam},
                {path: 'player', component: SoccerPlayer},
                {path: 'schedule', component: SoccerSchedule},
                {path: 'history', component: SoccerHistory},
              ],
            },
            {path: '/data/basketball', component: BasketBallIndex,
              redirect: '/data/basketball/score',
              children:[
                // {path: '', component: BasketBallScore},
                {path: 'score', component: BasketBallScore},
                {path: 'team', component: BasketBallTeam},
                {path: 'player', component: BasketBallPlayer},
                {path: 'schedule', component: BasketBallSchedule},
                {path: 'history', component: BasketBallHistory},
              ],
            },
            {path: '/data/volleyball', component: VolleyballIndex,
              redirect: '/data/volleyball/score',
              children:[
                {path: '', component: VolleyballScore},
                {path: 'score', component: VolleyballScore},
                {path: 'team', component: VolleyballTeam},
                {path: 'player', component: VolleyballPlayer},
                {path: 'schedule', component: VolleyballSchedule},
                {path: 'history', component: VolleyballHistory},
              ],
            },
            {path: '/data/badmintaton', component: BadmintonIndex,
              redirect: '/data/badmintaton/score',
              children:[
                {path: '', component: BadmintonScore},
                {path: 'score', component: BadmintonScore},
                {path: 'team', component: BadmintonTeam},
                {path: 'player', component: BadmintonPlayer},
                {path: 'schedule', component: BadmintonSchedule},
                {path: 'history', component: BadmintonHistory},
              ],
            },
            {path: '/data/watersport', component: WatersportIndex,
              redirect: '/data/watersport/dragonboat',
              children:[
                {path: 'dragonboat', component: Dargonboat},
                {path: 'kayak', component: Kayak},
                {path: 'paddleboard', component: Paddleboard},
                {path: 'schedule', component: WatersportSchedule},
              ],
            },
          ],
        },
        { path: '/InfoIndex', component: InfoIndex },
      ],
    },

    {path:'/event/tostart',component: ToStart},
    {path:'/event/underway',component:Underway},
    {path:'/event/finished',component:Finished},
     {path:'/event/tostart',component: ToStart},
    {path:'/event/underway',component:Underway},
    {path:'/event/finished',component:Underway},
    {path:'/event/teampage/football',component:Football},
    {path:'/event/teampage/pingpong',component:TableTennis},
    {path:'/event/teampage/badminton',component:Badminton},
    {path:'/event/teampage/water',component:Water},
    {path:'/event/teampage/basketball',component:Team},//队伍页面的路径可能需要优化
    { path: '/search', component: SearchIndex },
    { path: '/search_result', component: SearchResult },
    { path: '/sporter_score', component: SporterScore },
    { path: '/team_score', component: TeamScore },
    { path: '/my_follow', component: MyFollow },
    { path: '/my_information', component: MyInformation },
    { path: '/my_rating', component: MyRating },
    { path: '/my_history', component: MyHistory },
    { path: '/password_change', component: PasswordChange },
    { path: '/change_myname', component: ChangeMyName },
        { path: '/admin', component: Admin },
    { path: '/arrange', component: AdEvent },
    { path: '/rule', component: Rule },
    { path: '/grade', component: Grade },
    { path: '/team', component: AdTeam },
    { path: '/base/:matchId', component: BaseMatch, props: true },
    { path: '/ongoing/:sportType', component: OngoingMatch, name: 'OngoingMatch',
      props: route => ({
      sportType: route.params.sportType, // 从路径参数获取 sportType
      matchType: route.query.matchType // 从查询参数获取 matchType
      })
     },
    {
      path: '/event-to-start/:sportType', // 动态路由参数
      name: 'EventToStart',
      component: Start,
      props: route => ({
        sportType: route.params.sportType, // 从路径参数获取 sportType
        matchType: route.query.matchType // 从查询参数获取 matchType
      }),
      // 可选：路由参数验证
      beforeEnter: (to, from, next) => {
        const validSports = ['football', 'basketball', 'tabletennis', 'badminton', 'water']
        const validTypes = ['singles', 'doubles', 'team']

        // 验证运动类型
        if (!validSports.includes(to.params.sportType)) {
          return next('/404') // 跳转到404页面
        }

        // 验证比赛类型（羽毛球特有）
        if (to.params.matchType && !validTypes.includes(to.params.matchType)) {
          return next('/404')
        }

        next()
      }
    },
    { path: '/finished/:sportType', component: Finish, name: 'finishMatch',
      props: route => ({
      sportType: route.params.sportType, // 从路径参数获取 sportType
      matchType: route.query.matchType // 从查询参数获取 matchType
      }),
      beforeEnter: (to, from, next) => {
        const validSports = ['football', 'basketball', 'tabletennis', 'badminton', 'water']
        const validTypes = ['singles', 'doubles', 'team']

        // 验证运动类型
        if (!validSports.includes(to.params.sportType)) {
          return next('/404') // 跳转到404页面
        }

        // 验证比赛类型（羽毛球特有）
        if (to.params.matchType && !validTypes.includes(to.params.matchType)) {
          return next('/404')
        }

        next()
      }
     },
  ],
})

export default router
