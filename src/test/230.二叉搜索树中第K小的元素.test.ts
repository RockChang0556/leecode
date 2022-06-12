import { kthSmallest } from '@/list/230.二叉搜索树中第K小的元素';
import { TreeNode } from '@/utils/binaryTree';

const tree: TreeNode = {
	val: 5,
	left: {
		val: 3,
		left: {
			val: 2,
			left: null,
			right: null,
		},
		right: {
			val: 4,
			left: null,
			right: null,
		},
	},
	right: {
		val: 7,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 8,
			left: null,
			right: null,
		},
	},
};

describe('230.二叉搜索树中第K小的元素', () => {
	it('正常情况', () => {
		const k = 2;
		const rs = 3;
		expect(kthSmallest(tree, k)).toBe(rs);
	});
	it('找不到情况', () => {
		const k = 1000;
		const rs = null;
		expect(kthSmallest(tree, k)).toBe(rs);
	});
});
