const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Enterprise apps in secs!',
    tagline: 'Automatic GraphQL API (Resolvers/Queries) for Couchbase',
    url: 'https://couchset.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'couchset', // Usually your GitHub org/user name.
    projectName: 'couchset', // Usually your repo name.

    plugins: ['@docusaurus/plugin-google-gtag'],

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/couchset/couchset/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/couchset/couchset/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'CouchSet',
            logo: {
                alt: 'CouchSet Logo',
                src: 'img/couchset.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'Tutorial',
                // },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/couchset/couchset',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                // {
                //     title: 'Docs',
                //     items: [{
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //     }, ],
                // },
                // {
                //     title: 'Community',
                //     items: [{
                //             label: 'Stack Overflow',
                //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //         },
                //         {
                //             label: 'Discord',
                //             href: 'https://discordapp.com/invite/docusaurus',
                //         },
                //         {
                //             label: 'Twitter',
                //             href: 'https://twitter.com/docusaurus',
                //         },
                //     ],
                // },
                // {
                //     title: 'More',
                //     items: [{
                //             label: 'Blog',
                //             to: '/blog',
                //         },
                //         {
                //             label: 'GitHub',
                //             href: 'https://github.com/couchset/couchset',
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Algo, Inc`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        gtag: {
            trackingID: 'G-BJ0ZPCX7QW',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
    }),
});