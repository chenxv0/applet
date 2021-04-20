<template>  
    <view >
        <!--面板头部-->
        <view >
            <view class="logo_parent_login">
                <image  class="logo_login" mode="aspectFit"  src="https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/login.png?sign=b0d64f533ae981631e82c51e2eeeb84e&t=1618367793"  style="width=100px;height=100px;"/>
            </view>
            <!--面板标题-->
            <view class="login-header-title">
                <view style="display:inline-block" class="current_login">手机登录</view>
                <view style="display:inline-block">密码登录</view>
            </view>
        </view>
        <!--面板表单部分-->
        <view >
                <!--手机验证码登录部分-->
                <view  class="goToLogin current_login">
                    <view class="getPhone">
                        <input type="number" @focus="changeCss1(0)"   @blur="changeCss2(0)"  maxlength="11"  class="myInput" placeholder="手机号" v-model="phone">
                        <button  v-if="code"   :class="{phone_right_login:phoneCheck}" @tap.prevent="getCode">获取验证码</button>
                        <button  v-else disabled="true" >已发送({{nextTime}}s)</button>
                    </view>
                    <view class="login-verification">
                        <input class="myInput1" type="number" @focus="changeCss1(1)"   @blur="changeCss2(1)"  maxlength="8" placeholder="验证码" v-model="code1"/>
                    </view>
                    <view class="login-hint">
                        温馨提示：点击获取验证码之后可输入随机6位数进行登录
                        <view style="display:inline-block;color:green">服务协议与隐私政策</view>
                    </view>
                </view>
                <!--账号登录部分-->
                <view class="goToLogin" >
                    <view>
                        <view >
                            <input type="tel" maxlength="11" placeholder="用户名">
                        </view>
                        <view class="login-verification_login">
                            <input  type="password" maxlength="20" placeholder="密码" autocomplete="off" />
                            <!--<input  type="text" maxlength="20" placeholder="密码" autocomplete="off" />-->
                            <view >
                                <img src="https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/hide_pwd.png?sign=0e432fa579f629016550995caa1be0d2&t=1618367844"  alt="" width="20">
                                <img src="https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/show_pwd.png?sign=d8a2f83ff034eceb8d905b5c494c6f9a&t=1618367874" alt="" width="20">
                            </view>
                        </view>
                        <view >
                            <input type="text" maxlength="4" placeholder="验证码">
                            <!-- <image
                                    class="get-verification_login"
                                    src="images/captcha.svg"
                                    alt="captcha"
                            /> -->
                        </view>
                    </view>
                </view>
                <button  @tap.prevent="login" class="login-submit">登录</button>
            <button class="login-back " >返回</button>
            <van-toast id="van-toast" />
        </view>
    </view>
</template>

<script>
import { getCode1, code1Login, autoLogin } from "./../../service/api/index";
import { mapMutations } from "vuex";

import { $ } from "@tarojs/extend";
import Taro from "@tarojs/taro";
import Toast from "../../components/vant-weapp/dist/toast/toast.js";
import {setLocalStorage} from "../../config/globel"
export default {
  name: "Login",
  data() {
    return {
      code: true,
      phone: "",
      nextTime: 5,
      code1: "",
      ifGetCode: false
    };
  },
  computed: {
    phoneCheck() {
      return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.phone);
    }
  },
  methods: {
    changeCss1(a) {
      if (a) {
        $(".myInput1").addClass("isFocus");
        $(".myInput1").attr("placeholder", "");
      } else {
        $(".myInput").addClass("isFocus");
        $(".myInput").attr("placeholder", "");
      }
    },
    changeCss2(a) {
      if (a) {
        $(".myInput1").removeClass("isFocus");
        $(".myInput1").attr("placeholder", "验证码");
      } else {
        $(".myInput").removeClass("isFocus");
        $(".myInput").attr("placeholder", "手机号");
      }
    },

    ...mapMutations(["USER_INFO"]),
    async getCode() {
      this.code = false;
      let dsq11 = setInterval(() => {
        this.nextTime--;
        if (this.nextTime === 0) {
          clearInterval(dsq11);
          this.nextTime = 5;
          this.code = true;
        }
      }, 1000);
      let result = await getCode1(this.phone);
      console.log(result);
      if (result.success_code === 200) {
        this.ifGetCode = true;
      }
    },
    async login() {
      if (this.code1 == "666666") {
        let result = await code1Login(this.phone);
        // console.log(result);
        if (result.success_code === 200) {
          let userInfo = result.data;
          console.log(userInfo);
          this.USER_INFO(userInfo);
          Taro.navigateTo({
            url: "../index/index"
          });
          setLocalStorage("active",0);
        }
      } else {
        Toast({
          type: "fail",
          message: "请输入正确的验证码"
        });
      }
    }
  }
};
</script>

<style>
.logo_parent_login {
  text-align: center;
  padding-top: 100px;
}
.logo_login {
  width: 500px;
  height: 300px;
}
.login-header-title {
  margin-top: -40px;
  padding-bottom: 10px;
  text-align: center;
}
.login-header-title > view {
  color: #333;
  font-size: 40px;
  padding-bottom: 14px;
}
.login-header-title > view:first-child {
  margin-right: 40px;
}
.login-header-title > view.current_login {
  color: #75a342;
  font-weight: 700;
  border-bottom: 2px solid #75a342;
}
.goToLogin {
  display: none;
}
.goToLogin.current_login {
  display: block;
}

.current_login input {
  margin: 0 auto;
  width: 500px;
  height: 80px;
  padding-left: 23px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 45px Arial;
}

.current_login .isFocus {
  border: 5px solid #75a342;
}

.getPhone button::after {
  border: none;
}
.getPhone button[disabled] {
  color: green;
}
.getPhone button {
  width: 180px;
  height: 80px;
  font-size: 30px;
  padding: 0;
  margin: 50px;
  background: transparent;
  text-align: center;
  line-height: 80px;
  position: absolute;
  top: 395px;
  right: 80px;
  z-index: 2;
}
.login-verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.login-hint {
  color: #999;
  font-size: 30px;
  width: 600px;
  margin: 0 auto;
  margin-top: 60px;
}

.login-submit {
  width: 500px;
  height: 70px;
  margin-top: 30px;
  border-radius: 4px;
  background: #75a342;
  color: #fff;
  text-align: center;
  font-size: 40px;
  line-height: 70px;
  border: 0;
}

.login-back {
  width: 500px;
  height: 70px;
  margin-top: 15px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #75a342;
  color: #75a342;
  text-align: center;
  font-size: 40px;
  line-height: 70px;
}
</style>