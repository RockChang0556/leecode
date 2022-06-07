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

import { ILinkList as ListNode, createLinkList } from '@/utils/createLinkList';

export function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	console.log('[  ]-24', l1, l2);
	return null;
}

const l5 = createLinkList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createLinkList([9, 9, 9, 9]);
console.log('2', addTwoNumbers(l5, l6));
