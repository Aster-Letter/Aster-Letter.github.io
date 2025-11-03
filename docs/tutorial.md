\* Thanks to @Copilot.
# 个人网站完整教程

## 📚 目录

1. [快速开始](#快速开始)
2. [GitHub Pages 搭建教程](#github-pages-搭建教程)
3. [网站结构说明](#网站结构说明)
4. [维护指南](#维护指南)
5. [内容更新教程](#内容更新教程)
6. [常见问题解答](#常见问题解答)
7. [进阶技巧](#进阶技巧)

---

## 快速开始

### 什么是 GitHub Pages？

GitHub Pages 是 GitHub 提供的免费静态网站托管服务，可以直接从你的 GitHub 仓库发布网站。

**优势：**
- ✅ 完全免费
- ✅ 不需要服务器
- ✅ 自动部署
- ✅ 支持自定义域名
- ✅ HTTPS 加密

### 你的网站访问地址

你的网站将在以下地址自动发布：
```
https://Aster-Letter.github.io
```

---

## GitHub Pages 搭建教程

### 第一步：创建仓库（已完成）

你已经创建了名为 `Aster-Letter.github.io` 的仓库。这个特殊的命名格式告诉 GitHub 这是一个 GitHub Pages 网站。

### 第二步：启用 GitHub Pages

1. 进入你的仓库页面
2. 点击 **Settings（设置）**
3. 在左侧菜单中找到 **Pages**
4. 在 **Source（源）** 部分：
   - 选择分支：`main` 或 `master`
   - 选择文件夹：`/ (root)`
5. 点击 **Save（保存）**

### 第三步：等待部署

- GitHub 会自动构建并部署你的网站
- 通常需要 1-5 分钟
- 部署完成后，你会看到一个绿色的提示：
  ```
  Your site is published at https://Aster-Letter.github.io
  ```

### 第四步：访问你的网站

在浏览器中输入 `https://Aster-Letter.github.io`，你就能看到你的网站了！

---

## 网站结构说明

### 文件结构

```
Aster-Letter.github.io/
├── index.html          # 主页（必需）
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── script.js      # JavaScript 文件
├── docs/
│   └── tutorial.md    # 本教程文件
├── images/            # 图片文件夹（你需要创建）
└── README.md          # 项目说明
```

### 核心文件说明

#### 1. index.html
这是网站的主页面，包含：
- 导航栏
- 首页横幅
- 关于我
- 博客文章
- 项目展示
- 联系方式
- 页脚

#### 2. css/style.css
样式表文件，控制网站的外观：
- 颜色主题
- 布局样式
- 动画效果
- 响应式设计

#### 3. js/script.js
JavaScript 文件，添加交互功能：
- 移动端菜单
- 平滑滚动
- 动画效果
- 其他交互

---

## 维护指南

### 如何修改网站内容

#### 方法一：在 GitHub 网页上直接编辑

1. 进入仓库
2. 找到要编辑的文件（如 `index.html`）
3. 点击铅笔图标 ✏️
4. 修改内容
5. 滚动到底部，填写提交信息
6. 点击 **Commit changes（提交更改）**
7. 等待 1-5 分钟，网站会自动更新

#### 方法二：使用 Git（推荐）

```bash
# 1. 克隆仓库到本地
git clone https://github.com/Aster-Letter/Aster-Letter.github.io.git

# 2. 进入项目目录
cd Aster-Letter.github.io

# 3. 编辑文件（使用你喜欢的编辑器）

# 4. 查看修改
git status

# 5. 添加修改
git add .

# 6. 提交修改
git commit -m "更新网站内容"

# 7. 推送到 GitHub
git push
```

### 定期维护检查清单

- [ ] 检查所有链接是否有效
- [ ] 更新个人信息
- [ ] 添加新的博客文章
- [ ] 更新项目列表
- [ ] 检查图片是否正常显示
- [ ] 测试移动端显示效果

---

## 内容更新教程

### 修改个人信息

在 `index.html` 中找到对应的部分并修改：

#### 1. 修改网站标题
```html
<title>你的名字 | Your Name</title>
```

#### 2. 修改导航栏名称
```html
<div class="logo">
    <a href="index.html">你的名字</a>
</div>
```

#### 3. 修改首页欢迎语
```html
<h1 class="animate-fadeIn">欢迎来到你的个人空间</h1>
<p class="animate-fadeIn-delay">你的个人标语</p>
```

#### 4. 修改关于我内容
```html
<div class="about-text">
    <h3>你好！我是XXX</h3>
    <p>这里写你的个人介绍...</p>
</div>
```

#### 5. 修改联系方式
```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <h4>邮箱</h4>
    <p>你的邮箱地址</p>
</div>
```

### 添加新的博客文章

在 `index.html` 的博客部分添加新的文章卡片：

```html
<article class="blog-card">
    <div class="blog-image">
        <div class="placeholder-blog-img">📝</div>
    </div>
    <div class="blog-content">
        <h3>文章标题</h3>
        <p class="blog-date">2024年1月15日</p>
        <p>文章摘要内容...</p>
        <a href="blog/article-name.html" class="read-more">阅读更多 →</a>
    </div>
</article>
```

### 添加图片

#### 1. 创建图片文件夹
```bash
mkdir images
```

#### 2. 上传图片到 `images` 文件夹

#### 3. 在 HTML 中引用图片
```html
<!-- 替换占位符图片 -->
<img src="images/your-photo.jpg" alt="你的照片">
```

### 修改颜色主题

在 `css/style.css` 的开头找到颜色变量：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --secondary-color: #8b5cf6;  /* 辅助色 */
    --dark-color: #1e293b;       /* 深色 */
    --light-color: #f8fafc;      /* 浅色 */
    --text-color: #334155;       /* 文字颜色 */
}
```

修改这些颜色值即可更改整个网站的配色方案。

---

## 常见问题解答

### Q1: 网站更新后没有生效？

**A:** 可能的原因和解决方法：

1. **缓存问题**
   - 清除浏览器缓存
   - 使用隐私/隐身模式访问
   - 强制刷新：`Ctrl + Shift + R` (Windows) 或 `Cmd + Shift + R` (Mac)

2. **GitHub Pages 还在构建**
   - 等待 3-5 分钟
   - 查看仓库的 Actions 标签页，确认构建是否完成

3. **代码有错误**
   - 检查 HTML 标签是否正确闭合
   - 检查 CSS 语法是否正确
   - 使用浏览器开发者工具（F12）查看错误信息

### Q2: 如何添加自定义域名？

**A:** 步骤：

1. 购买域名（如 `example.com`）
2. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
3. 在域名提供商处配置 DNS：
   - 添加 CNAME 记录，指向 `Aster-Letter.github.io`
4. 在 GitHub Pages 设置中输入自定义域名
5. 等待 DNS 生效（可能需要 24-48 小时）

### Q3: 如何备份网站？

**A:** 三种方法：

1. **Git 仓库本身就是备份**
   - 所有历史版本都保存在 GitHub 上

2. **本地克隆**
   ```bash
   git clone https://github.com/Aster-Letter/Aster-Letter.github.io.git
   ```

3. **下载 ZIP 文件**
   - 在 GitHub 仓库页面点击 "Code"
   - 选择 "Download ZIP"

### Q4: 网站在手机上显示不正常？

**A:** 检查以下几点：

1. 确保 HTML 中包含 viewport meta 标签：
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. 使用响应式设计
   - 我们的 CSS 已包含移动端适配代码

3. 测试工具
   - Chrome 开发者工具的设备模拟器（F12 > Toggle device toolbar）

### Q5: 如何添加统计功能？

**A:** 可以使用以下免费服务：

1. **Google Analytics**
   - 注册并获取跟踪代码
   - 将代码添加到 `index.html` 的 `<head>` 部分

2. **百度统计**
   - 适合中文网站
   - 操作类似 Google Analytics

### Q6: 可以使用 Markdown 写博客吗？

**A:** 可以，有几种方法：

1. **Jekyll**（GitHub Pages 原生支持）
   - 创建 `_posts` 文件夹
   - 使用 Markdown 写文章
   - GitHub 会自动转换为 HTML

2. **手动转换**
   - 使用在线 Markdown 转换工具
   - 将转换后的 HTML 粘贴到网站中

3. **静态网站生成器**
   - Hugo、Hexo、VuePress 等

---

## 进阶技巧

### 1. 添加搜索引擎优化（SEO）

在 `index.html` 的 `<head>` 部分添加：

```html
<!-- SEO Meta Tags -->
<meta name="description" content="你的网站描述">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta name="author" content="你的名字">

<!-- Open Graph (社交媒体分享) -->
<meta property="og:title" content="你的网站标题">
<meta property="og:description" content="你的网站描述">
<meta property="og:image" content="https://你的网站.com/images/share-image.jpg">
<meta property="og:url" content="https://你的网站.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="你的网站标题">
<meta name="twitter:description" content="你的网站描述">
<meta name="twitter:image" content="https://你的网站.com/images/share-image.jpg">
```

### 2. 添加网站图标（Favicon）

```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### 3. 添加 Google Fonts 字体

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
```

然后在 CSS 中使用：
```css
body {
    font-family: 'Noto Sans SC', sans-serif;
}
```

### 4. 添加动态效果库

使用 AOS (Animate On Scroll) 库：

```html
<!-- 在 <head> 中添加 -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- 在 </body> 前添加 -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
```

### 5. 性能优化技巧

1. **压缩图片**
   - 使用 TinyPNG、ImageOptim 等工具
   - 建议图片大小不超过 200KB

2. **压缩 CSS 和 JavaScript**
   - 使用在线压缩工具
   - 或使用构建工具（如 Gulp、Webpack）

3. **使用 CDN**
   - 对于公共库（如 jQuery），使用 CDN 链接
   - 可以提高加载速度

### 6. 添加评论系统

推荐使用 Gitalk 或 Utterances（基于 GitHub Issues）：

```html
<!-- Utterances 评论系统 -->
<script src="https://utteranc.es/client.js"
        repo="你的用户名/你的仓库名"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

### 7. 使用 GitHub Actions 自动化

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

---

## 学习资源

### 推荐学习网站

1. **MDN Web Docs** - https://developer.mozilla.org/zh-CN/
   - 最权威的 Web 开发文档

2. **W3School** - https://www.w3school.com.cn/
   - 中文教程，适合入门

3. **菜鸟教程** - https://www.runoob.com/
   - 各种编程语言教程

### 推荐工具

1. **Visual Studio Code** - 代码编辑器
2. **Git** - 版本控制工具
3. **Chrome DevTools** - 浏览器开发者工具
4. **Figma** - 设计工具

### YouTube/B站 推荐频道

- Traversy Media（英文）
- freeCodeCamp（英文）
- 程序员鱼皮（中文）
- 峰华前端工程师（中文）

---

## 总结

恭喜你！现在你已经：

- ✅ 拥有了一个完整的个人网站
- ✅ 学会了如何使用 GitHub Pages
- ✅ 掌握了基本的网站维护技能
- ✅ 了解了如何更新网站内容

### 下一步建议

1. **定期更新内容**
   - 每周或每月发布新文章
   - 保持网站活跃

2. **学习新技能**
   - 深入学习 HTML、CSS、JavaScript
   - 尝试使用框架（React、Vue 等）

3. **参与社区**
   - 加入开发者社区
   - 分享你的经验

4. **持续改进**
   - 收集访客反馈
   - 不断优化用户体验

### 需要帮助？

- 查看 [GitHub Pages 官方文档](https://docs.github.com/pages)
- 在仓库中提交 Issue
- 搜索相关问题和解决方案

祝你在个人网站的旅程中取得成功！🎉

---

**最后更新：** 2024年1月
**作者：** GitHub Copilot Assistant
**许可：** MIT License
