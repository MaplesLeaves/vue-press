/*
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-06-15 16:57:07
 * @LastEditors:  
 * @LastEditTime: 2021-06-16 10:10:46
 */
module.exports = {
  title: "Fur",
  description: "小僧不才，略懂皮毛（Fur）",
  dest: "dist",
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "手册",
        link: "/handbook/",
      },
      {
        text: "工具",
        items: [{ text: "代码生成器", link: "/" }],
      },
    ],
    sidebar: {
      // "/handbook/": "auto",
      "/": [
        {
          title: "1. 框架指南",
          // collapsable: true,
          path: "http:www.baidu.com",
        },
        {
          title: "2. 功能特性",
          // collapsable: true,
          children: [
            { title: "内置功能", 
            path: "./language/chinese/" },
            { title: "展望未来", 
            path: "./language/english/" },
          ],
        },
      ],
      sidebarDepth: 3,
    },
    
  },
};