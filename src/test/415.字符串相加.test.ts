import { addStrings } from '@/list/415.字符串相加';

describe('415.字符串相加', () => {
	it('两个数位数相等', () => {
		const num1 = '11';
		const num2 = '99';
		const rs = '110';
		expect(addStrings(num1, num2)).toBe(rs);
	});
	it('两个数位数不等', () => {
		const num1 = '456';
		const num2 = '99';
		const rs = '555';
		expect(addStrings(num1, num2)).toBe(rs);
	});
	it('两个数有一个是 0', () => {
		const num1 = '0';
		const num2 = '99';
		const rs = '99';
		expect(addStrings(num1, num2)).toBe(rs);
	});
	it('两个数都是 0', () => {
		const num3 = '0';
		const num4 = '0';
		const rs1 = '0';
		expect(addStrings(num3, num4)).toBe(rs1);
	});
});
