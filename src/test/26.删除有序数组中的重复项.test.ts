import { removeDuplicates } from '@/list/26.删除有序数组中的重复项';

describe('26.删除有序数组中的重复项', () => {
	it('正常情况', () => {
		const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
		const numsRes = [0, 1, 2, 3, 4];
		expect(removeDuplicates(nums)).toBe(5);
		expect(nums.slice(0, 5)).toEqual(numsRes);
	});
	it('数组只有一个元素', () => {
		const nums = [2];
		const numsRes = [2];
		expect(removeDuplicates(nums)).toBe(1);
		expect(nums.slice(0, 1)).toEqual(numsRes);
	});
	it('数组多个元素但都是同一个', () => {
		const nums = [1, 1, 1];
		const numsRes = [1];
		expect(removeDuplicates(nums)).toBe(1);
		expect(nums.slice(0, 1)).toEqual(numsRes);
	});
});
