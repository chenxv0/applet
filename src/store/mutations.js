import {ADD_GOODS,CHANGE_GOODS_NUM,CLEAR_GOODS,CHOOSE_GOODS,USER_INFO,INIT_USER_INFO,DEL_USERINFO,INIT_SHOPCART} from "./mutations-type";
import {setLocalStorage,getLocalStorage} from "../config/globel";


export default {
    ['INIT_USER_INFO'](state){
        console.log(state.userInfo);
    },
    ['INIT_SHOPCART'](state){
        let shopCart=getLocalStorage('shopCart');
        state.shopCart={...shopCart};
        // console.log(state.shopCart);
    },
    ["ADD_GOODS"](state,{goodId,name,price,img,checked,num=1}){
        let shopCart=state.shopCart;
        if(shopCart[goodId]){
            shopCart[goodId]['num']++;
        }else{
            shopCart[goodId]={
                "num": num,
                "id": goodId,
                "name": name,
                "small_image": img,
                "price": price,
                "checked": checked
            }
        }
        state.shopCart={...shopCart};
        setLocalStorage("shopCart",state.shopCart);
    },
    ["CHANGE_GOODS_NUM"](state,{bool,goodId}){
        let shopCart=state.shopCart;
        if(bool){
            shopCart[goodId]['num']++;
        }else{
            shopCart[goodId]['num']--;
            if(shopCart[goodId]['num']===0){
                delete shopCart[goodId];
            }
        }
        state.shopCart={...shopCart};
        setLocalStorage("shopCart",state.shopCart);
    },
    ["CLEAR_GOODS"](state){
        state.shopCart={};
        setLocalStorage("shopCart",state.shopCart);
    },
    ['CHOOSE_GOODS'](state,goodId){
        // console.log(goodId);
        let shopCart=state.shopCart;
        shopCart[goodId]['checked']=!shopCart[goodId]['checked'];
        state.shopCart={...shopCart};
        wx.setStorageSync("shopCart",state.shopCart);
    },
    ['CHOOSE_ALL'](state,val){
        let shopCart=state.shopCart;
        Object.values(shopCart).forEach((good,index)=>{
            good["checked"]=!val;
        });
        state.shopCart={...shopCart};
        setLocalStorage("shopCart",state.shopCart);
    },

    ["USER_INFO"](state,userInfo){
        // console.log({userInfo});
        // console.log(userInfo);

        state.userInfo = userInfo;
        setLocalStorage('userInfo', state.userInfo);
    },
    ['DEL_USERINFO'](state){
        state.userInfo={};
        setLocalStorage("userInfo",state.userInfo);
    }
};
