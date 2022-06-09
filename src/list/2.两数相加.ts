/* 
  2. 两数相加 ( add-two-numbers )
    给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  示例 1：
    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
  示例 2： 
    输入：l1 = [0], l2 = [0]
    输出：[0]
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-two-numbers/
  */

import { ListNode } from '@/utils/createLinkList';

export function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let head = new ListNode(0); // 头结点
	let tail = head; // 当前节点
	let carry = 0; // 定义一个进位数的指针，用来存储当两数之和大于10的时候
	while (l1 || l2) {
		let new_point = new ListNode(0);

		const n1 = l1 ? l1.val : 0;
		const n2 = l2 ? l2.val : 0;
		// l1 无节点, 只加 l2
		if (!l1) {
			const sum = n2 + carry;
			new_point.val = sum % 10;
			carry = Math.floor(sum / 10);
			l2 = l2!.next;
			// l2 无节点, 只加 l1
		} else if (!l2) {
			const sum = n1 + carry;
			new_point.val = sum % 10;
			carry = Math.floor(sum / 10);
			l1 = l1?.next;
		} else {
			const sum = n1 + n2 + carry;
			new_point.val = sum % 10;
			carry = Math.floor(sum / 10);
			l1 = l1?.next;
			l2 = l2?.next;
		}
		tail.next = new_point;
		tail = tail.next;
	}
	// 如果最后两个数，相加的时候有进位数的时候，就将进位数，赋予链表的新节点。
	if (carry > 0) {
		tail.next = new ListNode(carry);
	}
	return head.next || null;
}

/* 官方解法 */
export function addTwoNumbers2(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let head: ListNode | null = null,
		tail: ListNode | null = null;
	let carry = 0;
	while (l1 || l2) {
		const n1 = l1 ? l1.val : 0;
		const n2 = l2 ? l2.val : 0;
		const sum = n1 + n2 + carry;
		if (!head) {
			head = tail = new ListNode(sum % 10);
		} else if (tail) {
			tail.next = new ListNode(sum % 10);
			tail = tail.next;
		}
		carry = Math.floor(sum / 10);

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}
	if (carry > 0 && tail) {
		tail.next = new ListNode(carry);
	}
	return head;
}

/* 官方解法 - 个人优化 */
export function addTwoNumbers3(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let head = new ListNode(0); // 头结点
	let tail = head; // 当前节点
	let carry = 0;
	while (l1 || l2) {
		const n1 = l1 ? l1.val : 0;
		const n2 = l2 ? l2.val : 0;
		const sum = n1 + n2 + carry;

		tail.next = new ListNode(sum % 10);
		tail = tail.next;

		carry = Math.floor(sum / 10);
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}
	if (carry > 0) tail.next = new ListNode(carry);

	return head.next || null;
}

// const l5 = createLinkList([0]);
// const l6 = createLinkList([5, 6, 4]);
// console.time('time');
// console.log('addTwoNumbers', addTwoNumbers3(l5, l6));
// console.timeEnd('time');
