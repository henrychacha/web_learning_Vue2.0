let proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(proxy.createProxyMiddleware(
        //  请求 以 /api 开头的会被代理
        "/api",
        {
            //代理的目标地址
            target:"http://localhost:4000",
            // 是否跨域
            changeOrigin:true,
            // 在真实请求中移除 /api
            pathRewrite:{
                "^/api":"/"
            }
        }
    ))
}

