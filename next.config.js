const basePath = process.env.BASE_PATH;

module.exports = {
    reactStrictMode: true,
    basePath: basePath || '',
    assetPrefix: basePath ? `${basePath}/` : '',
};
