import React from "react";
import styled from "@emotion/styled";

interface ListProps {
  listNum?: number;
  title: string;
  writer: string;
}

export const List = ({ listNum, title, writer, ...props }: ListProps) => {
  return (
    <ListWrapper>
      <ListNum>{listNum}</ListNum>
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  margin: 2px;
  padding: 3px;
`;

const ListNum = styled.div`
  font-size: 14px;
  width: 10%;
  padding-left: 7px;
`;

const Title = styled.div`
  font-size: 17px;
  width: 70%;
`;

const Writer = styled.div`
  font-size: 15px;
  width: 20%;
`;
