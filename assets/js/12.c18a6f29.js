(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{225:function(t,e,v){"use strict";v.r(e);var r=v(12),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("p",[t._v("专栏原创出处："),v("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),v("OutboundLink")],1),t._v(" ，"),v("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),v("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),v("p",[t._v("计算机理论专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),v("a",{attrs:{href:"https://review-notes.top/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机理论 "),v("OutboundLink")],1)]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#移位运算"}},[t._v("移位运算")])])])]),v("p"),t._v(" "),v("p",[t._v("TODO 主要介绍以下位运算符，及每个运算符的作用应用场景")]),t._v(" "),v("ul",[v("li",[t._v("按位与\t\ta & b")]),t._v(" "),v("li",[t._v("按位或 \ta | b")]),t._v(" "),v("li",[t._v("按位异或\t\ta ^ b")]),t._v(" "),v("li",[t._v("按位取反\t\t~a")]),t._v(" "),v("li",[t._v("左移\t\ta << b")]),t._v(" "),v("li",[t._v("带符号右移\ta >> b")]),t._v(" "),v("li",[t._v("无符号右移\t\ta>>> b")])]),t._v(" "),v("p",[t._v("https://baike.baidu.com/item/%E4%BD%8D%E8%BF%90%E7%AE%97/6888804?fr=aladdin")]),t._v(" "),v("h2",{attrs:{id:"移位运算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移位运算"}},[t._v("#")]),t._v(" 移位运算")]),t._v(" "),v("p",[t._v("移位运算是将二进制数值的各位数进行左右移位。")]),t._v(" "),v("ul",[v("li",[t._v("向左移即向高位方向移动，移动几位数值将变大几倍，"),v("code",[t._v("x << 2")])]),t._v(" "),v("li",[t._v("向右移即向高低方向移动，移动几位数值将减小几倍，"),v("code",[t._v("x >> 2")])])]),t._v(" "),v("p",[t._v("移动过程中，被溢出的数怎么处理？计算机直接将他们丢弃。")]),t._v(" "),v("p",[t._v("移动过程中，空出来的位数怎么处理？")]),t._v(" "),v("ul",[v("li",[t._v("算术运算时（带符号的数值运算）：\n"),v("ul",[v("li",[t._v("左移是，低位补 0")]),t._v(" "),v("li",[t._v("右移时，如果数值是负数（补码）时高位补 1，如果是正数高位补 0（理解为乘法运算不改变正负符号）")])])]),t._v(" "),v("li",[t._v("逻辑运算时（e.g. 图形模式的展示）：\n"),v("ul",[v("li",[t._v("左移是，低位补 0")]),t._v(" "),v("li",[t._v("右移时，高位补 0")])])])]),t._v(" "),v("p",[t._v("8 位的二进制扩充为 16 位的二进制？")]),t._v(" "),v("ul",[v("li",[t._v("正数时，高位直接补 0")]),t._v(" "),v("li",[t._v("补码时，高位直接补 1\n总结为：不管是正数还是补码表示的负数，只需用符号位的值（0 或 1）填充高位即可。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);