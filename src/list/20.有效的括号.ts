/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 15:29:51
 * @LastEditTime: 2022-06-12 15:41:55
 * 
 	20. 有效的括号(valid-parentheses)
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-parentheses
 */

/** 
 * 栈 解法
- 利用栈先入后出的原理
 */
export function isValid(s: string) {
	let map: { [k: string]: number } = {
		'{': 1,
		'}': -1,
		'[': 2,
		']': -2,
		'(': 3,
		')': -3,
	};
	let stack: string[] = [];
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] > 0) {
			stack.push(s[i]);
		} else {
			let last = stack.pop() ?? '';
			if (map[last] + map[s[i]] !== 0) return false;
		}
	}
	return stack.length === 0;
}

/** 
 * 正则匹配 解法
- 思路: 匹配成对括号并删除, 直到不能再删除, 此时若 s 长度大于0,则不匹配
 */
export function isValid1(s: string) {
	const len = s.length >>> 1; // 等同于 Math.floor(s.length / 2)
	for (let i = 0; i < len; i++) {
		s = s.replace('()', '').replace('{}', '').replace('[]', '');
	}
	return s.length === 0;
}

// const s = '{{}}()[{]}';
// console.log('[  ]-53', isValid1(s));

/* 以下为性能测试 */
/* console.time('isValid');
for (let i = 0; i < 10 * 10000; i++) {
	isValid(s);
}
console.timeEnd('isValid'); // 45 ms

console.time('isValid1');
for (let i = 0; i < 10 * 10000; i++) {
	isValid1(s);
}
console.timeEnd('isValid1'); // 122 ms */
