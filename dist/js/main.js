// 每秒钟修改样式
setInterval(() => {
    // 获取所有具有 .vp-image 类的元素
    const elements = document.querySelectorAll('.vp-image');

    // 遍历这些元素并设置样式
    elements.forEach(element => {
        element.style.maxWidth = '440px';
        element.style.margin = '0 48px';
    });
}, 1000);