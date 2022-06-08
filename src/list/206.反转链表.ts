/*
 * @Author: Rock Chang
 * @Date: 2022-06-09 00:07:36
 * @LastEditTime: 2022-06-09 00:52:53
  
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

import { ListNode, createLinkList } from '@/utils/createLinkList';

/** 双指针法 */
export function reverseList(head: ListNode | undefined): ListNode | undefined {
	if (!head || !head.next) return head;
	let pre: ListNode | undefined = undefined;
	let cur: ListNode | undefined = head;
	let temp: ListNode | undefined = undefined;
	while (cur) {
		temp = cur.next; // 保存一下 cur的下一个节点，因为接下来要改变cur->next
		cur.next = pre; // 反转指针
		// 更新pre 和 cur指针
		pre = cur;
		cur = temp;
	}
	return pre;
}

const l1 = createLinkList([1, 2, 3, 4]);
console.log('[ l1 ]-35', reverseList(l1));
