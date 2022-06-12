import { moveZeroes, moveZeroes1 } from '@/list/283.移动零';

describe('283.移动零', () => {
	it('正常情况, 非连续 0', () => {
		const nums = [0, 1, 0, 3, 12];
		const rs = [1, 3, 12, 0, 0];
		moveZeroes(nums);
		expect(nums).toEqual(rs);

		const nums1 = [0, 1, 0, 3, 12];
		const rs1 = [1, 3, 12, 0, 0];
		moveZeroes1(nums1);
		expect(nums1).toEqual(rs1);
	});
	it('正常情况, 有连续 0', () => {
		const nums = [0, 1, 0, 0, 3, 12];
		const rs = [1, 3, 12, 0, 0, 0];
		moveZeroes(nums);
		expect(nums).toEqual(rs);

		const nums1 = [0, 1, 0, 0, 3, 12];
		const rs1 = [1, 3, 12, 0, 0, 0];
		moveZeroes1(nums1);
		expect(nums1).toEqual(rs1);
	});
	it('边界情况, 没有 0', () => {
		const nums = [1, 3, 12];
		const rs = [1, 3, 12];
		moveZeroes(nums);
		expect(nums).toEqual(rs);

		const nums1 = [1, 3, 12];
		const rs1 = [1, 3, 12];
		moveZeroes1(nums1);
		expect(nums1).toEqual(rs1);
	});
	it('边界情况, 全是 0', () => {
		const nums = [0, 0, 0];
		const rs = [0, 0, 0];
		moveZeroes(nums);
		expect(nums).toEqual(rs);

		const nums1 = [0, 0, 0];
		const rs1 = [0, 0, 0];
		moveZeroes1(nums1);
		expect(nums1).toEqual(rs1);
	});
});
