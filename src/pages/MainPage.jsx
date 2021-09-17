import React from "react";
import styled from "styled-components";
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
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.div`
  background-color: green;
  width: 40%;
  margin-left: 5%;
`;

const Text = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`;
const StoreList = styled.div`
  display: flex;
  flex-direction: row;
`;
const StoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  margin-right: 30px;
`;
const StoreLogo = styled.img`
  margin-right: 10px;
  height: 50px;
`;
const StoreText = styled.div``;

const MainPage = () => {
  const baseYear = "2019";
  const baseMonth = "2";
  return (
    <Container>
      <Content>
        <TripLogo baseYear={baseYear} baseMonth={baseMonth} />
        <TextContainer>
          <Text>350만 명의 사용자</Text>
          <Text>21만 개의 리뷰</Text>
          <Text>650만 개의 저장</Text>
          <StoreList>
            <StoreInfo>
              <StoreLogo src="/images/play-store.png" />
              <StoreText>
                2018 구글 플레이스토어 올해의 앱 최우수상 수상
              </StoreText>
            </StoreInfo>
            <StoreInfo>
              <StoreLogo src="/images/app-store.png" />
              <StoreText>
                2018 구글 플레이스토어 올해의 앱 최우수상 수상
              </StoreText>
            </StoreInfo>
          </StoreList>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default MainPage;
