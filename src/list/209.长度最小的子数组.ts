/*
 * @Author: Rock Chang
 * @Date: 2022-07-15 16:29:12
 * @LastEditTime: 2022-07-18 20:23:53
 * @Description: 双指针 滑动窗口 
 * 
  209.长度最小的子数组
  给定一个含有 n 个正整数的数组和一个正整数 target 。
  找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
  示例 1：
    输入：target = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
  示例 2：
    输入：target = 4, nums = [1,4,4]
    输出：1
  示例 3：
    输入：target = 11, nums = [1,1,1,1,1,1,1,1]
    输出：0
  提示：
    1 <= target <= 109
    1 <= nums.length <= 105
    1 <= nums[i] <= 105
  进阶：
    如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/minimum-size-subarray-sum
  解法: https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html#%E6%9A%B4%E5%8A%9B%E8%A7%A3%E6%B3%95
 */

/**
 * 暴力解法 - 双层循环
- 时间复杂度：O(n^2)
 */
export function minSubArrayLen(target: number, nums: number[]): number {
	let sum = 0; // 子序列的数值之和
	let res = Infinity; // 最终的结果
	for (let i = 0; i < nums.length; i++) {
		sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum += nums[j];
			// 一旦发现子序列和超过了target，更新result
			if (sum >= target) {
				res = Math.min(j - i + 1, res);
				break;
			}
		}
	}
	// 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
	return res === Infinity ? 0 : res;
}

/**
 * 双指针 - 窗口滑动
- 时间复杂度：O(n)
 */
export function minSubArrayLen1(target: number, nums: number[]): number {
	let l = 0;
	let r = 0;
	let sum = 0; // 子序列的数值之和
	let res = Infinity; // 最终的结果
	while (r < nums.length) {
		sum += nums[r++];
		// 左指针右移, 窗口滑动
		while (sum >= target) {
			sum -= nums[l++];
			res = Math.min(r - l + 1, res);
		}
	}
	return res === Infinity ? 0 : res;
}

const target = 4;
const nums = [1, 4, 4];
console.log('[  ]-40', minSubArrayLen1(target, nums));
