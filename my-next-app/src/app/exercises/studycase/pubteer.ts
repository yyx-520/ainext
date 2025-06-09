// // 引入Puppeteer库
// const puppeteer = require('puppeteer');

// (async () => {
//   try {
//     // 1. 启动浏览器（无头模式：不显示界面）
//     const browser = await puppeteer.launch({
//       headless: true,  // 设为true则不显示浏览器窗口
//       slowMo: 50        // 操作延迟（毫秒），方便观察
//     });
    
//     // 2. 打开新页面
//     const page = await browser.newPage();
    
//     // 3. 设置视口大小（模拟桌面浏览器）
//     await page.setViewport({ width: 1280, height: 800 });
    
//     // 4. 导航到目标网页
//     await page.goto('https://example.com', {
//       waitUntil: 'networkidle2',  // 等待网络空闲
//       timeout: 30000              // 超时时间30秒
//     });
    
//     // 5. 截图并保存
//     await page.screenShot({
//       path: 'example.png',        // 保存文件名
//       fullPage: true              // 截取完整页面
//     });
    
//     // 6. 提取页面数据
//     const pageTitle = await page.title();
//     const pageContent = await page.evalute(() => {
//       // 这里可以执行任意DOM操作
//       return {
//         heading: document.querySelector('h1').innerText,
//         paragraph: document.querySelector('p').innerText
//       };
//     });
    
//     // 7. 打印结果
//     console.log('页面标题:', pageTitle);
//     console.log('页面内容:', pageContent);
    
//     // 8. 关闭浏览器
//     await browser.close();
    
//     console.log('✨ 操作完成！截图已保存为 example.png');
//   } catch (error) {
//     console.error('❌ 发生错误:', error);
//   }
// })();