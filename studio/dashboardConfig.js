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
                  buildHookId: '5fc56d25e7f12326b8f57733',
                  title: 'Sanity Studio',
                  name: 'waterdeep-front-studio',
                  apiId: '073c118c-6e98-445c-8bc0-8593187d488e'
                },
                {
                  buildHookId: '5fc56d250da6791f483d0a5b',
                  title: 'Landing pages Website',
                  name: 'waterdeep-front',
                  apiId: 'c268d02b-8262-49c0-909f-037437e1cb4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalsadhu/waterdeep-front',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://waterdeep-front.netlify.app', category: 'apps'}
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
