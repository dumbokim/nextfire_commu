import React from "react";
import { Board, PageWrapper } from "../../components/index";

interface StudyPageProps {}

const StudyPage = (props: StudyPageProps) => {
  return (
    <PageWrapper>
      <Board location="study" />
    </PageWrapper>
  );
};

export default StudyPage;
