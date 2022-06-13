import { quickSort, quickSort1 } from '@/another/1.快速排序';
import cloneDeep from 'lodash/cloneDeep';

describe('1446.连续字符', () => {
	it('正常情况', () => {
		const arr = [9, 5, 2, 1, 7, 4, 8, 3, 6];
		const rs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		expect(quickSort(cloneDeep(arr))).toEqual(rs);
		expect(quickSort1(cloneDeep(arr))).toEqual(rs);
	});
	it('有负数', () => {
		const arr = [-9, 5, 2, 1, 7, 4, 8, 3, 6];
		const rs = [-9, 1, 2, 3, 4, 5, 6, 7, 8];
		expect(quickSort(cloneDeep(arr))).toEqual(rs);
		expect(quickSort1(cloneDeep(arr))).toEqual(rs);
	});
	it('边界情况, 数组元素都一样', () => {
		const arr = [2, 2, 2, 2];
		const rs = [2, 2, 2, 2];
		expect(quickSort(cloneDeep(arr))).toEqual(rs);
		expect(quickSort1(cloneDeep(arr))).toEqual(rs);
	});
	it('边界情况, 数组为空', () => {
		const arr: number[] = [];
		const rs: number[] = [];
		expect(quickSort(cloneDeep(arr))).toEqual(rs);
		expect(quickSort1(cloneDeep(arr))).toEqual(rs);
	});
});
