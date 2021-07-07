const Setting = require('./config/dev.env');
let {lintOnSave,publicPath,outputDir,assetsDir} = Setting
module.exports = {
    lintOnSave: lintOnSave,
    publicPath: publicPath,
	outputDir: outputDir,
    assetsDir: assetsDir,
    runtimeCompiler: false,
    devServer: {
        // 端口号
        port: 8089,
        host: "0.0.0.0",
        https: false,
        open: true,
        proxy: {
            "/public": {
                target: "http://120.92.212.231:8078",
                // target: "http://192.168.200.105:8077",

                ws: true,

                pathRewrite: {
                    "^/public": ""
                },
                changeOrigin: true
            },

        }
    },
};