import Util from './util'

/**
 * 格式化JSON
 * @param  {String} json    [JSON字符串]
 * @param  {Object} options [参数]
 * @return {[type]}         [格式化后的字符串]
 */
const formatJson = (json, options) => {
    return Util.formatJson(json, {
        newlineAfterColonIfBeforeBraceOrBracket: false
    })
};

const getIpFromUrl = (url, options) => {
    var urlArr = url.split(':');
    if (urlArr.length > 1) {
        return urlArr[1].replace('//', '')
    } else {
        return url
    }
};

const getPortFromUrl = (url, options) => {
    var arr = url.split(':');
    if (arr.length < 3) {
        return '80'
    } else {
        return arr[2]
    }
};
const getArticlenoneImg = (status) => {
    let imgSrc = '';
    switch (status) {
        case 1:
            imgSrc = require('../assets/images/zhongyiOne.png');
            break;
        case 2:
            imgSrc =  require('../assets/images/yangshengOne.png');
            break;
        case 3:
            imgSrc =  require('../assets/images/xinliOne.png');
            break;
        case 4:
            imgSrc =  require('../assets/images/yundongOne.png');
            break;
        case 5:
            imgSrc =  require('../assets/images/meiliOne.png');
            break;
        case 6:
            imgSrc =  require('../assets/images/jiatingOne.png');
            break;
        case 7:
            imgSrc = require( '../assets/images/yuerOne.png')
            break;
        default:
            imgSrc = require( '../assets/images/jiankangOne.png');
            break
    }
    return imgSrc
};
const getArticleImg = (status) => {
    let imgSrc = '';
    switch (status) {
        case 1:
            imgSrc = require('../assets/images/zhongyi.png');
            break;
        case 2:
            imgSrc =  require('../assets/images/yangsheng.png');
            break;
        case 3:
            imgSrc =  require('../assets/images/xinli.png');
            break;
        case 4:
            imgSrc =  require('../assets/images/yundong.png');
            break;
        case 5:
            imgSrc =  require('../assets/images/meili.png');
            break;
        case 6:
            imgSrc =  require('../assets/images/jiating.png');
            break;
        case 7:
            imgSrc = require( '../assets/images/yuer.png')
            break;
        default:
            imgSrc = require( '../assets/images/jiankang.png');
            break
    }
    return imgSrc
};
const getArticleIcon = (status) => {
    let imgSrc = '';
    switch (status) {
        case 1:
            imgSrc = require('../assets/images/zhongyi_lv.png');
            break;
        case 2:
            imgSrc =  require('../assets/images/yangsheng_lv.png');
            break;
        case 3:
            imgSrc =  require('../assets/images/xinli_lv.png');
            break;
        case 4:
            imgSrc =  require('../assets/images/yundong_lv.png');
            break;
        case 5:
            imgSrc =  require('../assets/images/meili_lv.png');
            break;
        case 6:
            imgSrc =  require('../assets/images/jiating_lv.png');
            break;
        case 7:
            imgSrc = require( '../assets/images/yuer_lv.png')
            break;
        default:
            imgSrc = require( '../assets/images/jiankang_lv.png');
            break
    }
    return imgSrc
};
const getArticleStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 1:
            statusDesc = '中医';
            break;
        case 2:
            statusDesc = '养生';
            break;
        case 3:
            statusDesc = '心理';
            break;
        case 4:
            statusDesc = '运动';
            break;
        case 5:
            statusDesc = '美丽';
            break;
        case 6:
            statusDesc = '家庭';
            break;
        case 7:
            statusDesc = '育儿';
            break;
        default:
            statusDesc = '健康';
            break
    }
    return statusDesc
};

const getCronStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 0:
            statusDesc = '未执行';
            break;
        case 1:
            statusDesc = '执行中';
            break;
        default:
            statusDesc = '未执行';
            break
    }
    return statusDesc
};

const arrayToStr = (arr, separator) => {
    return Util.arrayToStr(arr, separator)
};
export default {
    formatJson: formatJson,
    getIpFromUrl: getIpFromUrl,
    getPortFromUrl: getPortFromUrl,
    getCronStatus: getCronStatus,
    arrayToStr: arrayToStr,
    getArticleStatus: getArticleStatus,
    getArticleIcon: getArticleIcon,
    getArticleImg: getArticleImg,
    getArticlenoneImg: getArticlenoneImg
}
