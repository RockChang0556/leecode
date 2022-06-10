import { twoSum, twoSum1 } from '@/list/1.两数之和';

describe('1.两数之和', () => {
	it('正常情况', () => {
		const nums = [2, 7, 11, 15];
		const target = 9;
		const rs = [0, 1];
		expect(twoSum(nums, target)).toEqual(rs);
		expect(twoSum1(nums, target)).toEqual(rs);
	});
	it('找不到情况', () => {
		const nums = [1, 2, 5, 6, 7, 11, 13, 14, 15, 17, 19];
		const target = 1;
		const rs: number[] = [];
		expect(twoSum(nums, target)).toEqual(rs);
		expect(twoSum1(nums, target)).toEqual(rs);
	});
	it('边界情况, nums为[]', () => {
		const nums: number[] = [];
		const target = 1;
		const rs: number[] = [];
		expect(twoSum(nums, target)).toEqual(rs);
		expect(twoSum1(nums, target)).toEqual(rs);
	});
});
