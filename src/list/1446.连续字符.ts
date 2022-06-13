/*
 * @Author: Rock Chang
 * @Date: 2022-06-12 18:35:57
 * @LastEditTime: 2022-06-13 09:58:03
 * 
  1446. 连续字符
  给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
  请你返回字符串 s 的 能量。 即连续最多的字符,以及次数
  示例 1：
    输入：s = "leetcode"
    输出：2
    解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
  示例 2：
    输入：s = "abbcccddddeeeeedcba"
    输出：5
    解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
  提示：
    1 <= s.length <= 500
    s 只包含小写英文字母。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/consecutive-characters
 */

/** 
 * 跳步嵌套循环
- 时间复杂度: O(n), 因为有跳步机制, 所以虽然是双层循环,但复杂度不是O(n^2)
 */
export function maxPower(s: string): number {
	const res = {
		str: '',
		len: 0,
	};
	const len = s.length;
	if (!len) return res.len;

	let tempLen = 0; // 临时记录当前字符串的长度
	for (let i = 0; i < len; i++) {
		tempLen = 0; // 重置
		for (let j = i; j < len; j++) {
			if (s[i] === s[j]) tempLen++;
			// 不相等或者到了最后一个元素, 判断最大值
			if (s[i] !== s[j] || j === len - 1) {
				if (tempLen > res.len) {
					res.str = s[i];
					res.len = tempLen;
				}
				if (i < len - 1) i = j - 1; // 跳步, 加条件是为了防止在最后一步死循环
				break;
			}
		}
	}
	return res.len;
}
/** 
 * 双指针
- 时间复杂度: O(n)
 */
export function maxPower1(s: string): number {
	const res = {
		str: '',
		len: 0,
	};
	const len = s.length;
	if (!len) return res.len;

	let l = 0;
	let r = 0;
	for (r = 0; r <= len; r++) {
		// 不相等或者到了最后一个元素, 判断最大值
		if (s[l] !== s[r] || r === len) {
			if (r - l > res.len) {
				res.str = s[l];
				res.len = r - l;
			}
			l = r; // 左指针追上右指针
		}
	}
	return res.len;
}

/* 功能测试 */
/* const s = 'aaanbbcccccc';
console.log('[ s ]-56', maxPower(s)); */

/* 以下为性能测试 */
/* console.time('maxPower');
for (let i = 0; i < 10 * 10000; i++) {
	maxPower(s);
}
console.timeEnd('maxPower'); // 24 ms

console.time('maxPower1');
for (let i = 0; i < 10 * 10000; i++) {
	maxPower1(s);
}
console.timeEnd('maxPower1'); // 23 ms */
