# 贡献

感谢您有兴趣为这个项目做出贡献！

## 开发 

### 安装

将此 repo 克隆到您的本地计算机并安装依赖项。

```bash
pnpm install
```

我们使用 VitePress 进行快速开发和记录。您可以通过以下方式在本地启动它

```bash
pnpm dev
```

## 贡献

### 现有功能

随意增强现有功能。请尽量不要引入重大更改。

### 新功能

添加新功能有一些注意事项

- 在开始工作之前，最好先打开一个问题进行讨论。
- 实现应作为文件夹放在 `packages/core` 下并在 `index.ts` 中公开
- 在 core 包中，尽量不要引入 第三方工具 依赖，因为这个包的目标是尽可能的轻量级。
- 如果您想引入 第三方工具 依赖项，请向 `@vueuse/integrations` 贡献或创建一个新的附加组件。
- 您可以在 packages/core/_template/ 下找到函数模板，详细信息请参见[函数文件夹](#function-folder)部分。
- 在为您的函数编写文档时，`<!--FOOTER_STARTS-->` 和 `<!--FOOTER_ENDS-->` 将在构建时自动更新，因此无需更新它们。

> 请注意，您不需要更新包的 `index.ts`。它们是自动生成的。

### 新的附加组件

非常欢迎添加新的附加组件！

- 在 `packages/` 下创建一个新文件夹，将其命名为您的插件名称。
- 在 `scripts/packages.ts` 中添加附加组件详细信息
- 在该文件夹下创建 `README.md`。
- 像对核心包所做的那样添加功能。
- 提交并作为 PR 提交。

## 项目结构

### Monorepo

我们对多个包使用 monorepo

```
packages
  shared/         - shared utils across packages
  core/           - the core package
  firebase/       - the Firebase add-on
  [...addons]/    - add-ons named
```

### 函数文件夹

函数文件夹典型性包含以下 4 个文件：

> 您可以在 `packages/core/_template/` 下找到模板

```bash
index.ts            # 函数源代码本身
demo.vue            # 功能演示
index.test.ts       # vitest 单元测试用例
index.md            # 文档说明
```

对于 `index.ts`，您应该使用名称导出函数。

```ts
// 推荐
export { useMyFunction }

// 不推荐
export default useMyFunction
```

对于 `index.md`，第一句将在函数列表中显示为简短的介绍，因此请尽量保持简洁明了。

```md
# useMyFunction

这将是介绍。详细说明...
```

阅读有关[指南](https://vueuse.org/guidelines).的更多信息。

## 代码风格

只要安装了开发依赖项，就不用担心代码风格。 Git 挂钩将在提交时为您格式化和修复它们。

## 鸣谢

再次感谢您对本项目感兴趣！你太棒了！
