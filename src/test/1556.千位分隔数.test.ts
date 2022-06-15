import { thousandSeparator, thousandSeparator1 } from '@/list/1556.千位分隔数';

describe('1556.千位分隔数', () => {
	it('正常情况', () => {
		const num = 123456;
		const rs = '123,456';
		expect(thousandSeparator(num)).toBe(rs);
		expect(thousandSeparator1(num)).toBe(rs);

		const num1 = 1234567;
		const rs1 = '1,234,567';
		expect(thousandSeparator(num1)).toBe(rs1);
		expect(thousandSeparator1(num1)).toBe(rs1);
	});
	it('少于三位', () => {
		const num = 12;
		const rs = '12';
		expect(thousandSeparator(num)).toBe(rs);
		expect(thousandSeparator1(num)).toBe(rs);
	});
});
