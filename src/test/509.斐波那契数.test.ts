import { fib, fib1 } from '@/list/509.斐波那契数';

describe('509.斐波那契数', () => {
	it('正常情况', () => {
		const k = 10;
		const rs = 55;
		expect(fib(k)).toBe(rs);
		expect(fib1(k)).toBe(rs);
	});
	it('n为0或1', () => {
		expect(fib(0)).toBe(0);
		expect(fib1(0)).toBe(0);

		expect(fib(1)).toBe(1);
		expect(fib1(1)).toBe(1);
	});
});
