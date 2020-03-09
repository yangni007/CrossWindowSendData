class CustomStorage {
    constructor() {

    }
    // 监听另个页面localstorage.setItem()的storage事件
    listenOtherPageStorage(fn) {
        this.addListener('storage', fn);
    }

    addListener(name, fn) {
        window.addEventListener(name, fn)
    }

    // 重写当前页面的localStorage的setItem方法
    // 监听当前页面的localStorage的setItem方法
    listenLocalStorage(fn) {
        this.addListener('pageStorage', fn);
        this.coverSetItem();
    }
    coverSetItem() {
        window.setItem = window.localStorage.setItem;
    
        localStorage.setItem = function(key, value) {
            let oldValue = localStorage.getItem(key);
            // 创建自定义监听器
            let pageStorage = new CustomEvent('pageStorage', {
                detail: {
                    oldValue: oldValue,
                    newValue: value
                }
            });
            // 触发监听器
            window.dispatchEvent(pageStorage);
            
            window.setItem.call(window.localStorage, key, value);
        }
    }
}