# JSON格式化工具 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple.svg)](https://web.dev/progressive-web-apps/)

一个专业的在线JSON处理工具，支持字符串转JSON、JSON格式化、JSON验证、JSON压缩等功能。

## 🌟 在线演示

- **演示地址**: [https://your-username.github.io/json-formatter](https://your-username.github.io/json-formatter)
- **备用地址**: [https://formatjson.com](https://formatjson.com)

## 📸 项目截图

![JSON格式化工具截图](https://via.placeholder.com/800x400?text=JSON格式化工具截图)

## 功能特性

- ✅ **JSON格式化** - 将压缩的JSON字符串格式化为易读的格式
- ✅ **字符串转JSON** - 将普通字符串转换为JSON字符串格式
- ✅ **JSON验证** - 验证JSON字符串是否符合标准格式
- ✅ **JSON压缩** - 压缩JSON字符串，减少存储空间
- ✅ **实时验证** - 输入时实时检查JSON格式
- ✅ **文件拖拽** - 支持拖拽文件直接加载内容
- ✅ **键盘快捷键** - 支持Ctrl+Enter执行操作
- ✅ **响应式设计** - 完美适配手机、平板和桌面设备
- ✅ **隐私安全** - 纯前端处理，不上传任何数据到服务器

## 使用方法

1. 选择需要的功能标签（格式化JSON、字符串转JSON等）
2. 在输入框中粘贴或输入内容
3. 点击相应的处理按钮
4. 查看处理结果并使用复制按钮复制结果

## 键盘快捷键

- `Ctrl+Enter` 或 `Cmd+Enter` - 执行当前标签页的主要操作
- `Ctrl+K` 或 `Cmd+K` - 清空当前输入

## 文件结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 功能脚本
├── manifest.json       # PWA配置
├── sitemap.xml         # 网站地图
├── robots.txt          # 搜索引擎爬虫配置
└── README.md           # 项目说明
```

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, CSS变量)
- JavaScript (ES6+)
- PWA支持

## SEO优化

- 完整的meta标签配置
- 结构化数据(Schema.org)
- 语义化HTML标签
- 优化的URL结构
- 网站地图和robots.txt
- 移动设备友好

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 快速开始

### 方法一：直接使用
1. 克隆项目到本地
   ```bash
   git clone https://github.com/your-username/json-formatter.git
   cd json-formatter
   ```

2. 直接在浏览器中打开 `index.html`

### 方法二：使用Web服务器
1. 使用Python启动本地服务器
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. 访问 `http://localhost:8000`

### 方法三：使用Node.js
1. 安装serve
   ```bash
   npm install -g serve
   ```

2. 启动服务器
   ```bash
   serve .
   ```

## 📦 部署到GitHub Pages

1. 在GitHub仓库中，进入 `Settings` → `Pages`
2. 选择 `Source` 为 `Deploy from a branch`
3. 选择 `main` 分支
4. 点击 `Save`
5. 等待部署完成，访问 `https://your-username.github.io/json-formatter`

## 📂 项目结构详解

```
json-formatter/
├── 📄 index.html          # 主页面 - 包含所有HTML结构和SEO优化
├── 🎨 styles.css          # 样式文件 - 现代化响应式设计
├── ⚡ script.js           # 功能脚本 - 所有JavaScript逻辑
├── 📱 manifest.json       # PWA配置 - 支持安装到桌面
├── 🗺️ sitemap.xml         # 网站地图 - SEO优化
├── 🤖 robots.txt          # 爬虫配置 - 搜索引擎友好
├── ⚙️ .htaccess           # 服务器配置 - 性能和安全优化
├── 📋 LICENSE             # MIT许可证
├── 🚫 .gitignore          # Git忽略文件
└── 📖 README.md           # 项目说明文档
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！

### 如何贡献

1. **Fork** 这个仓库
2. **克隆** 你的fork到本地
   ```bash
   git clone https://github.com/your-username/json-formatter.git
   ```
3. **创建** 新的特性分支
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **提交** 你的修改
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **推送** 到分支
   ```bash
   git push origin feature/amazing-feature
   ```
6. **创建** Pull Request

### 贡献类型

- 🐛 **Bug修复** - 发现并修复问题
- ✨ **新功能** - 添加新的工具功能
- 📝 **文档改进** - 完善文档和注释
- 🎨 **UI/UX改进** - 优化用户界面和体验
- ⚡ **性能优化** - 提升加载速度和响应性
- 🔧 **代码重构** - 改进代码结构和可维护性

### 开发规范

- 使用语义化的HTML标签
- 遵循CSS BEM命名规范
- 保持JavaScript代码的可读性
- 添加适当的注释
- 确保跨浏览器兼容性

## 🐛 问题反馈

如果你发现了bug或有功能建议，请：

1. 查看 [Issues](https://github.com/your-username/json-formatter/issues) 是否已存在相同问题
2. 如果没有，请创建新的 Issue
3. 提供详细的问题描述和复现步骤

## 🎯 未来计划

- [ ] 添加更多JSON工具功能
- [ ] 支持JSON Schema验证
- [ ] 添加深色主题
- [ ] 支持多语言国际化
- [ ] 添加JSON差异对比功能
- [ ] 支持JSON到其他格式转换
- [ ] 添加历史记录功能

## 📊 统计信息

- **文件大小**: 约50KB
- **加载时间**: < 1秒
- **支持浏览器**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **移动端友好**: ✅
- **PWA支持**: ✅
- **SEO优化**: ✅

## 🌟 Star History

如果这个项目对你有帮助，请给我们一个Star！⭐

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/json-formatter&type=Date)](https://star-history.com/#your-username/json-formatter&Date)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！

## 📞 联系我们

- **GitHub Issues**: [提交Issue](https://github.com/your-username/json-formatter/issues)
- **Email**: your-email@example.com
- **网站**: https://formatjson.com

---

<div align="center">
  <p>如果这个项目对你有帮助，请考虑给我们一个Star ⭐</p>
  <p>Made with ❤️ by JSON格式化工具团队</p>
</div> 