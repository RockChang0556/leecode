/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 21:58:12
 * @LastEditTime: 2022-06-11 00:34:29
 * 
 * 704. 二分查找
  给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
  示例 1:
    输入: nums = [-1,0,3,5,9,12], target = 9
    输出: 4
    解释: 9 出现在 nums 中并且下标为 4
  示例 2:
    输入: nums = [-1,0,3,5,9,12], target = 2
    输出: -1
    解释: 2 不存在 nums 中因此返回 -1
  提示：
    你可以假设 nums 中的所有元素是不重复的。
    n 将在 [1, 10000]之间。 nums 的每个元素都将在 [-9999, 9999]之间。
  
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-search
 */

/* 
  笔记
  - 凡有序, 必二分 !!!
  - 凡二分, 时间复杂度必包含 O(logn)
*/

/** 双指针法 (更优)
 * - 时间复杂度：O(logn)，其中 n 是数组的长度。
 * - 空间复杂度：O(1)。
 */
export function binarySearch(nums: number[], target: number): number {
	let l = 0; // 左指针
	let r = nums.length - 1; // 右指针
	while (l <= r) {
		// (r - l) / 2) + l 等同 (l + r) / 2 , 但后者可能会溢出
		// 也可用位预算法实现 (l + r) >>> 1  参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6
		let mid = Math.floor((r - l) / 2) + l;
		if (nums[mid] === target) {
			return mid;
		} else if (target > nums[mid]) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return -1;
}

/** 递归法
 * - 时间复杂度：O(logn)，其中 n 是数组的长度。
 * - 空间复杂度：O(1)。
 */
export function binarySearch1(nums: number[], target: number): number {
	function search(l: number, r: number): number {
		if (l > r) return -1;
		let mid = Math.floor((r - l) / 2) + l;
		if (nums[mid] === target) {
			return mid;
		} else if (target > nums[mid]) {
			return search(mid + 1, r);
		} else {
			return search(l, mid - 1);
		}
	}

	return search(0, nums.length - 1);
}

/* 功能测试 */
/* let nums = [1, 3, 5, 6, 8, 9, 12, 14, 15, 18],
	target = 5;
console.log('', binarySearch1(nums, target)); */

/* 以下为性能测试 */
/* console.time('binarySearch');
for (let i = 0; i < 100 * 10000; i++) {
	binarySearch(nums, target);
}
console.timeEnd('binarySearch'); // 20 ms

// 递归法需要更多的空间来调用函数, 故虽然理论上空间复杂度与双指针法一直, 但实际上差点
console.time('binarySearch1');
for (let i = 0; i < 100 * 10000; i++) {
	binarySearch1(nums, target);
}
console.timeEnd('binarySearch1'); // 44 ms */
