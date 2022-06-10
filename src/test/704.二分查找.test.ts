import { binarySearch, binarySearch1 } from '@/list/704.二分查找';

describe('704.二分查找', () => {
	it('正常情况', () => {
		const nums = [1, 3, 5, 6, 8, 9, 12, 14, 15, 18];
		const target = 5;
		const rs = 2;
		expect(binarySearch(nums, target)).toBe(rs);
		expect(binarySearch1(nums, target)).toBe(rs);
	});
	it('找不到情况', () => {
		const nums = [1, 3, 5, 6, 8, 9, 12, 14, 15, 18];
		const target = 7;
		const rs = -1;
		expect(binarySearch(nums, target)).toBe(rs);
		expect(binarySearch1(nums, target)).toBe(rs);
	});
	it('边界情况, nums 为空', () => {
		const nums: number[] = [];
		const target = 5;
		const rs = -1;
		expect(binarySearch(nums, target)).toBe(rs);
		expect(binarySearch1(nums, target)).toBe(rs);
	});
});
