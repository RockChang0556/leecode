/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 20:28:31
 * @LastEditTime: 2022-06-12 12:22:52
 * 
	509. 斐波那契数
	斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
		F(0) = 0，F(1) = 1, F(n) = F(n - 1) + F(n - 2)，其中 n > 1
		给定 n ，请计算 F(n) 。
	示例 1：
		输入：n = 2
		输出：1
		解释：F(2) = F(1) + F(0) = 1 + 0 = 1
	示例 2：
		输入：n = 3
		输出：2
		解释：F(3) = F(2) + F(1) = 1 + 1 = 2
	示例 3：
		输入：n = 4
		输出：3
		解释：F(4) = F(3) + F(2) = 2 + 1 = 3
	提示：
		0 <= n <= 30
	
	来源：力扣（LeetCode）
	链接：https://leetcode.cn/problems/fibonacci-number
 */

/** 递归
- 时间复杂度 O(2^n)
 */
export function fib(n: number): number {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
}

/** 动态规划 */
export function fib1(n: number): number {
	if (n < 2) return n;
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
}

/* 以下为性能测试 */
/* console.time('递归');
console.log(fib(30));
console.timeEnd('递归'); // 17 ms

console.time('动态规划');
console.log(fib1(30));
console.timeEnd('动态规划'); // 0.1 ms */
