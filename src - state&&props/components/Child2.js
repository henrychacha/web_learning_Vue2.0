import React from "react"


// 函数组件中， props 同样是作为参数传入 通过 props.自定义属性的形式使用
export default function Child2(props){
    console.log(props)
    return(
        <div>
            <h2>child2</h2>
            <p>{props.msg}</p>
        </div>
    )
}


// 参数的对象结构
// export default function Child2({msg}){
   
//     return(
//         <div>
//             <h2>child2</h2>
//             <p>{msg}</p>
//         </div>
//     )
// }