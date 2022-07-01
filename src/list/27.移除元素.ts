/*
 * @Author: Rock Chang
 * @Date: 2022-06-28 15:46:41
 * @LastEditTime: 2022-07-01 15:46:04
 * 标签: 数组 双指针
 * 
  27.移除元素
  给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
  示例 1：
    输入：nums = [3,2,2,3], val = 3
    输出：2, nums = [2,2]
    解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
  提示：
    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/remove-element
  解析: https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html#_27-%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0
 */

/**
 * 双指针
 */
export function removeElement(nums: number[], val: number): number {
	if (!nums.length) return 0;
	let l = 0;
	let r = 0;
	while (r < nums.length) {
		if (nums[r] !== val) {
			nums[l++] = nums[r];
		}
		r++;
	}
	return l;
}

const nums = [3],
	val = 3;
console.log('[  ]-27', removeElement(nums, val), nums);
