import React from "react";
import styled from "styled-components";
import Header from "../component/header";
import Sidebar from "../component/Sidebar";

const Mainboard = () => {
  return (
    <>
      <Header />

      <ContentRow>
        <Sidebar />
        <div style={{ marginTop: "100px", width: "99vw" }}>
          <Grid>
            <Post>hello</Post>
            <Post>world</Post>
            <Post>222</Post>
            <Post>ldsakjfslkjd</Post>
            <Post>ldsakjfslkjd</Post>
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
  gap: 30px;
`;

const Post = styled.div`
  width: 200px;
  height: 300px;
  margin: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    color: #263a73;
    transition: 0.2s;
  }
`;
