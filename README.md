# 星笺的个人网站 | Personal Website

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 简介

这是一个基于 GitHub Pages 构建的现代化个人网站，包含完整的教程和文档，帮助你快速搭建、维护和更新自己的网站。

**网站地址：** https://Aster-Letter.github.io

## ✨ 功能特点

- 📱 **完全响应式设计** - 完美支持桌面、平板和手机
- 🎨 **现代化界面** - 简洁美观的设计风格
- ⚡ **快速加载** - 优化的性能和轻量级代码
- 🔧 **易于定制** - 清晰的代码结构，方便修改
- 📚 **完整文档** - 详细的教程和使用指南
- 🌐 **多页面支持** - 首页、关于、博客、项目、联系等

## 🚀 快速开始

### 方法一：Fork 这个仓库

1. 点击右上角的 **Fork** 按钮
2. 将仓库重命名为 `你的用户名.github.io`
3. 在 Settings > Pages 中启用 GitHub Pages
4. 访问 `https://你的用户名.github.io`

### 方法二：从零开始

1. 创建新仓库，命名为 `你的用户名.github.io`
2. 克隆仓库到本地
3. 复制本项目的文件到你的仓库
4. 推送到 GitHub
5. 启用 GitHub Pages

## 📁 项目结构

```
Aster-Letter.github.io/
├── index.html              # 主页面
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── script.js          # JavaScript 文件
├── docs/
│   ├── tutorial.md        # 完整教程
│   └── maintenance.md     # 维护指南
├── images/                # 图片资源（需要自己创建）
└── README.md              # 项目说明
```

## 📖 使用文档

### 完整教程

查看 [完整教程文档](docs/tutorial.md)，包含：

- GitHub Pages 搭建教程
- 网站结构详解
- 内容更新教程
- 维护指南
- 常见问题解答
- 进阶技巧

### 快速修改指南

#### 1. 修改个人信息

编辑 `index.html`，找到对应部分：

```html
<!-- 修改网站标题 -->
<title>你的名字 | Your Name</title>

<!-- 修改导航栏 -->
<div class="logo">
    <a href="index.html">你的名字</a>
</div>

<!-- 修改首页欢迎语 -->
<h1>欢迎来到你的个人空间</h1>
```

#### 2. 修改配色方案

编辑 `css/style.css`，修改颜色变量：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --secondary-color: #8b5cf6;  /* 辅助色 */
    /* 修改这些值来更改网站配色 */
}
```

#### 3. 添加图片

```bash
# 创建图片文件夹
mkdir images

# 在 HTML 中引用
<img src="images/your-photo.jpg" alt="描述">
```

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript** - 交互功能
- **GitHub Pages** - 网站托管

## 📝 更新日志

### v1.0.0 (2024-01-01)
- ✅ 初始版本发布
- ✅ 完整的响应式设计
- ✅ 五个主要页面区块
- ✅ 详细的使用文档

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

## 🔗 相关链接

- [GitHub Pages 官方文档](https://docs.github.com/pages)
- [MDN Web 文档](https://developer.mozilla.org/zh-CN/)
- [W3School 教程](https://www.w3school.com.cn/)

## 💡 常见问题

### 网站更新后没有生效？
清除浏览器缓存或等待 3-5 分钟让 GitHub Pages 完成部署。

### 如何添加新的博客文章？
在 `index.html` 的博客区块添加新的文章卡片，或创建单独的文章页面。

### 如何自定义域名？
在仓库根目录创建 `CNAME` 文件，写入你的域名，然后在 DNS 提供商处配置记录。

更多问题请查看 [完整教程](docs/tutorial.md)。

## 📧 联系方式

- GitHub: [@Aster-Letter](https://github.com/Aster-Letter)
- Email: your.email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

**Made with ❤️ using GitHub Pages**
