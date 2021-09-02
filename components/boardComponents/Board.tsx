import React from "react";
import styled from "@emotion/styled";
import { BoardContent } from "./index";

interface BoardProps {
  location: string;
}

export const Board = ({ location, ...props }: BoardProps) => {
  return (
    <BoardWrapper>
      <BoardTitle>{location}</BoardTitle>
      <BoardContent location={location} />
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  /* width: 100%; */
  margin: 1rem;
  padding: 2rem;
  border: 1px solid gray;
  border-radius: 1vh;

  @media (max-width: 500px) {
    padding: 5px;
    margin: 5px;
  }
`;

const BoardTitle = styled.div`
  font-size: 25px;
  margin: 1rem;
`;
