/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 21:55:24
 * @LastEditTime: 2022-06-13 18:16:48
 * 
 	415. 字符串相加
	给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
	你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
	示例 1：
		输入：num1 = "11", num2 = "123"
		输出："134"
	示例 2：
		输入：num1 = "456", num2 = "77"
		输出："533"
	示例 3：
		输入：num1 = "0", num2 = "0"
		输出："0"
	提示：
		1 <= num1.length, num2.length <= 104
		num1 和num2 都只包含数字 0-9
		num1 和num2 都不包含任何前导零

	来源：力扣（LeetCode）
	链接：https://leetcode.cn/problems/add-strings
 */

/**
 * 模拟加法, 从后往前, 竖式加法
- 时间复杂度：O(max(len1, len2))
- 空间复杂度：O(1)
 */
export function addStrings(num1: string, num2: string): string {
	let mathLength = Math.max(num1.length, num2.length);
	// 补齐前置0
	num1 = num1.padStart(mathLength, '0');
	num2 = num2.padStart(mathLength, '0');
	let t = 0; // 个位
	let f = 0; // 十位
	let sum = '';
	for (let i = mathLength - 1; i >= 0; i--) {
		t = parseInt(num1[i]) + parseInt(num2[i]) + f;
		f = Math.floor(t / 10);
		sum = (t % 10) + sum;
	}
	if (f === 1) {
		sum = '1' + sum;
	}
	return sum;
}

/* const num1 = '0',
	num2 = '0';
console.log('[  ]-49', addStrings(num1, num2)); */
