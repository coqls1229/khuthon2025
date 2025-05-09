import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import PostPhoto from "../assets/PostPhoto.png";
import Khubaby from "../assets/khubaby.png";
import Trust from "../assets/Trust.png";

const PostDetail = () => {
  const isMyPost = false;
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Frame>
        <Title>비료 게시글 조회</Title>
      </Frame>
      <Container>
        <ContentBox>
          <LeftSection>
            <PostImg src={PostPhoto} alt="post-photo" />
            {/* 프로필 + 신뢰도 영역 */}
            <InfoBox>
              <Avatar src={Khubaby} alt="경희베이비" />

              <NameBox>
                <ProfileName>경희베이비</ProfileName>
                <ProfilePlace>경희대 구내식당</ProfilePlace>
              </NameBox>

              <TrustBox>
                <TrustImg src={Trust} alt="싹 신뢰도" />
                <TrustText>싹 신뢰도</TrustText>
              </TrustBox>
            </InfoBox>
          </LeftSection>
          {/* 포스트 글과 정보 디스플레이 하는 영역 */}
          <RightSection>
            {/* 상단 제목 */}
            <PostTitle>농민분들 항상 감사합니다</PostTitle>

            {/* 태그·중량 & 가격 */}
            <RowSpaceBetween>
              <div>
                <Row>
                  <Badge>A 등급</Badge>
                  <Dot>·</Dot>
                  <Weight>280g</Weight>
                </Row>
                <Price>13,000원</Price>
              </div>

              {/* 발효 날짜 */}
              <div>
                <MetaRow>
                  <MetaLabel>발효 시작일</MetaLabel>
                  <MetaValue>25.04.28</MetaValue>
                </MetaRow>
                <MetaRow>
                  <MetaLabel>발효 완료일</MetaLabel>
                  <MetaValue>25.05.09</MetaValue>
                </MetaRow>
              </div>
            </RowSpaceBetween>

            {/* 본문 설명 */}
            <Description>
              안녕하세요 :) <br />
              경희대학교 학생식당입니다~
              <br />
              <br />
              매일같이 학생들이 맛있게 먹고 가는 식판들, 그 뒤엔 항상 남겨지는
              음식물들이 있었어요. 처음엔 그냥 버려지는 것이 아깝다고만
              생각했는데, 문득 이런 생각이 들더라고요. “이걸 그냥 버리지 말고,
              더 좋은 무언가로 바꿔보면 어떨까?”
              <br />
              <br />
              그렇게 시작된 작은 실험!
              <br />
              학생들이 남긴 잔반을 모아, 자연에 부담을 덜 주는 방식으로 천천히,
              정성껏 발효시키고 숙성시켜 보았어요. 냄새도 잡고, 영양도 살리고,
              토양에도 좋은 친환경 퇴비로 다시 태어나니까요. 시간이 오래
              걸렸지만 정말 뿌듯하고 기쁜 마음입니다. 😊
            </Description>

            {/* 작성 날짜 */}
            <PostedDate>2025년 05월 09일</PostedDate>
          </RightSection>
        </ContentBox>
      </Container>
      <ButtonContainer>
        {isMyPost ? (
          <>
            <Button variant="edit">수정하기</Button>
            <Button variant="delete">삭제하기</Button>
          </>
        ) : (
          <Button variant="buy" onClick={() => navigate("/post/purchase")}>
            구매하기
          </Button>
        )}
      </ButtonContainer>
    </>
  );
};

export default PostDetail;

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

const PostImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  padding: 150px 50px 30px; // top right bottom left
  width: 90vw;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 60px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const InfoBox = styled.div`
  margin-top: 20px;
  width: 400px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;

const NameBox = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ProfilePlace = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const TrustBox = styled.div`
  margin-left: auto; /* 오른쪽 끝으로 밀어내기 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrustImg = styled.img`
  width: 50px;
  height: 60px;
`;

const TrustText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 50px;
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RowSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Price = styled.p`
  margin: 4px 0 16px;
  font-size: 22px;
  font-weight: 700;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const MetaLabel = styled.span`
  width: 80px; /* 고정 폭으로 정렬 */
  color: #777;
`;

const MetaValue = styled.span`
  color: #444;
`;

const Description = styled.p`
  margin: 12px 0 0;
  line-height: 1.6;
  white-space: pre-line;
`;

const PostedDate = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: #aaa;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 80px;
`;

const Button = styled.button`
  width: 150px;
  border-radius: 15px;
  font-size: 18px;
  margin-right: 15px;
  font-weight: bold;

  background-color: ${(props) =>
    props.variant === "edit"
      ? "#F5F5F5"
      : props.variant === "delete"
      ? "#69675C"
      : "#F8F4D9"};
  color: ${(props) =>
    props.variant === "edit"
      ? "#69675C"
      : props.variant === "delete"
      ? "#F5F5F5"
      : "#69675C"};
`;
