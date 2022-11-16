<template>
	<div>
		<!--面包屑导航
			separator：分割符
		  -->
		<el-breadcrumb separator="/">
		<!-- 
			to ： 导航属性
		 -->
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item ><a href="javascript:;">菜单列表</a></el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 表格 -->
		<div class="app-container">
			<!-- 添加按钮 -->
			<el-button
				type="primary"
				@click="handleAdd"
			>添加</el-button>
            <!-- 菜单列表 表格容器
				data: 表格显示数据
				tree-props ：二级的表格数据设定
			-->
			<el-table
			
				:data="menuArr"
				row-key="id"
				border
				
				:tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                style="width: 100%"
			>
			<!-- scope.row  作用域 数据，代表当前的数据对象 -->
				<el-table-column
					label="名称"
					width="180"
				>
					<template slot-scope="scope">
						{{ scope.row.title }}
					</template>
				</el-table-column>
				<el-table-column
					label="图标"
					width="150"
				>
					<template slot-scope="scope">
						<i :class="scope.row.icon"></i>
					</template>
				</el-table-column>
				<el-table-column
					label="类型"
					width="150"
				>
					<template slot-scope="scope">
						<el-tag
							v-if="scope.row.type === 1"
							size="small"
						>目录</el-tag>
						<el-tag
							v-else-if="scope.row.type === 2"
							size="small"
							type="success"
						>菜单</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					label="菜单URL"
					width="150"
				>
					<template slot-scope="scope">
						<span>{{ scope.row.url }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="handleEdit(scope.row)"
						>编辑</el-button>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.row)"
						>删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
        <!-- 菜单添加/修改 -->
		<el-dialog
			:title="'菜单'+tip"
			:visible.sync="infoVisible"
            @close="handleReset"
		>
			<el-form
				:model="form"
				:rules="rules"
				ref="form"
				label-width="100px"
				class="demo-form"
			>
				<el-form-item
					label="菜单名称"
					prop="pid"
				>
					<el-select
						v-model="form.pid"
						@change="menuchange($event)"
						placeholder="请选择上级菜单"
					>
						<el-option
							value="0"
							label="顶级菜单"
						></el-option>
						<!-- 顶级菜单 -->
						<el-option
							v-for="item in menus"
							:key="item.id"
							:label="item.title"
							:value="item.id"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item
					label="菜单名称"
					prop="title"
				>
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item v-show="form.pid==='0'" label="菜单图标">
					<el-input v-model="form.icon"></el-input>
				</el-form-item>
				<el-form-item label="类型">
					<el-radio
						v-model="form.type"
						label="1"
						:disabled="form.pid !=='0'"
					>目录</el-radio>
					<el-radio
						v-model="form.type"
						label="2"
						:disabled="form.pid ==='0'"
					>菜单</el-radio>
				</el-form-item>
				<el-form-item
					v-show="form.type==2"
					label="菜单地址"
				>
					<el-input v-model="form.url"></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-switch v-model="form.status"></el-switch>
				</el-form-item>
			</el-form>
			<div
				slot="footer"
				class="dialog-footer"
			>
				<el-button @click="handleReset('form')">取 消</el-button>
				<el-button
					type="primary"
					@click="handleSubmit('form')"
				>确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 通过数据请求 返回 菜单数据
            menuArr: [],
            menus:[],
			infoVisible: false,
			tip: '添加',
			form: {
				pid: '0',
				title: '',
				icon: '',
				type: '1',
				url: '',
				status: true
			},
			formLabelWidth: '120px',
			rules: {
				pid: {
					required: true, message: "请选择上级菜单", trigger: "blur"
				},
				title: [
					{ required: true, message: "请输入菜单标题", trigger: "blur" },
					{ min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
				]
			}
		}
	},
	methods: {
		// 获取菜单
        getMenu(){
			// pid = 0 获取菜单   不包含目录
            this.http.get('/api/menulist?pid=0').then(res=>{
                this.menus = res.list
            });
        },
        menuchange(e){
			this.form.type = e!=0 ? "2" : "1";
		},
		// 点击添加按钮：


        handleAdd(){
			// 显示弹窗对话框
			this.infoVisible = true;
			// 
            this.getMenu();
		},
		// 编辑
		handleEdit(row) {
			this.getMenu();
			// 显示对话框
            this.infoVisible = true;
            let id = row.id;
            this.tip = '修改'
            this.http.get('/api/menuinfo',{id}).then(res=>{
                let info = res.list;
                info.id = id;
                info.type = info.type.toString();
                info.status = info.status == 1 ? true : false;
                info.pid = info.pid === 0 ? '0' : info.pid;
                this.form = info;
            })
		},
		// 点击提交按钮 提交新增表单
        handleSubmit(formName) {
			this.$refs[formName].validate(valid => {
                if(!valid){
                    return;
                }
				this.form.status = this.form.status ? 1 : 2;
				// 判断是新增还是 修改
                let url = this.form.id ? '/api/menuedit' : '/api/menuadd';
                this.http.post(url,this.form).then(res=>{
					console.log(res)
                    if(res.code == 200){
                        this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'success'
                        });
						this.infoVisible = false;
						// 重新获取菜单
                        this.http.get('/api/menulist?istree=1').then(res => {
							
                            this.menuArr = res.list
                        })
                    }else{
                        this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'error'
                        });
                    }
                })
			});
		},
		handleReset() {
            this.infoVisible = false;
            this.tip = '添加';
            this.form= {
				pid: '0',
				title: '',
				icon: '',
				type: '1',
				url: '',
				status: true
			}
		},
		// 删除函数 ，参数是删除行的的对象
        handleDelete(row) {
			// 提交删除请求
            this.http.post('/api/menudelete', { id: row.id }).then(res => {
				console.log(res)
				// 删除失败显示错误信息弹窗
                if (res.code != 200) {
                    this.$message({
                        showClose: true,
                        message: res.msg,
                        type: 'error'
                    });
                } else {
					// 删除成功，将 返回的新的菜单列表进行赋值
					console.log(res)
                    this.menuArr = res.list
                }
            })
        }
	},
	mounted(){
		/*
		* promise 版本:resolve 了 res.data ，当前的res 就是res.data
		*/ 
		// 获取 一级目录 包含二级菜单
		this.http.get('/api/menulist?istree=1').then(res => {
			// console.log(res)
			if(res.code==200){
                console.log("getData",res)
			   this.menuArr = res.list || [];
			}else if(res.code==403){
				this.$message(res.msg)
			}else{
				this.$message("访问权限受限,请登录")
			}
			
			// console.log(this.menuArr)
		})
    }
}
</script>

<style>
</style>