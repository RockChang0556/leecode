import { maxSubArray1, maxSubArray2 } from '@/list/53.最大的子序和';

describe('53.最大的子序和', () => {
	it('数组只有一个元素', () => {
		const arr: number[] = [4];
		expect(maxSubArray1(arr)).toBe(4);
		expect(maxSubArray2(arr)).toBe(4);
	});
	it('正确的输入', () => {
		const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
		expect(maxSubArray1(arr)).toBe(6);
		expect(maxSubArray2(arr)).toBe(6);
	});
});
