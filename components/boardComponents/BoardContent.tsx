import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { WritingList } from "./index";
import { db } from "../../helpers/firebase";
import { getDocs, collection } from "firebase/firestore";

interface BoardContentProps {
  location?: string;
}

export const BoardContent = ({ location, ...props }: BoardContentProps) => {
  const [items, setItems] = useState([{}]);

  // 글 데이터 가져오는 함수
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, `${location}`));

    setItems(
      querySnapshot.docs.map((doc) => {
        return {
          key: doc.id,
          // docId: doc.data().docId,
          title: doc.data().title,
          like: doc.data().like,
          content: doc.data().content,
          writer: doc.data().writer,
          writerDetail: doc.data().writerDetail,
        };
      })
    );
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <BoardContentWrapper>
      {items.map((item: any, num) => {
        return <WritingList key={num} item={item}></WritingList>;
      })}
    </BoardContentWrapper>
  );
};

const BoardContentWrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 1vh;
  padding: 1rem 0;
`;

const Button = styled.button``;
