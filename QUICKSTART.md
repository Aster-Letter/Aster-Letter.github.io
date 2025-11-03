# 快速开始指南

## 欢迎！👋

恭喜你完成了个人网站的初始搭建！这份指南将帮助你快速上手。

## 🚀 立即查看你的网站

一旦你将代码推送到 GitHub，你的网站将自动部署到：

```
https://Aster-Letter.github.io
```

**部署时间：** 通常需要 1-5 分钟

## ✏️ 第一步：个性化你的网站

### 1. 修改网站标题和名称

打开 `index.html`，查找并修改以下内容：

```html
<!-- 第 6 行：修改网站标题 -->
<title>你的名字 | Your Name</title>

<!-- 第 13 行：修改导航栏标志 -->
<div class="logo">
    <a href="index.html">你的名字</a>
</div>

<!-- 第 27-28 行：修改首页欢迎语 -->
<h1 class="animate-fadeIn">欢迎来到你的个人空间</h1>
<p class="animate-fadeIn-delay">你的个人标语</p>
```

### 2. 更新"关于我"部分

在 `index.html` 第 37 行左右：

```html
<div class="about-text">
    <h3>你好！我是XXX</h3>
    <p>这里写你的个人介绍...</p>
    <p>分享你的兴趣、经历和目标...</p>
</div>
```

### 3. 修改联系方式

在 `index.html` 第 144 行左右：

```html
<p>your.email@example.com</p>  <!-- 改为你的邮箱 -->
```

### 4. 修改页脚

在 `index.html` 第 169 行左右：

```html
<p>&copy; 2024 你的名字 | Your Name. 保留所有权利。</p>
```

## 🎨 第二步：自定义配色

打开 `css/style.css`，在第 9-17 行修改颜色：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 - 改成你喜欢的颜色 */
    --secondary-color: #8b5cf6;  /* 辅助色 */
    /* 其他颜色... */
}
```

**推荐配色：**
- 蓝色系：`#3b82f6` 和 `#60a5fa`
- 绿色系：`#10b981` 和 `#34d399`
- 粉色系：`#ec4899` 和 `#f472b6`
- 橙色系：`#f59e0b` 和 `#fbbf24`

## 📸 第三步：添加个人照片

### 创建图片文件夹

```bash
mkdir images
```

### 添加照片

1. 将你的照片命名为 `profile.jpg`
2. 放入 `images` 文件夹
3. 建议尺寸：300x300 像素，小于 200KB

### 更新 HTML

在 `index.html` 第 55 行左右，替换占位符：

```html
<!-- 原代码 -->
<div class="placeholder-image">
    <span>📸</span>
    <p>在此添加您的照片</p>
</div>

<!-- 改为 -->
<img src="images/profile.jpg" alt="个人照片" 
     style="width: 300px; height: 300px; border-radius: 10px; object-fit: cover;">
```

## 📝 第四步：添加第一篇博客

在 `index.html` 的博客部分（第 75 行左右），修改第一个博客卡片：

```html
<article class="blog-card">
    <div class="blog-image">
        <div class="placeholder-blog-img">📝</div>
    </div>
    <div class="blog-content">
        <h3>你的文章标题</h3>
        <p class="blog-date">今天的日期</p>
        <p>文章摘要，写一两句话介绍你的文章内容...</p>
        <a href="#" class="read-more">阅读更多 →</a>
    </div>
</article>
```

## 🔧 第五步：提交更改

### 方法一：在 GitHub 网页上编辑

1. 进入你的仓库
2. 点击要编辑的文件
3. 点击铅笔图标 ✏️
4. 修改内容
5. 滚动到底部，点击 "Commit changes"

### 方法二：使用 Git 命令行

```bash
# 1. 克隆仓库（如果还没有）
git clone https://github.com/Aster-Letter/Aster-Letter.github.io.git
cd Aster-Letter.github.io

# 2. 修改文件（使用任何编辑器）

# 3. 提交更改
git add .
git commit -m "更新个人信息"
git push
```

## 📖 需要更多帮助？

### 查看完整教程

- **详细教程：** 阅读 `docs/tutorial.md`
- **维护指南：** 阅读 `docs/maintenance.md`
- **README：** 查看项目根目录的 `README.md`

### 常见问题

**Q: 更改后网站没有更新？**
- 等待 3-5 分钟让 GitHub Pages 部署
- 清除浏览器缓存（Ctrl+Shift+R）

**Q: 如何启用 GitHub Pages？**
1. 进入仓库设置 (Settings)
2. 点击左侧的 "Pages"
3. 在 Source 下选择 "main" 分支
4. 点击 Save

**Q: 如何查看部署状态？**
- 进入仓库的 "Actions" 标签页
- 查看最新的工作流运行状态

## 🎯 下一步做什么？

### 短期目标（本周）
- [ ] 完成个人信息修改
- [ ] 上传个人照片
- [ ] 更新至少一篇博客内容
- [ ] 测试网站在手机上的显示

### 中期目标（本月）
- [ ] 添加 3-5 篇博客文章
- [ ] 更新项目展示
- [ ] 配置 Google Analytics（可选）
- [ ] 添加自定义域名（可选）

### 长期目标（三个月）
- [ ] 持续更新内容
- [ ] 学习更多 Web 开发技术
- [ ] 优化网站性能
- [ ] 与其他开发者交流

## 📚 学习资源

### 推荐阅读
- [MDN Web 文档](https://developer.mozilla.org/zh-CN/) - 最权威的 Web 开发参考
- [W3School](https://www.w3school.com.cn/) - 中文教程
- [GitHub Pages 文档](https://docs.github.com/pages) - 官方文档

### 推荐工具
- **Visual Studio Code** - 最流行的代码编辑器
- **Chrome DevTools** - 浏览器调试工具（按 F12 打开）
- **Git** - 版本控制工具

## 💬 获取帮助

遇到问题？

1. 查看 `docs/tutorial.md` 中的常见问题部分
2. 在仓库中创建 Issue
3. 搜索 Stack Overflow
4. 阅读 GitHub Pages 官方文档

## 🎉 恭喜！

你已经成功创建了自己的个人网站！接下来就是持续更新和完善了。

**记住：** 
- 网站是一个持续改进的过程
- 不要追求完美，先发布再优化
- 享受创作的过程！

祝你的个人网站之旅顺利！🚀

---

**最后更新：** 2024年1月
**创建者：** GitHub Copilot
