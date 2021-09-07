const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_PATH': isProd ? '/nextjs-blog' : '',
};
