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
};