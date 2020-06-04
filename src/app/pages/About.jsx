import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <Container>
      <Title>Profile</Title>
      <ProfileWrapper>
        <ImageArea />
        <div>
          <p>UI/フロントエンド エンジニア</p>
          <p>ナカバヤシ リリキ</p>
        </div>
      </ProfileWrapper>
      <Title>Career</Title>
      <CareerWrapper>
        <p>2018-03 神戸大学 卒業</p>
        <p>2018-04 ユナイテッド株式会社 入社 (ゲームアプリプランナー)</p>
        <p>2018-08 同社にてエンジニアへ転向、 着せ替えアバターアプリ 開発&lt;html/scss/angular/java/postgres&gt;</p>
        <p>2019-04 社食予約アプリ 開発&lt;vue.js/node.js/mysql&gt;</p>
        <p>2019-05 着せ替えアバターアプリ 開発&lt;html/scss/angular/java/postgres&gt;</p>
        <p>2019-08 ユナイテッド株式会社 退職</p>
        <p>2019-09 キーリンク株式会社 入社、 建設現場管理システム フロントエンド開発&lt;react&gt;</p>
        <p>2019-10 アパレル縫製仕様書作成アプリ フロントエンド開発&lt;react/node.js/graphql&gt;</p>
        <p>2019-12 機械学習予測アプリ UIデザイン提案/フロントエンド開発&lt;react&gt;</p>
        <p>2020-03 【副業】 建設現場人員管理システム フロントエンド開発&lt;vue.js&gt;</p>
        <p>2020-04 【副業】 配車サービスアプリ フロントエンド開発&lt;vue.js&gt;</p>
        <p>2020-06 【副業】 企業ホームページ作成 フロントエンド開発&lt;wordpress&gt;</p>
        <p>2020-06 人生設計アプリ フロントエンド開発&lt;react&gt;</p>
      </CareerWrapper>
      <Title>Business</Title>
      <BusinessWrapper>
        <p>名称: force. (フォース)</p>
        <p>所在地: 東京23区内</p>
        <p>お問い合わせ: ririki.nakabayashi.force@gmail.com</p>
        <p>事業内容:  開発要件定義 / フロントエンド開発 / UI提案</p>
      </BusinessWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 150px;
  padding: 20px;
  overflow: scroll;
`;

const Title = styled.div`
  padding: 20px 0;
  font-size: 2.0rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px 40px 20px;
`;

const CareerWrapper = styled.div`
  min-height: 200px;
  overflow: scroll;
  padding: 10px 20px;
  border: solid 1px #fff;
  margin: 0 20px 40px 20px;
`;

const BusinessWrapper = styled.div`
  margin: 0 20px 40px 20px;
`;

const ImageArea = styled.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;
