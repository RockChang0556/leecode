/*
 * @Author: Rock Chang
 * @Date: 2022-06-17 19:45:24
 * @LastEditTime: 2022-06-17 20:05:11
 * 知识点: 二分查找
 * 
  35. 搜索插入位置
  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
  请必须使用时间复杂度为 O(log n) 的算法。
  示例 1:
    输入: nums = [1,3,5,6], target = 5
    输出: 2
  示例 2:
    输入: nums = [1,3,5,6], target = 2
    输出: 1
  示例 3:
    输入: nums = [1,3,5,6], target = 7
    输出: 4
  提示:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums 为 无重复元素 的 升序 排列数组
    -104 <= target <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/search-insert-position
  思路: https://programmercarl.com/0035.%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 二分法(优)
- 时间复杂度: O(logn)
 */
export function searchInsert(nums: number[], target: number): number {
	let l = 0; // 左指针
	let r = nums.length - 1; // 右指针
	while (l <= r) {
		let mid = Math.floor((r - l) / 2) + l;
		if (nums[mid] === target) {
			return mid;
		} else if (target > nums[mid]) {
			l = mid + 1; // target 在左区间，所以 [l, mid - 1]
		} else {
			r = mid - 1; // target 在右区间，所以 [mid + 1, r]
		}
	}

	// 分别处理如下四种情况
	// 目标值在数组所有元素之前  [0, -1] return 0, 即 right + 1
	// 目标值等于数组中某一个元素  return middle;
	// 目标值插入数组中的位置 [left, right]，return right + 1
	// 目标值在数组所有元素之后的情况 [left, right]， 因为是右闭区间，所以 return right + 1
	return r + 1;
}

/**
 * 暴力解法
- 时间复杂度：O(n)
 */
export function searchInsert1(nums: number[], target: number): number {
	for (let i = 0; i < nums.length; i++) {
		// 分别处理如下三种情况
		// 目标值在数组所有元素之前
		// 目标值等于数组中
		// 目标值插入数组中的位置
		if (nums[i] >= target) return i;
	}
	// 目标值在数组所有元素之后的情况
	return nums.length;
}

// const nums = [2, 3, 5, 6, 10, 11, 15, 16, 17, 23, 25, 26, 28, 34, 36, 37, 38];
// const target = 60;
// console.log('[  ]-50', searchInsert1(nums, target));

/* console.time('searchInsert');
for (let index = 0; index < 100 * 10000; index++) {
	searchInsert(nums, target);
}
console.timeEnd('searchInsert'); // 38 ms nums.length越大, 性能差异越大

console.time('searchInsert1');
for (let index = 0; index < 100 * 10000; index++) {
	searchInsert1(nums, target);
}
console.timeEnd('searchInsert1'); // 18 ms */
