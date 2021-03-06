import React from "react";
import { Board, PageWrapper } from "../../components/index";

interface FreePageProps {}

const FreePage = (props: FreePageProps) => {
  return (
    <PageWrapper>
      <Board location="free" />
    </PageWrapper>
  );
};

export default FreePage;
