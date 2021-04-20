import ajax from './ajax'

const LOCAL_BASE_URL= "http://www.chenxv1.top/abc/web/xlmc";
    // "http://chenxv.xyz/abc/web/xlmc";
    // "/api";
    //http://39.103.172.88/web/xlmc/api/homeApi

export const getHomeData=()=> ajax(LOCAL_BASE_URL+"/api/homeApi");
export const getCategoriesData=()=> ajax(LOCAL_BASE_URL+"/api/homeApi/categories");
export const getCategoriesdetailData=(params)=> ajax(LOCAL_BASE_URL+"/api/homeApi/categoriesdetail/"+params);

// 添加用户收货地址http://demo.itlike.com/web/xlmc/api/address/add
// export const addAddress=({user_id, address_name, address_phone, address_area, address_area_detail,
//                              address_post_code, address_tag, province, city, county, areaCode})=>
//     ajax(BASE_URL+"/api/address/add"+{user_id, address_name, address_phone, address_area, address_area_detail,
//         address_post_code, address_tag, province, city, county, areaCode});


//获取验证码
export  const  getCode1=(phone)=> ajax(LOCAL_BASE_URL+"/api/send_code",{phone});
export  const  code1Login=(phone, code)=>
    ajax(LOCAL_BASE_URL+"/api/login_code",
        {phone, code},"post");
// // 2.2 手机验证码登录(POST)
// export const phoneCodeLogin = (phone, code) =>
//     ajax('http://demo.itlike.com/web/xlmc/api/login_code', {phone, code}, 'POST');

// 2.1 获取短信验证码(GET)
// export const getPhoneCode1 = (phone) => ajax('http://demo.itlike.com/web/xlmc/api/send_code', {phone});

// http://demo.itlike.com/web/xlmc/api/userinfo
//自动登录
export  const  autoLogin=()=> ajax(LOCAL_BASE_URL+"/api/userinfo");
export  const  exitLogin=()=> ajax(LOCAL_BASE_URL+"/api/logout");

//添加商品
// http://demo.itlike.com/web/xlmc/api/cart/add

export  const  addGoods=({user_id, goods_id, goods_name, goods_price, small_image})=>
    ajax(LOCAL_BASE_URL+"/api/cart/add",
        {user_id, goods_id, goods_name, goods_price, small_image},"POST");
//获取购物车的数据
export  const  getShopCart=(userId)=> ajax(LOCAL_BASE_URL+"/api/cart/search/"+userId);

//购物车商品单选点击
// 1）单个商品的选中和取消选中请求方式：POST   参数：{user_id: String, goods_id: String}
// http://demo.itlike.com/web/xlmc/api/cart/singer_select
export const sendSelect=({user_id, goods_id})=>
    ajax(LOCAL_BASE_URL+'/api/cart/singer_select',{user_id,goods_id},"POST");

// 3）修改购物车商品数量请求方式：POST
// 参数：{user_id: String,  goods_id: String，type: String<add, reduce>}
// http://demo.itlike.com/web/xlmc/api/cart/num
export const changeNum=({user_id,goods_id,type})=>
    ajax(LOCAL_BASE_URL+'/api/cart/num',{user_id,goods_id,type},"POST");
// 4）删除购物车数据http://demo.itlike.com/web/xlmc/api/cart/clear
//清空购物车
export const delGoods=(user_id)=>
    ajax(LOCAL_BASE_URL+"/api/cart/clear/"+user_id);

// 2）所有商品的选中和取消选中请求方式：POST
// 参数：{user_id: String, flag: Boolean}http:
//demo.itlike.com/web/xlmc/api/cart/all_select
export const sendSelectAll=({user_id, flag})=>
    ajax(LOCAL_BASE_URL+"/api/cart/all_select",{user_id, flag},"POST");

// 4）删除已经生成订单的商品http://demo.itlike.com/web/xlmc/api/cart/del_checked/:user_id

// 2）添加用户收货地址请求方式：POST
// 参数：{user_id, address_name, address_phone, address_area, address_area_detail,
//     address_post_code, address_tag, province, city, county, areaCode}
// http://demo.itlike.com/web/xlmc/api/address/add
export const addAddress=({user_id, address_name, address_phone, address_area, address_area_detail,
                             address_post_code, address_tag, province, city, county, areaCode})=>
    ajax(LOCAL_BASE_URL+'/api/address/add',{user_id, address_name, address_phone, address_area, address_area_detail,
        address_post_code, address_tag, province, city, county, areaCode},"post");

// 3）获取修改用户信息请求方式：POST    参数：{user_id, address_id}
// http://demo.itlike.com/web/xlmc/api/address/one
export const getEditAddress=({user_id, address_id})=>
    ajax(LOCAL_BASE_URL+'/api/address/one',{user_id, address_id},"post");


// http://demo.itlike.com/web/xlmc/api/address/search/:user_id
export const getAddress=(userId)=>
    ajax(LOCAL_BASE_URL+'/api/address/search/'+userId);


// ({user_id, address_id})=>
//

// 1）修改用户地址请求方式：POST
// 参数：{address_id,user_id, address_name, address_phone,
//     address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode}
// http://demo.itlike.com/web/xlmc/api/address/edit
export const sendEditAddress=({address_id,user_id, address_name, address_phone,
                                  address_area, address_area_detail, address_post_code,
                                  address_tag, province, city, county, areaCode})=>
    ajax(LOCAL_BASE_URL+'/api/address/edit',{address_id,user_id, address_name, address_phone,
        address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode},"POST")

//2）删除用户地址请求方式：GET http://demo.itlike.com/web/xlmc/api/address/del/:address_id
export const delAddress=(address_id)=>
    ajax(LOCAL_BASE_URL+'/api/address/del/'+address_id);


// 3）查询所有已经被选中的商品请求方式：GET http://demo.itlike.com/web/xlmc/api/cart/selected/:user_id
export const getSelectedGoods=(user_id)=>
    ajax(LOCAL_BASE_URL+'/api/cart/selected/'+user_id);

//创建订单
// 1）提交订单请求方式：POST
// 参数：{user_id, address_id, arrive_time, cart_shop, notice, shop_price, dis_price}
// http://demo.itlike.com/web/xlmc/api/order/post
export const createOrder=({user_id, address_id, arrive_time, cart_shop, notice, shop_price, dis_price})=>
    ajax(LOCAL_BASE_URL+'/api/order/post',
        {user_id, address_id, arrive_time, cart_shop, notice, shop_price, dis_price},"POST");

// 3）查询订单请求方式：POST    参数：{user_id, status}http://demo.itlike.com/web/xlmc/api/order/get
// export const getOrder=({user_id, status})=>{
//     ajax(LOCAL_BASE_URL+'/api/order/get',{user_id, status},'POST')
// }


// 4）删除已经生成订单的商品http://demo.itlike.com/web/xlmc/api/cart/del_checked/:user_id
export const delOrderGoods=(user_id)=>
    ajax(LOCAL_BASE_URL+'/api/cart/del_checked/'+user_id);


const LOCAL_PAY="http://39.103.172.88/pay";
    // "http://47.98.157.152/WXPayProject/pay";
    // '/pay';
// 1）生成微信支付二维码请求方式：GET
// 参数：{outTradeNo: String, totalFee:Number}
// http://47.98.157.152/WXPayProject/pay/createNative.do
export const createOrderCard=(outTradeNo, totalFee)=>
    ajax(LOCAL_PAY+'/createNative.do',{outTradeNo, totalFee});

// 2）查询是否支付成功请求方式：GET    参数：{out_trade_no:String}
export const getPay=(out_trade_no)=>
    ajax(LOCAL_PAY+'/queryPayStatus.do',{out_trade_no});

export const setPayQuery=(user_id, order_id)=>
    ajax(LOCAL_BASE_URL+'/api/order/setquery',{user_id, order_id},"POST");

export const getQuery=(user_id, order_id)=>
    ajax(LOCAL_BASE_URL+'/api/order/getquery',{user_id, order_id},"POST");

//2）订单支付成功请求方式：POST    参数：{user_id, order_id}
// http://demo.itlike.com/web/xlmc/api/order/change_status
export const sendPaySuccess=(user_id, order_id)=>
    ajax(LOCAL_BASE_URL+'/api/order/change_status',{user_id, order_id},"POST");


// 查询订单请求方式：POST    参数：{user_id, status}http://demo.itlike.com/web/xlmc/api/order/get
export const getOrderData=(user_id, status)=>
    ajax(LOCAL_BASE_URL+'/api/order/get',{user_id, status},'POST')


