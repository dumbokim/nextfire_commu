import React from "react";
import styled from "@emotion/styled";
import { Board } from "../../components/index";

interface Props {}

const FreePage = (props: Props) => {
  return (
    <FreePageWrapper>
      <Board location="free" />
    </FreePageWrapper>
  );
};

const FreePageWrapper = styled.div`
  /* width: 100%; */
  margin: 1.5rem;
  padding: 1.5rem;
  border: 1px solid gray;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 5px;
    margin: 5px;
  }
`;

export default FreePage;
