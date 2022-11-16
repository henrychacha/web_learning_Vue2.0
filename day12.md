##什么是服务器渲染

    使用 Vue.js 构建客户端应用程序时，默认情况下是在浏览器中输出Vue组件，进行生成DOM和操作DOM。而使用服务器端渲染SSR（Server-Side Rendering）可以将同一个组件渲染为服务器端的HTML字符串，然后将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。
    这里说的渲染，就是指生成HTML文档的过程，和之前浏览器的CSS+HTML渲染没有关系。简单来说，浏览器端渲染，指的是用JS去生成HTML。
    使用Vue.js的服务器端渲染，Vue.js会联络服务器，然后服务器把HTML发送给客户端，因此浏览器可以立即显示页面，SSR对用户体验更好。


二、为什么使用服务器端渲染

   1、更好的SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
   2、产生更好的用户体验

三、SSR的弊端

  1、开发条件受限，Vue组件的某些生命周期钩子函数不能使用
  2、开发环境基于Node.js
  3、会造成服务端更多的负载

[https://ssr.vuejs.org/zh/](https://ssr.vuejs.org/zh/)


##Nuxt

[https://www.nuxtjs.cn/guide](https://www.nuxtjs.cn/guide)


###导航守卫


pluins 中创建插件

导航守卫插件

	export default ({app})=>{
	    app.router.beforeEach((to,from,next)=>{
	        console.log("导航守卫")
	        next()
	    })
	}


在 nuxt.config.js


		plugins: [
			'@/plugins/element-ui',
			'@/plugins/route'
		],





##Ts

Ts介绍

    TypeScript是一种由微软开发的开源的编程语言。它是JavaScript的一个超集，并且可以编译为纯JavaScript，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程，通俗的理解为JavaScript的一个特殊版本，其语法规范严谨，适用于开发大型项目运用。更有甚者描述，es的最终走向规范都将会是TypeScript


[https://www.tslang.cn/docs/home.html](https://www.tslang.cn/docs/home.html)


tsconfig.json

		{
		"compilerOptions": {
		    /* 基本选项 */
		    "target": "es5",// 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
		    "module": "commonjs",// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
		    "lib": [],// 指定要包含在编译中的库文件
		    "allowJs": true,//允许编译 javascript 文件
		    "checkJs": true,//报告javascript文件中的错误
		    "jsx": "preserve",//指定jsx代码的生成: 'preserve', 'react-native', or 'react'
		    "declaration": true,//生成相应的 '.d.ts' 文件
		    "sourceMap": true, //生成相应的 '.map' 文件
		    "outFile": "./",//将输出文件合并为一个文件
		    "outDir": "./",//指定输出目录
		    "rootDir": "./",//用来控制输出目录结构 --outDir.
		    "removeComments": true,//删除编译后的所有的注释
		    "noEmit": true,//不生成输出文件
		    "importHelpers": true,//从tslib导入辅助工具函数
		    "isolatedModules": true,//将每个文件做为单独的模块（与 'ts.transpileModule' 类似）.
		    /* 严格的类型检查选项 */
		    "strict": true,//启用所有严格类型检查选项
		    "noImplicitAny": true,//在表达式和声明上有隐含的any类型时报错
		    "strictNullChecks": true,//启用严格的null检查
		    "noImplicitThis": true,//当this表达式值为 any 类型的时候，生成一个错误
		    "alwaysStrict": true,//以严格模式检查每个模块，并在每个文件里加入 'use strict'
		    /* 额外的检查 */
		    "noUnusedLocals": true,//有未使用的变量时，抛出错误
		    "noUnusedParameters": true,//有未使用的参数时，抛出错误
		    "noImplicitReturns": true,//并不是所有函数里的代码都有返回值时，抛出错误
		    "noFallthroughCasesInSwitch": true,//报告switch语句的fallthrough错误。
		    /* 模块解析选项 */
		    "moduleResolution": "node",//选择模块解析策略：'node' (Node.js) or 'classic' (TypeScript pre-1.6)
		    "baseUrl": "./",//用于解析非相对模块名称的基目录
		    "paths": {},//模块名到基于 baseUrl 的路径映射的列表
		    "rootDirs": [],//根文件夹列表，其组合内容表示项目运行时的结构内容
		    "typeRoots": [],//包含类型声明的文件列表
		    "types": [],//需要包含的类型声明文件名列表
		    "allowSyntheticDefaultImports": true, //允许从没有设置默认导出的模块中默认导入。
		    /* Source Map Options */
		    "sourceRoot": "./",//指定调试器应该找到 TypeScript 文件而不是源文件的位置
		    "mapRoot": "./",//指定调试器应该找到映射文件而不是生成文件的位置
		    "inlineSourceMap": true,//生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
		    "inlineSources": true,//将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
		    /* 其他选项 */
		    "experimentalDecorators": true,//启用装饰器
		    "emitDecoratorMetadata": true//为装饰器提供元数据的支持
		  }
		}


### 类修饰符


public :公有 在当前类里面、 子类 、类外面都可以访问
protected：保护类型 在当前类里面、子类里面可以访问 ，在类外部没法访问
private ：私有 在当前类里面可以访问，子类、类外部都没法访问
属性如果不加修饰符 默认就是 公有 （public）   




###装饰器定义

支持装饰器语法 tsconfig.json->compilerOptions：

	    "experimentalDecorators": true,
        "emitDecoratorMetadata": true//为装饰器提供元数据的支持
	
装饰器是一种特殊的类型声明，它能够被附加到类声明，方法，属性或参数上面，可以修改类的行		为。通俗理解装饰器就是一个方法或者说一个函数，可以被注入到类，方法、属性、参数上拓展类		的属性、方法、参数的功能
	
装饰器的分类： 

- 类装饰器
	
	 类装饰器在类声明之前被声明（紧靠类声明）。类装饰器应用于类的构造函数，可以用来监视，	修改或替换类定义。传入一个参数
- 属性装饰器
	
	属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数。
	(1)对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
	(2)成员(属性)的名字

- 方法装饰器
	
	它会被运用到方法的属性描述符上，可以用来监视、修改、替换方法定义

    运行时传入三个参数
          (1)对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
          (2)成员(属性)的名字
          (3)成员的属性描述符

	
- 参数装饰器

	装饰器的写法:

		参数装饰器 
		参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元	素数据 ，传入下列3个参数：
	(1)对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
	(2)方法的名字。
	(3)参数在函数参数列表中的索引。

	

- 普通装饰器(无法传参)、装饰器工厂(可传参)
- 装饰器也是es7的标准特性之一 



###@vue/cli

网址：[网址：https://cli.vuejs.org/zh/guide/installation.htm](网址：https://cli.vuejs.org/zh/guide/installation.htm)


卸载原脚手架

	npm uninstall vue-cli -g

安装

	npm install -g @vue/cli 或   yarn global add @vue/cli


安装桥接工具：安装了这个工具后才可以 vue init webpack 创建项目

    npm install -g @vue/cli-init


新版本创建项目

	npm create 项目名







