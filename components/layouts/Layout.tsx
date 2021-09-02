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
        <title>commu~</title>
      </Head>
      <Navbar>
        <NavBtn href="/">
          <IoMdSnow size="18" />
        </NavBtn>
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
  border-bottom: 1px solid lightgray;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
