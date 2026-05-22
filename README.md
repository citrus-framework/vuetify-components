# @citrus-framework/vuetify-components

Citrus Framework プロジェクト用の再利用可能な Vuetify コンポーネントライブラリ

## インストール

```bash
npm install @citrus-framework/vuetify-components
```

## 使用方法

### コンポーネントのインポート

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

### スタイルの読み込み

#### CSSを使用する場合

```typescript
// main.ts または plugins/vuetify.ts
import '@citrus-framework/vuetify-components/styles';
```

#### SCSSを使用する場合（カスタマイズ可能）

```scss
// styles/main.scss
@import '@citrus-framework/vuetify-components/scss';
```

## 利用可能なコンポーネント

### Commons
- `PageTitle` - ページタイトルコンポーネント
- `PageSubtitle` - ページサブタイトルコンポーネント
- `NumberCard` - 数値カードコンポーネント

### Helpers - Buttons
- `IconMenuButton` - アイコンメニューボタン
- `ProgressButton` - プログレスボタン

### Helpers - Editables
- `EditableTextInput` - 編集可能なテキスト入力
- `EditableColorInput` - 編集可能なカラー入力
- `EditableDateInput` - 編集可能な日付入力
- `EditableSelect` - 編集可能なセレクト

### Helpers - Selects
- `Select` - カスタマイズされたセレクト

### Helpers - Inputs
- `TextInput` - テキスト入力
- `DateInput` - 日付入力

### Helpers - Comboboxes
- `TimeCombobox` - 時刻コンボボックス

### Helpers - Pickers
- `DateToTimestampPicker` - 日付→タイムスタンプピッカー

### Helpers - Complexes
- `DateTimeField` - 日時フィールド

## 型定義

```typescript
import type { SelectItem } from '@citrus-framework/vuetify-components';
```

## 開発

### セットアップ

```bash
pnpm install
```

### ビルド

```bash
pnpm build
```

### 型チェック

```bash
pnpm type-check
```

## パッケージの公開

GitHub Releases でリリースを作成すると、自動的に npmjs.com に公開されます。
公開には GitHub Actions の `NPM_TOKEN` secret が必要です。

または、手動で公開：

```bash
pnpm build
npm publish --access public
```

## ライセンス

MIT
