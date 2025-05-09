import React from "react";
import styled from "styled-components";
import Header from "../component/header";

const NewPost = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>게시글 작성하기</Title>
        <ContentBox>
          <LeftSection>
            <ImageBox>사진 업로드</ImageBox>
            <PriceInfo>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "450px",
                }}
              >
                <PriceText>38,000원</PriceText>
                <GradeBadge>A 등급</GradeBadge>
              </div>
              <WeightText>280g</WeightText>
            </PriceInfo>
          </LeftSection>
          <RightSection>
            <Input placeholder="제목을 입력하세요" />
            <DateRow>
              <DateItem>
                <DateLabel>발효 시작일</DateLabel>
                <DateValue>25.04.28</DateValue>
              </DateItem>
              <DateItem>
                <DateLabel>발효 완료일</DateLabel>
                <DateValue>25.05.09</DateValue>
              </DateItem>
            </DateRow>
            <Textarea placeholder="설명을 입력하세요" />
            <UploadButton>업로드</UploadButton>
          </RightSection>
        </ContentBox>
      </Container>
    </>
  );
};

export default NewPost;

const Container = styled.div`
  padding: 120px 50px 50px;
  width: 90vw;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 60px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end; // 가로 가운데 정렬
  justify-content: center; // 세로 가운데 정렬
`;

const ImageBox = styled.div`
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

const PriceInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PriceText = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const WeightText = styled.div`
  font-size: 14px;
  color: #555;
`;

const GradeBadge = styled.div`
  background-color: #f8f4d9;
  border-radius: 12px;
  font-size: 13px;
  padding: 4px 10px;
  width: fit-content;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 50px;
`;

const Input = styled.input`
  font-size: 28px;
  padding: 12px 12px 20px 0px; // top, right, bottom, left
  border: none;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 20px;
  outline: none;
  &::placeholder {
    color: #d7d7d7;
    font-family: Pretendard;
  }
`;

const Textarea = styled.textarea`
  font-size: 16px;
  padding: 30px 12px 20px 0px;
  border: none;
  border-top: 1px solid #e4e4e4;
  height: 100px;
  resize: none;
  &::placeholder {
    color: #d7d7d7;
    font-family: Pretendard;
    font-size: 18px;
  }
`;

const UploadButton = styled.button`
  align-self: flex-end;
  background-color: #f8f4d9;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 15px;
  color: #94917c;
  cursor: pointer;
`;

const DateRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const DateLabel = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  &::before {
    content: "📅";
    margin-right: 10px;
  }
`;

const DateValue = styled.div`
  font-size: 15px;
  color: #444;
`;
