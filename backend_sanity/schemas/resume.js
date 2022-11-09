export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
        {
            name: 'resumeUrl',
            title: 'Upload Here',
            type: 'file',
            options: {
              hotspot: true,
            },
          },
    ]
}