/*
 * @Author: Rock Chang
 * @Date: 2022-06-14 00:39:15
 * @LastEditTime: 2022-06-14 01:16:52
 * 快速排序
 *  两种获取 midIndex 的方法
 *    - splice 会改变原数组
 *    - slice 不会改变原数组, 推荐
 */

/**
 * 快速排序 (使用 splice)
 */
export function quickSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	const midIndex = arr.length >>> 1; // Math.floor(arr.length / 2)
	const midValue = arr.splice(midIndex, 1)[0];

	let left: number[] = [];
	let right: number[] = [];
	// 注意这里一定要使用 arr.length, 因为 arr 已被 splice 修改
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > midValue) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}
	return [...quickSort(left), midValue, ...quickSort(right)];
}

/**
 * 快速排序 (使用 slice)
 */
export function quickSort1(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	const midIndex = arr.length >>> 1; // Math.floor(arr.length / 2)
	const midValue = arr.slice(midIndex, midIndex + 1)[0];

	let left: number[] = [];
	let right: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		// slice 不会修改原数组, 故需要忽略 midIndex
		if (i === midIndex) continue;
		if (arr[i] > midValue) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}
	return [...quickSort(left), midValue, ...quickSort(right)];
}

// const arr = [9, 5, 2, 1, 7, 4, 8, 3, 6];
// console.log('[ arr ]-32', quickSort1(arr));

/* 以下是性能测试 */
/* console.time('quickSort');
for (let index = 0; index < 100 * 10000; index++) {
	quickSort(arr);
}
console.timeEnd('quickSort'); // 8 ms

console.time('quickSort1');
for (let index = 0; index < 100 * 10000; index++) {
	quickSort1(arr);
}
console.timeEnd('quickSort1'); // 4 ms */
