/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 20:28:31
 * @LastEditTime: 2022-05-22 20:29:41
 * @Description: 509. 斐波那契数
 */
/* 
  1. 递归
  */
export function fib1(n: number): number {
	if (n < 2 && n >= 0) return n;
	return fib1(n - 1) + fib1(n - 2);
}

/* 
  2. 动态规划
  */
export function fib2(n: number): number {
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
}
