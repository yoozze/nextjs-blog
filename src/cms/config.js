const config = {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'yoozze/nextjs-blog',
        branch: 'main',
        site_domain: 'clever-shaw-25ce4e.netlify.com'
    },
    local_backend: true,
    media_folder: 'public/images',
    public_folder: 'images',
    collections: [
        {
            name: 'blog',
            label: 'Blog',
            folder: 'src/content/en/blog',
            create: true,
            fields: [
                { label: 'Title', name: 'title', widget: 'string', required: true },
                { label: 'Date', name: 'date', widget: 'datetime', required: true },
                { label: 'Body', name: 'body', widget: 'markdown', required: true },
            ],
        },
    ],
};

export default config;
