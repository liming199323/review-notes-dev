(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{221:function(v,_,l){"use strict";l.r(_);var t=l(0),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"移位运算"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#移位运算"}},[v._v("#")]),v._v(" 移位运算")]),v._v(" "),l("p",[v._v("移位运算是将二进制数值的各位数进行左右移位。")]),v._v(" "),l("ul",[l("li",[v._v("向左移即向高位方向移动，移动几位数值将变大几倍，"),l("code",[v._v("x << 2")])]),v._v(" "),l("li",[v._v("向右移即向高低方向移动，移动几位数值将减小几倍，"),l("code",[v._v("x >> 2")])])]),v._v(" "),l("p",[v._v("移动过程中，被溢出的数怎么处理？计算机直接将他们丢弃。")]),v._v(" "),l("p",[v._v("移动过程中，空出来的位数怎么处理？")]),v._v(" "),l("ul",[l("li",[v._v("算术运算时（带符号的数值运算）：\n"),l("ul",[l("li",[v._v("左移是，低位补 0")]),v._v(" "),l("li",[v._v("右移时，如果数值是负数（补码）时高位补 1，如果是正数高位补 0（理解为乘法运算不改变正负符号）")])])]),v._v(" "),l("li",[v._v("逻辑运算时（e.g. 图形模式的展示）：\n"),l("ul",[l("li",[v._v("左移是，低位补 0")]),v._v(" "),l("li",[v._v("右移时，高位补 0")])])])]),v._v(" "),l("p",[v._v("8 位的二进制扩充为 16 位的二进制？")]),v._v(" "),l("ul",[l("li",[v._v("正数时，高位直接补 0")]),v._v(" "),l("li",[v._v("补码时，高位直接补 1\n总结为：不管是正数还是补码表示的负数，只需用符号位的值（0 或 1）填充高位即可。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);