"use client"; // 添加此行以标记为客户端组件

import { useState } from "react";

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
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-8">练习题模块</h1>
      <ul className="space-y-4">
        {exercises.map((exercise, index) => (
          <ExerciseItem key={index} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
