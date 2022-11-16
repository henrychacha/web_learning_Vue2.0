const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    // 使用html 文件作为渲染模板
    template: require('fs').readFileSync('./index.html', 'utf-8')
})

const context = {
    title:"服务器端渲染 ssr"
}

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url,
            
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })


    //  html 参数 就是 app 实例 渲染成的字符串
    renderer.renderToString(app,context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        //  html 就是将 app 渲染成字符串之后 插入到 index.html 文件后得到的index.html字符串
        console.log(html)
        res.end(html)
    })
})

server.listen(8080)