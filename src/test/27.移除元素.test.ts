import { removeElement } from '@/list/27.移除元素';

describe('27.移除元素', () => {
	it('一对一对出现的', () => {
		const nums = [3, 1, 1, 3, 13, 2, 2, 3];
		const val = 3;
		const rs = [1, 1, 13, 2, 2];
		expect(removeElement(nums, val)).toEqual(5);
		expect(nums.slice(0, 5)).toEqual(rs);
	});
});
