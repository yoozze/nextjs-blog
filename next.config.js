const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    basePath: isProd ? '/nextjs-blog' : '',
    assetPrefix: isProd ? '/nextjs-blog/' : '',
    env: {
        BASE_PATH: isProd ? '/nextjs-blog' : '',
    },
};
