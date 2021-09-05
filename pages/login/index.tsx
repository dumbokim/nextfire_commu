import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import styled from "@emotion/styled";
import { PageWrapper } from "../../components";
import { useRouter } from "next/router";

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [upEmail, setUpEmail] = useState("");
  const [upPwd, setUpPwd] = useState("");
  const [univ, setUniv] = useState("");
  const [major, setMajor] = useState("");

  const [signUpOpen, setSignUpOpen] = useState(false);

  const router = useRouter();

  const auth = getAuth();
  const db = getFirestore();

  const onClickLogin = () => {
    if (email === "" || pwd === "") return alert("로그인 입력을 완료해주세요");

    signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        router.back();
      })
      .catch(console.log);
  };

  const onClickSignUp = (e) => {
    if (upEmail === "" || upPwd === "" || univ === "" || major === "")
      return alert("가입 입력을 완료해주세요");

    createUserWithEmailAndPassword(auth, upEmail, upPwd)
      .then(() => {
        signInWithEmailAndPassword(auth, upEmail, upPwd)
          .then(() => {
            authToDb(upEmail, univ, major);
            router.back();
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  const authToDb = async (email: string, univ: string, major: string) => {
    await addDoc(collection(db, `users`), {
      email: email,
      univ: univ,
      major: major,
    });
  };

  return (
    <PageWrapper>
      <LoginWrapper>
        <InputWrapper>
          <Text>로그인</Text>
          <Input
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            onChange={(e) => setPwd(e.target.value)}
          />
          <Button onClick={onClickLogin}>로그인</Button>
          <Button onClick={() => setSignUpOpen(true)}>회원가입</Button>
        </InputWrapper>
        {signUpOpen === true ? (
          <InputWrapper>
            <Text>회원가입</Text>
            <Input
              placeholder="이메일"
              onChange={(e) => setUpEmail(e.target.value)}
            />
            <Input
              placeholder="비밀번호"
              onChange={(e) => setUpPwd(e.target.value)}
            />
            <Input
              placeholder="대학교명"
              onChange={(e) => setUniv(e.target.value)}
            />
            <Input
              placeholder="학과명"
              onChange={(e) => setMajor(e.target.value)}
            />
            <Button onClick={onClickSignUp}>회원가입</Button>
          </InputWrapper>
        ) : (
          <></>
        )}
      </LoginWrapper>
    </PageWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 15rem;
  /* height: 13rem; */
  border: 1px solid lightgray;
  border-radius: 1vh;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.3rem;
`;

const Input = styled.input`
  height: 1.5rem;
  width: 10rem;
  margin: 0.3rem 0;
  padding-left: 0.2rem;
`;

const Button = styled.button`
  margin: 0.3rem 0;
`;

export default LoginPage;
