"use client";
import React from "react";
import { StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
import Image from "next/image";
import useLoginStore from "@/store/useLoginStore";

const NavbarComponent = () => {
  const onCreateAccount = () => {
    console.log("create account");
  };

  const isLogin = useLoginStore((state:any) => state.isLogin)
  const logout = useLoginStore((state:any) => state.logout)
  return (
    <header>
      {/* href로 이동이 어떻게 되는거지 */}
      <StyledNav>
        <StyledNavLink href="/">
          <Image src="/cow.jpg" priority={true} width={50} height={50} alt="Logo"></Image>
        </StyledNavLink>
        <NavLinks>
          {isLogin ? (<StyledNavLink href="/mypage">마이 페이지</StyledNavLink>) : null}
          
          {isLogin ? (<StyledNavLink href="/" onClick={logout}>로그아웃</StyledNavLink>):(<StyledNavLink href="/login">로그인</StyledNavLink>)}
          {isLogin ? null : 
            (<StyledNavLink href="/signup" onClick={onCreateAccount}>
              회원가입
            </StyledNavLink>)}
          
        </NavLinks>
      </StyledNav>
    </header>
  );
};

export default NavbarComponent;
