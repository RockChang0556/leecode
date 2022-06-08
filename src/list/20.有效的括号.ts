/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 15:29:51
 * @LastEditTime: 2022-06-09 00:09:16
 * @Description: 
 * 20. 有效的括号(valid-parentheses)
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-parentheses
 */

/* 
  1.利用栈先入后出的原理
  */
export function isValid1(s: string) {
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
