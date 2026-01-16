# I'M VIM (vim.im)

这是一个开源的 Vim 进阶教程网站，旨在帮助开发者从零开始掌握这款强大的文本编辑器。

## 致谢 / Acknowledgements

- **Google's Gemini 3 Flash**: 本项目从零到一的架构设计、中英双语内容创作以及自动化部署配置全由 **Gemini 3 Flash** 模型（通过 Antigravity 智能体）自动生成。
- **Google's Antigravity**: 感谢提供的极致 AI 辅助开发体验。
- **VitePress**: 感谢这一优秀的静态网站生成器，为 Vim 教程提供了完美的展示平台。

## 特性

- 🚀 基于 VitePress 的极致加载速度
- 📖 结构化的 Vim 学习路径
- 🐳 支持 Docker 一键部署
- 🔄 通过 GitHub Actions 自动化构建

## 快速开始

### 本地开发

```bash
npm install
npm run docs:dev
```

### 构建

```bash
npm run docs:build
```

## 部署

本项目支持 Docker 镜像构建，你可以从 GitHub Container Registry 拉取最新镜像：

```bash
docker pull ghcr.io/samuncleorange/vim-tutorial:latest
docker run -d -p 8080:80 ghcr.io/samuncleorange/vim-tutorial:latest
```

## License

MIT
