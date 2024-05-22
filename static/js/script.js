// 获取窗口的高度
const wh = window.innerHeight;
// 监听窗口滚动事件
const sectionBlock = Array.from(document.querySelectorAll('.box-block'));
// 获取所有class为section-item__block的元素，并将其转换为数组
window.addEventListener('scroll', () => {
    // 遍历sectionBlock数组中的每个元素
    sectionBlock.forEach(el => {
        // 获取元素相对于视口的位置信息，包括距离视口底部的距离（bottom）、
        // 距离视口顶部的距离（top）和元素的高度（height）
        const { bottom, top, height } = el.getBoundingClientRect();
        // 如果元素完全位于视口之外，或者完全位于视口之上，则不进行任何操作
        if (bottom <= 0 || top >= wh) return;
        // 计算元素的背景位置的y坐标，根据滚动条的位置进行计算
        const y = document.documentElement.scrollTop * 0.5;
        // 设置元素的背景位置
        el.style.backgroundPosition = `center -${y}px`;
    });
});