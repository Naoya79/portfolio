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

### 1) `base` を設定（重要）

Vite の `base` は環境変数 `VITE_BASE` で上書きできます（`vite.config.ts`）。

- リポジトリ名が `my-portfolio` の場合:

```bash
set VITE_BASE=/my-portfolio/
npm run build
```

PowerShell なら:

```powershell
$env:VITE_BASE="/my-portfolio/"
npm run build
```

### 2) `gh-pages` で配信

`gh-pages` を使って `dist/` を `gh-pages` ブランチに公開します。

```bash
npm run deploy
```

### 3) ルーティング（Refresh / 直リンク対策）

`public/404.html` を同梱し、GitHub Pages での **BrowserRouter の直リンク**を復元します。

## カスタマイズ

- **表示名/肩書**: `src/locales/ja.json` / `src/locales/en.json` の `brand.*`
- **GitHub / LinkedIn / Email**: `src/data/profile.ts`
- **Projects**: `src/data/projects.ts`（テキストは `src/locales/*` の `projects.items.*`）


