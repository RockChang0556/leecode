/*
 * @Author: Rock Chang
 * @Date: 2022-06-11 22:45:31
 * @LastEditTime: 2022-06-12 12:00:02
 * 
  230. 二叉搜索树中第K小的元素
  给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
  示例 1：
    输入：root = [3,1,4,null,2], k = 1
    输出：1
  示例 2：
    输入：root = [5,3,6,2,4,null,null,1], k = 3
    输出：3
  提示：
    树中的节点数为 n 。
    1 <= k <= n <= 104
    0 <= Node.val <= 104
  进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 */

import { TreeNode, inOrderTraverse } from '@/utils/binaryTree';

/** 返回树的中序遍历结果的第 k 个元素 */
export function kthSmallest(root: TreeNode | null, k: number): number | null {
	const arr = inOrderTraverse(root);
	return arr[k - 1] || null;
}

/* const tree: TreeNode = {
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
}; */

// console.log('[ 1 ]-62', kthSmallest(tree, 4));
