// 基础数据结构
// 数组：栈（单调）、队列、堆
// 对象：哈希、链表
// 字符串

// 逻辑思维
// 二叉树 、动态规划、图

// 套路算法
// 快排、贪心、分治、回溯、双指针（用的较多）、滑动窗口、二分查找、位运算



// 动态规划
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

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶
 

// 提示：

// 1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};


// 树

// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：3
// 示例 2：

// 输入：root = [1,null,2]
// 输出：2
 

// 提示：

// 树中节点的数量在 [0, 104] 区间内。
// -100 <= Node.val <= 100
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
 * @return {number}
 */
export const maxDepth = function(root: any) {
    let length = 0;
    // dfs，前序遍历
    const helper = (node: any, depth: number) => {
        if (!node) return
        length = Math.max(length, depth);
        helper(node.left, depth + 1);
        helper(node.right, depth + 1);
    }
    helper(root, 1);
    return length;
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

// 数组

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

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
 

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = function(nums) {
    const result: number[][] = [];
    const backtrack = (path: number[], used: boolean[]) => {
        if (path.length === nums.length) {
            result.push([...path]); // 添加当前路径到结果
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // 跳过已使用的数字
            path.push(nums[i]); // 添加当前数字到路径
            used[i] = true; // 标记当前数字为已使用
            backtrack(path, used); // 递归处理剩余数字
            path.pop(); // 回溯，移除当前数字
            used[i] = false; // 取消标记
        }
    };
    backtrack([], new Array(nums.length).fill(false)); // 初始化路径和使用标记
    return result;
};

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]输出

// [[1,2,3],[2,1,3],[3,2,1],[1,3,2]]
// 预期结果
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 双指针
// 有序数组的平方安装升序排列
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortedSquares = function(nums) {
    let result = Array.from(nums.length).fill(0)
    let k = nums.length - 1
    for(let i = 0,j=nums.length-1;i<=j;) {
        if (nums[i]*nums[i] > nums[j]*nums[j]) {
            result[k--] = nums[i]*nums[i]
            i++;
        } else {
            result[k--] = nums[j]*nums[j]
            j--;
        }
    } 
    return result
};

// 滑动窗口：如何移动起始位置
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = function(target, nums) {
    let result = Infinity
    let subl = 0
    let start = 0
    let end = 0
    for(end;end<nums.length;end++) {
        subl += nums[end]
        while(subl>=target) {
           result = Math.min(result, end-start+1)
           subl = subl - nums[start]
           start++;
        } 
    }
     return result === Infinity ? 0 : result;
};

