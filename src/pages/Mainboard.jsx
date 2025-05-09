import React from "react";
import styled from "styled-components";
import Header from "../component/header";
import Sidebar from "../component/Sidebar";
import PostPhoto from "../assets/PostPhoto.png";

const Mainboard = () => {
  // 샘플 더미 데이터
  const posts = [
    {
      post_id: 1,
      image_url: PostPhoto,
      title: "급식서에서 나온 비료입니다.",
      price: "10,000원",
      weight: "320g",
      grade: "A 등급",
    },
    {
      post_id: 2,
      image_url: PostPhoto,
      title: "레전드 맛집 비료 못참지 ㅋㅋ",
      price: "2,000원",
      weight: "50g",
      grade: "C 등급",
    },
    {
      post_id: 3,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
    },
    {
      post_id: 4,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
    },
    {
      post_id: 5,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
    },
    {
      post_id: 6,
      image_url: PostPhoto,
      title: "이거 먹고 쑥쑥 자랐습니다",
      price: "18,000원",
      weight: "400g",
      grade: "A 등급",
    },
  ];

  return (
    <>
      <Header />

      <ContentRow>
        <Sidebar />
        <div style={{ marginTop: "100px", width: "99vw" }}>
          <Grid>
            {posts.map((post) => (
              <Post key={post.post_id}>
                <CustomImage src={post.image_url} alt={post.title} />
                <p style={{ fontSize: "14px", marginTop: "12px" }}>
                  {post.title}
                </p>
                <PriceRow>
                  <p
                    style={{ fontSize: "25px", fontWeight: "bold", margin: 0 }}
                  >
                    {post.price}
                  </p>

                  <GradeBox>{post.grade}</GradeBox>
                </PriceRow>

                <p>{post.weight}</p>
              </Post>
            ))}
          </Grid>
        </div>
      </ContentRow>
    </>
  );
};

export default Mainboard;

const ContentRow = styled.div`
  display: flex;
  margin-top: 80px; /* Header 높이만큼 */
  width: 99vw; /* 전체 너비 */
`;

const Grid = styled.div`
  flex: 1;
  background-color: #f0f0f0; /* 일시적으로 배경색 넣어보면 어디에 있는지 확인 가능 */
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  gap: 100px;
`;

const Post = styled.div`
  width: 230px;
  height: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 여기서 p 태그만 따로 왼쪽 정렬 */
  p {
    text-align: left;
    width: 100%;
    margin: 4px 0;
  }

  &:hover {
    color: #263a73;
    transition: 0.2s;
  }
`;

const CustomImage = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover; /* 이미지 비율 유지하면서 꽉 채움 */
  border-radius: 4px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const GradeBox = styled.div`
  background-color: #f8f4d9;
  font-size: 14px;
  font-weight: bold;
  color: #94917c;
  border-radius: 20px;
  padding: 4px 12px;
  padding: 3px 8px; /* ↓ 여백도 줄임 */
  white-space: nowrap;
`;
