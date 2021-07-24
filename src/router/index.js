import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import firstPage from '../components/firstPage.vue'
import secondPage from '../components/secondPage.vue'
import noticeSearch from '../components/noticeSearch.vue'
import noticeSearch2 from '../components/noticeSearch2.vue'
import noticeContent from '../components/noticeContent.vue'
import passwordChange from '../components/passwordChange.vue'
import platform from '../components/platform.vue'
import platform1 from '../components/platform1.vue'
import addUser from '../components/addUser.vue'
import userSearch from '../components/userSearch.vue'
import timeRelease from '../components/timeRelease.vue'
import financialStatistics from '../components/financialStatistics.vue'
import documentDownload from '../components/documentDownload.vue'
import myProgram from '../components/myProgram.vue'
import addNotice from '../components/addNotice.vue'
import projectApproval from '../components/projectApproval.vue'
import progressRecord from '../components/progressRecord.vue'
import midtermApproval from '../components/midtermApproval.vue'
import projectUpgrade from '../components/projectUpgrade.vue'
import conclusionApproval from '../components/conclusionApproval.vue'
import deferredAudit from '../components/deferredAudit.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/firstPage', component: firstPage },
  { path: '/secondPage', component: secondPage },
  { path: '/noticeSearch', component: noticeSearch },
  { path: '/noticeContent', component: noticeContent },
  { path: '/passwordChange', component: passwordChange },
  { path: '/platform', component: platform },
  {
    path: '/platform1',
    component: platform1,
    redirect: '/home',
    children: [
      {
        path: '/addUser',
        name: 'addUser',
        component: addUser
      },
      {
        path: '/userSearch',
        name: 'userSearch',
        component: userSearch
      },
      {
        path: '/timeRelease',
        name: 'timeRelease',
        component: timeRelease
      },
      {
        path: '/noticeSearch2',
        name: 'noticeSearch2',
        component: noticeSearch2
      },
      {
        path: '/financialStatistics',
        name: 'financialStatistics',
        component: financialStatistics
      },
      {
        path: '/documentDownload',
        name: 'documentDownload',
        component: documentDownload
      },
      {
        path: '/myProgram',
        name: 'myProgram',
        component: myProgram
      },
      {
        path: '/addNotice',
        name: 'addNotice',
        component: addNotice
      },
      {
        path: '/projectApproval',
        name: 'projectApproval',
        component: projectApproval
      },
      {
        path: '/progressRecord',
        name: 'progressRecord',
        component: progressRecord
      },
      {
        path: '/midtermApproval',
        name: 'midtermApproval',
        component: midtermApproval
      },
      {
        path: '/projectUpgrade',
        name: 'projectUpgrade',
        component: projectUpgrade
      },
      {
        path: '/conclusionApproval',
        name: 'conclusionApproval',
        component: conclusionApproval
      },
      {
        path: '/deferredAudit',
        name: 'deferredAudit',
        component: deferredAudit
      },
      {
        path: '/home',
        name: 'home',
        component: home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
