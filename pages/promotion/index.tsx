import React from "react";
import { Board, PageWrapper } from "../../components/index";

interface PromotionPageProps {}

const PromotionPage = (props: PromotionPageProps) => {
  return (
    <PageWrapper>
      <Board location="promotion" />
    </PageWrapper>
  );
};

export default PromotionPage;
