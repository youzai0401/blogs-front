module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'blogs-front',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'nuxt-ssr'}
        ],
        // todo 如何引入外部css连接（引入了没有生效）
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {type: 'text/css', href: 'https://at.alicdn.com/t/font_689030_3gzynmlrniad1jor.css'}
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {color: '#3B8070'},
    css: [
        'assets/normalize.css',
        'assets/main.css',
        'assets/markdown.css',
        'assets/iconfont.css'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    axios: {
        prefix: '/blog/',
        proxy: true
    },
    proxy: {
        '/blog/': {
            target: 'http://localhost:4000' // 你的接口服务器地址
        }
    },
    // todo 怎么切换启动端口
    /*
     ** Build configuration
     */
    build: {
        // 打包一次
        vendor: [
            'axios',
            '~/plugins/request.js',
            '~/plugins/commonUtil.js'
        ],
        // plugins: ['~/plugins/init'],
        /*
         ** Run ESLint on save
         */
        // todo 添加相应的webpack插件
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
