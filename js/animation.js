// 基础动画
function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'block';
    let interval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        element.style.opacity = opacity;
        opacity += 0.05;
    }, 30);
}

function fadeOut(element) {
    let opacity = 1;
    let interval = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(interval);
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        opacity -= 0.05;
    }, 30);
}

// 使用示例：在页面加载时淡入某个元素
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('welcome-message');
    fadeIn(element);
});
