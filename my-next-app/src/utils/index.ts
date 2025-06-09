// 基础数据结构
// 数组：栈（单调）、队列、堆（一个完全二叉树）
// 对象：哈希、链表
// 字符串

// 逻辑思维
// 二叉树 、动态规划、图

// 套路算法
// 快排、贪心、分治、回溯、双指针（用的较多）、滑动窗口、二分查找、位运算

// 算法场景归类
// ===================

// 1. 基础数据结构
// - 数组：适用于顺序存储、查找、排序、滑动窗口、双指针等问题
// - 栈：括号匹配、逆波兰表达式、单调栈（如每日温度、下一个更大元素）
// - 队列：广度优先搜索（BFS）、滑动窗口最大值
// - 堆：优先队列、Top K 问题、合并有序列表
// - 链表：LRU缓存、链表反转、合并链表、环检测
// - 哈希表：去重、计数、快速查找、字母异位词分组
// - 字符串：子串查找、回文串、字符串匹配、分割

// 2. 逻辑思维/模型
// - 二叉树：树的遍历、最大深度、判断二叉搜索树、路径和、最近公共祖先
// - 图：最短路径、连通分量、岛屿数量、拓扑排序
// - 动态规划：爬楼梯、背包问题、最大子数组和、股票买卖、最小路径和

// 3. 套路算法
// - 快排/归并/堆排：排序、Top K 问题
// - 贪心：区间覆盖、跳跃游戏、买卖股票
// - 分治：归并排序、快速排序、二分查找
// - 回溯：全排列、组合、子集、N皇后、数独
// - 双指针/滑动窗口：最长子串、最小覆盖子串、移动零、合并有序数组
// - 二分查找：有序数组查找、搜索区间、查找插入位置
// - 位运算：只出现一次的数字、位图、异或运算

// 4. 典型场景举例
// - 动态规划：状态转移、最优子结构（如爬楼梯、最大利润）
// - 树/图：层序遍历、深度优先、广度优先、连通性问题
// - 哈希：高效查找、分组、计数
// - 回溯：所有可能解、组合、排列、子集
// - 滑动窗口：连续区间、子数组和、最长无重复子串
// - 贪心：每步最优、区间调度、最小跳跃次数

// ===================



// 动态规划： 有规律推出下一个状态的情况
/**

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

// 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const result = Array(numRows)
    for(let i = 0;i<numRows;i++) {
        result[i] = Array(i+1)
        result[i][0] = result[i][i] = 1
        for (let j = 1;j<i;j++) { //里面拆分数组进行动态
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
    }
    return result
};

// 背包问题0-1 完全 滚动数组（上一层数据copy下来一份到）
// 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = (nums.reduce((p, v) => p + v));
    if (sum & 1) return false;
    const dp = Array(sum / 2 + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        for(let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    return dp[sum / 2] === sum / 2;
};
// 树
// 种类：满二叉树(每一层都是满节点，节点是2^h-1个)、完全二叉树（最后一层从左往右排序。不能断开）、二叉搜索树、平衡二叉搜索树（左子树和右子树的高度相差不超过1，map和set的底层数据结构）
// 存储方式：数组存储（左孩子：2*i+1，右孩子：2*i+2） 一般是链表
// 遍历：前序、中序、后序、深度遍历（DFS）、广度遍历（BFS） 一般用递归实现，也可以用迭代法例如用队列
// 二叉树的定义：多分支链表

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

// 方法论：遇到问题，问题抽象成模型（数据结构、分类），构造数据结构，用算法解决问题，优化
 

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
// 广度遍历，同一层级的一次性搞完，用队列实现
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

//树用js如何实现？
//对象类
// class TreeNode
// {
//     constructor(val)
//     {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// } // 创建树的根节点

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

// 用set求两个数组的交集
function intersection(arr1, arr2) { 
    const set1 = new Set(arr1); const result = []; 
    for (let i = 0; i < arr2.length; i++) { 
        if (set1.has(arr2[i])) { 
            result.push(arr2[i]); 
        } 
    } 
    return result; 
} 
    // Example usage: const arr1 = [1, 2, 3, 4, 5]; const arr2 = [2, 4, 6, 8]; console.log(intersection(arr1, arr2)); 
    // [2, 4]


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

// 模拟生态题：. 螺旋矩阵 II 循环不变量
/**
 * @param {number} n
 * @return {number[][]}
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
export const generateMatrix = function(n) {
    // let result = Array.from(n, ()=>Array(n).fill(0)
    const result = Array.from({length: n}, () => Array(n).fill(0));
    
    let startx = 0 // 开始旋转位置
    let starty = 0 // 开始旋转位置
    let offset = 1 // 边界
    let count = 1 // 要填的值
    let i = 0 // 要填值的下标
    let j = 0 // 要填值的下标
    let circle = Math.floor( n / 2 ) // 循环次数
    // 循环不变量
    while(circle) {
        // 第一条边
        for(j = starty;j< n-offset;j++) {
            result[startx][j] = count++
        }
        // 第二条边
        for(i = startx;i< n-offset;i++) {
             result[i][j] = count++
        }
        // 第三条边
        for(;j> starty;j--) {
            result[i][j] = count++
        }
         // 第四条边
        for(;i>startx;i--) {
            result[i][j] = count++
        }
        startx++
        starty++
        offset++
        circle--
    }
    // console.log(i, j, n % 2, startx, starty )
    if (n % 2) {
        result[startx][starty] = count
    }
    return result
}

// 手写一个快排 n*logn
export const quickSort = function(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0]; // 基准值
  const left = arr.slice(1).filter(x=>x< pivot);
  // 分割成小于基准值和大于等于基准值的两个数组
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 链表
// 移除节点
// 虚拟头节点方法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export const removeElements = function(head, val) {
        let dummynode = {
        val: 0,
        next: head
    }
    let current = dummynode
    while(current.next){
      if (current.next.val === val) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    return dummynode.next
};
// 设计一个链表
const MyLinkedList = function() {
    this.dummynode = {
        val: 0,
        next: null
    }
    this.creatNode = function (val) {
        return {
            val: val,
            next: null
        }
    }
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var current = this.dummynode.next
    while(index-- && current) {
        current = current.next
    }
    return current ? current.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var newHead = this.creatNode(val)
    newHead.next = this.dummynode.next
    this.dummynode.next = newHead
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newTail = this.creatNode(val)
    let current = this.dummynode
    while(current.next !== null) {
        current = current.next
    }
    current.next = newTail
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    var newNode = this.creatNode(val)
    var current = this.dummynode
    while(index-- && current) {
       current = current.next
    }
    if (current) {
        newNode.next = current.next
        current.next = newNode
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    var current = this.dummynode
    while(index-- && current) {
       current = current.next
    }
    if (current && current.next) {
        current.next = current.next.next
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针法
export const reverseList = function(head) {
       let pre = null
   let cur = head 
   while(cur) {
     let temp = cur.next
     cur.next = pre
     pre = cur
     cur = temp
   }
   return pre
};


// 哈希: 重复问题可以考虑到哈希
// 字母异位词分组
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  return Array.from(Map.groupBy(strs, (s) => s.split("").sort().join("")).values())
};


// 回溯算法：与递归相辅相成
// 组合问题、切割问题、子集问题、排列问题、棋盘问题（n皇后、解数独）
// 可抽象为一个n叉树
// 横向是for循序，竖向是递归
// 模板
const backTraking = (n: number)=> {
    if (!n) return
    for (let i= 0;i<=n;i++) {
        backTraking(i)
    }
}


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

//子集问题
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。解集 不能 包含重复的子集。你可以按 任意顺序 返回解集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums: number[]) {
    const path: number[]= []
    const result: number[][] = []
    let startIndex = 0
    /**
    * 回溯算法模板
    * @param {number[]} path - 当前路径（已选择的元素）
    * @param {number} startIndex - 本轮搜索的起始下标
    * @return {void}
    */
    const backtrack = (path: number[], startIndex: number) => {
        result.push([...path]) // 解构非常重要，不然path是引用，后面的值就得变了
        if (startIndex >= nums.length) return
        for (let i = startIndex;i< nums.length;i++) {
            path.push(nums[i])
            backtrack(path, i+1)
            path.pop()
        }
    }
    backtrack(path, startIndex)
    return result
};

// 跟动规的区别，动规有多个因素互相掣肘，无法取得局部最优解
// 贪心算法： 每次取局部最优-》全局最优
/*
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


// 图
// 有向图、无向图、权值（图边的值）、度、出度、入度
// 连通性任何一个节点可以达到任何一个其他节点（无向图 ）强连通图（有向图） 连通分量 强连通分量
// 朴素存储、领接矩阵(边很多)、领接表（边较少节点很多）
// dfs：跟回溯一样的模版
// bfs

// 岛屿数量
/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function(grid) {
    let count = 0;
    let m = grid.length
    let n = grid[0].length
    let visted = Array.from({length: m},()=>Array(n).fill(false))
    const dfs = (grid, visted, i, j)=>{
        const dire = [[0,1],[0,-1],[1,0], [-1,0]]
        for(let z = 0;z<dire.length;z++) {
            const nextx = i + dire[z][0]
            const nexty  = j + dire[z][1]
            // 越界处理
            if (nextx < 0 || nextx >= m || nexty< 0 || nexty>=n) continue;
            // 标记处理
            if (grid[nextx][nexty] === '1' && !visted[nextx][nexty]) {
                visted[nextx][nexty] = true
                dfs(grid, visted , nextx ,nexty)
            }
        }
    }
    for(let i = 0;i< m;i++) {
        for (let j = 0; j< n;j++) {
            if (grid[i][j] === '1' && !visted[i][j]) {
                count++
                // 标记
                dfs(grid, visted, i, j)
            }
        }
    }
    return count
};

// 单调栈， 栈
// ...existing code...

// 堆和单调栈的区别
// ===================
// 1. 堆（Heap）
// - 一种完全二叉树结构，常用于实现优先队列（最大堆/最小堆）。
// - 主要用于动态获取最大值或最小值，如 Top K 问题、合并有序列表、优先级调度等。
// - 插入和删除操作后需维护堆的性质（父节点大于/小于子节点）。
// - 常用操作：push、pop、peek（取堆顶）。
// - JS中可用数组+自定义方法实现。

// 2. 单调栈（Monotonic Stack）
// - 一种特殊的栈结构，栈内元素保持单调递增或递减。
// - 主要用于解决“下一个更大/更小元素”、“区间最大/最小值”等问题，如每日温度、柱状图最大矩形等。
// - 每次入栈前会弹出不满足单调性的元素，保证栈内元素有序。
// - 常用操作：push、pop、top（栈顶）。

// 总结：
// - 堆用于动态维护最大/最小值，适合优先队列场景，结构是完全二叉树。
// - 单调栈用于区间类、下一个更大/更小元素等问题，结构是线性栈，保证单调性。
// ===================
// 每日温度
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
export const dailyTemperatures = function(temperatures) {
    const stack = [0] // 单调栈
    const result = Array(temperatures.length).fill(0)
    for(let i=1;i<temperatures.length;i++) {
        // 栈处理
        while(stack.length && temperatures[i]> temperatures[stack[0]]) {
                result[stack[0]] =  i - stack[0]
                stack.shift()
        }
        stack.unshift(i)
    }
    return result
};

// 大顶堆 小顶堆
//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



// 字符串：kmp算法，解决字符串匹配问题
// 前缀表（不包括最后一个字符），利用它实现找不到最长相等前后缀的长度，来定位到上一个不匹配的元素下标，重新开始匹配
// 代码实现


