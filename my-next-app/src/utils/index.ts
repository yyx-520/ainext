/**
import { maxProfit } from './index';
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices:  number[]) {
    // let maxProfit = 0;
    // let minPrice = prices[0];
    // 暴力解法
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         const profit = prices[j] - prices[i];
    //         if (profit > maxProfit) {
    //             maxProfit = profit;
    //         }
    //     }
    // }
    // 贪心算法
    // for (let i = 1; i < prices.length; i++) {
    //     if (prices[i] < minPrice) { // 前面最便宜的买入
    //         minPrice = prices[i];
    //     }
    //     const profit = prices[i] - minPrice;
    //     if (profit > maxProfit) { // 后面最贵的卖出
    //         maxProfit = profit;
    //     }
    // }
    // 动态规划
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
    // return maxProfit
};



// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
 

// 示例 1：


// 输入：root = [2,1,3]
// 输出：true
// 示例 2：


// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 

// 提示：

// 树中节点数目范围在[1, 104] 内
// -231 <= Node.val <= 231 - 1

// 深度遍历，分为前序遍历、中序遍历、后序遍历
// 前序遍历
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
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = function(root: object): boolean {
    // 定义一个辅助函数，使用中序遍历
    const helper = (node: any, lower: number | null, upper: number | null): boolean => {
        if (!node) return true;
        // 不能小于最小值，不能大于最大值
        if ((lower !== null && node.val <= lower) || (upper !== null && node.val >= upper)) {
            return false;
        }
    //  // 检查左边的，左边的最小值是lower，最大值是当前的val递归遍历左右子树
        if (!helper(node.left, lower, node.val)) {
            return false;
        }
        // 检查右边的，左边的最小值是node.val，最大值是upper
        if (!helper(node.right, node.val, upper)) {
            return false;
        }
        return true;
    };

    return helper(root, null, null); // 初始范围为无限制
};

// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
 

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export  const searchRange = function(nums, target) {
    
};

// 定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]
 

// 提示:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// 输入
// nums =
// [0,0,1]

// 添加到测试用例
// 输出
// [0,1,0]
// 预期结果
// [1,0,0]
 

// 进阶：你能尽量减少完成的操作次数吗？
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = function(nums) {
    // 双指针方法
    //     let nonZeroIndex = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
    //         nonZeroIndex++;
    //     }
    // }
    let count = nums.length;
    let index = 0;
    while(count > 0) {
        const element = nums[index];
        if (element === 0) {
            nums.splice(index, 1);
            nums.push(element);
        } else {
            index++;
        }
        count--;
    }
    // nums.forEach((element, index) => {
    //     if (element === 0) {
    //         nums.splice(index, 1);
    //         nums.push(element);
    //     }
    // });
};

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

 

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2
 

// 提示：

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraySum = function(nums, k) {
    // 使用前缀和哈希来解决
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // 默认值必须带上
    for (let i = 0;i<nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, map.get(sum) + 1 || 1);
    }
    return count;
};

// 防抖
export const debounce = (fn: Function, delay: number) => {
    // let timer: number | null = null;
    // return function (...args: any[]) {
    //     if (timer) {
    //         clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //         fn.apply(this, args);
    //     }, delay);
    // };
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
};

// 节流
export const throttle = (fn: Function, delay: number) => {
    // let lastTime = 0;
    // return function (...args: any[]) {
    //     const now = Date.now();
    //     if (now - lastTime >= delay) {
    //         fn.apply(this, args);
    //         lastTime = now;
    //     }
    // };
    let lasttimer = 0
    return function (...args) {
        const now = Date.now()
        if (now - lasttimer >= delay) {
            fn.apply(this, args)
            lasttimer = now
        }
    }
};