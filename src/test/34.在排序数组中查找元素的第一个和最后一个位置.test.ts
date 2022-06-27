/*
 * @Author: Rock Chang
 * @Date: 2022-06-28 00:04:04
 * @LastEditTime: 2022-06-28 00:39:35
 * @Description:
 */
import {
	searchRange,
	searchRange1,
} from '@/list/34.在排序数组中查找元素的第一个和最后一个位置';

describe('34.在排序数组中查找元素的第一个和最后一个位置', () => {
	it('目标在数组左边界外', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 3;
		const res = [-1, -1];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
	it('目标在数组左边界', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 5;
		const res = [0, 0];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
	it('目标在数组右边界外', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 13;
		const res = [-1, -1];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
	it('目标在数组右边界', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 10;
		const res = [5, 5];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
	it('目标在数组中', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 7;
		const res = [1, 2];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
	it('目标不在数组中', () => {
		const nums = [5, 7, 7, 8, 8, 10];
		const target = 9;
		const res = [-1, -1];
		expect(searchRange(nums, target)).toEqual(res);
		expect(searchRange1(nums, target)).toEqual(res);
	});
});
