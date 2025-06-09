// sentydemo实例编写
import * as Sentry from "@sentry/browser"
import { browserTracingIntegration } from "@sentry/browser";


// vue用使用@sentry/vue包 import * as Sentry from '@sentry/vue';

// 初始化
Sentry.init({
    dsn: '',
    integrations: [ // 自动采集页面加载、路由变化、XHR/fetch 等前端性能数据，帮助你分析前端慢请求、页面卡顿等问题。
        browserTracingIntegration()
    ],
    tracesSampleRate: 0.2,
    release: 'tesnpm@1.0.0',
    sendDefaultPii: false,
    beforeSend: (event)=> { // 过滤不关系错误
        if (event.message?.includes('ExtensionContext')) return null;
        return event;
    }
})

function demofun() {
console.log('test')
}

// 主动捕获异常
try {
 demofun()
} catch (err) {
    Sentry.captureException(err)
    // 附加额外信息
    Sentry.setContext("操作详情", {
        userId: '222',
        action: 'checout'
    })
}

// ErrorBoundary
// <BrowserRouter>
//   <Sentry.ErrorBoundary>
//     <App />
//   </Sentry.ErrorBoundary>
// </BrowserRouter>

// 构建完毕，上传sourcemap文件
// sentry-cli releases --org your-org --project your-project files 1.0.0 upload-sourcemaps ./dist --url-prefix '~/static/js'