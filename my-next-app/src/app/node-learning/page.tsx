export default function NodeLearning() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Node学习</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li className="flex items-start gap-2">
          <div className="shrink-0">1.</div>
          <div className="flex-1">
            <p className="font-medium">Node.js 基础</p>
            <p className="text-sm text-gray-600">Node.js 是一个基于 V8 引擎的 JavaScript 运行时，用于构建高性能的网络应用。（是一个js的运行时环境，在服务器上运行js，自带v8引擎）</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`const http = require('http');
http.createServer((req, res) => {
  res.end('Hello, Node.js!');
}).listen(3000);`}
        </pre>
          <p className="text-sm text-gray-600">
            Node.js的Event loop，实现高效的非阻塞I/O（对应浏览器环境的微任务和宏任务）。
            1、js单线程（防止频繁操作dom形成死锁，可以通过web worker、worker_threads、webassembly来实现多线程;用事件循环和异步回调机制来执行并发任务）执行与底层操作系统的多线程的协调
            2、负责管理事件、回调执行顺序、异步任务的调度
            3、分为多个阶段，多个阶段之间循环执行，直到没有任务：
              a、timers阶段执行settimeout和setinterval回调
              b、pending callbacks阶段执行系统回调或者上一次的i/o回调
              c、idle,prepare阶段,不涉及业务代码
              d、poll阶段执行当前的i/o回调
              e、check阶段执行setImmediate回调
              f、close callbacks阶段执行close时间回调
              process.nextTick在同步代码之后立即执行，再执行事件循环中的回调，其实就是去管理异步任务。

          </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`const http = require('http');
http.createServer((req, res) => {
  res.end('Hello, Node.js!');
}).listen(3000);`}
        </pre>
      </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">2.</div>
          <div className="flex-1">
            <p className="font-medium">Express 框架</p>
            <p className="text-sm text-gray-600">Express 是一个基于 Node.js 的轻量级 Web 应用框架，用于快速构建 Web 服务。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">3.</div>
          <div className="flex-1">
            <p className="font-medium">文件系统操作</p>
            <p className="text-sm text-gray-600">Node.js 提供了强大的文件系统模块，用于读写文件和目录操作。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`const fs = require('fs');

// 写入文件
fs.writeFileSync('example.txt', 'Hello, File System!');

// 读取文件
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);`}
            </pre>
          </div>
        </li>
      </ol>
    </div>
  );
}
