##Axios

一、什么是axios
    axios 是一个基于Promise用于浏览器和nodejs的HTTP客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：
    从浏览器中创建 XMLHttpRequest

- 支持 Promise API
- 提供了一些并发请求的接口（重要，方便了很多的操作）
- 从node.js创建http请求
- 转换请求和响应数据
-  取消请求
- 自动转换JSON数据

###使用


	npm i axios --save


###设置 config/index.js


添加

	  dev: {

	    // Paths
	    assetsSubDirectory: 'static',
	    assetsPublicPath: '/',
	    proxyTable: {
	      // /api开头的请求会被代理
	      '/api': {
	        //需要代理的目标地址
	        target: 'http://localhost:3000',  // 真实的接口域名
	        changeOrigin: true,  //是否跨域
	      }
	
	    },
	}



真实接口

	http://www.example.com/getbanner

设置

		'/api': {
	        target: 'http://www.example.com',  // 接口域名
	        changeOrigin: true,  //是否跨域
	        pathRewrite: {
	            '^/api': ''//需要rewrite的
        	}
		}     

请求
	
	this.axios.get("/api/getbanner")

真实请求地址

	http://www.example.com/api/getbanner

通过

 		pathRewrite: {
        	'^/api': ''//需要rewrite的
		}


将路径 /api 后面的地址导向 /

	http://www.example.com/getbanner	

http://www.example.com/getbanner


####main.js中添加


	import axios from 'axios'

	Vue.prototype.axios = axios;

####在组件中使用

	this.axios.get().then(res=>console.log(res))

## 

前端的数据可视化的库：

+ d3.js
+ highcharts
+ echarts


###echarts:

官网地址：[https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)

	
####安装

	npm i echarts


组件中使用


	import echarts from "echarts"
	export default {
	    data(){
	        return {
	            dataList:[{
	                    name:"一周苹果销量",
	                    type:"line",
	                    data:[555,666,333,444,999,888,123]
	                },{
	                    name:"一周香蕉销量",
	                    type:"line",
	                    data:[444,666,333,777,999,888,555]
	                }]
	        }
	    },
	    methods:{
	        drawLine(id){
	            // 传入元素，实例化图标 , 将该实例注册为当前组件实例的属性
	            this.myChart = echarts.init(document.getElementById(id));
	
	            // 给图表设置配置项
	            this.myChart.setOption({
	                // 图标标题
	                title:{
	                    text:"销量"
	                },
	                toolbox:{
	                    feature:{
	                        saveAsImage:{}
	                    }
	                },
	                grid:{
	                    left:"20%"
	                },
	                // 提示信息
	                tooltip:{
	                    // 提示信息的触发时机
	                    trigger:"axis"
	                },
	                // 图例 一般多组数据才需要
	                legend:{
	                    data:["一周苹果销量","一周香蕉销量"]
	                },
	                // x 轴设置 分类
	                xAxis:{
	                    // 分类
	                    type:"category",
	                    // 刻度
	                    data:["周一","周二","周三","周四","周五","周六","周日"],
	                    // x轴 两端的留白
	                     boundaryGap:false
	                },
	                // y 轴 显示数据
	                yAxis:{
	                    // type:"value"
	                },
	                // 输入数据，每一个对象就是一组数据
	                series:this.dataList,
	                color:["#ff0","#f0f"]
	            })
	        }
	    },
	    mounted(){
	        this.drawLine("main");
	    }
	
	};

	