export default function Algorithms() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">算法学习</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li className="flex items-start gap-2">
          <div className="shrink-0">1.</div>
          <div className="flex-1">
            <p className="font-medium">排序算法</p>
            <p className="text-sm text-gray-600">排序算法用于对数据进行排序，例如冒泡排序、快速排序等。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`}
        </pre>
      </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">2.</div>
          <div className="flex-1">
            <p className="font-medium">搜索算法</p>
            <p className="text-sm text-gray-600">搜索算法用于在数据中查找特定元素，例如二分查找。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
  return -1;
}`}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">3.</div>
          <div className="flex-1">
            <p className="font-medium">动态规划</p>
            <p className="text-sm text-gray-600">动态规划是一种优化算法，用于解决具有重叠子问题的复杂问题。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`function fibonacci(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`}
            </pre>
            <p className="text-sm text-gray-600">给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。你可以对一个单词进行如下三种操作：插入一个字符、删除一个字符、替换一个字符
            </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`
              const minDistance = (word1, word2) => {
    // dp定义
    const dp = Array.from(Array(word1.length + 1), ()=> Array(word2.length + 1).fill(0))
    // dp初始化
    for (let i = 1;i<=word1.length;i++) {
        dp[i][0] = i
    }
        for (let j = 1; j<=word2.length;j++) {
        dp[0][j] = j
    }
    // 递推公式
    for (let i=1;i<=word1.length;i++) {
      for(let j=1;j<=word2.length;j++){
        if (word1[i-1] === word2[j-1]) {
            dp[i][j] = dp[i-1][j-1]
        } else {
           dp[i][j] = Math.min(dp[i-1][j-1]+1, dp[i][j-1]+1, dp[i-1][j]+1)
        }
      }
    }
    return dp[word1.length][word2.length];
};
              `}
            </pre>
            <p className="text-sm text-gray-600">给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
        ];
    }
    return dp[len - 1][1];
};`}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">4.</div>
          <div className="flex-1">
            <p className="font-medium">数组</p>
            <p className="text-sm text-gray-600">数组类问题常见于一些交集、并集问题。</p>
            <p className="text-sm text-gray-600">给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。你可以按任意顺序返回答案。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`
              /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //  过滤&排序
    // const newNums = nums.filter(res=> res<=target)
    let aindex = [0, 1];
     nums.some((res, index)=>{
    //    if (Math.abs(res) <= Math.abs(target)) {
        const  oindex = nums.findIndex(res2=> res2 === target  - res)
        if (oindex !== -1 && oindex !== index ) {
        aindex = [index, oindex]
        return true
        }
	// }
	return false
    })
    return aindex
};
              `}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">5.</div>
          <div className="flex-1">
            <p className="font-medium">树</p>
            <p className="text-sm text-gray-600">解决一下二叉树的常见问题。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
            {`// 前序遍历
export const preOrderTraversal = (root: any) => {
    if (!root) return;
    console.log(root.val); // 访问根节点
    preOrderTraversal(root.left); // 访问左子树
    preOrderTraversal(root.right); // 访问右子树
}
// 中序遍历
export const inOrderTraversal = (root: any) => {
    if (!root) return;
    inOrderTraversal(root.left); // 访问左子树
    console.log(root.val); // 访问根节点
    inOrderTraversal(root.right); // 访问右子树
}
// 后序遍历
export const postOrderTraversal = (root: any) => {
    if (!root) return;
    postOrderTraversal(root.left); // 访问左子树
    postOrderTraversal(root.right); // 访问右子树
    console.log(root.val); // 访问根节点
}
// 广度遍历
export const leverOrderTraversal = (root: any) => {
    if (!root) return;
    const queue = [root];
    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node.val); // 打印根节点
        if (node.left) queue.push(node.left); // 移入左子树
        if (node.right) queue.push(node.right); // 移入右子树
    }
}`}
            </pre>
            <p className="text-sm text-gray-600">给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`export const isValidBST = function(root: object): boolean {
    // 定义一个辅助函数，使用中序遍历
    const helper = (node: any, lower: number | null, upper: number | null): boolean => {
        if (!node) return true; // 空节点是有效的

        const val = node.val;

        // 检查当前节点值是否在有效范围内
        if ((lower !== null && val <= lower) || (upper !== null && val >= upper)) {
            return false;
        }

        // 递归检查右子树，更新下界
        if (!helper(node.right, val, upper)) {
            return false;
        }

        // 递归检查左子树，更新上界
        if (!helper(node.left, lower, val)) {
            return false;
        }

        return true;
    };

    return helper(root, null, null); // 初始范围为无限制
};`}
            </pre>
          </div>
        </li>
      </ol>
    </div>
  );
}
