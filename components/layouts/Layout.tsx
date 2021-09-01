import React from "react";
import styled from "@emotion/styled";

import { NavBtn } from "./index";

interface Props {}

export const Layout = (props: Props) => {
  return (
    <LayoutWrapper>
      <Navbar>
        <NavBtn>할로</NavBtn>
        <NavBtn>할로2</NavBtn>
        <NavBtn>할로3</NavBtn>
        <NavBtn>할로4</NavBtn>
      </Navbar>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
