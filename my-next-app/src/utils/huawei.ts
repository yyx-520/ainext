// 华为机考题练习
// 判断一组不等式是否满足约束并输出最大差
// 给定一组不等式，判断是否成立并输出不等式的最大差(输出浮点数的整数部分)

// import { timeEnd } from "console";
// import { join } from "path";

// 要求:

// 不等式系数为 double类型，是一个二维数组
// 不等式的变量为 int类型，是一维数组;
// 不等式的目标值为 double类型，是一维数组
// 不等式约束为字符串数组，只能是:“>”,“>=”,“<”,“<=”,“=”，
// 例如，不等式组:

// a11x1+a12x2+a13x3+a14x4+a15x5<=b1;

// a21x1+a22x2+a23x3+a24x4+a25x5<=b2;

// a31x1+a32x2+a33x3+a34x4+a35x5<=b3;

// 最大差 = max{(a11x1+a12x2+a13x3+a14x4+a15x5-b1),(a21x1+a22x2+a23x3+a24x4+ a25x5-b2),(a31x1+a32x2+a33x3+a34x4+a35x5-b3)},

// 类型为整数(输出浮点数的整数部分)
// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function compareWithZero(val, constraint) {
//   let flag;
//   switch (constraint) {
//     case ">":
//       flag = val > 0;
//       break;
//     case ">=":
//       flag = val >= 0;
//       break;
//     case "<":
//       flag = val < 0;
//       break;
//     case "<=":
//       flag = val <= 0;
//       break;
//     case "=":
//       flag = val === 0;
//       break;
//   }
//   return flag;
// }

// rl.on('line', (line)=>{
//   const [a11, a12, a13, a14, a15] = arr[0].map(Number);
//   const [a21, a22, a23, a24, a25] = arr[1].map(Number);
//   const [a31, a32, a33, a34, a35] = arr[2].map(Number);
//   const [x1, x2, x3, x4, x5] = arr[3].map(Number);
//   const [b1, b2, b3] = arr[4].map(Number);
//   const [y1, y2, y3] = arr[5];
//   let diff1 = a11 * x1 + a12 * x2 + a13 * x3 + a14 * x4 + a15 * x5 - b1;
//   let diff2 = a21 * x1 + a22 * x2 + a23 * x3 + a24 * x4 + a25 * x5 - b2;
//   let diff3 = a31 * x1 + a32 * x2 + a33 * x3 + a34 * x4 + a35 * x5 - b3;
//   // 比较差值
//   const flag =
//     compareWithZero(diff1, y1) &&
//     compareWithZero(diff2, y2) &&
//     compareWithZero(diff3, y3);

//   const maxDiff = Math.max(diff1, diff2, diff3);
//   console.log(`${flag} ${parseInt(maxDiff)}`);
// })

// 返回矩阵中非1的元素个数
// 题目描述
// 存在一个m*n的二维数组，其成员取值范围为0，1，2。

// 其中值为1的元素具备同化特性，每经过1S，将上下左右值为0的元素同化为1。

// 而值为2的元素，免疫同化。

// 将数组所有成员随机初始化为0或2，再将矩阵的[0, 0]元素修改成1，在经过足够长的时间后求矩阵中有多少个元素是0或2（即0和2数量之和）。

// 输入描述
// 输入的前两个数字是矩阵大小。后面是数字矩阵内容。

// 输出描述
// 返回矩阵中非1的元素个数。
// 图的bfs遍历或者深度遍历，然后计数，最后算出非1的个数
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const lines = [];
// let m,n = 0;
// rl.on('readline', (line)=> {
//     lines.push(line)
//     if (lines.length === 1) {
//         [m, n] = lines[0].split(' ').map(Number)
//     }
//     if (m && lines.length === m+1) {
//         lines.shift()
//         const matrix = lines.map(res=>res.split('').map(Number))
//         matrix[0][0]=1
//         console.log(getResult(m ,n, matrix))
//     }
// })

// function getResult(m ,n , matrix) {
//     let count = 1; // 矩阵中数量为1的个数
//     // 上下左右
//     const offset = [
//         [0,1], 
//         [0,-1],
//         [1,0],
//         [-1,0]
//     ]
//     // bfs队列
//     const queue = [[0,0]]
//     while(queue.length > 0) {
//         const [x, y] = queue.shift()
//         for(const set of offset) {
//             let newX = x + set[0]
//             let newY = y + set[1]
//             if (
//                 newX >= 0 &&
//                 newX < m &&
//                 newY >= 0 &&
//                 newY < n &&
//                 matrix[newX][newY] == 0
//             ) {
//                 matrix[newX][newX] = 1
//                 count ++;
//                 queue.push([newX, newY])
//             }
//         }
//     }
//     return m*n - count
// }

//近些年来，我国防沙治沙取得显著成果。某沙漠新种植N棵胡杨（编号1-N），排成一排。

// 一个月后，有M棵胡杨未能成活。

// 现可补种胡杨K棵，请问如何补种（只能补种，不能新种），可以得到最多的连续胡杨树？
// 输入描述
// N 总种植数量，1 <= N <= 100000

// M 未成活胡杨数量，M 个空格分隔的数，按编号从小到大排列，1 <= M <= N

// K 最多可以补种的数量，0 <= K <= M

// 输出描述
// 最多的连续胡杨棵树
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     outpou: process.stdout
// })
// const inputLines = []
// rl.on('line', (line)=>{lineinput.push(line)})

// rl.on('close', ()=> {
//         // 读取胡杨树的总数N
//     const total = parseInt(inputLines[0]);
//     const deadconunt = parseInt(inputLines[1])
//         // 读取未成活胡杨树的编号列表
//     const deadList = inputLines[2].split(' ').map(Number);
//     const supplaynum = parseInt(inputLines[3]);
//         // 初始化数组，所有树最初都是成活的，0表示成活，1表示未成活
//     const nums = new Array(total).fill(0);
//        // 根据输入，将未成活的树的位置标记为1
//     deadList.forEach(num => {
//         nums[num - 1] = 1; // 树的编号从1开始，因此需要减1
//     });
//     // 滑动窗口模版
//     let left = 0
//     let sumright = 0
//     let sumleft = 0
//     let maxlength = 0
//     for (let right =0;right< total;right++) {
//         // 更新右窗口
//         sumright += nums[right]
//         // 一个while缩小窗口，更新左窗口
//         while(sumright - sumleft > supplaynum) {
//            sumleft+= nums[left]
//            left++
//         }
//         // 更新值
//         maxlength = Math.max(maxlength, right - left + 1)
//     }
//     console.log(maxlength)
// })
// 传递悄悄话
// 给定一个二叉树，每个节点上站一个人，节点数字表示父节点到该节点传递悄悄话需要花费的时间。

// 初始时，根节点所在位置的人有一个悄悄话想要传递给其他人，求二叉树所有节点上的人都接收到悄悄话花费的时间。
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.on('line', (line)=> {
//     const tree = line.splice(',').map(Number)
//     // 层序遍历,下标
//     const queue = [0]
//     // time = 0
//     let time = 0
//     // let start = 0
//     while(queue.length) {
//         // if (tree)
//         const parentnodeindex = queue.shift()
//         // 左节点 
//         let leftnodeindex = parentnodeindex * 2 + 1
//         let rightnodeindex = parentnodeindex * 2 + 2
//         // 左边更新
//         if(tree[leftnodeindex] !==-1 && leftnodeindex < tree.length) {
//             tree[leftnodeindex] += tree[parentnodeindex]
//             queue.push(leftnodeindex)
//             time =  Math.max(time, tree[leftnodeindex])
//         }
//         if(tree[rightnodeindex] !==-1 && rightnodeindex < tree.length) {
//                         tree[rightnodeindex] += tree[parentnodeindex]
//             queue.push(rightnodeindex)
//             time =  Math.max(time, tree[rightnodeindex])
//         }
//         // 右边更新
//     }
//     console.log(time)
//     // 关闭readline接口实例
//    rl.close();
// })

// "吃货"和"馋嘴"两人到披萨店点了一份铁盘（圆形）披萨，并嘱咐店员将披萨按放射状切成大小相同的偶数个小块。但是粗心的服务员将披萨切成了每块大小都完全不同奇数块，且肉眼能分辨出大小。

// 由于两人都想吃到最多的披萨，他们商量了一个他们认为公平的分法：从"吃货"开始，轮流取披萨。除了第一块披萨可以任意选取外，其他都必须从缺口开始选。

// 他俩选披萨的思路不同。"馋嘴"每次都会选最大块的披萨，而且"吃货"知道"馋嘴"的想法。

// 已知披萨小块的数量以及每块的大小，求"吃货"能分得的最大的披萨大小的总和。

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let lines = []; // 用于存储输入行的数组
// let n; // 披萨的数量
// let a; // 每块披萨的美味值
// let dp; // 记忆化数组，用于存储已计算过的状态

// rl.on('line', (line) => {
//   lines.push(line);
// }).on('close', () => {
//     [n, ...a] = lines.map(Number)
//     a = a.slice(0, n)
//     dp = Array.from({ length: n }, () => Array(n).fill(-1)); // 初始化记忆化数组
//     let ans = 0
//     for (let i=0;i<n;i++) {
//       // 注意环形数组的理解
//        ans=Math.max(ans, allocation((i+1)%n, (i+n-1)%n) + a[i])
//     }
//     console.log(ans)
// })
// function allocation (L, R) {
//   if (dp[L][R] !== -1) {
//     return dp[L][R]
//   }
//   // 馋嘴要吃最大的肯定
//   if (a[L] > a[R]) {
//     L=  (L+1) % n
//   } else {
//     R= (R+n-1) % n
//   }
//   // 馋嘴吃完后，吃货也要吃最大的
//   if (L == R) {
//    dp[L][R] = a[L]
//   } else {
//     dp[L][R] = Math.max(a[L] + allocation((L + 1) % n, R), a[R] + allocation(L, (R + n - 1) % n));
//   }
//   return dp[L][R]
// }
//
// 祖国西北部有一片大片荒地，其中零星的分布着一些湖泊，保护区，矿区;
// 整体上常年光照良好，但是也有一些地区光照不太好。

// 某电力公司希望在这里建设多个光伏电站，生产清洁能源对每平方公里的土地进行了发电评估，
// 其中不能建设的区域发电量为0kw，可以发电的区域根据光照，地形等给出了每平方公里年发电量x千瓦。
// 我们希望能够找到其中集中的矩形区域建设电站，能够获得良好的收益。

// 输入描述
// 第一行输入为调研的地区长，宽，以及准备建设的电站【长宽相等，为正方形】的边长最低要求的发电量
// 之后每行为调研区域每平方公里的发电量

// 输出描述
// 输出为这样的区域有多少个
// 就是移动窗口求和，然后求最值主要是窗口的构造需要理解
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const inputs = []
// rl.on('line', (line)=>{
//     inputs.push(line)
// }).on('end', ()=>{
//     const [length, width, stationSide, minPower] = inputs[0].split(" ").map(Number)
//     const matrix = inputs.slice(1).map(res=>res.split(" ").map(Number))
//     let count = 0
//     for(let i = stationSide;i<=length;i++){
//         for(let j=stationSide;j<=width;j++) {
//              let square = 0;
//             for (let x=i-stationSide;x<i;x++) {
//                 for (let y = j - stationSide; y < j; y++) {
//                     square += matrix[x][y]
//                 }
//             }
//             if (square>=minPower) {
//                 count++
//             }
//         }
//     }
 
//     console.log(count)
// })
// 题目描述
// 对于一个连续正整数组成的序列，可以将其拼接成一个字符串，再将字符串里的部分字符打乱顺序。如序列8 9 10 11 12，拼接成的字符串为89101112，打乱一部分字符后得到90811211，原来的正整数10就被拆成了0和1。

// 现给定一个按如上规则得到的打乱字符的字符串，请将其还原成连续正整数序列，并输出序列中最小的数字。

// 输入描述
// 输入一行，为打乱字符的字符串和正整数序列的长度，两者间用空格分隔，字符串长度不超过200，正整数不超过1000，保证输入可以还原成唯一序列。

// 输出描述-发现很多简单题是暴力解法
// 输出一个数字，为序列中最小的数字
// 暴力解法：从1开始的子序列，长度为k
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     ouput: process.stdout
// })
// rl.on('line',(line)=> {
//     let [s, k]=[...line.split(' ')]
//     k = parseInt(k)
//     // 记录字符出现的次数
//     const base = new Map()
//     for (let c of s) {
//         base.set(c, (base.get(c) || 0)+1)
//     }
//    // 初始化滑动窗口的起始位置
//    let i = 1;
//    while(i<=1000-k+1) {
//     // 创建一个map
//     const count =new Map()
//     // / 遍历滑动窗口内的正整数
//     for (let j =i;j< i+k;j++) {
//         // 
//         const num = String(j)
//         for (const c of num) {
//             // 将字符及其数量存入Map
//            count.set(c, (count.get(c) || 0) + 1);
//         }
//     }
//     // 初始化一个布尔变量，用于判断滑动窗口内各字符数量是否与打乱字符的字符串中各字符数量一致
//     let isMatch = true;
//     for (const c of base.keys()) {
//         // 如果滑动窗口内的字符数量与打乱字符的字符串中的字符数量不一致，将isMatch设为false并跳出循环
//         if(!count.has(c) || count.get(c) - base.get(c) !== 0) {
//             isMatch = false
//             break;
//         }
//     }
//     if (isMatch) {
//         console.log(i)
//         return 
//     }
//     // 更新起位置
//      i++
//    }
// })

//给出3组点坐标(x, y, w, h)，-1000<x,y<1000，w,h为正整数。

// (x, y, w, h)表示平面直角坐标系中的一个矩形：

// x, y为矩形左上角坐标点，w, h向右w，向下h。

// (x, y, w, h)表示x轴(x, x+w)和y轴(y, y-h)围成的矩形区域；

// (0, 0, 2, 2)表示 x轴(0, 2)和y 轴(0, -2)围成的矩形区域；

// (3, 5, 4, 6)表示x轴(3, 7)和y轴(5, -1)围成的矩形区域；

// 求3组坐标构成的矩形区域重合部分的面积。

// 输入描述
// 3行输入分别为3个矩形的位置，分别代表“左上角x坐标”，“左上角y坐标”，“矩形宽”，“矩形高” -1000 <= x,y < 1000

// 输出描述
// 输出3个矩形相交的面积，不相交的输出0。
// 还是暴力解法，考察的是基础代码能力，能够把代码写出来就行

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     ouput: process.stdout
// })
// var x_coords = []; // 用于存储所有矩形的x坐标
// var y_coords = []; // 用于存储所有矩形的y坐标
// var rectangles = []; // 用于存储每个矩形的左上角和右下角坐标
// rl.on('line',(line)=> {
//      // 将输入的每一行按空格分割，并将其转换为数字数组
//   var inputs = line.split(' ').map(Number);
//   var x1 = inputs[0]; // 矩形左上角的x坐标
//   var y1 = inputs[1]; // 矩形左上角的y坐标
//   var w = inputs[2];  // 矩形的宽度
//   var h = inputs[3];  // 矩形的高度

//   var x2 = x1 + w;  // 计算矩形右下角的x坐标
//   var y2 = y1 - h;  // 计算矩形右下角的y坐标

//   // 将矩形的x坐标加入x_coords数组
//   x_coords.push(x1, x2);
//   // 将矩形的y坐标加入y_coords数组
//   y_coords.push(y1, y2);
//   // 将矩形的完整坐标（左上角和右下角）存入rectangles数组
//   rectangles.push([x1,y1,x2,y2]);

//   // 当已经读取到三个矩形时，结束输入
//   if(rectangles.length === 3){
//     rl.close(); // 关闭输入流
//   }
// })
// rl.on('end', ()=>{
//   // 取最值
//   const min_x_coord = Math.min(...[x_coords])
//   var max_x_coord = Math.max(...x_coords);
//   // 计算所有矩形的y坐标中的最小值和最大值
//   var min_y_coord = Math.min(...y_coords);
//   var max_y_coord = Math.max(...y_coords);
//   // 整体右移到右坐标轴
//   var x_offset = 0-min_x_coord
//   var y_offset = 0-max_y_coord
//    // 创建一个二维数组 intersection_area，表示整个区域
//   var intersection_area = new Array(Math.abs(max_x_coord - min_x_coord))
//   .fill(0)
//   .map(() => new Array(Math.abs(max_y_coord - min_y_coord)).fill(0));

//   // 遍历矩形
//   for(let i = 0;i<rectangles.length;i++) {
//      var x1 = rectangles[i][0]; // 矩形左上角的x坐标
//     var y1 = rectangles[i][1]; // 矩形左上角的y坐标
//     var x2 = rectangles[i][2]; // 矩形右下角的x坐标
//     var y2 = rectangles[i][3]; // 矩形右下角的y坐标
//     // 遍历矩形的x坐标范围，填充到二维数组中
//     for(var j = Math.min(x2, x1) + x_offset; j < Math.max(x2, x1) + x_offset; j++){
//       // 遍历矩形的y坐标范围，填充到二维数组中
//       for(var k = Math.min(y2, y1) + y_offset; k < Math.max(y2, y1) + y_offset; k++){
//         intersection_area[j][k]++; // 对应的二维数组位置计数加1，表示该区域被覆盖
//       }
//     }
//   }
//   // 
//   var ret = 0; // 用于存储同时被三个矩形覆盖的区域的数量

//    for(var i = 0; i < intersection_area.length; i++){
//     for(var j = 0; j < intersection_area[0].length; j++){
//       if (intersection_area[i][j] === 3) ret++
//     }
//    }
//   console.log(ret)
// })
// 让我们来模拟一个消息队列的运作，有一个发布者和若干消费者，发布者会在给定的时刻向消息队列发送消息，若此时消息队列有消费者订阅，这个消息会被发送到订阅的消费者中优先级最高（输入中消费者按优先级升序排列）的一个； 若此时没有订阅的消费者，该消息被消息队列丢弃。 消费者则会在给定的时刻订阅消息队列或取消订阅。当消息发送和订阅发生在同一时刻时，先处理订阅操作，即同一时刻订阅的消费者成为消息发送的候选。 当消息发送和取消订阅发生在同一时刻时，先处理取消订阅操作，即消息不会被发送到同一时刻取消订阅的消费者。

// 输入描述
// 输入为两行。

// 第一行为2N个正整数，代表发布者发送的N个消息的时刻和内容（为方便解折，消息内容也用正整数表示）。第一个数字是第一个消息的发送时刻，第二个数字是第一个消息的内容，以此类推。用例保证发送时刻不会重复，但注意消息并没有按照发送时刻排列。

// 第二行为2M个正整数，代表M个消费者订阅和取消订阅的时刻。第一个数字是第一个消费者订阅的时刻，第二个数字是第一个消费者取消订阅的时刻，以此类推。用例保证每个消费者的取消订阅时刻大于订阅时刻，消费者按优先级升序排列。

// 两行的数字都由空格分隔。N不超过100，M不超过10，每行的长度不超过1000字符

// 输出描述
// 输出为M行，依次为M个消费者收到的消息内容，消息内容按收到的顺序排列，且由空格分隔；

// 若某个消费者没有收到任何消息，则对应的行输出-1
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// // 直接参考题意解答即可
// // 也是暴力
// // 用于存储所有输入数据
// // 思路
// const inputs = [];
// rl.on('line',(line)=>{
//     inputs.push(line);  // 将每行输入数据存储到数组中
//     // 当接收到两行输入数据后，处理消息和订阅数据
//     if (inputs.length === 2) {
//         const msgArray = inputs[0].split(" ").map(Number);  // 消息数组（时间和内容）
//         const subArray = inputs[1].split(" ").map(Number);  // 订阅者数组（订阅和退订时间）
//         processQueue(msgArray, subArray);  // 处理消息分发
//     }
// })
// function processQueue(msgArray, subArray) {
//     const messageQueue = []
//     // 消息和消息发送时间整理
//     for (let i = 0;i<msgArray.length;i+=2) {
//         messageQueue.push([msgArray[i], msgArray[i+1]])
//     }
//     // 创建存储订阅者队列的数组，每个订阅者是一个包含订阅时间和退订时间的数组
//     const subscriptionQueue = [];
//     for (let j = 0; j < subArray.length; j += 2) {
//         subscriptionQueue.push([subArray[j], subArray[j + 1]]);
//     }
//     // 排序,升序
//     messageQueue.sort((a, b)=>a[0]-b[0])
//     // 创建消息结果数组
//     // 为每个订阅者创建一个空数组，用于存储该订阅者接收到的消息
//    const receivedMessages = new Array(subscriptionQueue.length).fill(0).map(()=>[])
//    // 放消息内容 两层for循环
//    for (let i=0;i<messageQueue.length;i++) {
//      for (let j=subscriptionQueue.length-1;j>=0;j--) {
//         if (subscriptionQueue[i][0]<=messageQueue[i][0] && messageQueue[0]<subscriptionQueue[i][1])
//         receivedMessages[j].push(messageQueue[i][1])
//         break;
//      }
//    }

//    // 输出消息内容
//    receivedMessages.forEach(res=>{
//     if (res.length===0) console.log("-1")
//     console.log(res.join(" "))
//    })

// }

// 主管期望你来实现英文输入法单词联想功能。
// 需求如下：

// 依据用户输入的单词前缀，从已输入的英文语句中联想出用户想输入的单词，按字典序输出联想到的单词序列，
// 如果联想不到，请输出用户输入的单词前缀。
// 注意：

// 英文单词联想时，区分大小写
// 缩略形式如”don’t”，判定为两个单词，”don”和”t”
// 输出的单词序列，不能有重复单词，且只能是英文单词，不能有标点符号
// 输入描述
// 输入为两行。

// 首行输入一段由英文单词word和标点符号组成的语句str；

// 接下来一行为一个英文单词前缀pre。

// 0 < word.length() <= 20
// 0 < str.length <= 10000
// 0 < pre <= 20
// 输出描述
// 输出符合要求的单词序列或单词前缀，存在多个时，单词之间以单个空格分割
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on('line',(sencetence)=> {
//     rl.on('line',(prefix)=>{
//         // ^：在方括号内表示“非”。\w是字母，\s是空白字符 转换为空格，正则匹配
//         sencetence = sencetence.replace(/[^\w\s]/g, " ")
//         const wordset = new Set(sencetence.split(" ")) // 存储单词的集合，自动去重且按照字典序排序 set考查
//         // sort函数不传，会按照会把元素当作字符串，按Unicode码点排序。
//         let ans = '';
//         for(let word of Array.from(wordset).sort()) {
//             if (word.startsWith(prefix)) ans+= word + ' ' // 字符串函数
//         }
//         if (ans) {
//             console.log(ans)
//         } else {
//             console.log(prefix)
//         }
//         rl.close();
//     })
// })
// 记账本上记录了若干条多国货币金额，需要转换成人民币分（fen），汇总后输出。
// 每行记录一条金额，金额带有货币单位，格式为数字+单位，可能是单独元，或者单独分，或者元与分的组合。
// 要求将这些货币全部换算成人民币分（fen）后进行汇总，汇总结果仅保留整数，小数部分舍弃。
// 元和分的换算关系都是1:100，如下：

// 1CNY=100fen（1元=100分）
// 1HKD=100cents（1港元=100港分）
// 1JPY=100sen（1日元=100仙）
// 1EUR=100eurocents（1欧元=100欧分）
// 1GBP=100pence（1英镑=100便士）
// 汇率表如下：

// 即：100CNY = 1825JPY = 123HKD = 14EUR = 12GBP
// 输入描述
// 第一行输入为N，N表示记录数。0<N<100

// 之后N行，每行表示一条货币记录，且该行只会是一种货币。

// 输出描述
// 将每行货币转换成人民币分（fen）后汇总求和，只保留整数部分。
// 输出格式只有整数数字，不带小数，不带单位。
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdin
// })
// let input = [];
// function exchange (unit) {
//     switch (unit) {
//         case 'CNY':
//             return 100.0; // 人民币
//         case 'JPY':
//             return 100.0 / 1825 * 100; // 日元
//         case 'HKD':
//             return 100.0 / 123 * 100; // 港元
//         case 'EUR':
//             return 100.0 / 14 * 100; // 欧元
//         case 'GBP':
//             return 100.0 / 12 * 100; // 英镑
//         case 'fen':
//             return 1.0; // 人民币分
//         case 'cents':
//             return 100.0 / 123; // 港元分
//         case 'sen':
//             return 100.0 / 1825; // 日元分
//         case 'eurocents':
//             return 100.0 / 14; // 欧元分
//         case 'pence':
//             return 100.0 / 12; // 英镑分
//         default:
//             return 0.0; // 无效单位返回0
//     }
// }

// rl.on('line', (line)=> {
//     line.push(line)
// }).on('end', ()=>{
//      const n = parseInt(input[0]); // 读取记录数
//      let totalFen = 0
//      for(let i =1;i<=n;i++) {
//         const record = input[i];
//         let amount = 0; // 用于保存金额
//         let unit = ''; // 保存单位
//         for(let j = 0; j < record.length; j++) {
//             const c = record[j]
//             if (/\d/.test(c)) {
//                 amount = amount * 10 + parseInt(c)
//             } else {
//                 unit += c
//             }
//             if (j === record.length- 1 || /\d/.test(record[j+1]) && unit.length > 0) {
//                 totalFen = amount*exchange(unit)
//                 amount  = 0
//                 unit= ""
//             }
//         }
        
//      }
//      // 输出汇总结果，只保留整数部分
//      console.log(Math.floor(totalFen));
// })
// 题目描述
// 给定一个 m x n 的矩阵，由若干字符 ‘X’ 和 ‘O’构成，’X’表示该处已被占据，’O’表示该处空闲，请找到最大的单入口空闲区域。

// 解释：

// 空闲区域是由连通的’O’组成的区域，位于边界的’O’可以构成入口，

// 单入口空闲区域即有且只有一个位于边界的’O’作为入口的由连通的’O’组成的区域。
// 如果两个元素在水平或垂直方向相邻，则称它们是“连通”的。

// 输入描述
// 第一行输入为两个数字，第一个数字为行数m，第二个数字为列数n，两个数字以空格分隔，1<=m,n<=200。

// 剩余各行为矩阵各行元素，元素为‘X’或‘O’，各元素间以空格分隔。

// 输出描述
// 若有唯一符合要求的最大单入口空闲区域，输出三个数字

// 第一个数字为入口行坐标（0~m-1）
// 第二个数字为入口列坐标（0~n-1）
// 第三个数字为区域大小
// 三个数字以空格分隔；

// 若有多个符合要求，则输出区域大小最大的，若多个符合要求的单入口区域的区域大小相同，则此时只需要输出区域大小，不需要输出入口坐标。

// 若没有，输出NULL。
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const lines: string[] = [];
// let n: number, m: number;
// rl.on("line", (line: string) => {
//    lines.push(line);
//    if (lines.length === 1) {
//      [n ,m] = lines[0].split(" ").map(Number)
//    } 
//    if (n && lines.length === n +1) {
//      lines.shift()
//      const gird = lines.map(line=>line.split(' '))
//      console.log(getResult(gird, n, m)); 
//      lines.length = 0
//    }
// })
// // 开始遍历寻找
// function getResult (gird, n, m) {
//    const checked = new Set()
//    // 四个方向
//     const offset = [
//     [0, -1],
//     [0, 1],
//     [-1, 0],
//     [1, 0],
//   ];
//   // dfs
//   function dfs(i, j, count, out) {
//     const pos = `${i}-${j}`
//     // 终止条件
//     if (i < 0 ||
//       i >= n ||
//       j < 0 ||
//       j >= m ||
//       gird[i][j] === "X" ||
//       checked.has(pos)
//     ) {
//       return count
//     }
//     checked.add(pos);
//     if (i === 0 || i === n - 1 || j === 0 || j === m - 1) out.push([i, j]);
//     count++
//     // 回溯
//     for (let k = 0; k < offset.length; k++) {
//       const [offsetX, offsetY] = offset[k];
//       const newI = i + offsetX;
//       const newJ = j + offsetY;
//       count = dfs(newI, newJ, count, out);
//     }
//     return count;
//   }
//    const ans = [];
//    for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (gird[i][j] === "O" && !checked.has(`${i}-${j}`)) { // 没有统计过
//         const out = [];
//         const count = dfs(i, j, 0, out);
//         if (out.length === 1) { // out先收集上来，如果是多入口则不统计
//           ans.push([...out[0], count]);
//         }
//       }
//     }
//   }
//   if (!ans.length) return "NULL"
//   //按照2排序
//   ans.sort((a,b)=>b[2]- a[2])
//   if (ans.length === 1 || ans[0][2] > ans[1][2]) {
//     return ans[0].join('')
//   } else {
//     return ans[0][2] // 多个一样大小的区域，直接返回大小
//   }
// }
// 存在一个m×n的二维数组，其成员取值范围为0或1。

// 其中值为1的成员具备扩散性，每经过1S，将上下左右值为0的成员同化为1。

// 二维数组的成员初始值都为0，将第[i,j]和[k,l]两个个位置上元素修改成1后，求矩阵的所有元素变为1需要多长时间。

// 输入描述
// 输入数据中的前2个数字表示这是一个m×n的矩阵，m和n不会超过1024大小；

// 中间两个数字表示一个初始扩散点位置为i,j；

// 最后2个数字表示另一个扩散点位置为k,l。

// 输出描述
// 输出矩阵的所有元素变为1所需要秒数。
// 类似，图dfs
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   const [m, n, i, j, k, l] = line.split(",").map(Number);
//   console.log(getResult(m, n, i, j, k, l));
// });
// function getResult((m, n, i, j, k, l) {

//     // 上下左右偏移量
//   const offsets = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];
//   const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
//   matrix[i][j] = 1;
//   matrix[k][l] = 1;
//   // count记录未被扩散的点的数量
//   let count = m * n - 2;
//    // 步骤数
//    let day = 0 
//    // 个数
//   //  const count = 2 
//     // 多源BFS实现队列
//     //BFS 的重点在于队列，而DFS 的重点在于递归。这是它们的本质区别。 BFS适合用来搜索最短径路的解，DFS适合搜索全部的解 最短路径
//   let queue = [
//     [i, j],
//     [k, l],
//   ];
//    // 遍历
//    while(count>0 && queue.length>0) {
//      const newqueue = []
//      for(const [x, y] of queue ) {
//       for (let [offsetX, offsetY] of offsets) { // 这里不是递归，就是简单的循环，访问上下左右四个方向 就是1，2，1，2交替
//          const newX = x + offsetX;
//          const newY = y + offsetY;
//          if (
//           newX >= 0 &&
//           newX < m &&
//           newY >= 0 &&
//           newY < n &&
//           matrix[newX][newY] == 0
//         ) { 
//           matrix[newX][newY] == 1
//           count--
//           newqueue.push([newX,newY])
//         }
//       }
//      }
//      queue = newqueue
//      day++
//    }
//    return day
// }
// 题目描述
// 一个工厂有m条流水线，来并行完成n个独立的作业，该工厂设置了一个调度系统，在安排作业时，总是优先执行处理时间最短的作业。

// 现给定流水线个数m，需要完成的作业数n, 每个作业的处理时间分别为t1,t2…tn。请你编程计算处理完所有作业的耗时为多少？

// 当n>m时，首先处理时间短的m个作业进入流水线，其他的等待，当某个作业完成时，依次从剩余作业中取处理时间最短的进入处理。

// 输入描述
// 第一行为2个整数（采用空格分隔），分别表示流水线个数m和作业数n；

// 第二行输入n个整数（采用空格分隔），表示每个作业的处理时长t1,t2…tn。

// 0< m,n<100，0<t1,t2…tn<100。

// 注：保证输入都是合法的。

// 输出描述
// 输出处理完所有作业的总时长。

// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let inputs
// rl.on('line',(line=> {
//    lines.push(line)


//    console.log(reslut)
// }))
// function dowork (m, n, times) {
//   const map = new Map()
//   let index = 0
//   for(let i = 0;i<m++;i++){
//     map.set(i,[])
//   }
//   times.sort((a,b)=> {a-b})
//   let start = 0
//   while (start !== times.length) {
//     if (index === m) index = 0
//      map.set(index, [...map.has(index)].push(timeEnd(start)))
//      index++
//      start++
//   }
//  map.get(index)
//   return totaltime
// }
// 给定一个url前缀和url后缀,通过,分割 需要将其连接为一个完整的url

// 如果前缀结尾和后缀开头都没有/，需要自动补上/连接符
// 如果前缀结尾和后缀开头都为/，需要自动去重
// 约束：不用考虑前后缀URL不合法情况

// 输入描述
// url前缀(一个长度小于100的字符串)，url后缀(一个长度小于100的字符串)


// 输出描述
// 拼接后的url
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let inputs
// rl.on('line',(line=> {
//    lines.push(line)

// 直接两个字符串 ssplit(',')
// ['/11', 'ss']
// 匹配字母 
// 然后
// ['1',  'ss']
// "/" + a。join('/')
/* JavaScript Node ACM模式 控制台输入获取 */
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   let [prefix, suffix] = line.split(",");

  // prefix = prefix.replace(/\/+$/, "");
  // suffix = suffix.replace(/^\/+/, "");

//   console.log(prefix + "/" + suffix);
// });
// 二叉树也可以用数组来存储，给定一个数组，树的根节点的值存储在下标1，对于存储在下标N的节点，它的左子节点和右子节点分别存储在下标2*N和2*N+1，并且我们用值-1代表一个节点为空。

// 给定一个数组存储的二叉树，试求从根节点到最小的叶子节点的路径，路径由节点的值组成。

// 输入描述
// 输入一行为数组的内容，数组的每个元素都是正整数，元素间用空格分隔。

// 注意第一个元素即为根节点的值，即数组的第N个元素对应下标N，下标0在树的表示中没有使用，所以我们省略了。

// 输入的树最多为7层。

// 输出描述
// 输出从根节点到最小叶子节点的路径上，各个节点的值，由空格分隔，用例保证最小叶子节点只有一个。
// 找出最小值 使用dfs 或者从最小节点往上找一定是最小路径
/* JavaScript Node ACM模式 控制台输入获取 */
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   // 存储树
//   const arr = line.split(" ").map(Number);
//   ///
//     let n = arr.length - 1;
//   // 最小叶子节点的值
//   let min = Infinity;
//   let minIdx = -1;
//   // 倒着找最小叶子节点
//   for(let i = n; i >= 0; i--) {
//         if (arr[i] != -1) {
//       if (i * 2 + 1 <= n && arr[i * 2 + 1] != -1) continue;
//       if (i * 2 + 2 <= n && arr[i * 2 + 2] != -1) continue;

//       if (min > arr[i]) {
//         min = arr[i];
//         minIdx = i;
//       }
//     }
//   }
//   // 开始从最小节点找path
//     // path用于缓存最小叶子节点到根的路径
//   const path = [];
//   path.unshift(min);
//   while(minIdx!==0) {
//     let f = Math.floor((minIdx - 1) / 2);
//     path.unshift(arr[f]);
//     minIdx = f;
//   }

//   console.log(path.join(" "));
// })
// 题目描述
// 给定一个整型数组，请从该数组中选择3个元素组成最小数字并输出

// （如果数组长度小于3，则选择数组中所有元素来组成最小数字）。

// 输入描述
// 一行用半角逗号分割的字符串记录的整型数组，0 < 数组长度 <= 100，0 < 整数的取值范围 <= 10000。

// 输出描述
// 由3个元素组成的最小数字，如果数组长度小于3，则选择数组中所有元素来组成最小数字。
// 暴力解法会超时回溯估计也会超时
// 排序取前三名，然后再sort排序按照字母ascill排序

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   const strs = line.split(",");
//   console.log(getResult(strs));
// });

// function getResult(strs) {
//   strs.sort((a, b) => a - b); // 先升序排列

//   return strs
//     .slice(0, 3)
//     .sort((a, b) => {
//       const s1 = a+ b;
//       const s2 = b + a;
//       return s1 == s2 ? 0 : s1 > s2 ? 1 : -1;
//     })
//     .join("");
// }

// 部门准备举办一场王者荣耀表演赛，有 10 名游戏爱好者参与，分为两队，每队 5 人。

// 每位参与者都有一个评分，代表着他的游戏水平。为了表演赛尽可能精彩，我们需要把 10 名参赛者分为示例尽量相近的两队。

// 一队的实力可以表示为这一队 5 名队员的评分总和。

// 现在给你 10 名参与者的游戏水平评分，请你根据上述要求分队，最后输出这两组的实力差绝对值。

// 例：10 名参赛者的评分分别为：5 1 8 3 4 6 7 10 9 2，分组为（1 3 5 8 10）和（2 4 6 7 9），两组实力差最小，差值为1。有多种分法，但是实力差的绝对值最小为1。

// 输入描述
// 10个整数，表示10名参与者的游戏水平评分。范围在 [1, 10000] 之间。

// 输出描述
// 1个整数，表示分组后两组实力差绝对值的最小值。
// const readline = require('readline')
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// })
// // 感觉是分治算法双指针，然后一个在头一个在尾吧，然后一个一个分
// rl.on('line',(line)=> {
//    const arrya = line.split(" ").map(Number)
//    arrya.sort((a,b)=>a-b);
//    // dfs求10选5的去重组合，并将组合之和记录进res中，即res中记录的是所有可能性的5人小队实力值之和
//   dfs(arr, 0, 0, 0, res);

//    const sum = arr.reduce((p, c) => p + c)
//    const ans = res
//     .map((subSum) => Math.abs(sum - 2 * subSum))
//     .sort((a, b) => a - b)[0];

//   console.log(ans);
//   //  let start = 0
//   //  let end  = arrya.length-1
//   //  let suma = 0
//   //  let sumb = 0
//   //  while(start<=end) {
//   //   if (start % 2  === 0) {
//   //    suma + = arrya[start] // a
//   //   } else {
//   //    sumb += arrya[start] // b
//   //   }
//   //   if (end % 2  === 0) {
//   //    suma + = arrya[start] // a
//   //   } else {
//   //    sumb += arrya[start] // b
//   //   }
//   //    start++
//   //    end--
//   //  }
//   //  console.log(Math.abs(suma - sumb))
// })

// function dsn(arr, index, level, sum, res) {
//     if (level === 5) {
//     return res.push(sum);
//   }
//   for (let i = index; i < 10; i++) {
//     if (i>index && arr[i] === arr[i-1]) continue; // arr已经升序，这里进行树层去重
//     dfs(arr, i + 1, level + 1, sum + arr[i], res);
//   }

// }
// 题目描述
// 给定一组数字，表示扑克牌的牌面数字，忽略扑克牌的花色，请按如下规则对这一组扑克牌进行整理：

// 步骤1. 对扑克牌进行分组，形成组合牌，规则如下：

// 当牌面数字相同张数大于等于4时，组合牌为“炸弹”；
// 3张相同牌面数字 + 2张相同牌面数字，且3张牌与2张牌不相同时，组合牌为“葫芦”；
// 3张相同牌面数字，组合牌为“三张”；
// 2张相同牌面数字，组合牌为“对子”；
// 剩余没有相同的牌，则为“单张”；
// 步骤2. 对上述组合牌进行由大到小排列，规则如下：

// 不同类型组合牌之间由大到小排列规则：“炸弹” > “葫芦” > “三张” > “对子” > “单张”；
// 相同类型组合牌之间，除“葫芦”外，按组合牌全部牌面数字加总由大到小排列；
// “葫芦”则先按3张相同牌面数字加总由大到小排列，3张相同牌面数字加总相同时，再按另外2张牌面数字加总由大到小排列；
// 由于“葫芦”>“三张”，因此如果能形成更大的组合牌，也可以将“三张”拆分为2张和1张，其中的2张可以和其它“三张”重新组合成“葫芦”，剩下的1张为“单张”
// 步骤3. 当存在多个可能组合方案时，按如下规则排序取最大的一个组合方案：

// 依次对组合方案中的组合牌进行大小比较，规则同上；
// 当组合方案A中的第n个组合牌大于组合方案B中的第n个组合牌时，组合方案A大于组合方案B；
// 输入描述
// 第一行为空格分隔的N个正整数，每个整数取值范围[1,13]，N的取值范围[1,1000]

// 输出描述
// 经重新排列后的扑克牌数字列表，每个数字以空格分隔
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   const arr = line.split(" ").map(Number);
//   console.log(getResult(arr));
// });
// function getResult(arr) {
//   const card = {};
//   // 统计各个牌面的数量
//     for (let num of arr) {
//     card[num] ? card[num]++ : (card[num] = 1);
//   }
//   // 统计组合，4代表炸弹，3+2代表葫芦，3代表三张，2代表对子，1代表单张
//   const combine = {
//     4: [],
//     "3+2": [],
//     3: [],
//     2: [],
//     1: [],
//   };
//   // 首先将初始组合统计出来
//   for (let num in card) {
//     switch (card[num]) {
//       case 3:
//         combine[3].push(num - 0);
//         break;
//       case 2:
//         combine[2].push(num - 0);
//         break;
//       case 1:
//         combine[1].push(num - 0);
//         break;
//       default:
//         combine[4].push([num - 0, card[num]]); // 由于炸弹可能有4张以上相同牌面组成，因此既需要统计牌面num，也需要统计牌数card[num]
//     }
//   }
//   // 炸弹排序
//     // 炸弹排序，排树越多越大
//   combine[4].sort((a, b) => (a[1] !== b[1] ? b[1] - a[1] : b[0] - a[0]));
//     // 三张排序，牌面值越大，三张越大
//   combine[3].sort((a, b) => b - a);
//   //   // 对子降序，牌面值越大，对子越大
//   combine[2].sort((a, b) => b - a);
//   // 尝试组合出葫芦
//   while(combine[3].length) {
//     if (combine[2].length === 0 && combine[3].length ===1) break;
//     // 选取一个最大的三张
//     const san_top = combine[3].shift();
//     // 对子排面
//     let tmp; 
//     // 组合出一个葫芦
//     if (combine[2].length === 0 || combine[3][0] > combine[2][0]) {
//        tmp = combine[3].shift();
//        combine[1].push(tmp)
//     } else {
//       tmp  = combine[2].shift()
//     }
//     combine["3+2"].push([san_top, tmp])
//   }
//   // 处理完葫芦后，就可以对单张进行降序了（因为组合葫芦的过程中，可能产生新的单张，因此单张排序要在葫芦组合得到后进行）
//   combine[1].sort((a, b) => b - a);
//    // ans存放题解
//   const ans = [];
//     // 首先将炸弹放到ans中
//   for (let card of combine[4]) {
//     const [score, count] = card;
//     ans.push(...new Array(count).fill(score));
//   }
//     // 然后将葫芦放大ans中
//   for (let card of combine["3+2"]) {
//     const [san, er] = card;
//     ans.push(...new Array(3).fill(san), ...new Array(2).fill(er));
//   }
//     // 之后将三张放到ans中
//   for (let san of combine[3]) {
//     ans.push(...new Array(3).fill(san));
//   }  // 接着是对子放到ans中
//   for (let er of combine[2]) {
//     ans.push(...new Array(2).fill(er));
//   }

//   // 最后是单张放到ans中
//   ans.push(...combine[1]);
//   return ans.join(" ");
// // }
// 给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母；反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换

// 输入描述
// 输入为两行，第一行为参数K，第二行为字符串S

// 输出描述
// 输出转换后的字符串
