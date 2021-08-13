/** @type {import("snowpack").SnowpackUserConfig } */

export default {
    mount: {
        public: '/',
        src: '/src'
    },
    alias: {
        '@src': './src',
        '@assets': './src/assets',
        '@components': './src/components',
        '@locales': './src/locales',
        '@pages': './src/pages/',
        '@mobx': './src/mobx',
        '@utils': './src/utils',
        '@config': './src/config.ts',
        '@servers': './src/servers.tsx',
        '@request': './src/request.ts'
    },
    plugins: (() => {
        const plugin = ['snowpack-plugin-less'];
        if (process.env.NODE_ENV === 'development') {
            plugin.push('@snowpack/plugin-typescript');
        }
        return plugin;
    })(),
    routes: [],
    optimize: {},
    packageOptions: {
        polyfillNode: true
    },
    devOptions: {},
    buildOptions: {
        out: (() => {
            if (process.env.SNOWPACK_PUBLIC_DOMAIN === 'cloud') return './dist_cloud';
            if (process.env.SNOWPACK_PUBLIC_DOMAIN === 'ikandy') return 'dist';
        })()
    }
};
