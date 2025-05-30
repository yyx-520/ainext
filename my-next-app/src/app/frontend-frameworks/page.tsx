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
            Step I: The createElement Function
            Step II: The render Function
            Step III: Concurrent Mode
            Step IV: Fibers
            Step V: Render and Commit Phases（提交fiber树）
            Step VI: Reconciliation (diff协调)
            Step VII: Function Components （函数组件，16之后出的）
            Step VIII: Hooks （钩子函数）
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

          2、并发模式


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
              3、虚拟 DOM：优化渲染性能。
              4、编译优化：通过静态提升和预编译来提高性能。
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
