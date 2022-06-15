/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 21:57:42
 * @LastEditTime: 2022-06-15 20:12:25
 * 
	696.计数二进制子串
	给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
	重复出现（不同位置）的子串也要统计它们出现的次数。
	示例 1 :
		输入: "00110011"
		输出: 6
		解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
		请注意，一些重复出现的子串要计算它们出现的次数。
		另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
	示例 2 :
		输入: "10101"
		输出: 4
		解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
	注意：
		s.length 在1到50,000之间。
		s 只包含“0”或“1”字符。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/count-binary-substrings
 */

/**
 * 分组，相邻组比较
- 思路: 
1. 把字符串按数字分组切割，如：['00', '11', '00', '11']
2. 前后两个分组长度的较小值就是这相隔两组的“相同数量非空子字符串”的数量。
 */
export function countBinarySubstrings(s: string): number {
	const arr = s.match(/0+|1+/g) as string[];
	let n = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		n += Math.min(arr[i].length, arr[i + 1].length);
	}
	return n;
}

/**
 * 双指针 (更优)
 */
export function countBinarySubstrings1(s: string): number {
	let last = 0, // 记录之前一种数字的个数
		res = 0, // 符合期望的个数
		cur = 1; // 记录当前数字的个数

	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			cur++;
		} else {
			last = cur;
			cur = 1;
		}
		if (last >= cur) res++; // 前一种字符长度大于后一种则个数+1
	}
	return res;
}

// let s = '10101';
// let s1 = '111100011000';

/* console.time('countBinarySubstrings');
for (let index = 0; index < 10 * 10000; index++) {
	countBinarySubstrings(s1);
}
console.timeEnd('countBinarySubstrings'); // 30 ms

console.time('countBinarySubstrings1');
for (let index = 0; index < 10 * 10000; index++) {
	countBinarySubstrings1(s1);
}
console.timeEnd('countBinarySubstrings1'); // 10 ms */
