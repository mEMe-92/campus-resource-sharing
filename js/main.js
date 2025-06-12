// 文档加载完成后执行的函数
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成!');
    
    // 给所有按钮添加点击事件
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

// 处理按钮点击事件
function handleButtonClick(event) {
    const button = event.target;
    console.log(`点击了按钮: ${button.innerText}`);
    button.classList.toggle('active');
}

// 简单的切换内容展示
function toggleContent() {
    const content = document.getElementById('content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// 动画效果 - 显示隐藏元素
function fadeToggle(element) {
    if (element.style.opacity === '0') {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
}
