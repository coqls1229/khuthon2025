import React, { useState } from "react";
import styled from "styled-components";
import Header from "../component/header";
import PostPhoto from "../assets/PostPhoto.png";
import Khubaby from "../assets/khubaby.png";
import Trust from "../assets/Trust.png";

const Profile = () => {
  const [tab, setTab] = useState("SALE");

  const transaction = [
    {
      post_id: 1,
      image_url: PostPhoto,
      title: "급식서에서 나온 비료입니다.",
      price: "10,000원",
      weight: "320g",
      grade: "A 등급",
      status: "PENDING",
    },
    {
      post_id: 2,
      image_url: PostPhoto,
      title: "레전드 맛집 비료 못참지 ㅋㅋ",
      price: "2,000원",
      weight: "50g",
      grade: "C 등급",
      status: "COMPLETED",
    },
    {
      post_id: 3,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
      status: "PENDING",
    },
    {
      post_id: 4,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
      status: "PENDING",
    },
  ];

  return (
    <>
      <Header />
      <Frame>
        <Title>사용자 프로필</Title>
      </Frame>
      <Wrapper>
        {/* ── 프로필 헤더 ──────────────────────────────── */}
        <ProfileHead>
          <AvatarWrap>
            <Avatar src={Khubaby} alt="avatar" />
            <div style={{ lineHeight: "12px" }}>
              <Nickname>경희베이비</Nickname>
              <p>경희대 구내식당</p>
            </div>
          </AvatarWrap>

          <SproutWrap>
            <img src={Trust} alt="곡식 단계" width={40} height={40} />
            <SproutText>
              싹 신뢰도 <br />{" "}
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                곡식 단계
              </span>
            </SproutText>
          </SproutWrap>
        </ProfileHead>

        {/* ── 탭 메뉴 ─────────────────────────────────── */}
        <TabNav>
          <Tab active={tab === "SALE"} onClick={() => setTab("SALE")}>
            판매 내역
          </Tab>
          <Tab active={tab === "PURCHASE"} onClick={() => setTab("PURCHASE")}>
            구매 내역
          </Tab>
          <Tab active={tab === "JABAN"} onClick={() => setTab("JABAN")}>
            잔반마니 조회
          </Tab>
        </TabNav>
        <div style={{ marginTop: "20px", width: "99vw" }}>
          <Grid>
            {transaction.map((tran) => (
              <Transac>
                <TransImg src={PostPhoto} alt="trans-photo" />
                <FlexContainer>
                  {tran.status === "PENDING" ? (
                    <PendingBadge>판매 중</PendingBadge>
                  ) : (
                    <CompletedBadge>판매 완료</CompletedBadge>
                  )}
                  <TransTitle>{tran.title}</TransTitle>
                </FlexContainer>
                <FlexContainer>
                  <p>{tran.price}</p>
                  <Badge>{tran.grade}</Badge>
                </FlexContainer>
                <p>{tran.weight}</p>
              </Transac>
            ))}
          </Grid>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;

const Frame = styled.div`
  position: fixed;
  top: 140px; /* header 아래 공간 확보 */
  padding-left: 70px;
  width: 420px;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const Wrapper = styled.main`
  padding-top: 180px; /* Header 높이 만큼 여백 */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProfileHead = styled.section`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const Nickname = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

const SproutWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SproutText = styled.p`
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
`;

const TabNav = styled.nav`
  width: 900px;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 600;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #000" : "none")};
  color: ${({ active }) => (active ? "#000" : "#9c9c9c")};
`;

const Grid = styled.div`
  flex: 1;
  // background-color: #f0f0f0;
  display: grid;
  grid-template-columns: repeat(3, 220px);
  justify-content: center;
  column-gap: 70px;
  row-gap: 50px;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;
  align-items: center;
`;

const Transac = styled.div``;

const TransImg = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 15px;
  object-fit: cover;
`;

const TransTitle = styled.p`
  width: 120px; /* 원하는 너비 */
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 */
  overflow: hidden; /* 넘친 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임(...) 표시 */
`;

const PendingBadge = styled.div`
  background-color: #d9ffc4;
  color: #559731;
  width: 70px;
  text-align: center;
  border-radius: 10px;
  font-size: 17px;
`;

const CompletedBadge = styled.div`
  background-color: #d9d9d9;
  color: #636363;
  width: 80px;
  text-align: center;
  border-radius: 10px;
  font-size: 17px;
`;

const Badge = styled.div`
  background-color: #f8f4d9;
  color: #94917c;
  width: 70px;
  padding: 1px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
`;
