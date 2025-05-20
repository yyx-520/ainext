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