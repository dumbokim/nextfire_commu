import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/dist/shared/lib/head";
import { IoMdSnow } from "react-icons/io";

import { NavBtn } from "./index";

interface LayoutProps {
  children?: any;
  props?: any;
}

export const Layout = ({ children, props }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>대학생 커뮤니티</title>
        <link rel="icon" href="/commu_favicon1.png" />
      </Head>
      <Navbar>
        <Link href="/">
          <a>
            <HomeBtn>
              <IoMdSnow size="1.5rem" />
            </HomeBtn>
          </a>
        </Link>
        <NavBtn href="/free">자유</NavBtn>
        <NavBtn href="/info">정보</NavBtn>
        <NavBtn href="/study">스터디</NavBtn>
        <NavBtn href="/promotion">홍보</NavBtn>
      </Navbar>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 10vh;
  border: 2px solid #84d6fa;
  color: #84d6fa;

  @media (max-width: 500px) {
    height: 2rem;
    width: 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
