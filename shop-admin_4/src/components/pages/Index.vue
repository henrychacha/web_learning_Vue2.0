<template>
  <div id="app_container">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
            <el-row>
                <el-col :span="6">1</el-col>
                <el-col :span="6">2</el-col>
                <el-col :span="6">3</el-col>
                <el-col :span="6">4</el-col>
            </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">12</div>
      </el-col>
    </el-row>

    <el-row>
        <el-col :span="24">
            <div id="main"></div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
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
</script>
<style lang="">
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

#main{
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
}
</style>