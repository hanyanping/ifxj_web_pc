import Util from './util'
import Service from './service'

const grantType = 'client_credentials';

const requestUrl = process.env.API_ROOT;
const env = process.env.ENV;
let weixinInfo = {};
let clientInfo = {};
if (env === 'dev') {
    weixinInfo = {
        appId: 'wx4de6471a3bdaf0c5', //开发
    };
    clientInfo = {
        oneLevUrl: "//devwechat.ifxj.com",
        twoLevel: "kl.ifxj.com",
        cashierUrl: "//devwww.kunlunhealth.com.cn/pay/cashier"
    };
} else if (env === 'test') { //测试环境
    weixinInfo = {
        appId: 'wx4de6471a3bdaf0c5', //测试1
    };
    clientInfo = {
        oneLevUrl: "//devwechat.ifxj.com",
        twoLevel: "kl.ifxj.com",
        cashierUrl: "//devwww.kunlunhealth.com.cn/pay/cashier"
    };
} else if (env === 'product') { //昆仑保险
    weixinInfo = {
        appId: 'wxf2aeade42b63d6b9', //昆仑健康保险
    };
    clientInfo = {
        oneLevUrl: "//h5.ifxj.com",
        twoLevel: "kl.ifxj.com",
        cashierUrl: "//www.kunlunhealth.com.cn/pay/cashier"
    };
}

export default {
    grant_type: grantType,
    requestUrl: requestUrl,
    env: env,
    weixinInfo: weixinInfo,
    clientInfo: clientInfo,
}
