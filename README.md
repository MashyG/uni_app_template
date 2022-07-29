
# uni_app_template

## 构建基础架构

```csharp

npx degit dcloudio/uni-preset-vue#vite-ts uniApp-template

```

## 安装依赖，运行项目(微信小程序)

```csharp

pnpm i

pnpm run dev:mp-weixin

```

# 依赖

- [ ] 引入 eslint
- [ ] 引入 stylelint
- [ ] 引入 prettier
- [ ] 引入 vitest
- [ ] 引入 tailwindcss

## 引入 eslint

```csharp
# 添加 eslint 依赖
pnpm add eslint -D

# 生成 eslint 配置
npx eslint --init

# 随后根据需要选择不同的配置

# 安装 eslint 配置需要的依赖
pnpm add -D eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint@^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest vue-eslint-parser

# 添加 eslint 检验规则(.eslintrc.json)

# 添加 eslint 忽略文件(.eslintignore)

```

## 引入 stylelint

```csharp
# 添加 stylelint 依赖
pnpm add -D stylelint stylelint-config-rational-order stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-config-standard-scss stylelint-order

# 根目录下，新增 stylelint.config.js 配置文件

# 添加 stylelint 忽略文件(.stylelintignore)

```

## 引入 prettier

```csharp
# 添加 prettier 依赖
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier stylelint-config-prettier

# 根目录下，新增 .prettierrc 配置文件

```

## 引入 vitest

```csharp
# 添加 prettier 依赖
pnpm add -D vitest

# 在 vite.config.ts 文件下添加 test 配置
# 此时，添加test后会报错提示，因为 vite 下没有 test 类型，因此，需要添加三斜线命令
/// <reference types="vitest" />

# 可以直接在某个方法下写 test 单测覆盖(src/pages/index/utils/index.ts)

```

## 引入 tailwindcss

```csharp
# 添加 tailwindcss 依赖
pnpm add -D tailwindcss@latest postcss@latest autoprefixer@latest

# 根目录下，新建 tailwindcss.config.js 文件,添加内容配置，以及其他样式自定义内容
{
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}']
}

# 在 vite.config.js 文件下，添加 postcss 相关配置；具体详情查看 vite.config.js 文件

# 安装两个依赖文件
pnpm add -D weapp-tailwindcss-webpack-plugin postcss-rem-to-responsive-pixel

# 在 src/style 目录下新建 tailwindcss.css 文件，并添加内容：
@tailwind base;
@tailwind components;
@tailwind utilities;

# 在 main.ts 文件下引用上面新建的文件(tailwindcss.css)

# 使用例子(src/pages/index/index.vue)

```