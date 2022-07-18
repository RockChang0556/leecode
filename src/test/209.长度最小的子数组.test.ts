import { minSubArrayLen, minSubArrayLen1 } from '@/list/209.长度最小的子数组';

describe('209.长度最小的子数组', () => {
	it('数组满足大于target, 且多个', () => {
		const target = 7;
		const nums = [2, 3, 1, 2, 4, 3];
		const res = 2;
		expect(minSubArrayLen(target, nums)).toBe(res);
		expect(minSubArrayLen1(target, nums)).toBe(res);
	});
	it('数组满足大于target, 只一个', () => {
		const target = 4;
		const nums = [1, 4, 4];
		const res = 1;
		expect(minSubArrayLen(target, nums)).toBe(res);
		expect(minSubArrayLen1(target, nums)).toBe(res);
	});
	it('数组不满足target', () => {
		const target = 11;
		const nums = [1, 1, 1, 1, 1, 1, 1, 1];
		const res = 0;
		expect(minSubArrayLen(target, nums)).toBe(res);
		expect(minSubArrayLen1(target, nums)).toBe(res);
	});
});
