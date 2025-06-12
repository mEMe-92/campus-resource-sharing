// AJAX请求示例
function sendRequest(url, data, method = 'POST', callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4) {
            callback(xhr.status, null);
        }
    };// AJAX请求封装
function sendRequest(url, data, method = 'POST', callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    
    // 设置请求头（如果是JSON数据）
    if (method === 'POST' || method === 'PUT') {
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
                    callback(null, response);
                } catch (e) {
                    callback('解析响应数据失败', null);
                }
            } else {
                let errorMsg = `请求失败，状态码: ${xhr.status}`;
                if (xhr.status === 0) {
                    errorMsg = '网络连接失败，请检查网络';
                } else if (xhr.status >= 400 && xhr.status < 500) {
                    errorMsg = '客户端错误，请检查请求数据';
                } else if (xhr.status >= 500) {
                    errorMsg = '服务器错误，请稍后再试';
                }
                callback(errorMsg, null);
            }
        }
    };
    
    xhr.onerror = function() {
        callback('网络请求发生错误', null);
    };
    
    // 发送请求数据
    if (data && (method === 'POST' || method === 'PUT')) {
        xhr.send(JSON.stringify(data));
    } else {
        xhr.send();
    }
}

// 使用示例（适配我们的页面）
document.addEventListener('DOMContentLoaded', function() {
    const pointsExchangeBtn = document.querySelector('.points-exchange .btn-primary');
    
    if (pointsExchangeBtn) {
        pointsExchangeBtn.addEventListener('click', function() {
            const resourceId = this.getAttribute('data-resource-id');
            if (!resourceId) return;
            
            sendRequest('/api/exchange', { resourceId }, 'POST', function(error, response) {
                if (error) {
                    alert(`兑换失败: ${error}`);
                } else {
                    alert('兑换成功！');
                    // 更新积分显示
                    document.getElementById('points').textContent = response.newPoints;
                }
            });
        });
    }
});

    xhr.send(JSON.stringify(data));
}

// 使用示例
document.getElementById('submitBtn').addEventListener('click', function() {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    sendRequest('/api/submit', data, 'POST', function(error, response) {
        if (error) {
            console.error('请求失败:', error);
        } else {
            console.log('响应数据:', response);
        }
    });
});
