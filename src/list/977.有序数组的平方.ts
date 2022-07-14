/*
 * @Author: Rock Chang
 * @Date: 2022-07-14 15:24:18
 * @LastEditTime: 2022-07-14 21:44:45
 * 
  977.有序数组的平方
  给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
  示例 1：
    输入：nums = [-4,-1,0,3,10]
    输出：[0,1,9,16,100]
    解释：平方后，数组变为 [16,1,0,9,100],排序后，数组变为 [0,1,9,16,100]
  示例 2：
    输入：nums = [-7,-3,2,3,11]
    输出：[4,9,9,49,121]
  提示：
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums 已按 非递减顺序 排序
  进阶：
    请你设计时间复杂度为 O(n) 的算法解决本问题

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/squares-of-a-sorted-array
  解法: https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html
 */

/**
 * 暴力解法
- 先平方再排序
- 时间复杂度: O(n + nlogn), 可以说是O(nlogn), 但为了和下面双指针法算法时间复杂度有鲜明对比，我记为 O(n + nlog n)。
 */
export function sortedSquares(nums: number[]): number[] {
	const squaresNums = nums.map((v) => Math.pow(v, 2));
	squaresNums.sort((a, b) => a - b);
	return squaresNums;
}

/**
 * 双指针
- 思路: 首尾指针平方后对比, 大的前插入新数组, 同时对应首尾指针前移或后移
- 时间复杂度: O(n)
 */
export function sortedSquares1(nums: number[]): number[] {
	let l = 0;
	let r = nums.length - 1;
	let resArr: number[] = new Array(nums.length);
	let resArrIndex: number = resArr.length - 1;
	while (l <= r) {
		const squal = nums[l] ** 2;
		const squar = nums[r] ** 2;
		if (squal > squar) {
			resArr[resArrIndex] = squal;
			l++;
		} else {
			resArr[resArrIndex] = squar;
			r--;
		}
		resArrIndex--;
	}
	return resArr;
}

/**
 * 双指针 不用 unshift 优化版(优)
- 思路: 首尾指针平方后对比, 大的前插入新数组, 同时对应首尾指针前移或后移
- 时间复杂度: O(n)
 */
export function sortedSquares2(nums: number[]): number[] {
	let left: number = 0,
		right: number = nums.length - 1;
	let resArr: number[] = new Array(nums.length);
	let resArrIndex: number = resArr.length - 1;
	while (left <= right) {
		if (Math.abs(nums[left]) < Math.abs(nums[right])) {
			resArr[resArrIndex] = nums[right--] ** 2;
		} else {
			resArr[resArrIndex] = nums[left++] ** 2;
		}
		resArrIndex--;
	}
	return resArr;
}
// const nums = [-4, -1, 0, 3, 10];
