import { minWindow } from '@/list/76.最小覆盖子串';

describe('76.最小覆盖子串', () => {
	it('正常情况', () => {
		const s = 'ADOBECODEBANC';
		const t = 'ABC';
		expect(minWindow(s, t)).toBe('BANC');
	});
	it('整个字符串 s 是最小覆盖子串', () => {
		const s = 'a';
		const t = 'a';
		expect(minWindow(s, t)).toBe('a');
	});
	it('t字符数大于s', () => {
		const s = 'a';
		const t = 'aa';
		expect(minWindow(s, t)).toBe('');
	});
});
