import React from "react";
import styled from "@emotion/styled";
import { List } from "./index";

interface BoardContentProps {
  location?: string;
}

export const BoardContent = ({ location, ...props }: BoardContentProps) => {
  return (
    <BoardContentWrapper>
      <List listNum={0} title="title" writer="writer" />
    </BoardContentWrapper>
  );
};

const BoardContentWrapper = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-radius: 1vh;
`;
