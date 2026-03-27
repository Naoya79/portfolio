https://naoya79.github.io/portfolio/

# Portfolio (Bilingual JA/EN) — React + Vite + TypeScript

GitHub Pages 配信を想定した、軽量なエンジニア向けポートフォリオです。

- **React + Vite + TypeScript**
- **Static build only**（バックエンドなし）
- **React Router** による SPA ルーティング
- **i18n（日本語/英語）**：`src/locales/ja.json` / `src/locales/en.json`
- **プロジェクトはデータ分離**：`src/data/projects.ts`

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## ビルド（静的）

```bash
npm run build
```

## GitHub Pages へデプロイ

このプロジェクトは **Project Pages**（`https://<user>.github.io/<repo>/`）を想定しています。

### 方法1: GitHub Actions（推奨・自動デプロイ）

1. **GitHubリポジトリの設定**

   - リポジトリの **Settings** → **Pages** に移動
   - **Source** を **GitHub Actions** に設定
2. **自動デプロイ**

   - `main` ブランチにプッシュすると、自動的にビルドとデプロイが実行されます
   - `.github/workflows/deploy.yml` が自動的に処理します
   - リポジトリ名が `portfolio` の場合、`VITE_BASE=/portfolio/` が自動設定されます
3. **公開URL**

   - デプロイ完了後、`https://naoya79.github.io/portfolio/` でアクセス可能になります

### 方法2: 手動デプロイ（gh-pages）

1. **`base` を設定（重要）**

Vite の `base` は環境変数 `VITE_BASE` で上書きできます（`vite.config.ts`）。

リポジトリ名が `portfolio` の場合:

```bash
set VITE_BASE=/portfolio/
npm run build
```

PowerShell なら:

```powershell
$env:VITE_BASE="/portfolio/"
npm run build
```

2. **`gh-pages` で配信**

```bash
npm run deploy
```

3. **GitHub Pagesの設定**
   - リポジトリの **Settings** → **Pages** に移動
   - **Source** を **gh-pages** ブランチに設定

### ルーティング（Refresh / 直リンク対策）

`public/404.html` を同梱し、GitHub Pages での **BrowserRouter の直リンク**を復元します。

## カスタマイズ

- **表示名/肩書**: `src/locales/ja.json` / `src/locales/en.json` の `brand.*`
- **GitHub / LinkedIn / Email**: `src/data/profile.ts`
- **Projects**: `src/data/projects.ts`（テキストは `src/locales/*` の `projects.items.*`）
