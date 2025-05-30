"use client"; // 添加此行以标记为客户端组件

import { useState } from "react";
import FlipCard from "./studycase/card"; // 引入翻牌组件

export default function Exercises() {
  function ExerciseItem({ exercise }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <li className="border p-4 rounded shadow">
      <p className="text-lg font-medium">{exercise.question}</p>
      <button
        onClick={() => setIsAnswerVisible(!isAnswerVisible)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {isAnswerVisible ? "隐藏答案" : "展开答案"}
      </button>
      {isAnswerVisible && <p className="mt-2 text-gray-700">{exercise.answer}</p>}
    </li>
  );
}
  const exercises = [
    {
      question: "简历点学习",
      answer:  `1、低代码平台： 公司底层服务（cdn、数据库、监控系统、CI/CD 系统、其他底层能力） -> c端服务（组装服务（页面发布打包组件umd，同步数据；访问获取html模版，分期、js拼接、gloabaldata，渲染）、ssr服务、搭建服务、路由服务（人群、定向）、网关服务） -> 搭建系统（权限管理、页面管理、物料系统（开发规范、基础组件、cli）、拖拽事件处理、组件dsl协议（json字符串，key value形式）、实时预览（iframe嵌入打包后的页面，postmeeage更新，umd成果实时挂载（webpack打包配置为umd格式））、管理后台、数据中心、监控大盘（mm端、c端）） -> 业务 -> 容器环境（app、h5、小程度、多端，native）
        a、做功的点：原子组件仓库建设（设计标准、规范、脚手架集成、结合ai生代码（利用ai现有能力，图生码，然后主要做的是设计agent将骨架塞入业务逻辑，例如识别到价格、图片模块，用高达自己的组件替换，最后生成业务组件））、性能优化（预渲染（使用谷歌perfomance分析，发现目前卡点，预先挂载app节点（前端发布的时候同步给后端，伪ssr），后续替换真正节点。性能接口融合，通过后段注入的方式实现；）、搭建走查（主要是dsl解析，路径搜索（深度遍历），检查规则自定义（后端执行校验逻辑返回结果）前端交互设计（反馈、处理结果跟踪）。提效60%。原走查人力10pd，现4pd，瓶颈在业务组件逻辑特殊，无法穷举完毕，借助于ai的能力；人力协调，因为这个需要与后端配合，把这个事推下来啦，还有qa真机走查，白屏的监控等）
      2、ai相关(next搭建前端+node链接ai的应用，公司ai通用解决方案平台，工作流里面集合tools、mcp、rag等)然后背后使用大模型     
      3、稳定性相关（结合ai、sentry、Prometheus）：指标上报规范（异常指标、自定义指标、行囊指标（上报规范）、大盘口径定义、告警配置（多种策略提供））    
        a、为什么监控（快速解决线上问题，留存用户；数据复盘；系统稳定高效）、监控原则（2.5告警、8分钟内处理）、监控内容、监控形式（主动/被动）、怎么做（指标设计、埋点方案设计（上报逻辑ajax、sendBeacon上报（navigator.sendBeacon('/log', JSON.stringify({ event: 'page_unload' }));）、数据存储、可视化管理后台、告警提示(告警条件优化：可以用uv和异常数联合的策略来解决uv太小引起的波动)）、优化。
      4、工程化性能优化：（懒加载在容器中判断屏幕高度，然后加载哪个js；性能优化分析；enlight容器预加载,脚手架添加骨架屏（组件模块的地方自己加上去就行，要不展示骨架要不展示真实组件），数据预取等功能（后端到端接口和http接口性能））
      三年投入时间比：技术4: 业务6 业务团队（年支持25+需求。每个需求平均5pd），第一年基础组件建设 第二年稳定性建设&性能优化建设  第三年ai能力建设&搭建提效（稳定性延伸事宜）业务需求大量增多，严重挤压技术时间，寻求突破。软能力：目标倒推路径。晋升：对齐条件，定方案，里程碑、定期汇总`,
    },
    {
      question: "请 求 失 败 会 弹 出 一 个 toast , 如 何 保 证 批 量 请 求 失 败 , 只 弹出 一个toast",
      answer:  `要 确 保 批 量 请 求 失 败 时 只 弹 出 一 个 toast, 可 以 通 过 以 下 几 种 方 式 实 现 :
1 . 设 置 全局 标 志 位 : 定 义- 个 全 局 变 量 ( 如 isToastShown ) 来 表 示 是 否 已 经 弹 出 过 toast。 在 请
求 失 败 的 处 理 逻 辑 中 , 首 先 检 查 该 标 志 位 。 如 果 尚 未 弹 出 toast, 为 true ; 如果标志位已经为 true , 则直接忽略后续的弹出操作。
则 进 行 弹 出 操 作 , 并 设 置 标 志 位
2 . 使 用 防 抖 或 节 流 函 数 : 的 执 行 次 数 。 将 弹 出 不会频繁弹出 toasto
防 抖 toast ( debounce) 或 节 流 ( throttle) 的 操 作 封 装 在 防 抖 或 节 流 函 数 中 函 数 可 以 限 制 某 个 函 数 在 一 定 时 间 内
, 确 保 在 短 时 间 内 的 多 个 请 求 失 败 时 ,
3 . 集 中 处 理 错 误 : 将 所 有 请 求 的 错 误 集 中 处 理 , 而 不 是 在 每 个 请 求 的 catch 块 中 直 接 弹 出 toast。 例
如 , 把所有请求的 promise 添加到- 个数组中 , 然后使用 Promise.all() (进入 .then: 所有 Promise 成功。
进入 .catch: 至少一个 Promise 失败。Promise.all 的短路机制使得它在处理多个异步任务时非常高效，但需要注意失败的任务会立即终止整个操作)或其他类似方法来
统 一 处 理 这 些 promise 的 结 果 。 如 果 所 有 请 求 都 失 败 了 , 再 弹 出 一 个 toasto`,
    },
    {
      question: "babel- runtime 作 用 是 啥",
      answer: `babel- runtime是一个包含 模块化运行时助手的库。
在使用 babel 进行代码转换时 , 有时会注入- 些在多个文件中相同且可能被重复使用的代码。 例
如 , 使用类转换 (无松散模式) 时 , 每个包含类的文件都会重复出现类似 classcallcheck 这样
_
的 函 数 。
染。
具体来说 , babel-runtime 的主要作用就是将这些可能被重用的代码抽取成单独的模块 , 以避免在每个文件
中重复出现相同的代码。 它通过模块导入的方式引入这些功能 , 从而避免了对全局作用域的修改或污
array json 、 math promise 、 babel- runtime
generator/yield async/ await
承 转 换 等 ) 。
使用 包含了诸如 core- js
(提供Javascript 内置库的垫片 , 如
symbol regenerator-runtime 等) 、 (实现了
) 以及 些语法转换的辅助函数 (如 es5 与 es6 的继
babel- runtime 通 常 需 要 配 合 babel-plugin-transform-runtime 插 件 一 起 使 用 。
babel- plugin- transform- runtime
babel-
插 件 会 进 行 一 些 处 理 , 例 如 自 动 导 入 runtime/core-js , 并将全局静态方法、全局内置对象映射到对应的模块; 将内联的工具函数移
除, 改成通过 babel- runtime/ helpers 模块进行导入; 如果使用了 async/generator 函
数, 则 自 动导 入 babel-runtime/regenerator 模 块 等 。
这样 , 在代码中如果需要使用特定的功能 , 只需从 babel-runtime 相应的模块中导入即可 , 而不
是直接使用全局的对象或函数。
例如 , 如果代码中使用了 promise , 可以这样导入:
1 import promise from "babel-runtime/core-js/promise";
总的来说 , babel-runtime 更像是一种按需加载的实现方式 , 适用于开发库、工具等场景 , 可避
免 对 全 局 作 用 域 的 污 染 , 同 时 减 少 重 复 代 码 。
.babelrc或babel.config.js,主要是按需加载，减少打包后体积
module.exports = {
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime"] // 自动使用@babel/runtime
}
`,
    },
    {
      question: "如何减少项目里的if-else",
      answer:  `表驱动法：使用一个数组或者对象，以对象为key，然后处理函数是value，然后用查key对应的value来代替的if语句；用switch-case来代替if-else`,
    },
    {
      question: "如何实现预览 PDF文件",
      answer:  `1、使用浏览器内置的pdf查看器，其实直接就是a标签，<a href='xxx.pdf' target='_blank'> js: window.open('xxx.pdf', '_blank') 2、其他复杂操作：使用Mozila的PDF.js（设置viewport、设置canvas，渲染）来生成pdf预览器。 3
      使用第三方服务，谷歌的iframe，直接塞入ulr即可，但是需要注意数据安全问题。`,
    },
    {
      question: "滑词是如何实现的（总体来说就是监听鼠标事件来实现，然后使用浏览器的一些原始api实现）",
      answer:  `
      滑词是通过监听鼠标移动事件，获取鼠标位置，然后在鼠标位置附近查找文本节点，获取文本内容并高亮显示。可以使用Range对象来选中部分文本，并使用CSS样式来实现高亮效果。
      代码：
      document.addEventListener('contextmenu', function(event) {
         event.preventDefault();
         // 展示右键菜单
         showSelfRightMenu(event);
      }
      showSelfRightMenu(event)里面可以使用document.creatElement('div')来创建一个div标签，可以设置style定位
      例如复制、document.creatElement('div')，使用apped挂载到上面的元素上。
      隐藏就是移除节点div.remove()，或者设置display: none;
      event的一些属性：type、target、clientX、clientY、pageX、pageY等可以获取鼠标位置。
      阻止冒泡 event.stopPropagation()
      选中一段文字：mouse事件（开始，结束），selection对象（window.getSelection()，selection.toString();），
      如何修改选中的样式：
      window.getSelection().getRangeAt(0) 获取当前选区的 Range 对象
      一个 Selection 可能包含多个 Range（虽然大多数场景只有一个），你可以单独操作每个 Range。
      你可以通过 Range 对象将选中的内容包裹在一个带样式的元素（如 <span>）中，从而修改选中内容的样式。
      使用range.surroundContents(span) 通过设置span的样式
      `,
    },
    {
      question: "线上用户问题解决思路",
      answer:  `上报，描述：问题内容，发现方式，影响范围；再去排查bug；bug问题描述确认，避免信息gap；复线路径（如果无法，与客户沟通，采集日志/录屏等）；通过日志观察用户运行环境（网络、容器、接口情况、报错log）、偶线还是必线`,
    },
    {
      question: "px转rem： 前端多屏适配，如何将px转rem，用clientWidth计算rem， 动态设置font-size，使用font-size = clientWidth / 7.5; 其中750是设计稿的宽度；然后让font-size =rem.toFixed(2) + 'px' ; 例如：设计稿750px，font-size = 750 / 16 = 46.875px，则1rem = 46.875px；如果设计稿是375px，则font-size = 375 / 16 = 23.4375px，则1rem = 23.4375px。`,",
      answer:  `使用计算方式：rem = px / 16; 其中16是根元素的字体大小（通常是浏览器默认值）。可以在css中设置html { font-size: 16px; }，然后使用rem单位来设置其他元素的大小。也可以使用postcss-pxtorem插件来自动转换px为rem。
         (function flexible(window, document) {
                var docEl = document.documentElement
                //  375屏幕的font-size是100，也就是说，iphone6的font-size是100，设计稿按照750px设计，0.01rem = 1px
                function setRemUnit() {
                    var rem = docEl.clientWidth / 7.5
                    docEl.style.fontSize = rem.toFixed(2) + 'px'
                }
                setRemUnit()
                // reset rem unit on page resize
                window.addEventListener('resize', setRemUnit)
            }(window, document))
            // 1rem = fontsize /px => fontsize = 1rem(widht/ 7.5) * px
            // 自动转换，简单方便一点
            // 也可以用sass、less等预处理器来实现px转rem的功能：定义函数
            // 使用postcss-pxtorem插件来自动转换px为rem，webpack插件，感觉也比较麻烦
      `,
    },
    {
      question: "同源策略：same-origin policy: 协议、域名、端口号相同",
      answer:  `
      限制不同源脚本不能互相访问、接口请求不能跨域跨域：协议、域名、端口号有一个不同；
      跨域的解决方案：CORS（跨域资源共享）、JSONP（只支持GET请求）、WebSocket（双向通信）、postMessage（跨窗口通信）、iframe（通过window.name传递数据）等；
      防止跨站脚本攻击（XSS）：使用Content Security Policy（CSP）来限制资源加载，使用HttpOnly和Secure标志来保护cookie，使用输入验证和输出编码来防止恶意脚本注入；防止跨站请求伪造（CSRF）：使用CSRF令牌、SameSite cookie属性、Referer头部检查等。
      link标签、script标签、img标签等可以跨域加载资源，但不能访问跨域资源的内容；XMLHttpRequest和Fetch API默认是同源请求，除非设置了CORS头部，可以让服务器设置（Access-Control-Allow-Origin: *）。
      img本身支持跨越，但是也看服务器的配置。所有资源都部署在同一个服务器，与web开放的初衷违背；会对返回的资源进行限制，浏览器会根据CORS头部来判断是否允许跨域访问。加载js时，不允许对返回内容的读以及写的权限。
      默认情况下：给cookie设置domain属性，浏览器会自动添加cookie到请求头中；如果设置了SameSite属性，则浏览器会根据SameSite的值来决定是否发送cookie。
      Set-Cookie: key=value; Domain=.example.com（主域以及下面的子域）; Path=/ 登陆同步
      cookie常见配置：Secure只在https发送，httonly只允许http访问，SameSite限制跨站请求，Expires设置过期时间，Max-Age设置最大存活时间，HttpOnly禁止js访问，Domain设置域名，Path设置路径等。
      后端可以根据referrer来防止csrf攻击；cookie不让带，same-site属性，设置为strict或者lax；使用token验证，防止跨站请求伪造（CSRF）攻击。
      content-security-policy（CSP）: 是一种安全策略，可以防止跨站脚本攻击（XSS）和数据注入攻击。通过设置CSP头部，限制加载的资源类型、来源和执行方式。可以使用script-src、style-src、img-src等指令来控制资源加载。
      Content-Security-Policy: default-src 'self'; img-src *; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline';
      `,
    },
      {
      question: "取消axios请求",
      answer:  `使用axios的CancelToken来取消请求。可以在请求时创建一个CancelToken，然后在需要取消请求时调用cancel方法。示例代码如下：
      import axios from 'axios';
      const CancelToken = axios.cancelToken;
      axios.post('/api/data', {usename}, {
        cancelTokem: source.token // 创建一个取消令牌
      })
      cosnt source = CancelToken.source();
      souce.cancel('请求被取消'); // 调用cancel函数取消请求
      let cancel;
      // 发起请求时创建CancelToken
      axios.get('/api/data', {
        cancelToken: new CancelToken(function executor(c) {
          cancel = c; // 保存cancel函数
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('请求已取消', error.message);
        } else {
          console.error('请求失败', error);
        }
      });
      // 取消请求
      function cancelRequest() {
        if (cancel) {
          cancel('请求被取消'); // 调用cancel函数取消请求
          cancel = null; // 清空cancel函数} cancelRequest()
      }
      // 还可以使用const controller = new AbortController();
      // axios.get('/api/data', { sinal: controller.signal })
      // controller.abort(); // 调用abort方法取消请求 目前基本都用这个，兼容性比较好
      // {signal: controller.signal} 传递给axios请求，controller.abort()取消请求
      `,
    },
    {
        question: "dom里面判断a元素是b元素的子元素",
        answer:  `1、使用contains方式： return b.contains(a) 2、或者使用parentnode进行寻找`,
    },
    {
        question: "判断一个对象是否为空 , 包含了其原型链上是否有自定义数据或者方法。 该如何判定",
        answer:  `考察原型链：可以使用Object.getOwnPropertyNames()方法获取对象的所有属性名，然后判断是否为空数组。也可以使用for...in循环遍历对象的属性，判断是否有自定义属性；
         字符串：a && a.length > 0
          数组：Array.isArray(a) && a.length > 0
          对象：Object.keys(a).length > 0
          Set：a instanceof Set && a.size > 0
          Map：a instanceof Map && a.size > 0
          函数：typeof a === 'function' && a.length > 0
          null：a === null
          undefined：a === undefined
          Symbol：typeof a === 'symbol'
          BigInt：typeof a === 'bigint'
          Date：a instanceof Date && !isNaN(a.getTime())
          RegExp：a instanceof RegExp
          Error：a instanceof Error && a.message !== ''
          WeakSet：a instanceof WeakSet
          WeakMap：a instanceof WeakMap
          Promise：a instanceof Promise
        `,
    },
    {
        question: "动画实现方式",
        answer:  `
        1、类名添加（用classlist.toggle可自动添加或者删除一个类名）+ transition 
        2、使用keyframes动画 3、使用requestAnimationFrame（浏览器优化的动画帧） 
        4、使用CSS3动画（transform、transition等） 5、使用JavaScript定时器（setTimeout/setInterval） 
        6、使用第三方库（如GSAP、Anime.js等）
        实现翻牌效果：用transform: rotateY(180deg); 来实现翻转效果，使用transition来设置过渡效果。可以使用setTimeout来延迟执行翻转操作
      `,
    },
    {
      question: "flex：1的含义",
      answer:  `1、flex: 1 是 flex-grow、flex-shrink 和 flex-basis 的简写形式。它表示元素可以在主轴方向上扩展以填充可用空间，同时在必要时收缩以适应容器的大小。
       等同于：flex: 1 1 0%; 其中：
       - flex-grow: 1 表示元素可以扩展以填充可用空间。
       - flex-shrink: 1 表示元素可以收缩以适应容器的大小。
       - flex-basis: 0% 表示元素的初始大小为0，即在没有其他内容时不会占用空间。
       2、flex: 1 的含义是元素在弹性容器中可以占据剩余空间的比例。它表示元素可以扩展以填充可用空间，同时在必要时收缩以适应容器的大小。(占据剩余空间，伸缩或者扩展来适应容器的大小， 0%表示，没有内容时不会占用空间)
      `,
    },
    {
      question: "手写一个简单的事件总线",
      answer:  `const EventBus = {
        events: {},
        on(event, listener) {
          if (!this.events[event]) {
            this.events[event] = [];
          }
          this.events[event].push(listener);
        },
        off(event, listener) {
          if (!this.events[event]) return;
          this.events[event] = this.events[event].filter(l => l !== listener);
        },
        emit(event, ...args) {
          if (!this.events[event]) return;
          this.events[event].forEach(listener => listener(...args));
        },
      };
      // 使用示例
      EventBus.on('test', (data) => console.log(data));
      EventBus.emit('test', 'Hello World!'); // 输出：Hello World!
      EventBus.off('test', listener); // 移除监听器
      `,
    },
    {
      question: "怎么做代码重构",
      answer:  `明确重构目标（复杂度、性能、去除冗余、提高可读性可维护性、）、代码分析（对现有代码进行分析：代码结构、代码逻辑、函数模块，借助于工具例如eslint、chrome devtools perfomance分析性能）、制定重构计划（重构模块以及目标，可能包括注释更新、公共逻辑抽离、函数简化、性能优化（分析时间复杂度和空间复杂度））、测试与验证、团队内部代码审查、文档更新。`,
    },
    {
      question: "怎么做项目重构，一般分为几个步骤",
      answer:  `1、明确重构的目标（如提升性能、优化结构、去除冗余、提高可维护性。分析现状（项目结构、技术债务）、确定重构范围以及目标、分阶段实施、测试与验证、代码审查、文档更新、上学与回溯）`,
    },
    {
      question: '你们公司的监控系统具体是怎么实现的？',
      answer: '我们使用的是公司自研的监控平台，底层可能基于Prometheus或类似技术（如Sentry），但作为业务侧开发者，我更多是通过配置告警规则、分析监控数据来定位问题，例如在神券节大促期间，我们通过监控大盘发现接口成功率下降，最终定位到是CDN节点负载不均导致的。”（将问题引导到业务场景而非工具细节'
    },
    {
      question: "手写webpack配置",
      answer:  ``,
    },
    {
      question: "手写js数组常用方法",
      answer:  ``,
    },
    {
      question: "手写vue或者reactdiff算法",
      answer:  ``,
    },
    {
      question: "http（1.0/2.0）接口和后段接口thrft性能对比",
      answer:  ``,
    },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-8">练习题模块</h1>
      <FlipCard />
      <ul className="space-y-4">
        {exercises.map((exercise, index) => (
          <ExerciseItem key={index} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
