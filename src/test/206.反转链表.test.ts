import { reverseList, reverseList1 } from '@/list/206.反转链表';
import { createLinkList } from '@/utils/createLinkList';

describe('206.反转单向链表', () => {
	it('链表长度 > 2', () => {
		const l1 = createLinkList([1, 2, 3, 4]);
		const rs = createLinkList([4, 3, 2, 1]);
		expect(reverseList(l1)).toEqual(rs);
		// expect(reverseList1(l1)).toEqual(rs);
	});
	it('链表长度 = 1', () => {
		const l1 = createLinkList([1]);
		const rs = createLinkList([1]);
		expect(reverseList(l1)).toEqual(rs);
		expect(reverseList1(l1)).toEqual(rs);
	});
	it('边界情况, 链表为null', () => {
		const l1 = null;
		const rs = null;
		expect(reverseList(l1)).toEqual(rs);
		expect(reverseList1(l1)).toEqual(rs);
	});
});
