(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{319:function(t,a,s){"use strict";s.r(a);var r=s(12),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/spark-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/spark-advanced",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-什么是共享变量"}},[t._v("1. 什么是共享变量")])]),s("li",[s("a",{attrs:{href:"#_2-广播变量"}},[t._v("2. 广播变量")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-什么是广播变量"}},[t._v("2.1.什么是广播变量")])]),s("li",[s("a",{attrs:{href:"#_2-2-如何使用广播变量"}},[t._v("2.2.如何使用广播变量")])])])]),s("li",[s("a",{attrs:{href:"#_3-累加器"}},[t._v("3. 累加器")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-什么是累加器"}},[t._v("3.1.什么是累加器")])]),s("li",[s("a",{attrs:{href:"#_3-2-如何使用累加器"}},[t._v("3.2.如何使用累加器")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-什么是共享变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是共享变量"}},[t._v("#")]),t._v(" 1. 什么是共享变量")]),t._v(" "),s("p",[t._v("默认情况下，在一个对 RDD 操作的算子中如果使用到了外部 Driver 端定义的变量，这些变量将会被发送到每一个 Task 中，算子中的操作都是针对的这些变量的副本，并不会将结果更新到其他 Task 中，也不会更新到 Driver 端。在各任务之间支持通用的读写共享变量的效率是非常低的，但是 Spark 提供了两种常用的有限类型的共享变量：广播变量和累加器。")]),t._v(" "),s("h2",{attrs:{id:"_2-广播变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-广播变量"}},[t._v("#")]),t._v(" 2. 广播变量")]),t._v(" "),s("h3",{attrs:{id:"_2-1-什么是广播变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是广播变量"}},[t._v("#")]),t._v(" 2.1.什么是广播变量")]),t._v(" "),s("p",[t._v("广播变量是由开发人员手动配置，将某个只读的变量广播到每个计算节点，每个计算节点上的所有 Task 使用这一个广播变量。同时 Spark 还采用了高效的广播算法分发这些变量，以减少网络传输上的开销。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("广播变量是只读属性的，无法改变它的值。")])]),t._v(" "),s("li",[s("p",[t._v("由于闭包是将变量发送到了每一个 Task 中，当需要使用的变量是一个比较大的变量时，采用广播变量的方式要优于闭包的方式，可以有效地减少网络的传输和 Executor 端内存的占用。")])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-如何使用广播变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-如何使用广播变量"}},[t._v("#")]),t._v(" 2.2.如何使用广播变量")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Driver 端广播一个变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" broadcastVar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("broadcast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrdd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 RDD 算子中获取广播变量")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" broadcastGet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" broadcastVar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-累加器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-累加器"}},[t._v("#")]),t._v(" 3. 累加器")]),t._v(" "),s("h3",{attrs:{id:"_3-1-什么是累加器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是累加器"}},[t._v("#")]),t._v(" 3.1.什么是累加器")]),t._v(" "),s("p",[t._v("累加器是一个在 Driver 端定义的工具，主要用于所有计算节点上对一个变量进行的共享操作，比如实现计数器或求和的功能。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Spark 默认支持两种数字类型的累加器：Long 和 Double，开发人员可以通过继承 AccumulatorV2 来添加新类型的支持，自定义的时候结果类型可能与添加的元素类型不一致。")])]),t._v(" "),s("li",[s("p",[t._v("在 Task 中不能读取累加器的值，只有在 Driver 端才可以拿到累加器的值。")])]),t._v(" "),s("li",[s("p",[t._v("只有在触发了 action 动作之后，累加器的值才会更新。")])]),t._v(" "),s("li",[s("p",[t._v("Spark 保证每个任务只更新累加器一次，因此重启任务时，不会更新累加器的值；但是在任务运行中，如果某个 Task 或者 Stage 失败重试的时候，更新操作可能会执行多次。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-如何使用累加器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-如何使用累加器"}},[t._v("#")]),t._v(" 3.2.如何使用累加器")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Driver 端定义一个 Long 类型的累加器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" accum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longAccumulator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Accumulator"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在算子中使用累加器求和")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parallelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" accum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Driver 端获取累加器的值")]),t._v("\nprintln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print 10")]),t._v("\n")])])]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);