import React from "react";
import styled from "styled-components";
import AppInfo from "../components/AppInfo";
import StoreInfo from "../components/StoreInfo";
import TripLogo from "../components/TripLogo";

const Container = styled.div`
  min-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 1550px;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 40%;
  margin-left: 200px;
`;

const StoreList = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
`;

const MainPage = () => {
  const baseYear = "2019";
  const baseMonth = "2";
  return (
    <Container>
      <Content>
        <TripLogo baseYear={baseYear} baseMonth={baseMonth} />
        <TextContainer>
          <AppInfo maxNum={350} type={"만 명"} target={"사용자"} />
          <AppInfo maxNum={21} type={"만 개"} target={"리뷰"} />
          <AppInfo maxNum={650} type={"만 개"} target={"저장"} />
          <StoreList>
            <StoreInfo
              awardYear={2018}
              type={"play-store"}
              title={"올해의 앱 최우수상 수상"}
            />
            <StoreInfo
              awardYear={2018}
              type={"app-store"}
              title={"오늘의 여행앱 선정"}
            />
          </StoreList>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default MainPage;
