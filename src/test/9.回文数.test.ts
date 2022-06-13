import { isPalindrome, isPalindrome1, isPalindrome2 } from '@/list/9.回文数';

describe('9.回文数', () => {
	it('正数, 是回文', () => {
		const num = 101;
		const rs = true;
		expect(isPalindrome(num)).toBe(rs);
		expect(isPalindrome1(num)).toBe(rs);
		expect(isPalindrome2(num)).toBe(rs);
	});
	it('负数', () => {
		const num = -101;
		const rs = false;
		expect(isPalindrome(num)).toBe(rs);
		expect(isPalindrome1(num)).toBe(rs);
		expect(isPalindrome2(num)).toBe(rs);
	});
	it('正数, 不是回文', () => {
		const num = 10;
		const rs = false;
		expect(isPalindrome(num)).toBe(rs);
		expect(isPalindrome1(num)).toBe(rs);
		expect(isPalindrome2(num)).toBe(rs);
	});
});
