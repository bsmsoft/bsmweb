module.exports = {
  title: 'BSM',
  tagline: 'Bundled Software Manager',
  url: 'https://bsmsoft.github.io/',
  baseUrl: '/',
  favicon: 'img/bsmicon.png',
  organizationName: 'BSMSoft',
  projectName: 'BSM',
  themeConfig: {
    navbar: {
      title: 'BSM',
      logo: {
        alt: 'BSM',
        src: 'img/bsmicon.png',
      },
      links: [
        { to: 'docs/intro', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/bsmsoft/bsm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/get-started',
            },
            {
              label: 'Installation',
              to: 'docs/installation',
            },
          ],
        },
        {
          title: 'Use Case',
          items: [
            {
              label: 'CEPCEnv',
              to: 'https://github.com/cepc/cepcenv',
            },
            {
              label: 'BSMDemo',
              to: 'https://github.com/bsmsoft/bsmdemo',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bsmsoft',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BSMSoft.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bsmsoft/bsmweb/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
