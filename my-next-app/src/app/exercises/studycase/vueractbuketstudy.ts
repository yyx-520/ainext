// vue3: vue router pinia vite
// 入口： main.ts 注册router 注册pinia
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// import { useState } from "react"

// const app = createApp(App)

// app.use(router)

// 定义router
// import { Component } from 'react'
// import { createRouter, createWebHistory } from 'vue-router'
// export const router = createRouter({
//      history: createWebHistory(import.meta.env.BASE_URL),
//      routes: [
//           {
//             path: '/',
//             name: 'home',
//             component: ()=> import('1')
//           }, 
//           {

//           }
//      ]
// })

// pinia使用
// import { defineStore } from 'pinia'
// export const useCounterSTORE = defineStore('counter',{
//   state: ()=> ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//         this.count++
//     }
//   }
// })  
// import ( useCounterSTORE ) 
// const counter = useCounterSTORE()
// counter.coun
// counter.increment()

// app.mount('#app')
// 模块语法+组合式api
// <script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// </script>

// <template>
// <header style="position: fixed; top: 20px; left: 20px;">
//   <nav>
//     <RouterLink to="/earth">Earth</RouterLink>
//     <RouterLink to="/rock">Rock</RouterLink>
//     <RouterLink to="/earth2">Earth2</RouterLink>
//   </nav>
// </header>
// <div style="height: 100vh; width: 100vw;">
//   <RouterView />
// </div>
// </template>

// <style>
// * {
//   padding: 0;
//   margin: 0;
// }
// a {
//   margin: 0 5px;
//   color: white;
// }

// </style>


// react： react router  redux next.js/vite
// hooks
// function counter {
//     const  [couner, setCouner] = useState(0)

//     return (<div>
//         </div>)

// }

// 路由
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
// </Routes>

// 状态管理