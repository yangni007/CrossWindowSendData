class crossDomain {
    constructor() {
        
    }
    addListener() {
        window.addEventListener('message', this.handler)
    }
    handler = (e) => {

    }
    removeListener() {
        window.removeEventListener('message', this.handler)
    }
    // 这种情况是：Iframe与父页面跨域通信
    // 还有一种情况是： 浏览器两个标签页通信，用window.open()打开的新页面
    createChildPage(src) {
        this.iframe = document.createElement('iframe');
        iframe.src = src;
    }
    // 父窗口向子窗口通信，
    // data就是从父窗口拿到的数据
    // src就是子窗口的域名
    sendMessageToChild(data, src) {
        let default_host = location.protocol + '//' + location.host
        let src = src || default_host;
        this.iframe.contentWindow.postMessage(data, src);
    }
    // 子窗口向父窗口通信
    // data是从子窗口拿到的数据
    // src是父窗口的域名
    sendMessageToParent(data, src) {
        let default_host = location.protocol + '//' + location.host
        let src = src || default_host;
        window.parent.postMessage(data, src);
    }
}
