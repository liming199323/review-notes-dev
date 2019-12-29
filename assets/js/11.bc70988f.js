(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(s,t,a){"use strict";a.r(t);var m=a(0),n=Object(m.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源笔记文件 "),a("OutboundLink")],1),s._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源码 "),a("OutboundLink")],1),s._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),s._v(" "),a("p",[s._v("计算机理论专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("计算机理论 "),a("OutboundLink")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#前提概念"}},[s._v("前提概念")]),a("ul",[a("li",[a("a",{attrs:{href:"#机器数"}},[s._v("机器数")])]),a("li",[a("a",{attrs:{href:"#机器数的真值"}},[s._v("机器数的真值")])]),a("li",[a("a",{attrs:{href:"#为什么计算机没有减法？"}},[s._v("为什么计算机没有减法？")])])])]),a("li",[a("a",{attrs:{href:"#原码"}},[s._v("原码")])]),a("li",[a("a",{attrs:{href:"#反码"}},[s._v("反码")])]),a("li",[a("a",{attrs:{href:"#补码"}},[s._v("补码")])]),a("li",[a("a",{attrs:{href:"#总结"}},[s._v("总结")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"前提概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提概念"}},[s._v("#")]),s._v(" 前提概念")]),s._v(" "),a("h3",{attrs:{id:"机器数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器数"}},[s._v("#")]),s._v(" 机器数")]),s._v(" "),a("p",[s._v("一个数在计算机中的二进制表示形式，叫做这个数的机器数。"),a("br"),s._v("\n机器数是带符号的，在计算机用机器数的最高位存放符号，正数为 0，负数为 1。")]),s._v(" "),a("blockquote",[a("p",[s._v("用一个 4 位的二进制表示，最高位是符号位，0001 换成十进制为 1 ，1001 换成十进制为 -1。本篇文章使用 4 位的二进制进行描述。")])]),s._v(" "),a("h3",{attrs:{id:"机器数的真值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器数的真值"}},[s._v("#")]),s._v(" 机器数的真值")]),s._v(" "),a("p",[s._v("因为第一位是符号位，所以机器数的形式值就不等于真正的数值。")]),s._v(" "),a("p",[s._v("例如：二进制 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1001")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),s._v(" ，高位的 1 是符号位，后面的 001 是真值。")]),s._v(" "),a("ul",[a("li",[s._v("以二进制数换算成十进制是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("3")])],1),a("mo",[s._v("+")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("0")])],1),a("mo",[s._v("=")]),a("mn",[s._v("9")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("2^3 + 2^0 = 9")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("9")])])])])]),s._v(" "),a("li",[s._v("以机器数的真值去换算成十进制是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("0")])],1),a("mo",[s._v("=")]),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("2^0 = -1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])])])]),s._v(" "),a("h3",{attrs:{id:"为什么计算机没有减法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么计算机没有减法？"}},[s._v("#")]),s._v(" 为什么计算机没有减法？")]),s._v(" "),a("p",[s._v('对于计算机，加减乘数已经是最基础的运算，要设计的尽量简单，计算机辨别"符号位"显然会让计算机的基础电路设计变得十分复杂。')]),s._v(" "),a("p",[s._v("于是人们想出了将符号位也参与运算的方法。我们知道，根据运算法则减去一个正数等于加上一个负数，即："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1 - 1 = 1 + (-1) = 0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])])]),s._v("， 所以机器可以只有加法而没有减法，这样计算机运算的设计就更简单了。")]),s._v(" "),a("h2",{attrs:{id:"原码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原码"}},[s._v("#")]),s._v(" 原码")]),s._v(" "),a("p",[s._v("原码就是符号位加上机器数的真值。")]),s._v(" "),a("h4",{attrs:{id:"问题一：减法运算结果错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题一：减法运算结果错误"}},[s._v("#")]),s._v(" 问题一：减法运算结果错误")]),s._v(" "),a("p",[s._v("我们做一个减法运算 ："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1 - 1 = 0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])])]),a("br"),s._v("\n换算成二进制加法运算 ："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("2")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0001 + 1001 = 1010(-2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("。发现居然结果是错误的。")]),s._v(" "),a("h4",{attrs:{id:"问题二：2-个-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题二：2-个-0"}},[s._v("#")]),s._v(" 问题二：2 个 0")]),s._v(" "),a("ul",[a("li",[s._v("0000 表示 +0")]),s._v(" "),a("li",[s._v("1000 表示 -0")])]),s._v(" "),a("p",[s._v("居然有 2 种 0 的表示方法，而且 0 带符号是没有任何意义的。")]),s._v(" "),a("h2",{attrs:{id:"反码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反码"}},[s._v("#")]),s._v(" 反码")]),s._v(" "),a("p",[s._v("反码表示方式是用来处理负数的，符号位置不变，其余位置相反。")]),s._v(" "),a("p",[s._v('计算机做减法运算时实际上在做加法运算，为此在表示负数时就需要使用"二进制的反码"。')]),s._v(" "),a("h4",{attrs:{id:"解决问题一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题一"}},[s._v("#")]),s._v(" 解决问题一")]),s._v(" "),a("p",[s._v("我们把 -1(原码 1001) 求反码后为 1110，我们重新运算："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("0")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0001 + 1110 = 1111(-0)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("p",[s._v("问题一居然解决了，那么为什么把 -1 求反码后再运算就结果正确了呢？"),a("br"),s._v("\n因为，原码 + 反码 = 0 。例如 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v("−")]),a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1-1=0 , 39-39=0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])])]),s._v(" 可以改为加法运算 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v("+")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1+(-1)=0 , 39+(-39)=0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])])])]),s._v(" "),a("blockquote",[a("p",[s._v("形象的举例：加法换算成减法的等式为 A - 原码 = A + 反码"),a("br"),s._v('\n只要 "- 原码 = 反码" 等式就成立，因为"原码 + 反码 = 0" 所以最终等式成立')])]),s._v(" "),a("p",[s._v('那么为什么"原码 + 反码 = 0" 呢 ？'),a("br"),s._v("\n因为反码是在原码除符号位其他位置取反，然后在和原码相加时，两两相加和都是 0，最终溢出一位，结果就是 0。")]),s._v(" "),a("p",[s._v("比如：1110（原码） + 1001（原码对应的反码） = 1111（反码），反码 1111 对应的原码即 -0。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("但是 2 个 0 的问题依旧没有解决，为了解决这个问题出现了 "),a("em",[s._v("补码")]),s._v(" 的概念。")]),s._v(" "),a("h2",{attrs:{id:"补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补码"}},[s._v("#")]),s._v(" 补码")]),s._v(" "),a("p",[s._v("反码表示方式是用来处理负数的，在反码的基础上，加 1。")]),s._v(" "),a("p",[s._v("补码的意思就是一个数的补数，类似于十进制，12 相对于 100 的补数是 88。二进制里面，1 相对 1 的补数时 1。")]),s._v(" "),a("h4",{attrs:{id:"解决问题一-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题一-2"}},[s._v("#")]),s._v(" 解决问题一")]),s._v(" "),a("p",[s._v("针对问题一：我们把 -1(原码 1001) 求补码后为 1111，我们重新运算："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mo",[s._v("(")]),a("mo",[s._v("+")]),a("mn",[s._v("0")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0001 + 1111 = 0000(+0)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("h4",{attrs:{id:"解决问题二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题二"}},[s._v("#")]),s._v(" 解决问题二")]),s._v(" "),a("p",[s._v("因为补码等于反码加 1，那么 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("−")]),a("mn",[s._v("0")]),a("mo",[s._v("(")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-0(1111)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" 永远不会存在了，因为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("−")]),a("mn",[s._v("0")]),a("mo",[s._v("(")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v("(")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mo",[s._v("(")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-0(1111)+1(0001) = 0(0000)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("(溢出位丢弃)")]),s._v(" "),a("h4",{attrs:{id:"当运算结果为负数时，计算结果怎么表示？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当运算结果为负数时，计算结果怎么表示？"}},[s._v("#")]),s._v(" 当运算结果为负数时，计算结果怎么表示？")]),s._v(" "),a("p",[s._v("结果不为 0 的运算同样可以通过使用补码来得到正确的结果。"),a("br"),s._v("\n如果结果为负数，也是通过补码的形式来表示的。")]),s._v(" "),a("p",[s._v("比如："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("3")]),a("mo",[s._v("−")]),a("mn",[s._v("5")]),a("mo",[s._v("=")]),a("mo",[s._v("−")]),a("mn",[s._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("3-5=-2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("5")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),s._v("，即 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0011 + 1011 = 1110")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])])]),s._v(" ，1110 的最高位为 1，表示是一个负数。"),a("br"),s._v('\n我们可以通过"负负为正"来计算他是多少，对它取反后加 1 为 1010。\n'),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("=")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("1")])],1),a("mo",[s._v("=")]),a("mn",[s._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("010=2^1=2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),s._v(" ，因此结果为 -2")]),s._v(" "),a("h4",{attrs:{id:"为什么要做加-1-操作？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做加-1-操作？"}},[s._v("#")]),s._v(" 为什么要做加 1 操作？")]),s._v(" "),a("p",[s._v("因为如果不 +1，可能出现 1111（-0）这种数据。为了去掉一个（-0），取反后 +1。1111（-0）+1 后变为 0000（+0）。")]),s._v(" "),a("p",[s._v("可以发现设计时，只保留了一个 0（+0）。")]),s._v(" "),a("p",[s._v("同样，失去（-0），4 位机器数最小的负数可以表示到 -8（反码 1001，原码 1111）")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("那么 +1 后最终结果应该也 +1 了吧？"),a("br"),s._v("\n结果不是，因为拿到一个反码（负数）时我们再次求反码来计算他的真值。即负负的正的过程。")]),s._v(" "),a("p",[s._v("比如：01 -> "),a("code",[s._v("取反为 10 -> +1 为 11")]),s._v(" -> "),a("code",[s._v("取反为 00 -> +1 为 01")]),s._v("。最终还是一样的。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("因为计算机的减法运算变成加法运算，提出了反码来表示负数")]),s._v(" "),a("li",[s._v("因为反码在计算过程会出现 2 个 0 ，提出了补码")]),s._v(" "),a("li",[s._v("因为补码会在反码基础上+1，因此，会舍弃 -0 ，但是会得到一个最小的负数，补码也是表示负数")]),s._v(" "),a("li",[s._v("对于结果为负数的补码，我们可以转换为原码查看")]),s._v(" "),a("li",[s._v("因为机器使用补码，所以对于编程中常用到的有符号的 32 位 int 类型，可以表示范围是: -2^"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("3")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("31")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),s._v(" - 2^"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("3")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("31")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),s._v("-1 ，因为第一位表示的是符号位，而使用补码表示时又可以多保存一个最小值。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);