/*
 * @Author: Rock Chang
 * @Date: 2022-06-30 17:52:47
 * @LastEditTime: 2022-07-01 16:04:20
 * 标签: 数组 双指针
 * 
  26.删除有序数组中的重复项
  给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
  由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
  将最终结果插入 nums 的前 k 个位置后返回 k 。
  不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
  示例 1：
    输入：nums = [1,1,2]
    输出：2, nums = [1,2,_]
    解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
  示例 2：
    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
  提示：
    1 <= nums.length <= 3 * 104
    -104 <= nums[i] <= 104
    nums 已按 升序 排列

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array
 */

/**
 * 双指针
- 右指针找到与左指针不一样的,与左指针交换值,然后左右指针++
 */
export function removeDuplicates(nums: number[]): number {
	const len = nums.length;
	if (len < 2) return len;
	let l = 0;
	let r = 0;
	while (r <= len - 1) {
		while (nums[r] === nums[l]) {
			r++;
		}
		if (r > len - 1) break;
		l++;
		[nums[l], nums[r]] = [nums[r], nums[l]];
		r++;
	}
	return l + 1;
}

// const nums = [0, 0];
// const len = removeDuplicates(nums);
// console.log('[  ]-32', len, nums);
