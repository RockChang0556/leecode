/*
 * @Author: Rock Chang
 * @Date: 2021-07-01 17:05:44
 * @LastEditTime: 2022-01-22 13:25:52
 * @Description:
 */
module.exports = {
	// tab缩进大小,默认 2
	tabWidth: 2,
	// 使用tab缩进，默认 false
	useTabs: true,
	/*
    在语句的末尾打印分号。 默认 true
      true - 在每个语句的末尾添加一个分号。
      false - 只在可能引入ASI故障的行的开头添加分号。
  */
	semi: true,
	// 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
	singleQuote: true,
	// 行尾逗号,默认none,可选 none|es5|all
	// es5 包括es5中的数组、对象
	// all 包括函数对象等所有可选
	trailingComma: 'es5',
	// 对象中的空格 默认true
	// true: { foo: bar }
	// false: {foo: bar}
	bracketSpacing: true,
	// JSX标签闭合位置 默认false
	// false: <div
	//          className=""
	//          style={{}}
	//       >
	// true: <div
	//          className=""
	//          style={{}} >
	jsxBracketSameLine: false,
	// 箭头函数参数括号 默认avoid 可选 avoid| always
	// avoid 能省略括号的时候就省略 例如x => x
	// always 总是有括号
	arrowParens: 'always',
};
