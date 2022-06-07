import { isValid1 } from '@/list/20.有效的括号';

describe('20.有效的括号', () => {
	it('一对一对出现的', () => {
		const str = '[]{}()';
		expect(isValid1(str)).toBe(true);
	});
	it('嵌套出现的', () => {
		const str = '[]{()}';
		expect(isValid1(str)).toBe(true);
	});
	it('字符串为空', () => {
		const str = '';
		expect(isValid1(str)).toBe(true);
	});
	it('括号顺序不一致', () => {
		const str = '{[]}({)}';
		expect(isValid1(str)).toBe(false);
	});
	it('相同括号类型个数不一样', () => {
		const str = '{}(){';
		expect(isValid1(str)).toBe(false);
	});
});
