/**
 * Created by zwwill on 2017/8/27.
 */

let utilFunc = {
  initIconFont() {
    let domModule = weex.requireModule('dom');
    let platform = weex.config.env.platform.toLowerCase();
    let url;
    if ('android' == platform) {
      //本地资源采用'local:// '的方式加载
      //第三个斜杠是代表当前目录,对于android来说,如果加载的是字体,那么就是assets目录,同理`/iconfont.ttf'`就是加载`assets`目录下的iconfont.ttf文件
      url = "url('local:///font/iconfont.ttf')"; //注意我这里是将字体文件放在'assets/font/''目录下的,所以
    } else if ('ios' == platform) {
      //todo 理论上同android未测试
      url = "url('local:///font/iconfont.ttf')";
    } else {
      url = "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')";
    }
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: url
    });
  },
  decode(text) {
    // https://segmentfault.com/a/1190000011852209
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    let regExp = /&#x[a-z]\d{3,4};?/;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function(iconText) {
        let replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  setBundleUrl(url, jsFile) {
    const bundleUrl = url;
    let host = '';
    let path = '';
    let nativeBase;
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist';
    } else if (isiOSAssets) {
      // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
      // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
      const matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
      if (matches && matches.length >= 2) {
        host = matches[1];
      }
      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1];
      }
      nativeBase = 'http://' + host + '/';
    }
    const h5Base = './index.html?page=';
    // in Native
    let base = nativeBase;
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
      // check if in weexpack project
      if (path === 'web' || path === 'dist') {
        base = h5Base + '/dist/';
      } else {
        base = h5Base + '';
      }
    } else {
      base = nativeBase + (!!path ? path + '/' : '');
    }

    const newUrl = base + jsFile;
    return newUrl;
  },
  getUrlSearch(url, name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = url.slice(url.indexOf('?') + 1).match(reg);
    if (r != null) {
      try {
        return decodeURIComponent(r[2]);
      } catch (_e) {
        return null;
      }
    }
    return null;
  }
};

export default utilFunc;
