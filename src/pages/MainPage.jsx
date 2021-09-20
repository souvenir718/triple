import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppInfo from "../components/AppInfo";
import StoreInfo from "../components/StoreInfo";
import TripLogo from "../components/TripLogo";
import { fadeIn } from "../styles/keyframe";

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
const LogoContainer = styled.div`
  height: 90%;
  width: 40%;
`;
const AppInfoContainer = styled.div`
  height: 205px;
`;
const AppInfoList = styled.div`
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const TextContainer = styled.div`
  width: 40%;
  margin-left: 200px;
`;
const StoreListContainer = styled.div`
  height: 70px;
  margin-top: 80px;
`;
const StoreList = styled.div`
  display: flex;
  flex-direction: row;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const MainPage = () => {
  const baseYear = 2019;
  const baseMonth = 2;

  const [logoState, setLogoState] = useState(false);
  const [appState, setAppState] = useState(false);
  const [storeState, setStoreState] = useState(false);

  useEffect(() => {
    setLogoState(true);
    setTimeout(() => {
      setAppState(true);
      setTimeout(() => {
        setStoreState(true);
      }, 100);
    }, 100);
  }, []);

  return (
    <Container>
      <Content>
        <LogoContainer>
          {logoState && <TripLogo baseYear={baseYear} baseMonth={baseMonth} />}
        </LogoContainer>

        <TextContainer>
          <AppInfoContainer>
            {appState && (
              <AppInfoList>
                <AppInfo maxNum={350} type={"만 명"} target={"사용자"} />
                <AppInfo maxNum={21} type={"만 개"} target={"리뷰"} />
                <AppInfo maxNum={650} type={"만 개"} target={"저장"} />
              </AppInfoList>
            )}
          </AppInfoContainer>

          <StoreListContainer>
            {storeState && (
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
            )}
          </StoreListContainer>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default MainPage;
