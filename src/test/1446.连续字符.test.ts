import { maxPower, maxPower1 } from '@/list/1446.连续字符';

describe('1446.连续字符', () => {
	it('正常情况', () => {
		const s = 'abbcccddddeeeeedecba';
		const rs = 5;
		expect(maxPower(s)).toBe(rs);
		expect(maxPower1(s)).toBe(rs);
	});
	it('空字符串', () => {
		const s = '';
		const rs = 0;
		expect(maxPower(s)).toBe(rs);
		expect(maxPower1(s)).toBe(rs);
	});
	it('边界情况, 无连续字符', () => {
		const s = 'abcdefghijk';
		const rs = 1;
		expect(maxPower(s)).toBe(rs);
		expect(maxPower1(s)).toBe(rs);
	});
	it('边界情况, 全都是连续字符', () => {
		const s = 'aaaaaaaaaa';
		const rs = 10;
		expect(maxPower(s)).toBe(rs);
		expect(maxPower1(s)).toBe(rs);
	});
});
