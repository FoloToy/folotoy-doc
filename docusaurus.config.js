module.exports = {
  title: "FoloToy Docs",
  tagline: "Documents for your FoloToy",
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
    navbar: {
      title: "FoloToy",
      logo: {
        alt: "FoloyToy Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/installation/docker",
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
          sidebarCollapsible: false,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/FoloToy/folotoy-doc/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
