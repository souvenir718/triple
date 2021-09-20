import React from "react";
import styled from "styled-components";
import { fadeIn } from "../styles/keyframe";

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 5%;
  margin-top: 3%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
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
