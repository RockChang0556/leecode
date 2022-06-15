/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 21:57:06
 * @LastEditTime: 2022-06-15 10:38:31
 *
  557.反转字符串中的单词 III
  给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
  示例 1：
    输入：s = "Let's take LeetCode contest"
    输出："s'teL ekat edoCteeL tsetnoc"
  示例 2:
    输入： s = "God Ding"
    输出："doG gniD"
  提示：
    1 <= s.length <= 5 * 104
    s 包含可打印的 ASCII 字符。
    s 不包含任何开头或结尾空格。
    s 里 至少 有一个词。
    s 中的所有单词都用一个空格隔开。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/reverse-words-in-a-string-iii
 */

/**
 * 利用数组 reverse API
 */
export function reverseWords(s: string) {
	return s
		.split(' ')
		.map((v: string) => {
			return Array.from(v).reverse().join('');
		})
		.join(' ');
}

/**
 * 双指针 (更优)
 */
export function reverseWords1(s: string) {
	let arr = s.split(''); // 转成数组, 便于字母交换位置
	let l = 0;
	let r = 0;
	while (l < arr.length) {
		//找到结尾的空格
		while (arr[r] && arr[r] !== ' ') {
			r++;
		}
		//反转单词
		for (let i = l, j = r - 1; i < j; i++, j--) {
			[arr[i], arr[j]] = [arr[j], arr[i]]; // 前后字母交换位置
		}
		//跳到下一个单词
		l = r + 1;
		r = l;
	}
	return arr.join('');
}

// let str = "Let's take LeetCode contest";

/* 以下为性能测试 */
/* console.time('reverseWords');
for (let index = 0; index < 10 * 10000; index++) {
	reverseWords(str);
}
console.timeEnd('reverseWords'); // 304 ms

console.time('reverseWords1');
for (let index = 0; index < 10 * 10000; index++) {
	reverseWords1(str);
}
console.timeEnd('reverseWords1'); // 93 ms */
