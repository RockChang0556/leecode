import {
	addTwoNumbers,
	addTwoNumbers2,
	addTwoNumbers3,
} from '@/list/2.两数相加';
import { createLinkList, ListNode } from '@/utils/createLinkList';

describe('2.两数相加', () => {
	it('两个链表长度一致', () => {
		const l1: ListNode = createLinkList([2, 4, 3]);
		const l2: ListNode = createLinkList([5, 6, 4]);
		const rs = createLinkList([7, 0, 8]);
		expect(addTwoNumbers(l1, l2)).toEqual(rs);
		expect(addTwoNumbers2(l1, l2)).toEqual(rs);
		expect(addTwoNumbers3(l1, l2)).toEqual(rs);
	});
	it('两个链表长度不一致', () => {
		const l1: ListNode = createLinkList([9, 9, 9, 9, 9, 9, 9]);
		const l2: ListNode = createLinkList([9, 9, 9, 9]);
		const rs = createLinkList([8, 9, 9, 9, 0, 0, 0, 1]);
		expect(addTwoNumbers(l1, l2)).toEqual(rs);
		expect(addTwoNumbers2(l1, l2)).toEqual(rs);
		expect(addTwoNumbers3(l1, l2)).toEqual(rs);
	});
	it('边界情况, l1为0, l2为空', () => {
		const l1: ListNode = createLinkList([0]);
		const l2: ListNode | undefined = undefined;
		const rs = createLinkList([0]);
		expect(addTwoNumbers(l1, l2)).toEqual(rs);
		expect(addTwoNumbers2(l1, l2)).toEqual(rs);
		expect(addTwoNumbers3(l1, l2)).toEqual(rs);
	});
});
