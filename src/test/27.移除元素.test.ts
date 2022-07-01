import { removeElement } from '@/list/27.移除元素';

describe('27.移除元素', () => {
	it('正常数组', () => {
		const nums = [3, 1, 1, 3, 13, 2, 2, 3];
		const val = 3;
		const rs = [1, 1, 13, 2, 2];
		expect(removeElement(nums, val)).toBe(5);
		expect(nums.slice(0, 5)).toEqual(rs);
	});
	it('数组只有一个元素且是目标', () => {
		const nums = [3];
		const val = 3;
		const rs = [3];
		expect(removeElement(nums, val)).toBe(0);
		expect(nums.slice(0, 1)).toEqual(rs);
	});
	it('数组只有一个元素且不是目标', () => {
		const nums = [2];
		const val = 3;
		const rs = [2];
		expect(removeElement(nums, val)).toBe(1);
		expect(nums.slice(0, 1)).toEqual(rs);
	});
});
