# Vite + React プロジェクト

このプロジェクトは、Vite と React を使用して構築されたウェブアプリケーションです。

## 機能

- モダンなナビゲーションバー
- レスポンシブデザイン
- 複数のページルーティング
  - ホーム
  - プロジェクト
  - 紹介
  - お問い合わせ
- フッターに著作権表示

## プロジェクト構造

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   └── Copyright/
│       ├── Copyright.tsx
│       └── Copyright.css
├── pages/
│   ├── Projects.tsx
│   ├── Introduction.tsx
│   ├── Contact.tsx
│   └── ComingSoon.tsx
├── App.tsx
└── App.css
```

## 使用技術

- TypeScript
- React
- Vite
- React Router DOM

## セットアップ

1. プロジェクトのクローン:
```bash
git clone [リポジトリURL]
```

2. 依存関係のインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

## 開発環境

- Node.js
- npm または yarn
- エディタ (VSCode推奨)

## コンポーネントの説明

### Copyright コンポーネント
- 全ページの最下部に固定表示される著作権表示
- 現在の年を自動的に表示
- レスポンシブ対応のデザイン

### Navbar コンポーネント
- レスポンシブなナビゲーションメニュー
- スムーズな画面遷移

## ライセンス

All Rights Reserved

## 作者

tatsuki kitamura
