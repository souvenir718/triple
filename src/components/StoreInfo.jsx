import React from "react";
import styled from "styled-components";

const Store = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 280px;
  margin-right: 30px;
`;
const StoreLogo = styled.img`
  margin-right: 10px;
  height: 70px;
`;
const StoreText = styled.div`
  font-size: 18px;
  color: rgb(58, 58, 58);
  font-weight: bold;
  line-height: 22px;
`;

const StoreInfo = ({ awardYear, type, title }) => {
  const imgSrc = `/images/${type}.png`;
  const storeName =
    type === "play-store" ? "구글 플레이스토어" : "애플 앱스토어";
  return (
    <Store>
      <StoreLogo src={imgSrc} />
      <StoreText>
        {awardYear} {storeName}
        <br />
        {title}
      </StoreText>
    </Store>
  );
};

export default StoreInfo;
