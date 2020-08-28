# 概要
  - ポートフォリオサイト
  - 個人情報,経歴,実績がパッとわかるように

# 環境
## React
  - v16.3.x
## SFC
  - classの使用は潮流ではないので使用しない
## Redux
  - 規模的にuseContextで良いが、使えますよと言いたいので使っておく
## Hook
  - (React)useMemo,useCallbackは引数の有無で使い分ける
  - (Redux)useStore,useDispatch等を使って簡潔にstore構築
## webpack.config.js
  - webpack.dev.js（開発環境）, webpack.prod.js（本番環境）は、今回特に設定の必要はないのでなしで
## microCMS
  - 経歴と実績は簡単に更新できるようにヘッドレスCMS（microCMS）を採用

# コンポーネント設計
## index.jsx
  - DOMの生成を担当
  - storeの反映
## App.jsx
  - ページ全体のパーツ配置（ヘッダー, コンテンツ）と、コンテンツのルーティングを担当
  - react-routerは使わず、storeの値でページを出し分け
## pages/~
  - 各コンテンツの描画を担当
  - 今回は記述量も少ないので1ページ1コンポーネントとする
## components/~
  - 各コンテンツで複数回使用するパーツの描画を担当
  - コンポーネントとして切り出す基準は、2回以上記述が重複するかどうか
  - 1ページの記述量が少ないので、atomic designには則らない

# コーディングルール
## 基本方針
  - ESLintを使用(設定はairbnb)
  - 各コンポーネントは関数(function)をexportし、関数内では定数(const)で定義する
## スタイル
  - styled-componentsを使用し、ローカルスコープで記述
  - グローバルな設定はindex.cssに記述