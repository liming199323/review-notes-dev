(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{428:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p",[t._v("Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/language/scala-basis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scala 编程语言 "),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在参数列表的开头添加了 "),a("code",[t._v("implicit")]),t._v(" 关键字，该参数列表里的参数即为隐式参数。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个方法只能有一个隐式参数列表，隐式参数列表中可以定义多个隐式参数。")])]),t._v(" "),a("li",[a("p",[t._v("在调用方法时，如果没有为隐式参数列表传入值，Scala 会为其自动匹配相应类型的隐式值。")])]),t._v(" "),a("li",[a("p",[t._v("隐式参数列表只能是最后一个参数列表。")])]),t._v(" "),a("li",[a("p",[t._v("Scala 在调用包含有隐式参数块的方法时，将首先查找可以直接访问的隐式定义和隐式参数。")])]),t._v(" "),a("li",[a("p",[t._v("其次是在所有伴生对象中查找与隐式候选类型相关的有隐式标记的成员。")])])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" A\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" A\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" ImplicitTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐式参数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" stringMonoid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x concat y\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐式参数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" intMonoid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐式参数 m，如果可以找到隐式 Monoid[A] 用于隐式参数 m，我们在调用 sum 方法时只需要传入 xs 参数。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Monoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEmpty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unit\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scala 会在上下文寻找隐式值")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 List(1,2,3) 的类型为 List[Int]，并且只传入了 xs，因此会寻找 Monoid[Int] 的隐式参数")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// intMonoid 是一个隐式定义，可以在 main 中直接访问。并且它的类型也正确，因此它会被自动传递给 sum 方法")]),t._v("\n      println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 由于 List("a", "b", "c") 的类型为 List[String]，并且只传入了 xs，因此会寻找 Monoid[String] 的隐式参数')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stringMonoid 是一个隐式定义，可以在 main 中直接访问。并且它的类型也正确，因此它会被自动传递给 sum 方法")]),t._v("\n      println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// abc")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);