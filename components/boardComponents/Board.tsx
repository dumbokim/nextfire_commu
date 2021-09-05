import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BoardContent, Writing } from "./index";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  where,
  query,
  doc,
} from "firebase/firestore";

interface BoardProps {
  location: string;
}

export const Board = ({ location, ...props }: BoardProps) => {
  const [title, setTitle] = useState("");
  const [openWrite, setOpenWrite] = useState(false);

  const [writingTitle, setWritingTitle] = useState("");
  const [writingContent, setWritingContent] = useState("");

  const router = useRouter();
  const db = getFirestore();

  const auth = getAuth();

  // 게시판 타이틀 정하는 함수
  const getTitle = () => {
    switch (location) {
      case "free":
        setTitle("자유");
        break;

      case "info":
        setTitle("정보");
        break;

      case "study":
        setTitle("스터디");
        break;

      case "promotion":
        setTitle("홍보");
        break;

      case "hot":
        setTitle("온돌");
        break;
      // default:
      //   break;
    }
    if (location === "free") setTitle("자유");
    else if (location === "info") setTitle("정보");
    else if (location === "study") setTitle("스터디");
    else if (location === "promotion") setTitle("홍보");
    else if (location === "hot") setTitle("온돌");
  };

  // 글쓰기 클릭 함수
  const onClickOpenWriting = (e: any) => {
    e.stopPropagation();

    onAuthStateChanged(auth, (user) => {
      if (user) setOpenWrite(true);
      else return alert("로그인을 해주세요!");
    });
  };

  // 글 포스팅하는 함수
  const onClickPosting = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;

        const docRef = doc(db, "users", `${userId}`);

        const getUserData = await getDoc(docRef);

        const detail = `${getUserData.data()?.univ} ${
          getUserData.data()?.major
        }`;

        await addDoc(collection(db, `${location}`), {
          title: writingTitle,
          content: writingContent,
          like: 0,
          view: 0,
          writerDetail: detail,
        });

        router.reload();
      }
    });
  };

  // 글쓰기 닫기
  const onClickCloseWriting = () => {
    setOpenWrite(false);
    setWritingTitle("");
    setWritingContent("");
  };

  useEffect(() => {
    getTitle();
  }, [location]);

  return (
    <BoardWrapper>
      {openWrite === false ? (
        <>
          <BoardTitle>{title}마루</BoardTitle>
          <BoardContent location={location} />
          {location === "hot" ? (
            <></>
          ) : (
            <WritingBtnWrapper>
              <WritingBtn onClick={onClickOpenWriting}>글쓰기</WritingBtn>
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
            onClickCloseWriting={onClickCloseWriting}
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
  background-color: white;

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
