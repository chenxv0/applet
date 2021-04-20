import {getLocalStorage} from "./../config/globel";
import {USER_INFO,INIT_USER_INFO,ADD_GOODS} from "./mutations-type";
import {autoLogin} from "./../service/api/index";

export default {
    init_shopCart({commit},{id,name,price,img,checked,num}){
       // alert("11112344");
      commit(ADD_GOODS,{id,name,price,img,checked,num})
    },
    // 2. 自动登录
    async reqUserInfo({commit},state){
        // 2.1 从本地获取数据
        // alert(1);
        let userInfo = getLocalStorage('userInfo');
        // console.log(userInfo);;
        if(userInfo){
            // alert("本地的userInfo");
            commit(USER_INFO, userInfo);
            // console.log(1);
            // commit(INIT_USER_INFO);
        }
        else {
            // 2.2 从服务器端验证
            // console.log(2);
            let result = await autoLogin();
            // console.log(result);
            if(200 === result.success_code){
                commit(USER_INFO, result.data);
            }
        }
    }
}