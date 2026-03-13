# Aster Letter 迭代日志

> 记录方式：按轮次编排（适配高频迭代）。

## Round 01（2026-02-13）视觉骨架初始化

- 目标：建立 Notion 风格排版基线与毛玻璃 UI 基础。
- 主要改动：
  - 在 `css/style.css` 建立全局变量、reset、`body` 排版基线。
  - 新增 `#particles-js` 背景容器与 `.glass-panel`、`.container` 工具类。
  - 在首页引入 `particles.js` 并完成初版初始化。
- 影响文件：`css/style.css`、`index.html`、`js/particles-config.js`。

## Round 02（2026-02-13）交互细化与首页结构

- 目标：将默认文档页升级为可用首页。
- 主要改动：
  - 粒子参数改为更轻的“星空感”配置（低速、低饱和、轻连线）。
  - 新增固定毛玻璃导航栏、Hero 首屏与滚动提示。
  - 新增 `Archive / Projects / About` 三个区块与卡片化样式。
  - 修复 `js/script.js` 的 `.navbar` 空引用风险与锚点边界问题。
  - 增加移动端断点适配与锚点偏移，改善窄屏阅读体验。
- 影响文件：`index.html`、`css/style.css`、`js/particles-config.js`、`js/script.js`。

## Round 03（2026-02-13）Jekyll 模板化重构

- 目标：将单页原型转为可部署、可维护的 Jekyll 架构。
- 主要改动：
  - 新建 `_config.yml` 并配置站点信息与 `jekyll-seo-tag`。
  - 新建 `_layouts/default.html`，承载全站骨架与统一资源加载。
  - 新建 `_includes/header.html` 与 `_includes/footer.html`。
  - 首页改写为 Front Matter + 内容页结构（`layout: default`）。
- 影响文件：`_config.yml`、`_layouts/default.html`、`_includes/header.html`、`_includes/footer.html`、`index.html`。

## Round 04（2026-02-13）多页面内容化

- 目标：拆分首页锚点内容为独立页面，提升可扩展性。
- 主要改动：
  - 新增 `archive.md`、`projects.md`、`about.md`。
  - 导航链接切换为页面路由。
  - 首页改为入口卡片，链接至对应独立页面。
  - 新增页面头部、入口链接与页脚样式。
- 影响文件：`archive.md`、`projects.md`、`about.md`、`_includes/header.html`、`index.html`、`css/style.css`。

## Round 05（2026-02-21）文章系统与迁移脚本 V1

- 目标：建立 Jekyll 文章渲染链路并接入 Obsidian 批量迁移。
- 主要改动：
  - 新建 `_posts/` 目录。
  - 新建 `_layouts/post.html`，统一文章页样式与元信息展示。
  - 新建 `scripts/obsidian_to_jekyll.py`：扫描源目录、生成 `YYYY-MM-DD-<slug>.md`、替换 `![[image.png]]`、注入 Front Matter。
- 影响文件：`_posts/`、`_layouts/post.html`、`scripts/obsidian_to_jekyll.py`。

## Round 06（2026-02-21）图片通道增强 + Pixiv 渲染

- 目标：迁移流程同时支持本地图片与 Pixiv 引用，并保持 Notion 风格展示。
- 主要改动：
  - 增强 `scripts/obsidian_to_jekyll.py`：
    - 新增本地图片复制流程（`--image-source` -> `--image-target`）。
    - 新增可选压缩流程（默认尝试压缩；Pillow 缺失时自动降级复制）。
    - 新增 Obsidian/Pixiv 转换规则：
      - `![[pixiv:123456|可选标题]]` -> Pixiv embed HTML。
      - `![alt](https://www.pixiv.net/artworks/123456)` -> Pixiv embed HTML。
    - 本地图片文件名标准化，降低 URL 与系统差异风险。
  - 在 `_layouts/post.html` 注入 Pixiv 官方渲染脚本 `https://embed.pixiv.net/display.js`。
  - 在 `css/style.css` 新增文章媒体样式（`img`、`.notion-media`、`.notion-pixiv`）。
- 本轮验证：
  - 使用 `test/随笔` + `test/assets` 完成端到端迁移测试，成功生成 7 篇 `_posts` 文章。
  - 成功复制图片到 `assets/images/`。
  - 函数级验证通过：Pixiv 语法、本地图片语法、Pixiv URL 语法均可正确转换。
- 结论：
  - 推荐优先使用 Pixiv 作品页嵌入，不建议直接热链原图。
  - 推荐统一引用格式：`![[pixiv:作品ID|可选说明]]` 与 `![[本地图片文件名.png]]`。
- 影响文件：`scripts/obsidian_to_jekyll.py`、`_layouts/post.html`、`css/style.css`、`docs/change-log.md`。

## Round 07（2026-02-21）迁移脚本优化 + GUI 工具

- 目标：提升迁移脚本可维护性与可操作性，提供图形化入口。
- 主要改动：
  - 重构 `scripts/obsidian_to_jekyll.py` 为“可复用内核 + CLI”结构：
    - 新增 `ConversionOptions` 与 `ConversionStats` 数据结构。
    - 新增 `run_conversion()` 统一执行入口，便于 CLI 与 GUI 共用。
    - 新增封面自动提取：从正文首个本地图或 Pixiv 嵌入推断 `cover` 与 `cover_type`。
    - 新增统计输出：转换篇数、图片处理数量、Pixiv 嵌入数、封面提取数、缺失图片告警。
  - 新增 GUI：`scripts/obsidian_to_jekyll_gui.py`（Tkinter）
    - 可视化设置源目录、目标目录、图片目录。
    - 勾选控制压缩与封面提取。
    - 实时日志窗口与完成摘要提示。
  - 继续保持 Pixiv 嵌入与本地图片压缩逻辑兼容。
- 本轮验证：
  - `py_compile` 检查通过（CLI 与 GUI 脚本）。
  - 使用 `test/随笔` + `test/assets` 再次完成端到端迁移测试，成功转换 7 篇。
  - 验证到至少 1 篇文章正确写入 `cover_type` 字段。
- 影响文件：`scripts/obsidian_to_jekyll.py`、`scripts/obsidian_to_jekyll_gui.py`、`docs/change-log.md`。

## Round 08（2026-02-21）本地测试隔离与提交流程固化

- 目标：隔离本地测试资产，避免误提交，并补齐使用说明。
- 主要改动：
  - 将主仓库中的 `test/` 与 `scripts/` 迁移至 `Repository/Aster-Letter.github.io-LocalTest/`。
  - 在主仓库新增 `.gitignore`，忽略 `/test/` 与 `/scripts/`，防止未来误创建后被提交。
  - 在 `Aster-Letter.github.io-LocalTest/scripts/` 新增文档 `README.md`，说明 CLI/GUI 调用方式、参数与推荐引用格式。
  - 新增简洁同步脚本 `git_sync_main_repo.ps1`，用于固化主仓库 add/commit/push 流程。
- 本轮验证：
  - 从 LocalTest 路径执行迁移脚本，成功转换 7 篇文章并同步图片到主仓库。
  - 对迁移后的 CLI 与 GUI 脚本执行 `py_compile`，检查通过。
- 影响文件：`docs/change-log.md`、`.gitignore`（主仓库）、`Aster-Letter.github.io-LocalTest/scripts/README.md`、`Aster-Letter.github.io-LocalTest/scripts/git_sync_main_repo.ps1`。
