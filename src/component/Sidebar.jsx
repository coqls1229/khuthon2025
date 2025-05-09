import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const grade = ["A", "B", "C", "F"];
  const price = ["나눔", 5000, 10000, 20000];
  const [selectedGrade, setSelectedGrade] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceClick = (value) => {
    setSelectedPrice(value === selectedPrice ? "" : value);
  };

  const handleGradeChange = (value) => {
    if (selectedGrade.includes(value)) {
      setSelectedGrade(selectedGrade.filter((g) => g !== value));
    } else {
      setSelectedGrade([...selectedGrade, value]);
    }
  };

  const handleReset = () => {
    setSelectedGrade([]);
    setSelectedPrice("");
  };

  return (
    <SubFrame>
      <div style={{ marginTop: "80px" }}>
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
              fontSize: "14px",
              color: "#CCCCCC",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleReset}
          >
            초기화
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {grade.map((g, index) => (
            <label key={index}>
              <CustomInput
                type="checkbox"
                value={g}
                checked={selectedGrade.includes(g)}
                onChange={() => handleGradeChange(g)}
              />
              {g} 등급 보기
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Sub>가격</Sub>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
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
  );
};

export default Sidebar;

const SubFrame = styled.div`
  position: relative;
  top: 0;
  padding-left: 70px;
  height: 120vh;
  width: 420px;
  overflow-y: auto;
  border-right: 1px solid #e8e8e8;
`;

const Title = styled.p`
  font-size: 25px;
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
  border: ${({ $selected }) => ($selected ? "none" : "1px solid #ededed")};
  outline: none;
  padding: 7px 18px;
  margin: 8px;
  width: auto;
  border-radius: 20px;
  background-color: ${({ $selected }) => ($selected ? "#E8E8E8" : "#FFFFFF")};
  cursor: pointer;
`;
