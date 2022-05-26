export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '628fe5768824b900bdb7427f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tznx2zrv',
                  apiId: '5e1b7b20-0f46-4978-aa44-0b17b9df049f'
                },
                {
                  buildHookId: '628fe5768eb9ed00b4f3dcd2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a2biqz3e',
                  apiId: 'c5a40292-751f-422b-9d92-cd7a99f98019'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elliottsj/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a2biqz3e.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
