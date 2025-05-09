import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const grade = ["A", "B", "C", "F"];
  const price = ["나눔", 5000, 10000, 20000];
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceClick = (value) => {
    setSelectedPrice(value === selectedPrice ? "" : value);
  };

  return (
    <>
      <SubFrame>
        <div style={{ marginTop: "50px" }}>
          <Title>현재 판매 중인 비료</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Sub>등급</Sub>
            <p
              style={{
                marginRight: "40px",
                fontSize: "12px",
                color: "#CCCCCC",
                textDecoration: "underline",
              }}
            >
              초기화
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {grade.map((g, index) => (
              <label key={index}>
                <CustomInput type="checkbox" value={g} />
                {g} 등급 보기
              </label>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Sub>가격</Sub>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {price.map((p) => (
              <CustomButton
                key={p}
                $selected={selectedPrice === p}
                onClick={() => handlePriceClick(p)}
              >
                {typeof p === "string" ? p : `${p}원 이하`}
              </CustomButton>
            ))}
          </div>
        </div>
      </SubFrame>
    </>
  );
};

export default Sidebar;

const SubFrame = styled.div`
  position: relative;
  top: 0;
  padding-left: 50px;
  height: 120vh;
  width: 300px;
  overflow-y: auto;
  border-right: 1px solid #e8e8e8;
`;

const Title = styled.p`
  font-size: 21px;
  font-weight: bold;
`;

const Sub = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CustomInput = styled.input`
  width: 20px;
  margin: 10px;
`;

const CustomButton = styled.button`
  border: 1px solid #ededed;
  outline: none;
  padding: 5px 0px;
  margin: 5px;
  width: 50%;
  border-radius: 20px;
  background-color: ${({ $selected }) => ($selected ? "#E8E8E8" : "#FFFFFF")};
  cursor: pointer;
`;
