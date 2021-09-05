import React from "react";
import styled from "@emotion/styled";
import { IoMdSnow } from "react-icons/io";
import { WritingContent } from "./index";

interface WritingListProps {
  item?: any;
}

export const WritingList = ({ item, ...props }: WritingListProps) => {
  return (
    <ListWrapper>
      <ListContainer>
        <ListLike>
          <IoMdSnow size="1.2rem" color="#84d6fa" />
          {item.like}
        </ListLike>
        <Title>{item.title}</Title>
        <Writer>{item.writerDetail}</Writer>
      </ListContainer>
      {/* {<WritingContent item={item} />} */}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  /* padding: 3px; */
  background-color: white;
  margin: 0.5rem 0;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  /* border: 1px solid lightgray; */
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  /* border-radius: 1vh; */
`;

const ListLike = styled.div`
  font-size: 14px;
  min-width: 3rem;
  padding-left: 7px;
  margin-right: 0.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  color: gray;
`;

const Title = styled.div`
  font-size: 17px;
  /* width: 65%; */
  flex: 7;
  overflow: hidden;
`;

const Writer = styled.div`
  font-size: 0.9rem;
  min-width: 6rem;
  padding-right: 0.5rem;
  flex: 2;
  color: gray;
  display: flex;
  justify-content: flex-end;
`;
