import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';
import { format } from 'date-fns';

export default function About() {
  const carrer = useSelector((state) => state.carrer);
  const profile = useSelector((state) => state.profile);
  const formatDate = useCallback((target) => (target ? format(new Date(target), 'yyyy-MM') : ''));
  return (
    <Container>
      <div>
        <Title>Profile</Title>
        <ProfileWrapper>
          <ImageArea><Image src={profile.image.url} /></ImageArea>
          <div>
            <p>UI/フロントエンド エンジニア</p>
            <p>ナカバヤシ リリキ</p>
          </div>
        </ProfileWrapper>
      </div>
      <Title>Skill</Title>
      <BasicWrapper>
        <p>FE: HTML, CSS, SASS, JavaScript(ES6), React, Vue.js, Angular, TypeScript</p>
        <p>BE: Node.js, Java, PHP, Ruby</p>
        <p>DB: MySQL, PostgreSQL, mongoDB</p>
        <p>ETC.: Firebase, Wordpress</p>
        <br />
        <p>勉強中: UI/UX, Webデザイン, SVELTE, Next.js</p>
      </BasicWrapper>
      <Title>Career</Title>
      <CareerWrapper>
        {carrer.map((item) => (
          <p key={item.id}>{`${formatDate(item.startDate)}~${formatDate(item.endDate)} ${item.content}`}</p>
        ))}
      </CareerWrapper>
      <Title>Business</Title>
      <BasicWrapper>
        <p>名称: force. (フォース)</p>
        <p>所在地: 東京23区内</p>
        <p>お問い合わせ: ririki.nakabayashi.force@gmail.com</p>
        <p>事業内容:  システム開発 / 動画編集 / 音楽制作</p>
      </BasicWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
  width: 100%;
  margin-left: 150px;
  padding: 20px;
  overflow: scroll;
  ${mediaQuery.lessThan('medium')`
    margin-left: 0;
  `}
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
  ${mediaQuery.lessThan('medium')`
    flex-direction: column;
    text-align: center;
  `}
`;

const CareerWrapper = styled.div`
  margin: 0 20px 40px 20px;
`;

const BasicWrapper = styled.div`
  margin: 0 20px 40px 20px;
`;

const ImageArea = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  ${mediaQuery.lessThan('medium')`
    margin-bottom: 20px;
  `}
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
