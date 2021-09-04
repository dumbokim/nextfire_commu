import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BoardContent, Writing } from "./index";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { getFirestore, collection, addDoc } from "firebase/firestore";

interface BoardProps {
  location: string;
}

export const Board = ({ location, ...props }: BoardProps) => {
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState(false);

  const [writingTitle, setWritingTitle] = useState("");
  const [writingContent, setWritingContent] = useState("");

  const router = useRouter();
  const db = getFirestore();

  const getTitle = () => {
    if (location === "free") setTitle("자유");
    else if (location === "info") setTitle("정보");
    else if (location === "study") setTitle("스터디");
    else if (location === "promotion") setTitle("홍보");
    else if (location === "hot") setTitle("온돌");
  };

  const onClickPosting = async () => {
    await addDoc(collection(db, `${location}`), {
      title: writingTitle,
      content: writingContent,
      like: 0,
      view: 0,
    });

    router.reload();
  };

  useEffect(() => {
    getTitle();
  }, [location]);

  return (
    <BoardWrapper>
      {query === false ? (
        <>
          <BoardTitle>{title}마루</BoardTitle>
          <BoardContent location={location} />
          {location === "hot" ? (
            <></>
          ) : (
            <WritingBtnWrapper>
              <WritingBtn onClick={() => setQuery(true)}>글쓰기</WritingBtn>
            </WritingBtnWrapper>
          )}
        </>
      ) : (
        <>
          <Writing
            location={title}
            setWritingTitle={setWritingTitle}
            setWritingContent={setWritingContent}
            onClick={onClickPosting}
          />
        </>
      )}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  /* width: 100%; */
  margin: 1rem;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 1vh;

  @media (max-width: 500px) {
    padding: 5px;
    margin: 5px;
  }
`;

const BoardTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 1rem;
  color: #84d6fa;
`;

const WritingBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WritingBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 1vh;
  background-color: #84d6fa;
  color: aliceblue;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;
