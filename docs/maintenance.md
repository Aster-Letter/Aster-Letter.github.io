# 网站维护指南

## 📋 日常维护任务

### 每周任务
- [ ] 检查网站是否正常访问
- [ ] 查看是否有新的评论或反馈
- [ ] 更新社交媒体链接
- [ ] 检查外部链接是否有效

### 每月任务
- [ ] 发布新的博客文章
- [ ] 更新项目展示
- [ ] 检查网站加载速度
- [ ] 备份网站内容
- [ ] 查看网站统计数据（如果已配置）

### 每季度任务
- [ ] 全面检查网站功能
- [ ] 更新个人简介和成就
- [ ] 优化 SEO 设置
- [ ] 更新技能标签
- [ ] 审查和更新文档

---

## 🔧 常用维护操作

### 1. 更新博客文章

#### 添加新文章

在 `index.html` 的博客部分添加：

```html
<article class="blog-card">
    <div class="blog-image">
        <div class="placeholder-blog-img">📝</div>
    </div>
    <div class="blog-content">
        <h3>新文章标题</h3>
        <p class="blog-date">2024年1月15日</p>
        <p>文章摘要，吸引读者点击...</p>
        <a href="blog/article-name.html" class="read-more">阅读更多 →</a>
    </div>
</article>
```

#### 创建完整文章页面

1. 创建 `blog` 文件夹
2. 创建新的 HTML 文件，如 `article-name.html`
3. 使用相同的导航栏和页脚
4. 添加文章内容

示例结构：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>文章标题 - 星笺</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar">...</nav>
    
    <!-- 文章内容 -->
    <article class="blog-article">
        <h1>文章标题</h1>
        <p class="date">发布日期</p>
        <div class="content">
            <!-- 文章正文 -->
        </div>
    </article>
    
    <!-- 页脚 -->
    <footer class="footer">...</footer>
</body>
</html>
```

### 2. 更新项目展示

在 `index.html` 找到项目部分：

```html
<div class="project-card">
    <div class="project-icon">🚀</div>
    <h3>项目名称</h3>
    <p>项目描述...</p>
    <div class="project-links">
        <a href="项目链接" target="_blank">查看项目</a>
        <a href="GitHub链接" target="_blank">查看代码</a>
    </div>
</div>
```

### 3. 添加图片

#### 步骤：
1. 创建 `images` 文件夹（如果还没有）
2. 优化图片（推荐大小：< 200KB）
3. 上传到 `images` 文件夹
4. 在 HTML 中引用

#### 替换个人照片：

```html
<!-- 找到关于部分的占位符 -->
<div class="about-image">
    <!-- 原来的占位符 -->
    <div class="placeholder-image">...</div>
    
    <!-- 替换为实际图片 -->
    <img src="images/profile.jpg" alt="个人照片" style="width: 300px; height: 300px; border-radius: 10px; object-fit: cover;">
</div>
```

#### 添加博客文章图片：

```html
<div class="blog-image">
    <!-- 原来的占位符 -->
    <div class="placeholder-blog-img">📝</div>
    
    <!-- 替换为实际图片 -->
    <img src="images/blog/article-1.jpg" alt="文章配图" style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

### 4. 更新联系信息

在 `index.html` 的联系部分：

```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <h4>邮箱</h4>
    <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
</div>

<div class="contact-item">
    <span class="contact-icon">🐱</span>
    <h4>GitHub</h4>
    <p><a href="https://github.com/Aster-Letter" target="_blank">@Aster-Letter</a></p>
</div>

<div class="contact-item">
    <span class="contact-icon">💬</span>
    <h4>微信</h4>
    <p>你的微信号</p>
</div>
```

---

## 🎨 样式定制

### 修改颜色主题

在 `css/style.css` 开头：

```css
:root {
    --primary-color: #6366f1;      /* 主色 - 蓝紫色 */
    --secondary-color: #8b5cf6;    /* 辅助色 - 紫色 */
    --dark-color: #1e293b;         /* 深色 */
    --light-color: #f8fafc;        /* 浅色背景 */
    --text-color: #334155;         /* 文字颜色 */
    --border-color: #e2e8f0;       /* 边框颜色 */
}
```

#### 预设配色方案

**方案一：蓝色调**
```css
--primary-color: #3b82f6;
--secondary-color: #60a5fa;
```

**方案二：绿色调**
```css
--primary-color: #10b981;
--secondary-color: #34d399;
```

**方案三：粉色调**
```css
--primary-color: #ec4899;
--secondary-color: #f472b6;
```

**方案四：橙色调**
```css
--primary-color: #f59e0b;
--secondary-color: #fbbf24;
```

### 修改字体

#### 使用系统字体：
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
}
```

#### 使用 Google Fonts：
1. 在 `index.html` 的 `<head>` 中添加：
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
```

2. 在 CSS 中使用：
```css
body {
    font-family: 'Noto Sans SC', sans-serif;
}
```

### 调整布局

#### 修改容器宽度：
```css
.container {
    max-width: 1200px;  /* 改为你想要的宽度 */
}
```

#### 修改间距：
```css
section {
    padding: 80px 20px;  /* 上下 80px，左右 20px */
}
```

---

## 🔍 SEO 优化

### 1. 添加元标签

在 `index.html` 的 `<head>` 部分：

```html
<!-- 基础 SEO -->
<meta name="description" content="你的网站描述，150字以内">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta name="author" content="你的名字">

<!-- Open Graph (社交媒体) -->
<meta property="og:type" content="website">
<meta property="og:title" content="你的网站标题">
<meta property="og:description" content="你的网站描述">
<meta property="og:image" content="https://你的网站.com/images/og-image.jpg">
<meta property="og:url" content="https://你的网站.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="你的网站标题">
<meta name="twitter:description" content="你的网站描述">
<meta name="twitter:image" content="https://你的网站.com/images/twitter-image.jpg">
```

### 2. 添加 sitemap.xml

创建 `sitemap.xml` 文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://Aster-Letter.github.io/</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <!-- 添加其他页面 -->
</urlset>
```

### 3. 添加 robots.txt

创建 `robots.txt` 文件：

```txt
User-agent: *
Allow: /

Sitemap: https://Aster-Letter.github.io/sitemap.xml
```

---

## 📊 添加网站统计

### Google Analytics

1. 注册 Google Analytics 账号
2. 获取跟踪 ID（如 `G-XXXXXXXXXX`）
3. 在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 百度统计

1. 注册百度统计账号
2. 获取统计代码
3. 添加到 `index.html` 的 `<head>` 部分

---

## 🚀 性能优化

### 图片优化

1. **压缩图片**
   - 使用 TinyPNG (https://tinypng.com/)
   - 使用 ImageOptim (Mac)
   - 使用 Squoosh (https://squoosh.app/)

2. **使用正确的图片格式**
   - 照片：JPEG
   - 图标/图形：PNG 或 SVG
   - 动画：GIF 或 WebP

3. **响应式图片**
```html
<picture>
    <source media="(max-width: 600px)" srcset="images/small.jpg">
    <source media="(max-width: 1200px)" srcset="images/medium.jpg">
    <img src="images/large.jpg" alt="描述">
</picture>
```

### CSS 优化

1. **移除未使用的 CSS**
   - 使用 PurgeCSS 等工具

2. **压缩 CSS**
   - 在线工具：https://cssminifier.com/
   - 或使用构建工具

### JavaScript 优化

1. **延迟加载**
```html
<script src="js/script.js" defer></script>
```

2. **压缩 JavaScript**
   - 在线工具：https://javascript-minifier.com/

---

## 🔒 安全性检查

### HTTPS

GitHub Pages 自动提供 HTTPS，确保在设置中启用了 "Enforce HTTPS"。

### 外部链接

使用 `rel="noopener noreferrer"` 保护用户隐私：

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">链接</a>
```

### 内容安全策略（CSP）

在 `<head>` 中添加：

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-cdn.com;">
```

---

## 🐛 故障排除

### 网站无法访问

1. 检查 GitHub Pages 设置
2. 确认仓库名称正确（`用户名.github.io`）
3. 查看 Actions 标签页，确认部署成功
4. 等待 DNS 传播（可能需要几分钟）

### 样式不显示

1. 检查 CSS 文件路径
2. 清除浏览器缓存
3. 检查 CSS 语法错误
4. 使用浏览器开发者工具（F12）查看网络请求

### JavaScript 不工作

1. 打开浏览器控制台（F12）查看错误
2. 检查 JS 文件路径
3. 确认 JavaScript 语法正确
4. 检查是否有阻止脚本的浏览器插件

### 移动端显示问题

1. 确保有 viewport meta 标签
2. 使用 Chrome 开发者工具测试不同设备
3. 检查 CSS 媒体查询
4. 测试触摸事件

---

## 📦 备份策略

### 自动备份

Git 本身就是很好的备份系统，每次提交都会保存历史版本。

### 定期导出

每月将仓库下载到本地：

```bash
# 克隆或拉取最新版本
git clone https://github.com/Aster-Letter/Aster-Letter.github.io.git
# 或
cd Aster-Letter.github.io
git pull
```

### 云备份

考虑将代码同步到：
- 其他 Git 托管平台（GitLab, Bitbucket）
- 云存储（Google Drive, Dropbox）
- 本地硬盘

---

## 📈 持续改进

### 收集反馈

1. 添加联系表单
2. 查看 Google Analytics 数据
3. 询问朋友和家人的意见
4. 关注社交媒体评论

### 定期更新

1. **内容更新**
   - 每周或每月发布新内容
   - 更新项目进展
   - 刷新个人信息

2. **技术更新**
   - 学习新的 Web 技术
   - 优化性能
   - 改进用户体验

3. **设计更新**
   - 跟随设计趋势
   - 改进视觉效果
   - 优化移动端体验

---

## 📚 推荐工具

### 开发工具
- **Visual Studio Code** - 代码编辑器
- **Git** - 版本控制
- **Chrome DevTools** - 浏览器调试工具

### 设计工具
- **Figma** - UI 设计
- **Canva** - 图形设计
- **Coolors** - 配色方案

### 测试工具
- **PageSpeed Insights** - 性能测试
- **GTmetrix** - 加载速度测试
- **W3C Validator** - HTML 验证
- **CSS Validator** - CSS 验证

### SEO 工具
- **Google Search Console** - 搜索优化
- **Bing Webmaster Tools** - Bing 搜索优化
- **Lighthouse** - 网站质量审计

---

## 💬 获取帮助

### 在线资源
- GitHub Pages 文档：https://docs.github.com/pages
- MDN Web 文档：https://developer.mozilla.org/zh-CN/
- Stack Overflow：https://stackoverflow.com/

### 社区
- GitHub Discussions
- Reddit /r/webdev
- 知乎 Web 开发话题

---

**最后更新：** 2024年1月
**维护者：** Aster Letter
