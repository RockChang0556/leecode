/*
 * @Author: Rock Chang
 * @Date: 2022-06-14 01:18:11
 * @LastEditTime: 2022-10-30 22:47:48
 * 
  9.回文数
  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
  例如，121 是回文，而 123 不是。
  示例 1：
    输入：x = 121
    输出：true
  示例 2：
    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
  示例 3：
    输入：x = 10
    输出：false
    解释：从右向左读, 为 01 。因此它不是一个回文数。
  提示：
    -231 <= x <= 231 - 1
  进阶：你能不将整数转为字符串来解决这个问题吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/palindrome-number
 */

/* 
 笔记
  - 尽量不要转换数据结构，尤其数组这种有序结构
  - 尽量不要用内置 API ，如 reverse 不好识别复杂度
  - 数字操作最快，其次是字符串
*/

/**
 * 转数组再reverse比较
 */
export function isPalindrome2(x: number): boolean {
	const s = x.toString();
	return s === s.split('').reverse().join('');
}

/**
 * 首尾指针, 前后比较
 */
export function isPalindrome1(x: number): boolean {
	const s = x.toString();
	let l = 0; // 头指针
	let r = s.length - 1; // 尾指针
	while (l < r) {
		if (s[l] === s[r]) {
			l++;
			r--;
		} else {
			return false;
		}
	}
	return true;
}

/**
 * 生成翻转数再比较 (最优)
 */
export function isPalindrome(x: number): boolean {
	let num = x;
	let reverse = 0; // 翻转数
	while (num > 0) {
		reverse = reverse * 10 + (num % 10); // 取最后一位
		num = Math.floor(num / 10); // 取倒数第二位
	}
	return x === reverse;
}

/* 功能测试 */
// const x = 10000001;
// console.log('[ x ]-68', isPalindrome(x));
// console.log('[ x ]-68', isPalindrome1(x));
// console.log('[ x ]-68', isPalindrome2(x));

/* 以下为性能测试 */
/* console.time('isPalindrome');
for (let index = 0; index < 100 * 10000; index++) {
	isPalindrome(x);
}
console.timeEnd('isPalindrome'); // 49 ms

console.time('isPalindrome1');
for (let index = 0; index < 100 * 10000; index++) {
	isPalindrome1(x);
}
console.timeEnd('isPalindrome1'); // 27 ms

console.time('isPalindrome2');
for (let index = 0; index < 100 * 10000; index++) {
	isPalindrome2(x);
}
console.timeEnd('isPalindrome2'); // 284 ms */
