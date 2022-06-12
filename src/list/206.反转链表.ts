/*
 * @Author: Rock Chang
 * @Date: 2022-06-09 00:07:36
 * @LastEditTime: 2022-06-12 11:59:07
  
  206. 反转链表 reverse-linked-list
  给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
  示例 1：
    输入：head = [1,2,3,4,5]
    输出：[5,4,3,2,1]
  示例 2：
    输入：head = [1,2]
    输出：[2,1]
  示例 3：
    输入：head = []
    输出：[]
  提示：
    链表中节点的数目范围是 [0, 5000]
    -5000 <= Node.val <= 5000

  进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/reverse-linked-list
 */

import { ListNode } from '@/utils/createLinkList';

/** 反转链表 - 双指针法 */
export function reverseList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
	let pre: ListNode | null = null;
	let cur: ListNode | null = head;
	let temp: ListNode | null = null;
	while (cur) {
		temp = cur.next; // 保存一下 cur的下一个节点，因为接下来要改变cur->next
		cur.next = pre; // 反转指针
		// 更新pre 和 cur指针
		pre = cur;
		cur = temp;
	}
	return pre;
}

/** 反转链表 - 双指针 骚操作法 */
export function reverseList1(head: ListNode | null): ListNode | null {
	let [cur, prev]: [ListNode | null, ListNode | null] = [head, null];
	while (cur) {
		// 步骤分解版
		// 保留 cur 指针的下一个节点，并改变 cur 的 next 指向
		// [next, cur.next] = [cur.next, prev];
		// 两个指针向后挪动一位
		// [prev, cur] = [cur, cur.next]

		/*************** 最简单版代码 ***************/
		[cur.next, prev, cur] = [prev, cur, cur.next];
	}

	return prev;
}

/** 反转链表 - 递归法 从前往后翻转 */
export function reverseList2(head: ListNode | null): ListNode | null {
	function reverse(
		prev: ListNode | null,
		head: ListNode | null
	): ListNode | null {
		if (!head) return prev;
		const temp = head.next;
		[head.next, prev] = [prev, head];
		return reverse(prev, temp);
	}
	return reverse(null, head);
}

// const l1 = createLinkList([1, 2, 3, 4]);
// const l2 = createLinkList([4, 3, 2, 1]);
// console.log('[ l1 ]-35', Object.is(reverseList2(l1), l2));
