/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 14:56:56
 * @LastEditTime: 2022-06-07 15:57:16
 * @Description: 根据数组生成链表
 * 链表格式: ILinkList
 */
export interface ILinkList {
	val: number;
	next?: ILinkList;
}
/** 根据数组生成链表
 * @param {number[]} arr
 * @return {*}
 */
export function createLinkList(arr: number[]): ILinkList {
	const len = arr.length;
	if (!len || len === 0) throw new Error('arr not is Array or is empty');

	let curNode: ILinkList = {
		val: arr[len - 1],
	};
	if (len === 1) return curNode;

	/* 
    arr = [100, 200, 300]
    curNode: { val: 300 }
    curNode: { val: 200, next: { val: 300 } }
    curNode: { val: 100, next: { val: 200, next: { val: 300 } } }
  */
	for (let i = len - 2; i >= 0; i--) {
		curNode = {
			val: arr[i],
			next: curNode,
		};
	}
	return curNode;
}

// 测试
// console.log('[  ]-42', createLinkList([100, 200, 300]));
