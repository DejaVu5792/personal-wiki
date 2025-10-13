import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/personal-wiki/markdown-page',
    component: ComponentCreator('/personal-wiki/markdown-page', 'e12'),
    exact: true
  },
  {
    path: '/personal-wiki/yarr',
    component: ComponentCreator('/personal-wiki/yarr', '443'),
    exact: true
  },
  {
    path: '/personal-wiki/docs',
    component: ComponentCreator('/personal-wiki/docs', '77a'),
    routes: [
      {
        path: '/personal-wiki/docs',
        component: ComponentCreator('/personal-wiki/docs', '9d3'),
        routes: [
          {
            path: '/personal-wiki/docs/tags',
            component: ComponentCreator('/personal-wiki/docs/tags', 'e34'),
            exact: true
          },
          {
            path: '/personal-wiki/docs/tags/yarr',
            component: ComponentCreator('/personal-wiki/docs/tags/yarr', '55d'),
            exact: true
          },
          {
            path: '/personal-wiki/docs',
            component: ComponentCreator('/personal-wiki/docs', 'a7e'),
            routes: [
              {
                path: '/personal-wiki/docs/category/jellyfin',
                component: ComponentCreator('/personal-wiki/docs/category/jellyfin', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/category/tailscale',
                component: ComponentCreator('/personal-wiki/docs/category/tailscale', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/category/yarr',
                component: ComponentCreator('/personal-wiki/docs/category/yarr', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/intro',
                component: ComponentCreator('/personal-wiki/docs/intro', '31f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/jellyfin/access',
                component: ComponentCreator('/personal-wiki/docs/jellyfin/access', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/jellyfin/requesting',
                component: ComponentCreator('/personal-wiki/docs/jellyfin/requesting', '342'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/tailscale/game-streaming',
                component: ComponentCreator('/personal-wiki/docs/tailscale/game-streaming', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/tailscale/steam-family',
                component: ComponentCreator('/personal-wiki/docs/tailscale/steam-family', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/yarr/android-apps',
                component: ComponentCreator('/personal-wiki/docs/yarr/android-apps', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/yarr/arr',
                component: ComponentCreator('/personal-wiki/docs/yarr/arr', '365'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/yarr/games',
                component: ComponentCreator('/personal-wiki/docs/yarr/games', '811'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/yarr/indexes',
                component: ComponentCreator('/personal-wiki/docs/yarr/indexes', '809'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-wiki/docs/yarr/miscellaneous',
                component: ComponentCreator('/personal-wiki/docs/yarr/miscellaneous', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/personal-wiki/',
    component: ComponentCreator('/personal-wiki/', 'c7d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
