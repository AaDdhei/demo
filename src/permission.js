import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done()
})
