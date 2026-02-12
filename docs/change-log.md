# Aster Letter 变更日志

- 项目：Aster-Letter.github.io
- 记录日期：2026-02-13
- 范围：视觉骨架、粒子背景、导航与首屏、内容区与稳定性修复

## 1) 全局视觉骨架

### 目标
建立 Notion 风格排版基线，并融合轻量毛玻璃质感。

### 已完成
- 在 `:root` 中新增核心色彩变量：`--bg-color`、`--card-bg`、`--text-primary`、`--text-secondary`、`--accent-color`。
- 增加全局 reset（`box-sizing`、`html/body` 默认边距归零）。
- `body` 启用现代无衬线字体栈与字体平滑渲染。
- 新增通用工具类：`.glass-panel`、`.container`。

### 影响文件
- `css/style.css`

## 2) 粒子背景系统

### 目标
引入底层动态背景，风格从“重分子连线”调优为“细腻星空”。

### 已完成
- 在页面主体开头注入粒子容器：`#particles-js`。
- 引入 `particles.js` CDN。
- 将粒子初始化从内联脚本拆分为独立文件 `js/particles-config.js`。
- 星空参数重构：
  - 粒子数量：60
  - 粒子颜色：`#8c8c8c`
  - 透明度：`0.5` 且 `random: true`
  - 尺寸：`2` 且 `random: true`
  - 速度：`1`
  - 连线颜色：`#aab2b8`
  - 连线透明度：`0.2`
  - 交互：hover `grab`、click `push`
  - Retina：`true`
- 保证层级与交互安全：`#particles-js` 处于底层并禁用点击拦截（`pointer-events: none`）。

### 影响文件
- `index.html`
- `css/style.css`
- `js/particles-config.js`

## 3) 核心 UI：导航与首屏

### 目标
补齐网站核心信息架构入口，形成可用首页。

### 已完成
- 新增固定顶部导航栏 `.navbar`：
  - 毛玻璃效果（blur + 半透明白底）
  - 左侧 Logo：`Aster Letter`
  - 右侧导航：Home / Archive / Projects / About
- 新增首屏 `header.hero`：
  - 主标题：`Aster Letter`
  - 副标题：`Archiving the sparks of thoughts.`
  - 下滑提示：`↓ Scroll`
- 新增主内容容器 `main` 与三个锚点区块：`#archive`、`#projects`、`#about`。

### 影响文件
- `index.html`
- `css/style.css`

## 4) 内容区落地（MVP）

### 目标
在核心布局下填入最小可阅读内容，避免空壳页面。

### 已完成
- 为 Archive / Projects / About 三个区块补充说明性文案。
- 新增内容区样式：
  - `.page-content`（垂直节奏与间距）
  - `.content-section`（卡片化、圆角、半透明背景）
  - 标题与正文层级样式。

### 影响文件
- `index.html`
- `css/style.css`

## 5) 稳定性与体验修复

### 已完成
- 修复 `js/script.js` 中潜在空引用风险：当 `.navbar` 不存在时中止滚动阴影逻辑，避免运行时报错。
- 修复锚点点击边界：过滤 `href="#"` 场景，避免无效选择器导致异常。
- 新增锚点滚动偏移（`scroll-margin-top`），减少固定导航遮挡目标区块。
- 新增移动端优化（`@media (max-width: 768px)`）：
  - 导航自动换行与间距收敛
  - Hero 文案与布局适配
  - 内容卡片内边距与页面节奏优化

### 影响文件
- `js/script.js`
- `css/style.css`

## 6) 脚本加载顺序（当前）

```html
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
<script src="js/particles-config.js"></script>
<script src="js/script.js"></script>
```

## 7) 当前状态结论

- 首页已形成“可浏览、可导航、可扩展”的基础版本。
- 视觉风格已从默认文档页升级为 Notion 风格 + 轻量星空背景。
- 代码静态检查通过，核心文件无新增报错。
