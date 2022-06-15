import {
	countBinarySubstrings,
	countBinarySubstrings1,
} from '@/list/696.计数二进制子串';

describe('696.计数二进制子串', () => {
	it('多个连续', () => {
		const s = '1100011100';
		const rs = 7;
		expect(countBinarySubstrings(s)).toBe(rs);
		expect(countBinarySubstrings1(s)).toBe(rs);
	});
	it('单个连续', () => {
		const s = '10101';
		const rs = 4;
		expect(countBinarySubstrings(s)).toBe(rs);
		expect(countBinarySubstrings1(s)).toBe(rs);
	});
	it('字符串长度为1', () => {
		const s = '1';
		const rs = 0;
		expect(countBinarySubstrings(s)).toBe(rs);
		expect(countBinarySubstrings1(s)).toBe(rs);
	});
});
