import { totalFruit } from '@/list/904.水果成篮';

describe('904.水果成篮', () => {
	it('正常情况', () => {
		const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
		const fruits1 = [1, 0, 1, 4, 1, 4, 1, 2, 3];
		expect(totalFruit(fruits)).toBe(5);
		expect(totalFruit(fruits1)).toBe(5);
	});
	it('只有一种果树', () => {
		const fruits = [1, 1, 1, 1];
		expect(totalFruit(fruits)).toBe(4);
	});
	it('边界情况, 没有果树', () => {
		const fruits: number[] = [];
		expect(totalFruit(fruits)).toBe(0);
	});
});
