/*
 * @Author: Rock Chang
 * @Date: 2022-05-22 14:44:14
 * @LastEditTime: 2022-05-22 14:57:35
 * @Description: 两个数组实现简单队列
 */
export class MyQueue {
	private stack1: number[] = [];
	private stack2: number[] = [];
	/* 
    入队
  */
	add(n: number) {
		this.stack1.push(n);
	}
	/**  出队
	 * @return {number | null} 若队列为空时出队,则返回null,否则返回出队的那个值
	 */
	delete(): number | null {
		let res;
		const stack1 = this.stack1;
		const stack2 = this.stack2;

		// 1. 将 stack1 的所有元素移动到 stack2 中
		while (stack1.length) {
			const n = stack1.pop();
			if (n !== undefined) {
				stack2.push(n);
			}
		}
		// 2. stack2 pop
		res = stack2.pop();
		// 3. 将 stack2 所有元素'还给' stack1
		while (stack2.length) {
			const n = stack2.pop();
			if (n !== undefined) {
				stack1.push(n);
			}
		}
		return res || null;
	}
	/* 
    获取队列长度 
    */
	get length(): number {
		return this.stack1.length;
	}
}

const q = new MyQueue();
q.add(100);
q.add(200);
q.add(300);
console.log('[  ]-55', q.length);
console.log('[ q.delete() ]-56', q.delete());
console.log('[  ]-55', q.length);
