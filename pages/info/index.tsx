import React from "react";
import { Board, PageWrapper } from "../../components/index";

interface InfoPageProps {}

const InfoPage = (props: InfoPageProps) => {
  return (
    <PageWrapper>
      <Board location="info" />
    </PageWrapper>
  );
};

export default InfoPage;
