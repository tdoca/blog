module.exports = {
    // mode: 'production',
    runtimeCompiler: true,
    // publicPath: "./",
    // publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
    // outputDir: "static",
    // assetsDir : ""
    // indexPath : "index.html"
    filenameHashing: false,
    pages: {
        index: {
            BASE_URL: "icon/",
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "tdoca",
            // chunks : []
        }
    },
    // pluginOptions : {}
    configureWebpack: {
        // mode: 'production',
        externals: {
            "axios": "axios",
            "marked": "marked"
        }
    }
}