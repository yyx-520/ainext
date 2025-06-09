export default function BuildTools() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        构建打包学习：
        源码 → 构建工具打包 → 生成 JS/CSS/HTML/资源 → 部署 → 浏览器加载解析 → 用户看到页面。
        1、开发阶段：源码：js/ts 图片 css 静态资源 字体 html
        2、构建/打包阶段：构建：分析依赖（模块化处理，esm、cjs转换），Babel 负责将高级语法转换为兼容性强的es5代码，利用插件或者loader，然后进行代码压缩、tree-shaking、代码分割（分chunk，也就是一个bundle包），资源优化、生成打包产物（js bundel（mainjs））,可能是esm、umd。css文件。html文件。静态资源。
        3、部署：将打包产物上传到服务器（m端发布服务那一块），将资源地址同步给后端
        4、浏览器加载资源，挂载视觉
        5、减小包体积作为性能优化方向
        {/* 多入口文件：
        在同时输出 UMD 和 ESM 双版本的情况下，运行时模块加载系统会根据环境自动选择入口文件，具体机制如下：
        🔧 1. ‌通过 package.json 入口声明实现智能路由‌

        在库的 package.json 中定义多重入口点：
        main：umd
        module: mjs
        exports node环境

        优先选择 exports module main

        json
        Copy Code
        {
          "main": "dist/umd-bundle.js",       // 传统环境回退入口 :ml-citation{ref="2,9" data="citationList"}
          "module": "dist/esm-bundle.mjs",    // ESM 优先入口 :ml-citation{ref="2,6" data="citationList"}
          "exports": {
            ".": {
              "import": "./dist/esm-bundle.mjs",  // ESM 环境加载
              "require": "./dist/umd-bundle.js"   // CommonJS/Node 环境加载
            }
          }
        }


        现代构建工具（Webpack/Rollup）和 Node.js 会按优先级识别入口：

        优先检测 exports 字段的 import/require 路径
        次优选择 module 字段（ESM 格式）
        最后回退到 main 字段（UMD/CJS）
        🌐 2. ‌不同环境的加载逻辑‌
        环境类型	加载逻辑
        现代浏览器‌	通过 <script type="module"> 自动加载 exports.import 的 ESM 文件
        Node.js‌	根据 package.json 的 exports 字段选择 require（UMD）或 import（ESM）
        打包工具‌	Webpack/Rollup 优先选择 module 或 exports.import 实现 Tree Shaking
        传统浏览器‌	通过 <script src="umd-bundle.js"> 加载 UMD 版本（全局变量暴露）
        ⚙️ 3. ‌技术实现关键点‌

        文件名规范‌
        ESM 产物使用 .mjs 扩展名（如 lib.esm.mjs），UMD 使用 .js（如 lib.umd.js），明确区分模块类型

        构建工具配置‌（Rollup 示例）

        js
        Copy Code
        // rollup.config.js
        export default {
          input: 'src/index.js',
          output: [
            { file: 'dist/lib.umd.js', format: 'umd', name: 'MyLib' }, // UMD
            { file: 'dist/lib.esm.mjs', format: 'es' }                // ESM :ml-citation{ref="9" data="citationList"}
          ]
        };


        浏览器兼容处理‌
        在 HTML 中动态加载适配版本：

        html
        Copy Code
        <script type="module">
          import { feature } from 'https://cdn.com/lib.esm.mjs'; // 现代浏览器
        </script>
        <script nomodule src="https://cdn.com/lib.umd.js"></script> <!-- 传统浏览器 --> :ml-citation{ref="6" data="citationList"}

        📦 4. ‌验证效果‌
        现代项目‌：通过 import { func } from 'your-lib' 自动加载 ESM 并获得 Tree Shaking 优化
        旧环境‌：通过 const lib = require('your-lib') 加载 UMD 并兼容运行

        ⚡️ ‌总结‌：通过标准化 package.json 入口声明和文件命名约定，构建工具和运行时会自动选择最优版本，开发者只需按标准引入库即可实现无缝适配 。 */}
        {/* # 通俗解释：为什么分包能减小体积？

想象你要搬家，把所有家当都塞进一个巨大的集装箱里。这个集装箱大到需要特殊卡车运输，非常笨重。这就是不分包的代码——一个巨大的 JS 文件。

现在考虑分包方案：

## 🧳 搬家比喻（分包方案）

1. **必需品行李箱**：只装最急用的物品（衣服、证件）
   - **对应**：核心播放功能（播放/暂停/音量）

2. **厨房专用箱**：锅碗瓢盆
   - **对应**：HLS流媒体支持模块

3. **书房专用箱**：书籍、电脑
   - **对应**：字幕解析模块

4. **娱乐设备箱**：游戏机、音响
   - **对应**：画中画/全屏等高级功能

## ✅ 分包的好处

### 1. 初始加载更轻快
- **不分包**：卡车必须运整个集装箱（5吨）才能开始搬家
- **分包后**：先送必需品行李箱（0.5吨），你可以先住下来，其他箱子慢慢送

### 2. 避免"未使用税"
- **不分包**：即使用户只看普通MP4视频，也得下载HLS/DASH等流媒体支持代码
- **分包后**：只有实际使用的功能才需要下载

### 3. 共享工具复用
- 把全家都用的工具（锤子/螺丝刀）单独装箱：
  ```javascript
  // 不分包：每个模块都自带工具
  厨房箱有锤子 + 书房箱有锤子 + 娱乐箱有锤子
  
  // 分包后：共享工具箱
  公共工具箱[锤子] → 所有房间共用
  ```

### 4. 更新更高效
- 修改了字幕解析功能：
  - **不分包**：整个大文件要重新下载
  - **分包后**：只需重新下载"书房专用箱"

## 📦 技术世界的真实对比

假设你的视频播放器有这些模块：

| 模块 | 大小 | 使用率 |
|------|------|--------|
| 核心播放器 | 50KB | 100% |
| HLS支持 | 40KB | 30% |
| DASH支持 | 45KB | 20% |
| 字幕系统 | 35KB | 40% |
| 缩略图预览 | 30KB | 15% |
| 数据分析 | 25KB | 5% |

### 不分包的结果
> 总大小 = 225KB  
> **所有用户都必须下载全部225KB**

### 分包后的结果
1. **所有用户加载**：核心播放器 (50KB)
2. **按需加载**：
   - HLS用户 +40KB
   - DASH用户 +45KB
   - 需要字幕的用户 +35KB

### 实际节省
- 普通MP4用户：50KB vs 225KB **(节省78%)**
- 带字幕的HLS用户：50+40+35=125KB vs 225KB **(节省44%)**

## 🌐 网络传输优化

分包后浏览器可以**并行下载**多个小文件：
```
同时下载: [核心包] [HLS包] [字幕包]
VS
单线程下载: [巨型包]
```

就像：
- 派3辆小货车分头送货（更快到达）
- vs
- 1辆大卡车慢慢运送所有货物

## 💡 关键理解点

1. **不是真的减少总代码量**  
   分包后所有代码的总量可能还略微增加（多了分包管理代码），但**有效传输数据量**大幅减少

2. **按需加载才是核心**  
   就像你不会把冬装带到热带旅行，代码只在需要时才加载

3. **缓存利用率提升**  
   公共模块（如工具函数）被多次访问时，浏览器缓存可重复利用

## 现实效果

使用分包后，你的视频播放器：
1. 首页加载时间减少 40-60%
2. 低端设备上更流畅
3. 用户流量消耗显著降低
4. 复杂功能可以更丰富（因为不担心初始体积爆炸）

这就是为什么现代前端开发都把代码分包作为性能优化的必选项！ */}
      </h1>
      <ol className="list-decimal list-inside space-y-2">
        <li>Webpack 基础</li>
        <li>Vite 基础</li>
        <li>Rollup 基础</li>
      </ol>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">代码示例</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
};`}
        </pre>
      </div>
    </div>
  );
}
