import React from "react";
import styled from "@emotion/styled";

interface Props {}

const InfoPage = (props: Props) => {
  return (
    <InfoPageWrapper>
      <div>dfasdfs</div>
      <div>정보 게시판이어요!</div>
      <div>dfdf</div>
    </InfoPageWrapper>
  );
};

const InfoPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default InfoPage;
