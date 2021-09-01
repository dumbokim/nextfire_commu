import React, { Children } from "react";
import styled from "@emotion/styled";

interface NavBtnProps {
  onClick?: any;
  children?: any;
}

export const NavBtn = ({ onClick, children, ...props }: NavBtnProps) => {
  return <NavBtnWrapper>{children}</NavBtnWrapper>;
};

const NavBtnWrapper = styled.div`
  width: 10rem;
`;
