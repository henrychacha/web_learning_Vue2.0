import axios from "axios"
axios.defaults.timeout = 5000;
axios.defaults.baseurl = "";
/*
    封装一个get 方法


*/ 

function get(url,params={}){
    let token = sessionStorage.getItem("token")?sessionStorage.getItem("token"):"";
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:"get",
            baseURL:axios.defaults.baseurl,
            params,
            headers:{
                "Authorization":token
            }

        }).then(res=>{
            // res 返回数据,resolve 传入的请求返回数据的res.data
            resolve(res.data);
        }).catch(rej=>{
            // 
            reject(rej)
        })
    })
}

// res -> res.data
// get("").then(res)


function post(url,data={}){
    let token = sessionStorage.getItem("token")?sessionStorage.getItem("token"):"";
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:"post",
            baseURL:axios.defaults.baseurl,
            data,
            headers:{
                "Authorization":token
            }

        }).then(res=>{
            // res 返回数据,resolve 传入的请求返回数据的res.data
            resolve(res.data);
        }).catch(rej=>{
            // 
            reject(rej)
        })
    })
}

export {
    get,
    post
}