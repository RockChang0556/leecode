import {
	sortedSquares,
	sortedSquares1,
	sortedSquares2,
} from '@/list/977.有序数组的平方';

describe('977.有序数组的平方', () => {
	it('正常情况', () => {
		const nums = [-4, -1, 0, 3, 10];
		const rs = [0, 1, 9, 16, 100];
		expect(sortedSquares(nums)).toEqual(rs);
		expect(sortedSquares1(nums)).toEqual(rs);
		expect(sortedSquares2(nums)).toEqual(rs);
	});
	it('存在相加为0的一对数', () => {
		const nums = [-7, -3, 2, 3, 11];
		const rs = [4, 9, 9, 49, 121];
		expect(sortedSquares(nums)).toEqual(rs);
		expect(sortedSquares1(nums)).toEqual(rs);
		expect(sortedSquares2(nums)).toEqual(rs);
	});
	it('只有一个元素', () => {
		const nums = [-4];
		const rs = [16];
		expect(sortedSquares(nums)).toEqual(rs);
		expect(sortedSquares1(nums)).toEqual(rs);
		expect(sortedSquares2(nums)).toEqual(rs);
	});
});
