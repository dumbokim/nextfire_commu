import type { NextPage } from "next";
import { PageWrapper, Board } from "../components";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Board location="hot" />
    </PageWrapper>
  );
};

export default Home;
