import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import Header from "../component/header";
import PostPhoto from "../assets/PostPhoto.png";

const Purchase = () => {
  const { state } = useLocation(); // PostDetail 에서 넘긴 객체
  const [item, setItem] = useState(state); // state 있으면 바로 사용

  console.log("item:", item);

  return (
    <>
      <Header />
      <Frame>
        <Title>상품 구매하기</Title>
      </Frame>

      <Wrapper>
        <LeftContainer>
          <SectionTitle>구매 품목</SectionTitle>

          <ItemContainer>
            <ItemImg src={item.image_url} alt="post-photo" />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <MetaRow>
                <MetaLabel>발효 시작일</MetaLabel>
                <MetaValue>25.04.28</MetaValue>
              </MetaRow>
              <MetaRow>
                <MetaLabel>발효 완료일</MetaLabel>
                <MetaValue>25.05.09</MetaValue>
              </MetaRow>
              <Row>
                <Badge>{item.grade}</Badge>
                <Dot>·</Dot>
                <Weight>{item.weight}</Weight>
              </Row>
            </ItemInfo>
          </ItemContainer>
        </LeftContainer>

        <TotalContainer>
          <SummaryCol>
            <SummaryRow>
              <SummaryLabel>총 상품 금액</SummaryLabel>
              <SummaryValue>{item.price.toLocaleString()}</SummaryValue>
            </SummaryRow>

            <SubRow>
              <SubText>상품 1개</SubText>
              <SubText>{item.price.toLocaleString()}</SubText>
            </SubRow>

            <SummaryRow>
              <SummaryLabel>총 추가 금액</SummaryLabel>
              <SummaryValue>0원</SummaryValue>
            </SummaryRow>

            <Divider />

            <SummaryRow>
              <FinalLabel>최종 결제 금액</FinalLabel>
              <FinalValue>{item.price.toLocaleString()}</FinalValue>
            </SummaryRow>

            <PayButton>결제하기</PayButton>
          </SummaryCol>
        </TotalContainer>
      </Wrapper>
    </>
  );
};

export default Purchase;

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

const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  margin: 150px 0 0; /* 위 여백만 유지 */
  padding: 0 70px; /* ← 왼쪽(오른쪽) 여백 맞추기 */
  width: 1500px;
  box-sizing: border-box; /* 패딩 포함해서 폭 계산 */
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px; /* ← 폭 제한해서 중앙 쪽으로 */
  flex: 1;
`;

const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 22px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid rgb(251, 42, 42);
`;

const ItemImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const MetaLabel = styled.span`
  color: #777;
  width: 90px; /* 정렬용 고정폭 */
`;

const MetaValue = styled.span`
  color: #444;
`;

const TotalContainer = styled.div`
  width: 300px;
`;

const SummaryCol = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 20px;
  padding: 30px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SummaryLabel = styled.span`
  font-size: 14px;
  color: #444;
`;

const SummaryValue = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const SubRow = styled(SummaryRow)`
  margin-top: -6px;
`;

const SubText = styled.span`
  font-size: 12px;
  color: #999;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

const FinalLabel = styled(SummaryLabel)`
  font-weight: 700;
`;

const FinalValue = styled(SummaryValue)`
  font-size: 20px;
`;

const PayButton = styled.button`
  margin-top: 12px;
  padding: 12px 0;
  background: #f0e9d8;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Badge = styled.span`
  background: #f0e9d8;
  color: #6b5438;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
`;

const Dot = styled.span`
  font-size: 14px;
  color: #999;
`;

const Weight = styled.span`
  font-size: 14px;
  color: #666;
`;
