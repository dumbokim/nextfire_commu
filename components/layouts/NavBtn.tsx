import React, { Children } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface NavBtnProps {
  onClick?: any;
  href: string;
  children: any;
}

export const NavBtn = ({ onClick, children, href, ...props }: NavBtnProps) => {
  return (
    <Link href={href}>
      <a>
        <NavBtnWrapper>{children}</NavBtnWrapper>
      </a>
    </Link>
  );
};

const NavBtnWrapper = styled.div`
  width: 100%;
  /* border: 1px solid gray; */
  border-radius: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #84d6fa;
  color: aliceblue;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 500px) {
    padding: 5px 12px;
  }
  /* cursor: pointer; */
`;
