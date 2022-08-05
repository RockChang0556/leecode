/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 21:53:20
 * @LastEditTime: 2022-06-12 15:40:13
 * 
    1.两数之和 ( two-sum )
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
    示例:
        给定 nums = [2, 7, 11, 15], target = 9
        因为 nums[0] + nums[1] = 2 + 7 = 9
        所以返回 [0, 1]
    
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/two-sum
 */

/** 
 * 双层循环暴力解法
- 思路: 使用两层循环，外层循环计算当前元素与 target 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。
- 时间复杂度: O(n^2)
 */
export function twoSum(nums: number[], target: number): number[] {
	const res: number[] = [];
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		let flag = false;
		for (let j = i + 1; j < len; j++) {
			if (nums[i] + nums[j] === target) {
				res.push(i);
				res.push(j);
				flag = true;
				break;
			}
		}
		if (flag) break;
	}
	return res;
}

/** 
 * 哈希表 解法
- 思路: 创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。
- 时间复杂度：O(N), N 是数组中的元素数量。
- 空间复杂度：O(N), N 是数组中的元素数量。
 */
export function twoSum1(nums: number[], target: number): number[] {
	const mp = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (mp.has(target - nums[i])) {
			return [mp.get(target - nums[i]), i];
		}
		mp.set(nums[i], i);
	}
	return [];
}

/* 功能测试 */
/* const nums = [1, 2, 5, 6, 7, 11, 13, 14, 15, 17, 19];
const target = 21;
console.log('[  ]-46', twoSum1(nums, target)); */

/* 以下为性能测试 */
/* console.time('twoSum');
for (let i = 0; i < 100 * 10000; i++) {
	twoSum(nums, target);
}
console.timeEnd('twoSum'); // 48 ms

console.time('twoSum1');
for (let i = 0; i < 100 * 10000; i++) {
	twoSum1(nums, target);
}
console.timeEnd('twoSum1'); // 196 ms */
