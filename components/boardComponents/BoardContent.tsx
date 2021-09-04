import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { List } from "./index";
import { db } from "../../helpers/firebase";
import { getDocs, collection } from "firebase/firestore";

interface BoardContentProps {
  location?: string;
}

export const BoardContent = ({ location, ...props }: BoardContentProps) => {
  const [items, setItems] = useState([{}]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, `${location}`));

    setItems(
      querySnapshot.docs.map((doc) => {
        return { docId: doc.data().docId, title: doc.data().title };
      })
    );
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <BoardContentWrapper>
      {items.map((item: any) => {
        return (
          <>
            <List
              key={item.docId}
              listNum={0}
              title={item.title}
              writer={item.docId}
            />
          </>
        );
      })}
    </BoardContentWrapper>
  );
};

const BoardContentWrapper = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-radius: 1vh;
`;

const Button = styled.button``;
