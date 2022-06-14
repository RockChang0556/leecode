import { reverseWords, reverseWords1 } from '@/list/557.反转字符串中的单词 III';

describe('557.反转字符串中的单词 III', () => {
	it('正常情况', () => {
		const str = "Let's take LeetCode contest";
		const rs = "s'teL ekat edoCteeL tsetnoc";
		expect(reverseWords(str)).toBe(rs);
		expect(reverseWords1(str)).toBe(rs);
	});
	it('只有一个单词', () => {
		const str = 'take';
		const rs = 'ekat';
		expect(reverseWords(str)).toBe(rs);
		expect(reverseWords1(str)).toBe(rs);
	});
});
