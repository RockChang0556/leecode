/*
 * @Author: Rock Chang
 * @Date: 2022-06-27 19:44:13
 * @LastEditTime: 2022-06-28 01:01:38
 *  
  34.在排序数组中查找元素的第一个和最后一个位置
  给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target，返回 [-1, -1]。
  你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
  示例 1：
    输入：nums = [5,7,7,8,8,10], target = 8
    输出：[3,4]
  示例 2：
    输入：nums = [5,7,7,8,8,10], target = 6
    输出：[-1,-1]
  示例 3：
    输入：nums = [], target = 0
    输出：[-1,-1]
  提示：
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums 是一个非递减数组
    -109 <= target <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
 */

/**
 * 定义两个二分来寻找左边界和右边界
 */
export function searchRange(nums: number[], target: number): number[] {
	function findLeft(nums: number[], target: number): number {
		let l = 0;
		let r = nums.length - 1;
		while (l <= r) {
			const mid = ((r - l) >>> 1) + l;
			if (nums[mid] >= target) {
				r = mid - 1; // 找到第一个大于等于 target 的 index, 没有就是 -1 或 nums.length
			} else {
				l = mid + 1;
			}
		}
		return r;
	}
	function findRight(nums: number[], target: number): number {
		let l = 0;
		let r = nums.length - 1;
		while (l <= r) {
			const mid = ((r - l) >>> 1) + l;
			if (nums[mid] <= target) {
				l = mid + 1; // 找到第一个大于 target 的 index, 没有就是 -1 或 nums.length
			} else {
				r = mid - 1;
			}
		}
		return l;
	}
	// 情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
	if (target > nums[nums.length - 1] || target < nums[0] || nums.length === 0)
		return [-1, -1];
	const l = findLeft(nums, target);
	const r = findRight(nums, target);
	// 情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
	if (r - l > 1) return [l + 1, r - 1];
	// 情况二：target 在数组范围中，但数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
	return [-1, -1];
}

/**
 * 两个二分的优化版本, 两个方法合并成一个
 */
export function searchRange1(nums: number[], target: number): number[] {
	function getBorder(nums: number[], target: number, left: boolean): number {
		let l = 0;
		let r = nums.length - 1;
		while (l <= r) {
			const mid = ((r - l) >>> 1) + l;
			if (nums[mid] > target || (left && nums[mid] >= target)) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
		return left ? r : l;
	}
	// 情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
	if (target > nums[nums.length - 1] || target < nums[0] || nums.length === 0)
		return [-1, -1];
	const l = getBorder(nums, target, true);
	const r = getBorder(nums, target, false);
	// 情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
	if (r - l > 1) return [l + 1, r - 1];
	// 情况二：target 在数组范围中，但数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
	return [-1, -1];
}

// const nums = [5, 7, 7, 8, 8, 10],
// 	target = 7;
// console.log('[ searchRange(nums, target) ]-67', searchRange1(nums, target));
