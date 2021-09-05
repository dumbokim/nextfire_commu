import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/dist/shared/lib/head";
import { IoMdSnow } from "react-icons/io";

import { NavBtn } from "./index";
import { useRouter } from "next/router";

interface LayoutProps {
  children?: any;
  props?: any;
}

export const Layout = ({ children, props }: LayoutProps) => {
  const [user, setUser] = useState("");

  const router = useRouter();

  const auth = getAuth();

  const login = () => {
    router.push("/login");
  };

  const logout = (e: any) => {
    e.stopPropagation();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // router.reload();
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
        console.log(user.uid);
      } else setUser("");
    });

    console.log("refreshed");
  }, [user]);

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
      <BottomWrapper>
        {user === "" ? (
          <LoginBtn onClick={login}>로그인</LoginBtn>
        ) : (
          <LoginBtn onClick={logout}>로그아웃</LoginBtn>
        )}
        <Text>made by dumbokim</Text>
      </BottomWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  padding: 0.7rem 0;
  /* margin: 0.5rem 0; */
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: white;
  position: sticky;
  top: 0;
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

const BottomWrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoginBtn = styled.button``;

const Text = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
