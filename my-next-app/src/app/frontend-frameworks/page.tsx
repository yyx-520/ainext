export default function FrontendFrameworks() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">前端框架学习</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li className="flex items-start gap-2">
          <div className="shrink-0">1.</div>
          <div className="flex-1">
            <p className="font-medium">React 基础</p>
            <p className="text-sm text-gray-600">React 是一个用于构建用户界面的 JavaScript 库，具有组件化和声明式的特点。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`function App() {
  return <h1>Hello, React!</h1>;
}`}
        </pre>
        <p className="text-sm text-gray-600">React基本特性：
            1、js框架库，ui层面的解决方案
            2、jsx语法、单向数据绑定、声明式编程、组件化编程（Component）、虚拟dom
               a、声明式编程： 只在乎做什么，不在乎步骤，根据逻辑来声明组件；
               b、component： 页面中每个部分都是一个component，接收数据，返回要展示的dom。分为类组件和函数组件。组件的特点：可复用、可组合、可维护；
            3、优势：灵活、声明式简单、组件化复用程度高、单向数据流更快更安全
            4、函数组件和 Hooks 让状态和逻辑都在函数作用域中（相当于hooks是定义在函数中，使用的是函数作用域，所以可以直接访问里面定义的变量，无须this）管理，无需 this，代码更简洁。
            8步实现react（能力很强的一个类，vue也是）：
            Step I: The createElement Function 创建虚拟节点
            Step II: The render Function 调用render函数
            Step III: Concurrent Mode // 并发模式启动
            Step IV: Fibers // 构建fiber树
            Step V: Render and Commit Phases（提交fiber树） // 执行fiber树
            Step VI: Reconciliation (diff协调) // diff
            Step VII: Function Components （函数组件，16之后出的） // 如果是函数组件
            Step VIII: Hooks （钩子函数） // 调用钩子
            react scripts： 最新版本里面baber的runtime是自动的，react18版本里面的jsx是自动的。之前是classic的，react18版本里面的jsx是自动的。
        </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`function App() {
  return <h1>Hello, React!</h1>;
}`}
        </pre>
        <p className="text-sm text-gray-600">React18核心原理：
          准备知识：
            并发：线程交替执行，多核cpu高效执行
            并行：同一时间执行多个线程
            一个人并发（web端，负载均衡）
            多个人并行。
            进程：操作系统分配资源的单位，进程内有多个线程，线程是执行代码的最小单位。
            浏览器：多进程。16.6ms绘制一帧。
            v8引擎：单线程，事件循环。
          1、fiber架构：并行架构，任务片段（java的runable）:
            a、为解决15版本后，react的渲染性能问题（递归无法中断，单线程），react18引入了fiber架构。
            b、tsx用createElement创建虚拟dom，react18使用fiber架构来管理这些虚拟dom。
            c、fiber架构的核心是任务片段（fiber节点），每个fiber节点代表一个组件，包含组件的状态、props、子节点等信息。
            d、fiber节点形成一个树状结构，类似于组件树。
            e、fiber节点可以被中断和恢复，允许在渲染过程中进行优先级调度。
          2、调度器：任务优先级调度
          3、并发模式
          学习仓库：https://github.com/yyx-520/didact
          Vue 的 ref 可以实现数据和视图的双向绑定。
          React 的 ref 不能实现数据和视图的双向绑定，只能做 DOM 或变量引用。
          React 的响应式和视图更新要用 useState、useReducer 等。
        </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`function App() {
  return <h1>Hello, React!</h1>;
}`}
        </pre>
      </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">2.</div>
          <div className="flex-1">
            <p className="font-medium">Vue 基础</p>
            <p className="text-sm text-gray-600">Vue 是一个渐进式 JavaScript 框架，专注于构建用户界面，易于集成。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`<template>
  <h1>Hello, Vue!</h1>
</template>

<script>
export default {
  name: 'App',
};
</script>`}
            </pre>
            <p className="text-sm text-gray-600">Vue3核心原理：
              1、响应式系统：使用 Proxy 实现数据的响应式绑定。
              2、Composition API：提供更灵活的逻辑复用方式。
                解决代码维护问题：相关部分在一起。
              3、虚拟 DOM：优化渲染性能。
              4、编译优化：通过静态提升和预编译来提高性能。
              5、Pinia 就是 Vue 3 的“全局数据仓库”。
              6、路由服务： RouterLink, RouterView
              7、setup：语法糖，可以直接识别子组件、自动导出当前组件
              8、写法感觉像react
              9、reactive，shallowReactive只响应基础类型: 基于es6的proxy，针对于对象数据 usestate
              10、ref是基础数据  ref
              11、readonly
              12、coomputed
              13、watch：要监听reactive对象的属性，需要第一个参数传入一个函数 useeffect
              14、watchEffect。
              15、mini-vue学习： 
                  1、创建vnode（虚拟节点），基于根节点
                  2、调用render（实际是调用patch，
                    输入新旧虚拟节点，进行对比，渲染到真实dom节点上，patch 
                    是vue 渲染和更新虚拟 DOM 的核心分发函数，根据 vnode 类型和 shapeFlag，递归地将虚拟节点渲染或更新到真实 DOM），
                    没有老节点，就是直接挂载，有的话，就是diff，再渲染真实dom
                    createComponentInstance是创建一个虚拟节点实例，包括模版、数据、状态等
                  3、给虚拟节点加工，绑定props。绑定slots（执行一下绑定在instaces上面），如果有setup就，绑定proxy（使用原生的new Proxy，响应式和组合式api实现的基础，第二个参数就是被代理对象的拦截器（get set），用于处理一些单独的逻辑）。
                     a、就是get（分为props或者setupstate中自定义的和公共的（emit、slots、props、$el）） set直接赋值
                     b、如果是函数节点：
                            初始化：
                              1、setup context包括：attrs、slots、emit。使用WeakMap 特性：键必须是对象，且不会阻止垃圾回收，适合做响应式对象的缓存。
                              2、存储proxy记录。
                              3、触发依赖收集以及更新函数绑定（核心概念：依赖改变，执行回调；track函数，记录哪个对象的key改变咯）
                              4、初始化/更新函数：调用hooks，递归调用patch。
                            跟新：对比props（diff算法：patchKeyedChildren）。subtree，递归patch。
                     c、如果是elemen节点：
                          初始化： 创建节点。处理子节点，递归patch。可能又会收集依赖。beforemounte钩子，插入真实节点，mounted钩子
                          更新 对比props（diff算法：patchKeyedChildren）。对比childer，递归调用patch
                  4、总的来说：Vue3 的依赖收集和响应式，确实是通过 Proxy 劫持对象的 get/set 实现的，自动追踪依赖并在数据变化时触发更新。
                  5、diff算法强力学习：
                  6、v-model 本质上是 props + emit 的语法糖，结合响应式系统实现了双向绑定。
                  数据流：父 → 子（props），子 → 父（emit）。
                  响应式：依赖收集和触发保证数据变了视图自动更新。
                16、vue中key的作用：虚拟节点中的唯一标识符，diff时，标记是否时一个新元素来决定是否删除旧的元素，来插入这个新的元素。另外在vue的使用过程中，v-for时，保证组件和数据能够对上，避免出现数据混乱问题。
                17、如何让vue重新渲染：
                  改变数据状态，双向绑定，自动触发页面的自动渲染
                  强制重新渲染：调用this.$forceUpdata() 它会影响性
                  重新卸载组件和挂载组件：使用$destor销毁、$mount重新挂载
                18、vue中组件间通信方式：prop和事件（prop传入子组件，子组件使用emit，父组件接收事件，进行响应）。Vuex。$emit 和 $on。$refs：$refs
                19、mutation、action：vuex中有一个重要概念store，mutation和action就是用来修改store中状态的。mutation是直接修改状态，只能同步，无法异步。而action则是用来提交mutation的方法，它可以进行异步操作。Vue之所以要使用mutation和action，更好的控制代码的逻辑，状态管理，便于维护。
                20、插槽、具名插槽、作用域插槽：在组件中分发内容，。通过使用插槽，我们可以将组件的某些部分替换为父组件传递的内容。默认直接使用slot作为名字。具名：name字段，分发不同的内容。作用域：组件把数据透出给副组件，子组件用template。父组件用slot-scope。
                21、provide和inject：祖先组件向后代组件注入依赖。provide写在父组件，inject写在子组件，获取定义在父组件的变量或者函数。不会自动创建响应，需要自己写使用watch或computed属性来实现这一点。
                22、子组件跨多层往父组件传数据的方法：即使用 provide 和 inject。
            </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`<template>
  <h1>Hello, Vue!</h1>
</template>

<script>
export default {
  name: 'App',
};
</script>`}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">3.</div>
          <div className="flex-1">
            <p className="font-medium">Angular 基础</p>
            <p className="text-sm text-gray-600">Angular 是一个基于 TypeScript 的框架，用于构建动态的 Web 应用。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, Angular!</h1>',
})
export class AppComponent {}`}
            </pre>
          </div>
        </li>
      </ol>
    </div>
  );
}
