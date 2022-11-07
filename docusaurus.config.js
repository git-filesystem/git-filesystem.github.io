/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Git-FileSystem",
  tagline: "Read & write to GitHub/GitLab/Bitbucket repositories like they're file systems.",
  url: "https://git-filesystem.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "git-filesystem", // Usually your GitHub org/user name.
  projectName: "git-filesystem", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/git-filesystem/git-filesystem/tree/main/",
          remarkPlugins: [[require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]]
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Git-FileSystem",
        logo: {
          alt: "Git-FileSystem Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "/category/typescript",
            position: "left",
            label: "TypeScript"
          },
          {
            href: "https://github.com/git-filesystem",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "General",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/git-filesystem"
              }
            ]
          },
          {
            title: "TypeScript",
            items: [
              {
                label: "Docs",
                href: "/docs/category/typescript"
              },
              {
                label: "GitHub",
                href: "https://github.com/git-filesystem/git-filesystem.js"
              },
              {
                label: "npm",
                href: "https://www.npmjs.com/package/git-filesystem"
              }
            ]
          },
          {
            title: "C#",
            items: [
              {
                label: "To-Do",
                to: "/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Git-FileSystem.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
