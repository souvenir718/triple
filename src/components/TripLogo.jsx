import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  height: 90%;
  width: 40%;
  margin-left: 5%;
  margin-top: 3%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 90%;
`;
const ImageText = styled.div`
  position: absolute;
  bottom: 95px;
  right: 240px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.5);
`;
const TripLogo = ({ baseYear, baseMonth }) => {
  return (
    <ImgContainer>
      <Image src="/images/triple.png" />
      <ImageText>
        {baseYear}년 {baseMonth}월 기준
      </ImageText>
    </ImgContainer>
  );
};

export default TripLogo;
