module.exports = {
  title: "FoloToy Docs",
  tagline: "Guides for FoloToy AI toys: manuals, self-hosted server, DIY AI toy kits and PCB replacement",
  // Must be the docs host: canonical, hreflang, og:url and sitemap URLs are built from it.
  url: "https://docs.folotoy.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "folotoy",
  projectName: "folotoy-doc",
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      'en': {
        label: 'English',
      },
      'zh': {
        label: '简体中文',
      },
    },
  },
  themeConfig: {
    image: "img/og-docs.jpg",
    metadata: [
      { name: "keywords", content: "FoloToy, AI toys, AI toy, AI teddy bear, DIY AI toy, MagicBox, ESP32 AI, self-hosted AI toy server, AI玩具, 说明书" },
    ],
    navbar: {
      title: "FoloToy",
      logo: {
        alt: "FoloyToy Logo",
        src: "img/folotoy-logo.svg",
      },
      items: [
        {
          to: "/docs/installation/start",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://github.com/FoloToy/folotoy-doc',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: "https://github.com/FoloToy/folotoy-doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        { title: "FoloToy", items: [
          { label: "folotoy.com", href: "https://folotoy.com/" },
          { label: "AI toys & products", href: "https://folotoy.com/products/" },
          { label: "Official store", href: "https://store.folotoy.com/" },
          { label: "folotoy.cn (中国)", href: "https://folotoy.cn/" },
        ]},
        { title: "AI Passport", items: [
          { label: "AI Passport", href: "https://ai-passport.folotoy.cn/en/" },
          { label: "Community apps", href: "https://ai-passport.folotoy.cn/en/plays/" },
          { label: "Guides", href: "https://ai-passport.folotoy.cn/en/guides/" },
        ]},
        { title: "Developers", items: [
          { label: "GitHub", href: "https://github.com/FoloToy" },
          { label: "Web flasher", href: "https://tool.folotoy.com/" },
          { label: "Edit these docs", href: "https://github.com/FoloToy/folotoy-doc" },
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} FoloToy`,
    },
    // footer: {
    //   style: "dark",
    //   items: [
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} FoloToy.com`,
    // },
    prism: {
      additionalLanguages: ["yaml", "docker"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // routeBasePath: "", // Docs-only
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/FoloToy/folotoy-doc/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
