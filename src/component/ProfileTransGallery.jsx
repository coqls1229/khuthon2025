import React from "react";
import styled from "styled-components";
import Header from "../component/header";
import PostPhoto from "../assets/PostPhoto.png";

const ProfileTransGallery = () => {
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
      <div>
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
    </>
  );
};

export default ProfileTransGallery;

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

const Grid = styled.div`
  flex: 1;
  // background-color: #f0f0f0;
  display: grid;
  grid-template-columns: repeat(3, 250px);
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
