export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e00b7e9d2bde5c93edc6424',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o328iggd',
                  apiId: 'fdb79c81-be2a-41f9-82be-f39c52111277'
                },
                {
                  buildHookId: '5e00b7e999332e1bfeb5fe7a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s51pxyrv',
                  apiId: '644d8735-912b-4b75-9c7a-17fbb5bd70e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peranakanfrancis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s51pxyrv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
