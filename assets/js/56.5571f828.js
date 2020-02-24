(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{267:function(t,a,s){"use strict";s.r(a);var r=s(12),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/leetcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-数组"}},[t._v("1.数组")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-数组的特点"}},[t._v("1.1 数组的特点")])]),s("li",[s("a",{attrs:{href:"#_1-2-为什么下标从-0-开始"}},[t._v("1.2 为什么下标从 0 开始")])]),s("li",[s("a",{attrs:{href:"#_1-3-多维数组"}},[t._v("1.3 多维数组")])]),s("li",[s("a",{attrs:{href:"#_1-4-动态数组"}},[t._v("1.4 动态数组")])])])]),s("li",[s("a",{attrs:{href:"#_2-字符串"}},[t._v("2. 字符串")])]),s("li",[s("a",{attrs:{href:"#_3-数组字符串算法总结"}},[t._v("3.数组字符串算法总结")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-双指针技巧"}},[t._v("3.1 双指针技巧")])])])]),s("li",[s("a",{attrs:{href:"#_4-算法实践"}},[t._v("4.算法实践")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数组"}},[t._v("#")]),t._v(" 1.数组")]),t._v(" "),s("p",[t._v("数组是一种基本的数据结构，用于按顺序存储元素的集合。但是元素可以随机存取，因为数组中的每个元素都可以通过数组索引来识别。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/data-structures-array.png",height:"200px"}})]),t._v(" "),s("ul",[s("li",[t._v("索引（indexes）：元素在数据中的位置，从 0 开始。")]),t._v(" "),s("li",[t._v("元素（elements）：存储在数组的项目为元素，可以通过索引访问。")]),t._v(" "),s("li",[t._v("长度（length）：数组可以存储的元素个数。")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-数组的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数组的特点"}},[t._v("#")]),t._v(" 1.1 数组的特点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("固定大小。因为采用顺序存储结构，需要连续的内存空间，初始化时必须指定长度。")])]),t._v(" "),s("li",[s("p",[t._v("数组仅支持查询与修改操作。")])]),t._v(" "),s("li",[s("p",[t._v("查询修改快。连续的内存空间可直接采用「基地址 + i * data_size」寻址。")])]),t._v(" "),s("li",[s("p",[t._v("插入删除慢。因为操作后需要移动其余的元素。")])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-为什么下标从-0-开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-为什么下标从-0-开始"}},[t._v("#")]),t._v(" 1.2 为什么下标从 0 开始")]),t._v(" "),s("p",[t._v("上述特点中数组查询方式的寻址方式决定，使用 0 可减少 CPU 操作。如果是从 1 开始，"),s("code",[t._v("a[i] = 基地址 + （i-1）* data_size")]),t._v(" 多了一个减法指令。")]),t._v(" "),s("h3",{attrs:{id:"_1-3-多维数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-多维数组"}},[t._v("#")]),t._v(" 1.3 多维数组")]),t._v(" "),s("p",[t._v("平常我们一般所说的数组是一维数组。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("定义一个二维数组如下。\n[\n [ 1, 2, 3 ],\n [ 4, 5, 6 ],\n [ 7, 8, 9 ]\n]\n")])])]),s("p",[t._v("因为多维关系与一维存储地址之间存在唯一的映射问题，需要对高维数组元素的存放次序进行约定。n 维数组通常有两种存放次序：")]),t._v(" "),s("ul",[s("li",[t._v("按行优先顺序：将高位数组元素按行向量的顺序存储，第 i+1 个行向量存储在第 i 个行向量之后。")]),t._v(" "),s("li",[t._v("按列优先顺序：将数组元素按列向量的顺序存储，第 i+1 个列向量存储在第 i 个列向量之后。")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-动态数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-动态数组"}},[t._v("#")]),t._v(" 1.4 动态数组")]),t._v(" "),s("p",[t._v("因为数组是固定大小的，实际编程中数据内容的大小我们不确定，需要根据实际情况动态扩展。")]),t._v(" "),s("p",[t._v("大多数编程语言都提供内置的动态数组，它仍然是一个随机存取的列表数据结构，但大小是可变的。例如，在 C++ 中的 vector，以及在 Java 中的 ArrayList。")]),t._v(" "),s("h2",{attrs:{id:"_2-字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串"}},[t._v("#")]),t._v(" 2. 字符串")]),t._v(" "),s("p",[t._v("字符串实际上是一个字符数组。通常编程操作中离不开字符串操作，语言本身为我们提供了字符串的常用方法。对于字符串的操作一般底层操作字符数组完成。")]),t._v(" "),s("h2",{attrs:{id:"_3-数组字符串算法总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-数组字符串算法总结"}},[t._v("#")]),t._v(" 3.数组字符串算法总结")]),t._v(" "),s("h3",{attrs:{id:"_3-1-双指针技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-双指针技巧"}},[t._v("#")]),t._v(" 3.1 双指针技巧")]),t._v(" "),s("p",[s("strong",[t._v("技巧一：")]),t._v(" 对撞指针，两个指针从两端向中间迭代")]),t._v(" "),s("p",[t._v("关键词：反转")]),t._v(" "),s("p",[t._v("经典示例：反转数组中的元素")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("N")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("N")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is a self-defined function")]),t._v("\n        i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("技巧二：")]),t._v(" 滑动窗口，一个快指针，一个慢指针")]),t._v(" "),s("p",[t._v("关键词：移除、重置、包含子串")]),t._v(" "),s("p",[t._v("经典示例：给定一个数组和一个值，原地删除该值的所有实例并返回新的长度")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            k"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-算法实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-算法实践"}},[t._v("#")]),t._v(" 4.算法实践")]),t._v(" "),s("p",[t._v("推荐完成")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/explore/learn/card/array-and-string/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode-探索-数组和字符串 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/explore/orignial/card/all-about-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode-探索-数组类算法 "),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.faceprep.in/procoder/knowledgebase/introduction-to-arrays/",target:"_blank",rel:"noopener noreferrer"}},[t._v("faceprep-introduction-to-arrays"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/explore/learn/card/array-and-string/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leetcode-数组和字符串 "),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("更多相关专栏内容汇总：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/104368031",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构与算法-专栏文章目录汇总 "),s("OutboundLink")],1)])])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);