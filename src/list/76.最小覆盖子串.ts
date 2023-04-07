/*
 * @Author: Rock Chang
 * @Date: 2022-08-08 11:59:38
 * @LastEditTime: 2023-04-07 15:53:50
 * @Description: 哈希表  字符串  滑动窗口
 * 滑动窗口思路，窗口扩展时寻找可行解，窗口收缩时优化可行解
 * 
  76. 最小覆盖子串
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
  注意：
    对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
    如果 s 中存在这样的子串，我们保证它是唯一的答案。
  示例 1：
    输入：s = "ADOBECODEBANC", t = "ABC"
    输出："BANC"
  示例 2：
    输入：s = "a", t = "a"
    输出："a"
  示例 3:
    输入: s = "a", t = "aa"
    输出: ""
    解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
  提示：
    1 <= s.length, t.length <= 105
    s 和 t 由英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/minimum-window-substring
 */

export function minWindow(s: string, t: string): string {
	if (s.length < t.length) return '';
	// 存储所需各元素数量
	const needs: Record<string, number> = {};
	t.split('').forEach((v) => (needs[v] ? needs[v]++ : (needs[v] = 1)));
	let needCnt = t.length; // 所需元素的总数量
	let l = 0;
	let r = 0;
	let minSize = Number.MAX_VALUE;
	let start = 0;

	// 步骤一：不断增加 r 使滑动窗口增大，直到窗口包含了 t 的所有元素
	while (r < s.length) {
		const rv = s[r];
		// 新加入的字符是我们需要的元素
		if (needs[rv] > 0) needCnt--;
		needs[rv] = needs[rv] ? needs[rv] - 1 : -1;

		// 此时窗窗口包含了t的所有元素，进入步骤二，增加左指针l，扔掉不需要的元素
		if (needCnt === 0) {
			while (needs[s[l]] < 0) {
				needs[s[l]]++;
				l++;
			}
			// 只有发现最小值时才更新start
			if (r - l + 1 < minSize) {
				minSize = r - l + 1;
				start = l;
			}

			// 步骤三：让l再向右移动一个位置，使窗口不再满足条件，让其再次寻找，进入步骤一
			needs[s[l]]++;
			l++;
			needCnt++;
		}
		r++;
	}
	return s.substring(start, start + minSize);
}

// const s = 'ADOBECODEBANC';
// const t = 'ABC';
// console.log('[  ]-35', minWindow(s, t));
