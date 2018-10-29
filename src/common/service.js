import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import Global from './global'
import Util from './util'
// import Store from '../vuex/index'

// import {Toast, MessageBox} from 'mint-ui';

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
});

function errorState(response) {
    //console.log(response)
    // 如果http状态码正常，则直接返回数据
    //if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.status == '200') {

    } else {
        alert('请求超时，请稍后再试');
        // Toast({
        //     message: '请求超时，请稍后再试！',
        //     duration: 3000,
        // });
    }

}

function successState(response) {
    //统一判断后端返回的错误码
    if (response.status == '200') {

        if (response.data.errorCode == 0) {
        } else if (response.data.errorCode == -1) {
            alert('服务端错误，请联系管理员')
            // Toast({
            //     message: '服务端错误，请联系管理员',
            //     duration: 3000
            // });
        } else if (response.data.errorCode == 1) {
            alert( response.data.message)
            // Toast({
            //     message: response.data.message,
            //     duration: 3000
            // });
        } else if (response.data.errorCode == 5001) {
            Util.sessionStorageUtil.clear('access_token');
            Util.localStorageUtil.clear('userInfo');
            var signUrl = window.location.href;
            if (signUrl.indexOf('code') > 0) {
                signUrl = signUrl.substring(0, signUrl.indexOf('code'));
            }
            var linkUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Global.weixinInfo.appId + '&redirect_uri=' + encodeURIComponent(signUrl) + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
            console.log(linkUrl)
            window.location.href = linkUrl;
        }
    } else {
        alert('网络请求错误')
        // Toast({
        //     message: '网络请求错误',
        //     duration: 3000
        // });
    }
}

const getResource = (opts, data) => {
    var tokenVal = Util.sessionStorageUtil.get('access_token');
    let httpDefaultOpts = { //http默认配置
        method: opts.method,
        baseURL: Global.requestUrl,
        url: opts.url,
        timeout: 20000,
        params: data,
        data: data,
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            'token': tokenVal
        } : {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8',
            'token': tokenVal
        }
    };

    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }
    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (response) => {
                // console.log(opts.url,response.data.errorCode)
                successState(response);
                resolve(response.data)
            }
        ).catch(
            (error) => {
                errorState(error);
                reject(error)
            }
        )

    });
    return promise
};

export default {
    sys() {
        return {
            getAll: function (data) {//更多文章
                return getResource({
                    url: '/sys/article/category/all',
                    method: 'get'
                }, data)
            },
            getArtitle: function (data) {//文章id
                return getResource({
                    url: '/sys/article',
                    method: 'get'
                }, data)
            },
            getarticleDetail: function (data, key) {//文章详情
                return getResource({
                    url: `/sys/article/${key}`,
                    method: 'get'
                })
            },
            getarticleCode: function (data, key) {//文章详情二维码
                return getResource({
                    url: `sys/article/${key}/qrcode`,
                    method: 'get'
                })
            },
            getarticleBest: function (data, key) {//文章详情
                return getResource({
                    url: `sys/article/best`,
                    method: 'get'
                },data)
            },
        }
    }
}


