import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainFrame>
        <Title>잔반</Title>
        <NavigatorContainer>
          <Navigator>비료 거래</Navigator>
          <Navigator>발효 등급표</Navigator>
          <Navigator>비료 만들기</Navigator>
          <Navigator>발효 꿀팁</Navigator>
        </NavigatorContainer>

        <Write onClick={() => navigate("/newpost")}>내 비료 팔기</Write>
      </MainFrame>
    </>
  );
};

export default Header;

const MainFrame = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  top: 0;
  border-bottom: 1px solid #f2f2f2;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /* Header는 가장 위에 와야함 */
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 50px;
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
`;

const Navigator = styled.div`
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 30px;
  padding: 10px 0; /* 텍스트 위아래 여백 확보 */
`;

const Write = styled.button`
  border: none;
  outline: none;
  height: 40px;
  background-color: #f8f4d9;
  border-radius: 25px;
  padding: 0px 16px;
  font-weight: bold;
  font-size: 14px;
`;
