# @citrus-framework/vuetify-components

Citrus Framework プロジェクト用の再利用可能な Vuetify コンポーネントライブラリ

## インストール

### 1. .npmrc の設定

プロジェクトのルートに `.npmrc` ファイルを作成（または追加）：

```
@citrus-framework:registry=https://npm.pkg.github.com
```

### 2. パッケージのインストール

```bash
npm install @citrus-framework/vuetify-components
```

## 使用方法

```vue
<script setup lang="ts">
import { PageTitle, EditableTextInput } from '@citrus-framework/vuetify-components';

const title = ref('My Page');
</script>

<template>
  <PageTitle :title="title" />
  <EditableTextInput v-model="title" />
</template>
```

## 利用可能なコンポーネント

### Commons
- `PageTitle` - ページタイトルコンポーネント

### Helpers - Editables
- `EditableTextInput` - 編集可能なテキスト入力

## 開発

### セットアップ

```bash
npm install
```

### ビルド

```bash
npm run build
```

### 型チェック

```bash
npm run type-check
```

## パッケージの公開

GitHub Releases でリリースを作成すると、自動的に GitHub Packages に公開されます。

または、手動で公開：

```bash
npm run build
npm publish
```

## ライセンス

MIT
