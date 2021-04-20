export default{
    totalPrice(state){
        let num=0;
        for(let i in state.shopCart){
            // this.shopCart[i]['num']
            if(state.shopCart[i]['checked']){
                num+=state.shopCart[i]['num']*Number(state.shopCart[i]['price']);
            }
        }
        return num.toFixed(2);
    },
    totalNum(state){
        let num=0;
        for(let i in state.shopCart){
            // this.shopCart[i]['num']
            if(state.shopCart[i]['checked']){
                num++;
            }
        }
        return num;
    },
    isSelectAll(state){
        if(Object.values(state.shopCart).length!==0){
            let a=true;
            Object.values(state.shopCart).forEach((good)=>{
                if(!good['checked']){
                    a=false;
                    return a;
                }
            });
            return a;
        }
        return false;
    },
    sendMoney(state,getters){
        if(Number(getters.totalPrice)>30){
            return 0;
        }else{
            return 6;
        }
    },
    sumMoney(state,getters){

        return Number(getters.totalPrice)*100+Number(getters.sendMoney)*100;
    }
}