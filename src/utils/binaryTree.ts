/*
 * @Author: Rock Chang
 * @Date: 2022-06-11 17:20:22
 * @LastEditTime: 2022-06-11 22:44:32
 * @Description: 二叉树
 */

export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/** 二叉树前序遍历 */
export function preOrderTraverse(node: TreeNode | null): number[] {
	const arr: number[] = [];
	function order(node: TreeNode | null) {
		if (node === null) return;
		arr.push(node.val);
		order(node.left);
		order(node.right);
	}
	order(node);
	return arr;
}
/** 二叉树中序遍历 */
export function inOrderTraverse(node: TreeNode | null): number[] {
	const arr: number[] = [];
	function order(node: TreeNode | null) {
		if (node === null) return;
		order(node.left);
		arr.push(node.val);
		order(node.right);
	}
	order(node);
	return arr;
}
/** 二叉树后序遍历 */
export function postOrderTraverse(node: TreeNode | null): number[] {
	const arr: number[] = [];
	function order(node: TreeNode | null) {
		if (node === null) return;
		order(node.left);
		order(node.right);
		arr.push(node.val);
	}
	order(node);
	return arr;
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

/* 功能测试 */
// console.log('[  ]-77', preOrderTraverse(tree));
// console.log('[  ]-77', inOrderTraverse(tree));
// console.log('[  ]-77', postOrderTraverse(tree));
