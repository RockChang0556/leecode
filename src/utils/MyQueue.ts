/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 14:44:14
 * @LastEditTime: 2022-06-10 17:43:57
 * @Description: 实现简单队列
 *
 * Q: 链表和数组, 哪个实现队列更快 ?
 * A: - 数组是连续存储，push 很快，shift 很慢
 *		- 链表是非连续存储，add 和 delete 都很快（但查找很慢）
 *		- 空间复杂度: 数组 O(n), 链表 O(n)
 *		- add时间复杂度: 数组 O(1), 链表 O(1)
 *		- delete时间复杂度: 数组 O(n), 链表 O(1)
 * 		- 结论：1. 链表实现队列更快; 2. 数据结构的选择, 比算法优化更重要
 */

import { ListNode } from './createLinkList';

/** 两个数组实现队列 */
export class QueueArray {
	private stack1: number[] = [];
	private stack2: number[] = [];
	/** 入队 */
	add(n: number) {
		this.stack1.push(n);
	}
	/**  出队
	 * @return {number | null} 若队列为空时出队,则返回null,否则返回出队的那个值
	 */
	delete(): number | null {
		let res;
		const stack1 = this.stack1;
		const stack2 = this.stack2;

		// 1. 将 stack1 的所有元素移动到 stack2 中
		while (stack1.length) {
			const n = stack1.pop();
			if (n !== undefined) {
				stack2.push(n);
			}
		}
		// 2. stack2 pop
		res = stack2.pop();
		// 3. 将 stack2 所有元素'还给' stack1
		while (stack2.length) {
			const n = stack2.pop();
			if (n !== undefined) {
				stack1.push(n);
			}
		}
		return res || null;
	}
	/** 获取队列长度  */
	get length(): number {
		return this.stack1.length;
	}
}

// const q = new QueueArray();
// q.add(100);
// q.add(300);
// console.log('[  ]-55', q.length);
// console.log('[ q.delete() ]-56', q.delete());
// console.log('[  ]-55', q.length);

/** 链表实现队列
	- 单向链表，但要同时记录 head (队头) 和 tail(队尾)
	- 要从 tail 入队，从head 出队，否则出队时 tail 不好定位
 	- length 要实时记录，不可遍历链表获取, 否则时间复杂度会上升至 O(n)
 */
export class QueueLinkList {
	private head: ListNode | null = null;
	private tail: ListNode | null = null;
	private len: number = 0;
	/** 入队
	 * - 从 tail 入队
	 */
	add(n: number) {
		const newNode = new ListNode(n);
		if (!this.head) this.head = newNode;
		// 链表尾添加新节点
		if (this.tail) {
			this.tail.next = newNode;
			// [this.tail.next, this.tail] = [newNode, this.tail.next];
		}
		// 尾指针后移
		this.tail = newNode;
		this.len++;
	}
	/** 出队
	 * - 从 head 出队
	 * @return {number | null} 若队列为空时出队,则返回 null,否则返回出队的那个值
	 */
	delete(): number | null {
		if (this.len === 0) return null;
		if (!this.head) return null;
		// 取值
		const val = this.head.val;
		// 头指针后移, 出队
		this.head = this.head.next;
		this.len--;
		return val;
	}
	/** 获取队列长度  */
	get length(): number {
		return this.len;
	}
}

// const q = new QueueLinkList();
// q.add(100);
// q.add(200);
// console.log('[  ]-55', q, q.length);
// console.log('[ q.delete() ]-56', q.delete());
// console.log('[  ]-55', q.length);

/* 性能测试 */
// const num = 10 * 10000;
/* const q1 = new QueueArray();
console.time('QueueArray');
for (let i = 0; i < num; i++) {
	q1.add(i);
}
for (let i = 0; i < num; i++) {
	q1.delete();
}
console.timeEnd('QueueArray'); // 23256 ms */

/* const q2 = [];
console.time('Array');
for (let i = 0; i < num; i++) {
	q2.push(i);
}
for (let i = 0; i < num; i++) {
	q2.shift();
}
console.timeEnd('Array'); // 455 ms */

/* const q3 = new QueueLinkList();
console.time('QueueLinkList');
for (let i = 0; i < num; i++) {
	q3.add(i);
}
for (let i = 0; i < num; i++) {
	q3.delete();
}
console.timeEnd('QueueLinkList'); // 10 ms */
