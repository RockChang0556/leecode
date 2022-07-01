/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 20:30:41
 * @LastEditTime: 2022-06-30 16:46:49
 * 标签: 贪心 动态规划
 * 
	53. 最大子序和
	给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
	示例 1：
	输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
	输出：6
	解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
	示例 2：
	输入：nums = [1]
	输出：1
	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/maximum-subarray
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 贪心算法
 * 若当前指针所指元素之前的和小于0,则丢弃当前元素之前的数列
 */
export function maxSubArray1(nums: number[]): number {
	let curmax = 0;
	let max = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (curmax < 0) {
			curmax = nums[i];
		} else {
			curmax += nums[i];
		}
		max = Math.max(max, curmax);
	}
	return max;
}

/** 动态规划
 * 若前一个元素大于0,则将其加到当前元素上
 */
export function maxSubArray2(nums: number[]): number {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > 0) {
			nums[i] = nums[i - 1] + nums[i];
		}
	}
	return Math.max(...nums);
}
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray1(nums));
