// 表单验证 - 支持登录和注册页面
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', validateRegisterForm);
    }
});

// 登录表单验证
function validateLoginForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    let isValid = true;
    clearErrors();
    
    if (username === '') {
        showError('username', '请输入用户名');
        isValid = false;
    }
    
    if (password === '') {
        showError('password', '请输入密码');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', '密码长度至少为6位');
        isValid = false;
    }
    
    if (isValid) {
        // 实际提交前可添加更多处理
        console.log('登录表单验证通过');
        event.target.submit();
    }
}

// 注册表单验证
function validateRegisterForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    let isValid = true;
    clearErrors();
    
    if (username === '') {
        showError('username', '请输入用户名');
        isValid = false;
    } else if (username.length < 4) {
        showError('username', '用户名长度至少为4位');
        isValid = false;
    }
    
    if (password === '') {
        showError('password', '请输入密码');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', '密码长度至少为6位');
        isValid = false;
    }
    
    if (confirmPassword === '') {
        showError('confirm-password', '请确认密码');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirm-password', '两次输入的密码不一致');
        isValid = false;
    }
    
    if (isValid) {
        // 实际提交前可添加更多处理
        console.log('注册表单验证通过');
        event.target.submit();
    }
}

// 显示错误信息
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    field.classList.add('error-field');
    
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error')) {
        errorElement = document.createElement('div');
        errorElement.classList.add('error');
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    errorElement.textContent = message;
}

// 清除错误信息
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('.error-field');
    fields.forEach(field => field.classList.remove('error-field'));
}