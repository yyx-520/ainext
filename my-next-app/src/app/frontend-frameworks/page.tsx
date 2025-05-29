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
