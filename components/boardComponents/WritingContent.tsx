import React from "react";
import styled from "@emotion/styled";

interface WritingContentProps {
  item?: any;
}

export const WritingContent = ({ item, ...props }: WritingContentProps) => {
  return <WritingContentWrapper>{item.content}</WritingContentWrapper>;
};

const WritingContentWrapper = styled.div`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-left-radius: 1vh;
  border-bottom-right-radius: 1vh;
`;
