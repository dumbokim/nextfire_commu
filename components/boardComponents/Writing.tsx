import React from "react";
import styled from "@emotion/styled";

interface WritingProps {
  location?: any;
  setWritingTitle?: any;
  setWritingContent?: any;
  onClick?: any;
}

export const Writing = ({
  location,
  setWritingContent,
  setWritingTitle,
  onClick,
  ...props
}: WritingProps) => {
  return (
    <WritingWrapper>
      <BoardTitle>{location}마루</BoardTitle>
      <InputTitle
        placeholder="제목"
        onChange={(e) => setWritingTitle(e.target.value)}
      />
      <InputContent
        placeholder="자유롭게 적어주세용"
        onChange={(e) => setWritingContent(e.target.value)}
      />
      <ButtonWrapper>
        <Button onClick={onClick}>등록</Button>
      </ButtonWrapper>
    </WritingWrapper>
  );
};

const WritingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 1rem;
  color: #84d6fa;
`;

const InputTitle = styled.input`
  height: 1.7rem;
  width: 100%;
  border: 1px solid lightgray;
  outline-color: #84d6fa;
  padding-left: 0.5rem;
`;

const InputContent = styled.textarea`
  width: 100%;
  height: 15rem;
  margin: 1rem 0;
  outline-color: #84d6fa;
  border: 1px solid lightgray;
  padding: 0.5rem;
  resize: none;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 1vh;
  background-color: #84d6fa;
  color: aliceblue;
  font-weight: bold;
`;
