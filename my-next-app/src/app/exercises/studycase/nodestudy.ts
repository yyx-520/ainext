// npm包发布流程以及工程化配置
// ### **NPM 包发布流程 & 工程化配置指南**  
// （基于实际企业级开发经验整理）

// ---

// #### **一、标准化发布流程**
// 1. **初始化项目**  
//    ```bash
//    mkdir my-pkg && cd my-pkg
//    npm init -y  # 生成 package.json
//    ```

// 2. **工程化配置（关键文件）**  
//    ```text
//    ├── src/                # 源码
//    ├── dist/               # 构建输出（需配置 .npmignore）
//    ├── tests/              # 单元测试
//    ├── .eslintrc.js        # ESLint 配置
//    ├── .babelrc           # Babel 配置（如需转译）
//    ├── rollup.config.js    # Rollup 打包配置（推荐）
//    └── tsconfig.json      # TypeScript 配置（可选）
//    ```

// 3. **版本控制规范**  
//    - 使用 **semver**（语义化版本）：  
//      ```bash
//      npm version patch  # 1.0.0 → 1.0.1
//      npm version minor  # 1.0.1 → 1.1.0
//      npm version major  # 1.1.0 → 2.0.0
//      ```
//    - 预发布版本：  
//      ```bash
//      npm version 1.0.0-beta.1  # 发布 beta 版
//      ```

// 4. **发布到 NPM**  
//    ```bash
//    npm login          # 登录 NPM 账号
//    npm publish        # 发布公开包
//    npm publish --access=public  # 确保作用域包公开
//    ```

// ---

// #### **二、企业级工程化配置**
// 1. **构建优化**（以 Rollup 为例）  
//    ```js
//    // rollup.config.js
//    export default {
//      input: 'src/index.js',
//      output: [
//        { file: 'dist/index.cjs.js', format: 'cjs' }, // CommonJS
//        { file: 'dist/index.esm.js', format: 'esm' }  // ESM
//      ],
//      plugins: [
//        resolve(), 
//        commonjs(),
//        terser()  // 代码压缩
//      ]
//    };
//    ```

// 2. **质量管控**  
//    - **ESLint**（代码规范）  
//      ```js
//      // .eslintrc.js
//      module.exports = {
//        extends: ['airbnb-base', 'prettier'],
//        rules: {
//          'no-console': 'warn'
//        }
//      };
//      ```
//    - **Husky + Commitlint**（Git 提交规范）  
//      ```bash
//      # 提交时触发校验
//      npx husky add .husky/commit-msg 'npx commitlint --edit $1'
//      ```

// 3. **自动化测试**  
//    ```bash
//    # 单元测试（Jest 示例）
//    npm test -- --coverage  # 生成覆盖率报告
//    ```

// 4. **TypeScript 支持**  
//    ```json
//    // tsconfig.json
//    {
//      "compilerOptions": {
//        "declaration": true,  // 生成 .d.ts
//        "outDir": "dist"
//      }
//    }
//    ```

// ---

// #### **三、高阶实践技巧**
// 1. **多入口打包**  
//    ```js
//    // package.json
//    "exports": {
//      ".": "./dist/index.cjs.js",
//      "./lite": "./dist/lite.esm.js"  // 轻量版入口
//    }
//    ```

// 2. **CDN 发布**  
//    ```bash
//    # 通过 unpkg 自动同步
//    https://unpkg.com/your-pkg@latest/dist/index.min.js
//    ```

// 3. **Monorepo 管理**  
//    ```bash
//    # 使用 Lerna 或 pnpm workspace
//    lerna publish --conventional-commits
//    ```

// ---

// #### **四、避坑指南**
// 1. **`.npmignore` 配置**  
//    ```text
//    # 排除非必要文件
//    src/
//    tests/
//    *.config.js
//    ```

// 2. **权限问题**  
//    ```bash
//    # 解决 403 错误
//    npm whoami          # 检查登录状态
//    npm owner add user  # 添加协作者
//    ```

// 3. **撤销发布**  
//    ```bash
//    npm unpublish your-pkg@1.0.0  # 72小时内可撤销
//    ```

// ---

// #### **五、完整生命周期示例**
// ```bash
// # 开发 → 测试 → 发布
// npm run build && npm test && npm publish
// ```

// 掌握这套流程，可满足 **95% 的企业级 NPM 包开发需求**，建议收藏备用！