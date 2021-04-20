import { axios } from 'taro-axios'

export default function ajax(url="",params={},type="GET"){
    let promise;

    return new Promise((resolve,reject)=>{
        if(type.toUpperCase()==="GET"){
            let paramsStr="";
            Object.keys(params).forEach((key)=>{
                paramsStr+=key+"="+params[key]+"&";
            });
            //去掉结尾的那个&
            // 2.4 过滤最后的&
            /*
              注意：为了防止请求缓存，在尾部加了时间戳
            */
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
                // 2.5 拼接完整路径
                if(url.indexOf('47.98.157.152') === -1) {
                    url += '?' + paramsStr + '&itlike=' + randomCode(20);
                }else {
                    url += '?' + paramsStr;
                }
            }else {
                if(url.indexOf('47.98.157.152') === -1){
                    url += '?itlike=' + randomCode(20)
                }
            }
            // paramsStr.slice(0,paramsStr.lastIndexOf("&"));
            // url+="?"+paramsStr;
            // console.log(axios);
            promise=axios.get(url);
        }else if(type.toUpperCase()==="POST"){
            promise=axios.post(url,params);
        }
        
        promise.then((response)=>{
            // console.log(response.data)
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
   
    })
    /*生成指定长度的随机数*/
    function randomCode(length) {
        let chars = ['0','1','2','3','4','5','6','7','8','9'];
        let result = "";
        for(let i = 0; i < length ; i ++) {
            let index = Math.ceil(Math.random()*9);
            result += chars[index];
        }
        return result;
    }
}