# 部署指南

本文档介绍如何将JSON格式化工具部署到各种托管平台。

## 🚀 部署选项

### 1. GitHub Pages (推荐)

GitHub Pages是免费的，非常适合静态网站。

#### 步骤：

1. **创建GitHub仓库**
   - 登录GitHub
   - 创建新仓库，命名为 `json-formatter`
   - 选择Public（私有仓库需要GitHub Pro）

2. **上传代码**
   ```bash
   git clone https://github.com/your-username/json-formatter.git
   cd json-formatter
   
   # 添加所有文件
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库Settings
   - 找到Pages部分
   - Source选择"Deploy from a branch"
   - 选择main分支
   - 点击Save

4. **访问网站**
   - 等待1-2分钟
   - 访问 `https://your-username.github.io/json-formatter`

#### 自定义域名：

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名，如：`formatjson.com`
3. 在域名DNS设置中添加CNAME记录指向 `your-username.github.io`

### 2. Vercel

Vercel提供优秀的静态网站托管服务。

#### 步骤：

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd json-formatter
   vercel
   ```

4. **配置（可选）**
   
   创建 `vercel.json` 文件：
   ```json
   {
     "cleanUrls": true,
     "trailingSlash": false,
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           },
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-XSS-Protection",
             "value": "1; mode=block"
           }
         ]
       }
     ]
   }
   ```

### 3. Netlify

Netlify是另一个优秀的静态网站托管平台。

#### 步骤：

1. **通过Git部署**
   - 登录Netlify
   - 点击"New site from Git"
   - 连接GitHub仓库
   - 选择你的仓库
   - 点击"Deploy site"

2. **通过拖拽部署**
   - 将项目文件夹拖拽到Netlify部署区域

3. **配置（可选）**
   
   创建 `netlify.toml` 文件：
   ```toml
   [build]
     publish = "."
   
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
   ```

### 4. 传统Web服务器

如果你有自己的服务器或虚拟主机：

#### Apache服务器：

1. 上传所有文件到网站根目录
2. 确保 `.htaccess` 文件已上传
3. 配置SSL证书（推荐）

#### Nginx服务器：

1. 上传文件到网站目录
2. 配置Nginx（示例）：

```nginx
server {
    listen 80;
    server_name formatjson.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name formatjson.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/json-formatter;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # 安全头
    add_header X-Frame-Options "DENY";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    
    # 缓存设置
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 部署后配置

### 1. 更新URL

部署后，需要更新以下文件中的URL：

- `index.html` - 更新Open Graph和Twitter Card的URL
- `sitemap.xml` - 更新站点地图中的URL
- `robots.txt` - 更新Sitemap URL
- `manifest.json` - 更新start_url

### 2. SEO优化

#### Google Search Console：

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站属性
3. 验证网站所有权
4. 提交sitemap.xml

#### 百度搜索资源平台：

1. 访问 [百度搜索资源平台](https://ziyuan.baidu.com/)
2. 添加网站
3. 验证网站
4. 提交sitemap

### 3. 性能优化

#### 启用压缩：

确保服务器启用了Gzip/Brotli压缩：

```bash
# 检查是否启用压缩
curl -I -H "Accept-Encoding: gzip" https://your-domain.com
```

#### 启用缓存：

设置适当的缓存头：
- HTML文件：1天
- CSS/JS文件：1年
- 图片文件：1个月

### 4. 监控和分析

#### Google Analytics：

在 `index.html` 中添加Google Analytics代码：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### 错误监控：

可以集成Sentry或其他错误监控服务：

```html
<script src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: 'YOUR_DSN_HERE'
  });
</script>
```

## 🔒 安全考虑

### 1. HTTPS

确保网站使用HTTPS：
- 获取SSL证书（Let's Encrypt免费）
- 配置HTTP到HTTPS重定向
- 更新所有内部链接使用HTTPS

### 2. 安全头

确保设置了适当的安全头：
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 3. 内容安全策略

可以添加CSP头：
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

## 📊 部署检查清单

部署完成后，请检查：

- [ ] 网站可以正常访问
- [ ] 所有功能正常工作
- [ ] 移动端显示正确
- [ ] HTTPS配置正确
- [ ] 404页面正确显示
- [ ] 搜索引擎可以访问
- [ ] 性能测试通过
- [ ] 安全头设置正确

## 🔄 持续集成/持续部署 (CI/CD)

### GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 🆘 常见问题

### Q: 部署后页面显示空白？
A: 检查浏览器控制台是否有错误，确保所有文件路径正确。

### Q: CSS样式没有生效？
A: 检查MIME类型设置，确保CSS文件以正确的content-type提供。

### Q: 在某些浏览器中功能不正常？
A: 检查JavaScript兼容性，确保使用了适当的polyfills。

### Q: 网站加载很慢？
A: 检查是否启用了压缩和缓存，优化图片大小。

## 📞 获取帮助

如果遇到部署问题，请：

1. 查看项目Issues
2. 创建新Issue描述问题
3. 提供详细的错误信息和环境信息

祝您部署成功！🎉 