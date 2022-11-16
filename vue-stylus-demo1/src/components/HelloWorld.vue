/* 
   如何使用 stylus  使用stylus 
 */
 <template>
  <div class="hello">
    {{msg}}
    

    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
// 变量声明 建议以$开头
$ft = 30px
$ft1 = 50px
$bg = skyblue
// 函数 
box($w $h)
  width $w
  height $h
  background-color  pink


//如果需要在样式名的位置 使用 变量或者是 参数，需要使用 {}包裹
vender($prop $arg)
  -webkit-{$prop} $arg
  -moz-{$prop} $arg
  {$prop} $arg

// margin-only 默认值是 false
box2(x,y,margin-only=false)
  if margin-only
      margin x y
  else
      padding x y


// & 指代的是当前选择器
.hello
  color $bg
  font-size $ft+$ft1
  &:hover
    color pink
  .inner
    box(50px,50px)
    box2(10px,5px,true)
    vender(border-radius,10px)


// for item in 1 2 3 4
//   .wrap{item} 
//      width item*10px

for item in (5..10)
  .wrap{item} 
     width item*10px


  
</style>
