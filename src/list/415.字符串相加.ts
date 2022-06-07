/* 
      给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
      提示：
      num1 和num2 的长度都小于 5100
      num1 和num2 都只包含数字 0-9
      num1 和num2 都不包含任何前导零
      你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
      来源：力扣（LeetCode）
      链接：https://leetcode-cn.com/problems/add-strings
    */

export function addStrings(num1, num2) {
	let mathLength = Math.max(num1.length, num2.length);
	// 补齐前置0
	num1 = num1.padStart(mathLength, 0);
	num2 = num2.padStart(mathLength, 0);
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
