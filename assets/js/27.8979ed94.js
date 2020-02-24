(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{240:function(t,r,a){"use strict";a.r(r);var e=a(12),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/leetcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-数据结构"}},[t._v("1.数据结构")])]),a("li",[a("a",{attrs:{href:"#_2-逻辑结构"}},[t._v("2.逻辑结构")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-逻辑结构的分类"}},[t._v("2.1 逻辑结构的分类")])]),a("li",[a("a",{attrs:{href:"#_2-2-常见的数据逻辑结构层次关系图"}},[t._v("2.2 常见的数据逻辑结构层次关系图")])])])]),a("li",[a("a",{attrs:{href:"#_3-存储结构"}},[t._v("3.存储结构")])]),a("li",[a("a",{attrs:{href:"#_4-逻辑结构和存储结构的区别"}},[t._v("4.逻辑结构和存储结构的区别")])]),a("li",[a("a",{attrs:{href:"#参考"}},[t._v("参考")])]),a("li",[a("a",{attrs:{href:"#专栏更多文章笔记"}},[t._v("专栏更多文章笔记")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据结构"}},[t._v("#")]),t._v(" 1.数据结构")]),t._v(" "),a("p",[t._v("相互之间存在一种或多种特定关系的数据元素的集合称为「数据结构」。按照视点的不同，数据结构可以分为「逻辑结构」和「存储结构」。")]),t._v(" "),a("h2",{attrs:{id:"_2-逻辑结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-逻辑结构"}},[t._v("#")]),t._v(" 2.逻辑结构")]),t._v(" "),a("p",[t._v("数据对象中数据元素之间的相互关系称为「逻辑结构」。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-逻辑结构的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-逻辑结构的分类"}},[t._v("#")]),t._v(" 2.1 逻辑结构的分类")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84_4%E7%A7%8D%E5%9F%BA%E6%9C%AC%E6%9C%BA%E6%9E%84%E5%85%B3%E7%B3%BB%E5%9B%BE.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("线性结构：\n数据元素之间是一对一的关系。")])]),t._v(" "),a("li",[a("p",[t._v("树形结构：\n数据元素之间存在一种一对多的层次关系。")])]),t._v(" "),a("li",[a("p",[t._v("图形结构：\n数据元素是多对多的关系。")])]),t._v(" "),a("li",[a("p",[t._v("集合结构：\n数据元素除了同属于一个集合外，他们之间没有其他关系。  各数据元素之间是平等的，共同属性是“同属于一个集合”。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-常见的数据逻辑结构层次关系图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-常见的数据逻辑结构层次关系图"}},[t._v("#")]),t._v(" 2.2 常见的数据逻辑结构层次关系图")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84_%E9%80%BB%E8%BE%91%E7%BB%93%E6%9E%84%E5%85%B3%E7%B3%BB%E5%9B%BE.png"}})]),t._v(" "),a("h2",{attrs:{id:"_3-存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-存储结构"}},[t._v("#")]),t._v(" 3.存储结构")]),t._v(" "),a("p",[t._v("逻辑结构指的是数据间的关系，而存储结构是逻辑结构的存储映像。通俗的讲，可以将存储结构理解为逻辑结构用计算机语言的实现。常见的存储结构有顺序存储、链式存储、索引存储以及散列存储（哈希表）。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("顺序存储：将数据元素存放在地址连续的存储单元中，其数据间的逻辑关系与物理关系是一致的。常见的数组采用顺序存储结构。优点：节省空间，可以实现随机存取；缺点：插入、删除时需要移动元素，效率低。")])]),t._v(" "),a("li",[a("p",[t._v("链式存储：将数据元素存放在任意的存储单元里，这组存储单元可以是连续的，也可以是不连续的。常见的链表采用链式存储结构。优点：插入、删除灵活；缺点：不能随机存取，查找速度慢。")])])]),t._v(" "),a("h2",{attrs:{id:"_4-逻辑结构和存储结构的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-逻辑结构和存储结构的区别"}},[t._v("#")]),t._v(" 4.逻辑结构和存储结构的区别")]),t._v(" "),a("p",[t._v("这两者并不冲突，一个指的是数据之间的关系，而另一个指这种关系在计算机中的表现形式。")]),t._v(" "),a("p",[t._v("比如，线性表中的栈，数据元素之间的关系是一对一的，除头和尾结点之外的每个结点都有唯一的前驱和唯一的后继，这体现的是逻辑结构；"),a("br"),t._v("\n而对于栈中的结点来说，它们可以顺序存储（也就是顺序栈），取一段连续的存储空间，将栈结点按顺序存入，每个结点和其前驱和后继在物理上都是相邻的。"),a("br"),t._v("\n同时，栈结点也可以链式存储（链栈），每个结点中包括数据域和指针域，而指针域就是用来指向其后继的，在访问时就可以通过指针来找到其后继进行访问，每个结点之间物理上可以相邻也可以不相邻。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[t._v("《大话数据结构》 程杰著")])]),t._v(" "),a("h2",{attrs:{id:"专栏更多文章笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专栏更多文章笔记"}},[t._v("#")]),t._v(" 专栏更多文章笔记")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/104368031",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构与算法-专栏文章目录汇总 "),a("OutboundLink")],1)])])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);r.default=s.exports}}]);