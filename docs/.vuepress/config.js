const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "东北师范大学 吉林省高等学校智能信息处理重点实验室",
  description: "研究方向有人工智能、算法设计与分析、优化求解、数据挖掘、深度学习、大数据分析、计算机视觉等。",
  base: "/labtest/",

  dest: "./docs/.vuepress/dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "0.0.0.0",
    

    nav: [
      {
        text: "主页",
        link: "/",
        icon: "home"
      },
      {
        text: "简介",
        icon: "intro",
        link: "/intro",
      },
      {
        text: "成员",
        icon: "member",
        link: "/member",
      },
      {
        text: "论文",
        icon: "paper",
        link: "/papers",
      },
      {
        text: "其他",
        icon: "other",
        link: "/other",
      },
    ],

    sidebar: {
      "/": [
        "",
        "intro",
        "member",
        "papers",
        "other",
      ],
    },


    footer: {
      display: true,
      content: "东北师范大学 吉林省高等学校智能信息处理重点实验室",
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      // enableAll: true,
      container: true,
      codegroup: true,
      align: true,
      sub: true,
      sup: true,
      footnote: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: false,
    feed: false,
    comment: false,
    pageInfo: false,
    photoSwipe: false,
    sitemap: false,
    git: {
      contributor: false,
      timezone: "Asia/Shanghai",
    },
  },
});
