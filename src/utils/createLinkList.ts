/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 14:56:56
 * @LastEditTime: 2022-06-09 01:19:40
 * @Description: 根据数组生成链表
 * 链表格式: ListNode
 */
export interface IListNode {
	val: number;
	next?: IListNode;
}

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
/** 根据数组生成链表
 * @param {number[]} arr
 * @return {*}
 */
export function createLinkList(arr: number[]): ListNode {
	const len = arr.length;
	if (!len || len === 0) throw new Error('arr not is Array or is empty');

	let curNode: ListNode = {
		val: arr[len - 1],
		next: null,
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
