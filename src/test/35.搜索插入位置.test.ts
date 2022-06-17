import { searchInsert, searchInsert1 } from '@/list/35.搜索插入位置';

describe('35.搜索插入位置', () => {
	it('目标在元素中存在', () => {
		const nums = [1, 3, 5, 6];
		const target = 5;
		const rs = 2;
		expect(searchInsert(nums, target)).toBe(rs);
		expect(searchInsert1(nums, target)).toBe(rs);
	});
	it('目标不存在, 需插入到数组开头', () => {
		const nums = [2, 3, 5, 6];
		const target = 1;
		const rs = 0;
		expect(searchInsert(nums, target)).toBe(rs);
		expect(searchInsert1(nums, target)).toBe(rs);
	});
	it('目标不存在, 需插入到数组中', () => {
		const nums = [1, 3, 5, 6];
		const target = 4;
		const rs = 2;
		expect(searchInsert(nums, target)).toBe(rs);
		expect(searchInsert1(nums, target)).toBe(rs);
	});
	it('目标不存在, 需插入到数组结尾', () => {
		const nums = [1, 3, 5, 6];
		const target = 8;
		const rs = 4;
		expect(searchInsert(nums, target)).toBe(rs);
		expect(searchInsert1(nums, target)).toBe(rs);
	});
});
