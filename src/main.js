// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhNzc5MTNiMjU0ZTdjYTBiYTAxZWE1ZTkzYjNkYjI5MDJkMjRkZWVhMTY1M2U4ZWZjOGQzNWQxZDAwMWQ5YTgzYTI1YWZjYmY1NmE4Y2IyIn0.eyJhdWQiOiIyIiwianRpIjoiZWE3NzkxM2IyNTRlN2NhMGJhMDFlYTVlOTNiM2RiMjkwMmQyNGRlZWExNjUzZThlZmM4ZDM1ZDFkMDAxZDlhODNhMjVhZmNiZjU2YThjYjIiLCJpYXQiOjE0OTIwOTM5MDQsIm5iZiI6MTQ5MjA5MzkwNCwiZXhwIjoxNDk1NjkzOTA0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.rcns4rMNobs4p63_c5hHp_w8kiGOMBrUnw-KNX1BY0AbE_MkUoA1U5Rsitt9jUe-pIOt-k0HUq1QSuRq0CklMvcGfAbF3j7kTBO98s8pPm-Bji6jn2pOHdCw2DNABF8c-ZpkhEdEVOM_rfVi1F_ATVi9vh9GJTiLpwuXVZkqHLVqRjb1Gf3kswf5-ljL4LTTq_zPEHXEkJ5WEaWQ-2MBywjNCg8mPiMIpoScNRNbWbrh_sdk_RChMUbdnLvq5cIWlf4ny1ZDyT8ppjcCp49DkZSnicKZybYaAXzok1VIGp-HZXS5TiQAjzY6vhcQtMwjJiphgdta1ZkOjkR4EinHFiKGtLVWWZydNzR3Xi6z8bYjubHEbX5F2vyxyPJ6MVvLmIh1MpRLh1GrhO-nKBKUdqOs1jhZosKlJbkoa-sxAb6SLjFXDJmauG7W0uAvPaBF81jRjz4aEUbfQAm9Nu6I_m5c36hMIBlwFe2bu-8Pf1V2YVCumRAwStziHL5X13CLxyJBtBO-K2rfhK_gE3XybCCAs2E-2WmPGDwPjfso-PSqgbfNhEjATmbtnxLTEspZqnk2vELd4ytOe7eJsbtKvw0LwBHqfjUKxAzJfRK0Lnh67mpCcP0vCXXnizkRRbsgv2hhaFo8_1lkh_l3olGwQ2iU0dIPGOZ2c5bwOabN_bU')
  next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
