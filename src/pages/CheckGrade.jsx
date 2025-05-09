import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Graph from "../assets/Graph.png";

const CheckGrade = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Frame>
        <Title>비료 등급 확인하기</Title>
      </Frame>
      <div style={{ width: "90vw" }}>
        <Container>
          <CustomImage src={Graph} alt="graph" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginLeft: "50px" }}>
              <Row>
                <p>책정 등급: </p> <Bold>grade</Bold>
              </Row>
              <Row>
                <p>책정 무게: </p> <Bold>weight</Bold>
              </Row>
              <Row>
                <p>책정가: </p> <Bold>price</Bold>
              </Row>
            </div>

            <PurchaseButton onClick={() => navigate("/newpost")}>
              판매하러 가기
            </PurchaseButton>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CheckGrade;

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

const Container = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomImage = styled.img`
  width: 700px;
`;

const Bold = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const PurchaseButton = styled.button`
  width: 300px;
  background-color: #f8f4d9;
  border-radius: 10px;
  color: #6f6f2b;
  margin-top: 50px;
`;
