var md = new MobileDetect(window.navigator.userAgent);

var detectDom = document.getElementById('detect');

var itemList = ['ipad', 'iphone', 'android', 'wechat'];
for (item of itemList) {
    var itemDom = document.createElement('div');
    itemDom.append('is d' + item + ': ')
    itemDom.append(md.is(item))
    detectDom.appendChild(itemDom)
}