import React from "react";
import styled from "styled-components";
import Header from "../component/header";

const NewPost = () => {
  return (
    <>
      <Header />
      <Title>게시글 작성하기</Title>
      <Wrapper>
        <LeftSection>
          <Upload>사진 업로드</Upload>
        </LeftSection>
        <RightSection>
          <p>제목을 입력하세요</p>
          <p>발효 시작일</p>
        </RightSection>
      </Wrapper>
    </>
  );
};

export default NewPost;

const Title = styled.p`
  font-size: 21px;
  font-weight: bold;
  padding-left: 50px;
`;

const Wrapper = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-around;
`;

const LeftSection = styled.div`
  background-color: blue;
  width: 300px;
  height: 100px;
`;

const RightSection = styled.div`
  background-color: black;
  width: 200px;
  height: 130px;
`;

const Upload = styled.div`
  width: 450px;
  height: 450px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: 13px;
  border-radius: 10px;
  cursor: pointer;
`;
