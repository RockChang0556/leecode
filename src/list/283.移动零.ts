/*
 * @Author: Rock Chang
 * @Date: 2022-06-12 15:20:35
 * @LastEditTime: 2022-06-12 16:22:18
 * 
 283. 移动零
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
  请注意 ，必须在不复制数组的情况下原地对数组进行操作。
  示例 1:
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]
  示例 2:
    输入: nums = [0]
    输出: [0]
  提示:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
  进阶：你能尽量减少完成的操作次数吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/move-zeroes
 */

/** 
 * 嵌套循环 (移动 0 到数组的末尾)
- 时间复杂度 O(n^2), 因为 splice 的复杂度是 O(n)
 */
export function moveZeroes(nums: number[]): void {
	const len = nums.length;
	if (len === 0) return;
	let zeroLen = 0;
	// 循环到非0的位置结束
	for (let i = 0; i < len - zeroLen; i++) {
		if (nums[i] === 0) {
			nums.push(0);
			nums.splice(i, 1);
			i--; // 上面截取了一个元素, i 就要递减, 否则连续 0 就会有错误
			zeroLen++; // 累加 0 的长度
		}
	}
}
/** 
 * 双指针
- 思路:  
  1. 定义 j 指向第一个 0，i 指向 j 后面的第一个非0
  2. 交换 i 和 j 的值，继续向后移动
- 时间复杂度 O(n)
 */
export function moveZeroes1(nums: number[]): void {
	let j = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0 && j === -1) j = i;
		if (nums[i] !== 0 && j !== -1) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
			j++;
		}
	}
}

// 功能测试
/* const nums = [0, 1, 0, 0, 3, 12];
moveZeroes1(nums);
console.log('[ nums ]-28', nums); */

/* 以下为性能测试 */
/* console.time('moveZeroes');
const arr = new Array(10 * 10000).fill(0).map((_v, i) => (i % 10 ? i : 0));
moveZeroes(arr);
console.timeEnd('moveZeroes'); // 67 ms

console.time('moveZeroes1');
const arr1 = new Array(10 * 10000).fill(0).map((_v, i) => (i % 10 ? i : 0));
moveZeroes1(arr1);
console.timeEnd('moveZeroes1'); // 6ms */
