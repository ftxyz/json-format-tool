document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 添加活动状态
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // JSON格式化功能
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const formatBtn = document.getElementById('format-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const status = document.getElementById('status');

    formatBtn.addEventListener('click', function() {
        const inputText = jsonInput.value.trim();
        
        if (!inputText) {
            showStatus('请输入JSON字符串', 'error');
            return;
        }

        try {
            // 尝试解析JSON
            const parsedJson = JSON.parse(inputText);
            // 格式化JSON
            const formattedJson = JSON.stringify(parsedJson, null, 2);
            
            jsonOutput.value = formattedJson;
            showStatus('JSON格式化成功！', 'success');
        } catch (error) {
            showStatus('JSON格式错误：' + error.message, 'error');
            jsonOutput.value = '';
        }
    });

    clearBtn.addEventListener('click', function() {
        jsonInput.value = '';
        jsonOutput.value = '';
        hideStatus();
    });

    copyBtn.addEventListener('click', function() {
        if (!jsonOutput.value) {
            showStatus('没有可复制的内容', 'error');
            return;
        }

        copyToClipboard(jsonOutput.value, this);
        showStatus('复制成功！', 'success');
    });

    // 字符串转JSON功能
    const stringInput = document.getElementById('string-input');
    const stringOutput = document.getElementById('string-output');
    const stringifyBtn = document.getElementById('stringify-btn');
    const clearStringBtn = document.getElementById('clear-string-btn');
    const copyStringBtn = document.getElementById('copy-string-btn');
    const stringStatus = document.getElementById('string-status');

    stringifyBtn.addEventListener('click', function() {
        const inputText = stringInput.value;
        
        if (!inputText) {
            showStatus('请输入字符串', 'error', 'string-status');
            return;
        }

        try {
            // 将字符串转换为JSON字符串
            const jsonString = JSON.stringify(inputText);
            stringOutput.value = jsonString;
            showStatus('字符串转JSON成功！', 'success', 'string-status');
        } catch (error) {
            showStatus('转换失败：' + error.message, 'error', 'string-status');
            stringOutput.value = '';
        }
    });

    clearStringBtn.addEventListener('click', function() {
        stringInput.value = '';
        stringOutput.value = '';
        hideStatus('string-status');
    });

    copyStringBtn.addEventListener('click', function() {
        if (!stringOutput.value) {
            showStatus('没有可复制的内容', 'error', 'string-status');
            return;
        }

        copyToClipboard(stringOutput.value, this);
        showStatus('复制成功！', 'success', 'string-status');
    });

    // JSON验证功能
    const validateInput = document.getElementById('validate-input');
    const validateBtn = document.getElementById('validate-btn');
    const clearValidateBtn = document.getElementById('clear-validate-btn');
    const validationResult = document.getElementById('validation-result');

    validateBtn.addEventListener('click', function() {
        const inputText = validateInput.value.trim();
        
        if (!inputText) {
            showValidationResult('请输入JSON字符串', false);
            return;
        }

        try {
            const parsedJson = JSON.parse(inputText);
            const jsonType = getJsonType(parsedJson);
            const size = new Blob([inputText]).size;
            
            showValidationResult(`
                <div style="margin-bottom: 1rem;">
                    <strong>✅ JSON格式正确！</strong>
                </div>
                <div style="font-size: 14px; color: #666;">
                    <div>类型: ${jsonType}</div>
                    <div>大小: ${formatBytes(size)}</div>
                    <div>字符数: ${inputText.length}</div>
                </div>
            `, true);
        } catch (error) {
            showValidationResult(`
                <div style="margin-bottom: 1rem;">
                    <strong>❌ JSON格式错误</strong>
                </div>
                <div style="font-size: 14px;">
                    错误信息: ${error.message}
                </div>
            `, false);
        }
    });

    clearValidateBtn.addEventListener('click', function() {
        validateInput.value = '';
        validationResult.style.display = 'none';
    });

    // JSON压缩功能
    const compressInput = document.getElementById('compress-input');
    const compressOutput = document.getElementById('compress-output');
    const compressBtn = document.getElementById('compress-btn');
    const clearCompressBtn = document.getElementById('clear-compress-btn');
    const copyCompressBtn = document.getElementById('copy-compress-btn');
    const compressStatus = document.getElementById('compress-status');

    compressBtn.addEventListener('click', function() {
        const inputText = compressInput.value.trim();
        
        if (!inputText) {
            showStatus('请输入JSON字符串', 'error', 'compress-status');
            return;
        }

        try {
            const parsedJson = JSON.parse(inputText);
            const compressedJson = JSON.stringify(parsedJson);
            
            compressOutput.value = compressedJson;
            
            const originalSize = new Blob([inputText]).size;
            const compressedSize = new Blob([compressedJson]).size;
            const savedBytes = originalSize - compressedSize;
            const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);
            
            showStatus(`压缩成功！节省了 ${formatBytes(savedBytes)} (${savedPercent}%)`, 'success', 'compress-status');
        } catch (error) {
            showStatus('JSON格式错误：' + error.message, 'error', 'compress-status');
            compressOutput.value = '';
        }
    });

    clearCompressBtn.addEventListener('click', function() {
        compressInput.value = '';
        compressOutput.value = '';
        hideStatus('compress-status');
    });

    copyCompressBtn.addEventListener('click', function() {
        if (!compressOutput.value) {
            showStatus('没有可复制的内容', 'error', 'compress-status');
            return;
        }

        copyToClipboard(compressOutput.value, this);
        showStatus('复制成功！', 'success', 'compress-status');
    });

    // 实时输入验证
    jsonInput.addEventListener('input', function() {
        if (this.value.trim()) {
            try {
                JSON.parse(this.value);
                this.style.borderColor = '#48bb78';
            } catch (error) {
                this.style.borderColor = '#f56565';
            }
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    validateInput.addEventListener('input', function() {
        if (this.value.trim()) {
            try {
                JSON.parse(this.value);
                this.style.borderColor = '#48bb78';
            } catch (error) {
                this.style.borderColor = '#f56565';
            }
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    compressInput.addEventListener('input', function() {
        if (this.value.trim()) {
            try {
                JSON.parse(this.value);
                this.style.borderColor = '#48bb78';
            } catch (error) {
                this.style.borderColor = '#f56565';
            }
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    // 工具函数
    function showStatus(message, type, statusId = 'status') {
        const statusElement = document.getElementById(statusId);
        statusElement.textContent = message;
        statusElement.className = `status ${type}`;
        statusElement.style.display = 'block';
        
        // 3秒后自动隐藏成功消息
        if (type === 'success') {
            setTimeout(() => {
                hideStatus(statusId);
            }, 3000);
        }
    }

    function hideStatus(statusId = 'status') {
        const statusElement = document.getElementById(statusId);
        statusElement.style.display = 'none';
    }

    function showValidationResult(message, isValid) {
        validationResult.innerHTML = message;
        validationResult.className = `validation-result ${isValid ? 'valid' : 'invalid'}`;
        validationResult.style.display = 'block';
    }

    function copyToClipboard(text, button) {
        // 创建临时textarea元素
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = text;
        document.body.appendChild(tempTextarea);
        
        // 选择并复制文本
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        
        // 清理临时元素
        document.body.removeChild(tempTextarea);
        
        // 添加复制成功动画
        button.classList.add('copied');
        setTimeout(() => {
            button.classList.remove('copied');
        }, 300);
    }

    function getJsonType(obj) {
        if (Array.isArray(obj)) {
            return `数组 (${obj.length} 个元素)`;
        } else if (obj === null) {
            return '空值';
        } else if (typeof obj === 'object') {
            const keys = Object.keys(obj);
            return `对象 (${keys.length} 个属性)`;
        } else if (typeof obj === 'string') {
            return '字符串';
        } else if (typeof obj === 'number') {
            return '数字';
        } else if (typeof obj === 'boolean') {
            return '布尔值';
        } else {
            return typeof obj;
        }
    }

    function formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl+Enter 或 Cmd+Enter 执行当前标签页的主要操作
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            
            const activeTab = document.querySelector('.tab-content.active');
            if (activeTab) {
                const tabId = activeTab.id;
                switch (tabId) {
                    case 'format':
                        formatBtn.click();
                        break;
                    case 'stringify':
                        stringifyBtn.click();
                        break;
                    case 'validate':
                        validateBtn.click();
                        break;
                    case 'compress':
                        compressBtn.click();
                        break;
                }
            }
        }
        
        // Ctrl+K 或 Cmd+K 清空当前输入
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            
            const activeTab = document.querySelector('.tab-content.active');
            if (activeTab) {
                const tabId = activeTab.id;
                switch (tabId) {
                    case 'format':
                        clearBtn.click();
                        break;
                    case 'stringify':
                        clearStringBtn.click();
                        break;
                    case 'validate':
                        clearValidateBtn.click();
                        break;
                    case 'compress':
                        clearCompressBtn.click();
                        break;
                }
            }
        }
    });

    // 拖拽文件功能
    const textareas = document.querySelectorAll('textarea:not([readonly])');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = '#667eea';
            this.style.backgroundColor = '#f0f4ff';
        });
        
        textarea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = '#e2e8f0';
            this.style.backgroundColor = '';
        });
        
        textarea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '#e2e8f0';
            this.style.backgroundColor = '';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                
                // 检查文件大小（限制为10MB）
                if (file.size > 10 * 1024 * 1024) {
                    alert('文件大小不能超过10MB');
                    return;
                }
                
                // 检查文件类型
                if (!file.type.includes('text') && !file.name.endsWith('.json')) {
                    alert('请选择文本文件或JSON文件');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    textarea.value = event.target.result;
                    // 触发input事件以进行实时验证
                    textarea.dispatchEvent(new Event('input'));
                };
                reader.readAsText(file);
            }
        });
    });

    // 添加示例数据功能
    const sampleData = {
        format: '{"name":"张三","age":30,"city":"北京","hobbies":["读书","游泳","编程"],"address":{"street":"长安街","number":123}}',
        stringify: '你好，世界！这是一个测试字符串。',
        validate: '{"users":[{"id":1,"name":"张三","email":"zhangsan@example.com"},{"id":2,"name":"李四","email":"lisi@example.com"}],"total":2}',
        compress: '{\n  "data": {\n    "users": [\n      {\n        "id": 1,\n        "name": "张三",\n        "email": "zhangsan@example.com",\n        "profile": {\n          "age": 30,\n          "city": "北京"\n        }\n      }\n    ]\n  }\n}'
    };

    // 为每个输入框添加示例按钮
    Object.keys(sampleData).forEach(tabId => {
        const tabContent = document.getElementById(tabId);
        const inputSection = tabContent.querySelector('.input-section');
        const buttonGroup = inputSection.querySelector('.button-group');
        
        const sampleBtn = document.createElement('button');
        sampleBtn.textContent = '加载示例';
        sampleBtn.className = 'btn btn-secondary';
        sampleBtn.addEventListener('click', function() {
            const textarea = inputSection.querySelector('textarea');
            textarea.value = sampleData[tabId];
            textarea.dispatchEvent(new Event('input'));
        });
        
        buttonGroup.appendChild(sampleBtn);
    });
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 添加加载完成的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 检查URL参数自动填充内容
    const urlParams = new URLSearchParams(window.location.search);
    const jsonData = urlParams.get('json');
    
    if (jsonData) {
        try {
            const decodedData = decodeURIComponent(jsonData);
            document.getElementById('json-input').value = decodedData;
            document.getElementById('format-btn').click();
        } catch (error) {
            console.error('URL参数解析失败:', error);
        }
    }
}); 