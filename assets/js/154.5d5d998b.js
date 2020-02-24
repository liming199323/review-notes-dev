(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{367:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p",[t._v("Java 核心知识专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),s("a",{attrs:{href:"https://review-notes.top/language/java-core/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识 "),s("OutboundLink")],1)]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#一、oracle-官方对-null-的描述"}},[t._v("一、Oracle 官方对 null 的描述")])]),s("li",[s("a",{attrs:{href:"#二、字节码中与-null-相关的指令"}},[t._v("二、字节码中与 null 相关的指令")])]),s("li",[s("a",{attrs:{href:"#三、java-中对-null-的理解"}},[t._v("三、Java 中对 null 的理解")])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])]),s("li",[s("a",{attrs:{href:"#专栏更多文章笔记"}},[t._v("专栏更多文章笔记")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"一、oracle-官方对-null-的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、oracle-官方对-null-的描述"}},[t._v("#")]),t._v(" 一、Oracle 官方对 null 的描述")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html#jls-4.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Kinds of Types and Values"),s("OutboundLink")],1),t._v(" 中说明，在实践中，程序员可以忽略 null 类型，而只是假装 null 只是可以是任何引用类型的特殊文字。")]),t._v(" "),s("h2",{attrs:{id:"二、字节码中与-null-相关的指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、字节码中与-null-相关的指令"}},[t._v("#")]),t._v(" 二、字节码中与 null 相关的指令")]),t._v(" "),s("p",[t._v("从字节码的角度看，仅有三个与 null 相关的指令：")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.aconst_null",target:"_blank",rel:"noopener noreferrer"}},[t._v("aconst_null"),s("OutboundLink")],1),t._v("：将 null 对象压入操作数堆栈")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.ifnull",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifnull"),s("OutboundLink")],1),t._v("：为 null 时跳转")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.ifnonnull",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifnonnull"),s("OutboundLink")],1),t._v("：不为 null 时跳转")])])]),t._v(" "),s("p",[t._v("HotSpot 对这 aconst_null 指令的实现，表明最终我们的 null 操作的是 c/c++ 中的「NULL」：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CASE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_aconst_null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SET_STACK_OBJECT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压栈操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UPDATE_PC_AND_TOS_AND_CONTINUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("C++ Null 指针说明：")])]),t._v(" "),s("p",[t._v("在变量声明的时候，如果没有确切的地址可以赋值，为指针变量赋一个 NULL 值是一个良好的编程习惯。赋为 NULL 值的指针被称为空指针。")]),t._v(" "),s("p",[t._v("NULL 指针是一个定义在标准库中的值为零的常量。在大多数的操作系统上，程序不允许访问地址为 0 的内存，因为该内存是操作系统保留的。然而，内存地址 0 有特别重要的意义，它表明该指针不指向一个可访问的内存位置。但按照惯例，如果指针包含空值（零值），则假定它不指向任何东西。")]),t._v(" "),s("h2",{attrs:{id:"三、java-中对-null-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、java-中对-null-的理解"}},[t._v("#")]),t._v(" 三、Java 中对 null 的理解")]),t._v(" "),s("p",[t._v("我们声明一个对象，比如 "),s("code",[t._v("Object o;")]),t._v(" 在声明时虚拟机不确定 o 这个引用指针到底哪一块数据区域，因此默认赋值给 null。表示有一个对象指针，但是还没有确定要指向哪里。")]),t._v(" "),s("p",[t._v("现在我们可能会想那我们声明后直接指向一个对象不行吗？是可以，这也是一个好习惯，能避免空指针异常。但是有时候我们确实需要在构造函数或者方法中根据其他变量的不同情况来确认对象的内容，或者确认不同的接口实现类。")]),t._v(" "),s("p",[t._v("假设我们不用 null 这个特殊的符号代替。我们让系统如何表示？用 -1？如果默认-1，那在操作对象的时候 -1 该不该参与运算！")]),t._v(" "),s("p",[t._v("索性就把内存地址里的 0 这个特殊的地址作为一个特殊标识。这个地址 0 受到系统保护，程序不能进行写操作。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("null 不是任何实例。null 仅仅是一个标识符，标识这个对象还没初始化。")]),t._v(" "),s("p",[t._v("可以试着编译下面的类，然后 "),s("code",[t._v("javap -c -p -v Null.class")]),t._v(" 查看相关字节码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nullObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-null-pointers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("C++ Null 指针 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/2707322/what-is-null-in-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("what-is-null-in-java"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/55437438",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于 aconst_null 和 nop 的一点疑惑？"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"专栏更多文章笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#专栏更多文章笔记"}},[t._v("#")]),t._v(" 专栏更多文章笔记")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);