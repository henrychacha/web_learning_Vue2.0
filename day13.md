## qs

插件

get
	
	+ url 传参的形式来进行的 （在url ?后面  x = y & z=m

post

	+ post json 格式在请求正文中提交

将数据进行数据序列化：（对数据进行安全处理和转义）


### 使用

安装

	npm i qs


在全局中使用main.js

	import qs from "qs"

	Vue.prototype.qs = qs

在组件中通过
序列化：

	this.qs.string(参数对象的形式)


*当post 提交，以对象的形式提交失败，就需要考虑将参数对象进行序列化字符串处理*

反序列化

	this.qs.parse()


## 文件上传

### 回顾：纯html 形式 文件上传

文件上传添加该属性 enctype="multipart/form-data"


	<form action="" enctype="multipart/form-data">
        <input type="file" >
        <button>提交</button>
    </form>	


### vue 中实现文件上传



#### 纯原生 js 形式

	<input type="file" ref="img" />


+ 1.创建容器

		var data = new FormData();


+ 2.向容器需要上传的内容


		data.append('img',this.$refs.img.files[0])


+ 3.提交容器中的数据

		axios({
			method: 'post',
			url,
            data,
            // 改写请求头
			headers: {
                // 上传类型包含文件
                'Content-Type': 'multipart/form-data',
                // 身份验证
				'Authorization': sessionStorage.getItem('token')
			}
		})


###使用 el-upload 组件

组件

action：自动上传的地址  # 不自动上传

list-type：列表类型 照片墙

onchange: 选中上传图片触发回调函数 ，参数对象的 raw 属性包含上传图片的信息

multiple: 是否上传复数文件

auto-upload：是否自动上传

	// 选中上传图片后触发行数
	// file:包含被上传图片信息对象
	handleChangeFile(file) {
	    console.log(file)
		this.form.img = file.raw
	},

	 <el-upload

                        action="#"
                        list-type="picture-card"
                        
                        :on-change="handleChangeFile"
                        :file-list="fileList"
                        :multiple="false"
                        :auto-upload="false"
                        ref="prodimg"
                    >
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="oldImg?('http://localhost:3000'+file.url).replace('undefined',''):file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                                <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file)"
                                >
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleRemove(file)"
                                >
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload> 
                    
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>




js中使用


	            // 1 实例化表单对象，被上上传的数据的容器
                var data = new FormData();

                console.log(data)

                // 2.遍历数据对象，向容器中添加需要上传的数据

                for (let i in this.form) {
                    // 但被遍历的属性 是 img ,说明 需要添加上传文件的形象				
                    data.append(i,this.form[i])
                }
                
                // console.log(data);

                // 3.提交数据
				axios({
					method: 'post',
					url,
                    data,
                    // 改写请求头
					headers: {
                        // 上传类型包含文件
                        'Content-Type': 'multipart/form-data',
                        // 身份验证
						'Authorization': sessionStorage.getItem('token')
					}
				})


                    

### wangeditor


安装 

	npm i wangeditor


使用步骤：

	         // 1实例化
            this.editor = new E('#editor');

            // 2用户在文本框中输入 编辑 触发事件
            // html-》 用户输入的html 结构
            this.editor.customConfig.onchange = (html) => {
                this.form.description = html;
            };
            // 3创建
            this.editor.create();

            //显示商品描述
            this.editor.txt.html(this.form.description);