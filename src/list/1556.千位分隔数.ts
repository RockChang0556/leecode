/*
 * @Author: Rock Chang
 * @Date: 2022-06-15 20:20:17
 * @LastEditTime: 2022-06-17 14:56:58
 * 
  1556.千位分隔数
  给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
  示例 1：
    输入：n = 987
    输出："987"
  示例 2：
    输入：n = 1234
    输出："1.234"
  示例 3：
    输入：n = 123456789
    输出："123.456.789"
  示例 4：
    输入：n = 0
    输出："0"
  提示：
    0 <= n < 2^31
    
  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/thousand-separator
 */

/**
 * 利用数组
- 思路: 转数组 , 隔三位 用splice 插入 ','
 */
export function thousandSeparator(n: number): string {
	const arr = Math.floor(n).toString().split('');
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (i && i % 3 === 0) {
			arr.splice(len - i, 0, '.');
		}
	}
	return arr.join('');
}

/**
 * 利用字符串(优)
- 思路: 倒序遍历插入新字符串, 隔三位多插入一个 '.'
 */
export function thousandSeparator1(n: number): string {
	const str = Math.floor(n).toString();
	let res = '';
	for (let i = str.length - 1; i >= 0; i--) {
		if (i && (str.length - i) % 3 === 0) {
			res = `.${str[i]}` + res;
		} else {
			res = str[i] + res;
		}
	}
	return res;
}

/**
 * toLocaleString, 正则替换 ,
 */
export function thousandSeparator2(n: number): string {
	return n.toLocaleString().replace(/\,/g, '.');
}

// const n = 8111211;
// console.log('[ n ]-29', thousandSeparator1(n));

/* console.time('thousandSeparator');
for (let index = 0; index < 100 * 10000; index++) {
	thousandSeparator(n);
}
console.timeEnd('thousandSeparator'); // 484 ms */

/* console.time('thousandSeparator1');
for (let index = 0; index < 100 * 10000; index++) {
	thousandSeparator1(n);
}
console.timeEnd('thousandSeparator1'); // 121 ms */

/* console.time('thousandSeparator2');
for (let index = 0; index < 100 * 10000; index++) {
	thousandSeparator2(n);
}
console.timeEnd('thousandSeparator2'); // 713 ms */
