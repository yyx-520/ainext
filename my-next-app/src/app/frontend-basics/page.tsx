export default function FrontendBasics() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">前端基础知识</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li className="flex items-start gap-2">
          <div className="shrink-0">1.</div>
          <div className="flex-1">
          <p className="font-medium">HTML 基础</p>
          <p className="text-sm text-gray-600">HTML 是构建网页的基础语言，用于定义网页的结构。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
          {`<div>Hello, World!</div>`}
        </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">2.</div>
          <div className="flex-1">
            <p className="font-medium">CSS 基础</p>
            <p className="text-sm text-gray-600">CSS 用于控制网页的样式和布局。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
            {`div {
    color: red;
  }`}
           </pre>
            <p className="text-sm text-gray-600">盒子模型: 页面渲染时, dom元素所采用的布局模型, 可通过box-sizing属性来控制。</p>
              <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
              {`div {
      box-sizing: border-box/content-box/padding-box/margin-box;
  }`}
            </pre>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">3.</div>
          <div className="flex-1">
          <p className="font-medium">JavaScript 基础</p>
          <p className="text-sm text-gray-600">JavaScript 是一种编程语言，用于为网页添加交互功能。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
            {`console.log('Hello, JavaScript!');`}
          </pre>
          <p className="text-sm text-gray-600">原型/构造函数/实例/原型链: 
            原型（prototype）是用于对象的属性继承，相当于是对象的父类，可用object.__proto__访问。
            构造函数是用new来构建一个对象的函数。
            实例是new和构造函数一起构建出来的对象，其通过__proto__指向原型，通过constructor指向构造函数。
            原型链: 由原型对象组成，每个对象都有__proto__属性，指向创建该对象的构造函数的原型对象，这些原型对象又有一个__proto__属性，指向另一个原型对象，依此类推，形成一个原型链。访问一个对象的属性时，如果该对象没有这属性，就会沿着原型链往上找，直到找到为止，如果到Object.prototype还没有找到，就会返回undefined。修改属性原则，只会修改实例上的属性，不会修改原型上的属性。如果修改原型的属性，所有实例都会受影响。
          </p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
            {`
             // 我们平常用的Object就是一个构造函数
             const obj = new Object() // obj就是一个实例
             // 原型实例的__proro__属性和构造函数的prototype是一个
             obj.__proro__ === Object.prototype
             // 构造函数，实例和原型的构造函数都是一个
             obj.constructor === Object === Object.prototype.constructor
`}
          </pre>
          <p className="text-sm text-gray-600">闭包&作用域: 
              1、闭包就是记住了它出生时的家，也就是作用域里面的变量。
              2、函数作用域：函数内部定义的变量只能在函数内部访问，外部无法访问。
              3、块级作用域：使用let和const定义的变量只能在块级作用域内访问，外部无法访问。
              4、全局作用域：在全局作用域中定义的变量可以在任何地方访问。
              5、闭包的作用：可以访问函数外部的变量，常用于数据封装和私有变量。
          </p>
          <p className="text-sm text-gray-600">var和let: 
              1、var是函数作用域，let是块级作用域在最近的{}或[]内。
              2、var可以重复声明，let不能重复声明
              3、var提升（值不会提升，会是undefinde）和let定义的变量会提升到顶部，但是let不会初始化，使用let定义的变量在声明之前访问会报错。
              4、var可以在声明前使用，let不可以。
              5、let在循环中使用时，每次循环都会创建一个新的作用域。 
          </p>
          <p className="text-sm text-gray-600">数组、map、set、对象的区别:
              1、数组（Array）：有序集合，可以通过索引访问元素，支持重复元素。
              2、Map：键值对集合，键可以是任意类型，保持插入顺序，支持重复键。
              3、Set：值的集合，保持插入顺序，不允许重复值。（不允许值重复）
              4、对象（Object）：键值对集合，键是字符串或Symbol，支持嵌套和复杂数据结构。
          </p>
            <p className="text-sm text-gray-600">数组寻找函数
              是否存在：some
              找第一个：find
              找索引：findIndex
              找所有：filter
              Map.groupBy 是 ECMAScript 2023（ES14）引入的新静态方法，用于根据分组规则把数组分组，并返回一个 Map，key 是分组标识，value 是分组后的元素数组
          </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <div className="shrink-0">4.</div>
          <div className="flex-1">
            <p className="font-medium">浏览器工作原理</p>
          <p className="text-sm text-gray-600">了解浏览器如何解析 HTML、CSS 和 JavaScript 并渲染网页。</p>
            <pre className="bg-gray-100 p-4 rounded mt-2 w-screen">
            {`// 浏览器渲染过程
1. 解析 HTML，构建 DOM 树。
2. 解析 CSS，构建 CSSOM 树。
3. 合并 DOM 和 CSSOM，生成渲染树。
4. 布局和绘制。`}
          </pre>
          </div>
        </li>
      </ol>
    </div>
  );
}
