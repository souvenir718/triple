import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 45px;
  color: rgb(58, 58, 58);
  margin-bottom: 35px;
`;
const BoldText = styled.span`
  font-weight: bolder;
`;

const AppInfo = ({ maxNum, type, target }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= maxNum) return;

    const timeout = setTimeout(() => setValue(value + 1), 10);

    return () => clearTimeout(timeout);
  }, [value, maxNum]);

  return (
    <Text>
      <BoldText>
        {value}
        {type}
      </BoldText>
      의 {target}
    </Text>
  );
};

export default AppInfo;
