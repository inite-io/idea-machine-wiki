module.exports = {
  title: "Inite Wiki",
  tagline: "Became an idea machine wiki",
  url: "https://wiki.inite.io",
  baseUrl: "/",
  favicon: "img/inite-logo.png",
  organizationName: "Inite Pte. Ltd.",
  projectName: "inite-wiki",
  // customFields: {
  //   GA_TAG: process.env.GA_TAG,
  // },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    gtag: {
      trackingID: 'G-83N9FZXY7K',
      anonymizeIP: true, // We don't need to know folks IPs
    },
    image: "img/wiki-cover.png",
    // headerLinks: [{ page: 'help', label: 'Help' }],
    navbar: {
      title: "Inite Wiki",
      logo: {
        alt: "Inite Logo",
        src: "img/inite-logo.png",
        href: "/docs/enter-metaverse/the-inite-game"
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://wiki.inite.io/admin/#/?",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    "docusaurus2-dotenv",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
        ],
      },
    ],
  ],
};
