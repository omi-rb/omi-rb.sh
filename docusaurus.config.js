// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Omi",
  tagline: "Build awesome command line tools with Ruby",
  // favicon: "img/favicon.ico",
  url: "https://omi-rb.sh",
  baseUrl: "/",
  organizationName: "omi-rb",
  projectName: "omi",
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/omi-rb/omi-rb.sh/tree/main/",
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Omi",
        items: [
          { to: "/docs", label: "Docs", position: "left" },
          // { to: "/blog", label: "Blog", position: "left" },
          // { to: "/help", label: "Help", position: "left" },
          {
            href: "https://github.com/omi-rb/omi",
            label: "GitHub",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                href: "/docs",
                target: "_self",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Issues",
                href: "https://github.com/omi-rb/omi/issues",
              },
              {
                label: "Discussions",
                href: "https://github.com/omi-rb/omi/discussions",
              },
              {
                label: "Discord",
                href: "https://discord.gg/q6g4Yq6Xf9",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/omi-rb/omi",
              },
              {
                label: "RubyGems",
                href: "https://rubygems.org/gems/omi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tony Burns.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
