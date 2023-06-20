import { styled } from "styled-components";
import firebase from "firebase";
import useStore from "../store";
import { useState } from "react";

const Navbar = () => {
  const { userData, setUserData } = useStore();
  function handleGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        var errorCode = error.code;

        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
      });
  }
  return (
    <>
      <Nav>
        <Title href="/">N O R U L E H E R E</Title>
        {/* <Navbuttons href="/RESISTOR">RESISTOR</Navbuttons> */}
        <Navbuttons onClick={handleGoogleLogin}>LOGIN</Navbuttons>
        <Navbuttons href="/PROFILE">PROFILE</Navbuttons>
        <Navbuttons href="/ABOUT">ABOUT</Navbuttons>
      </Nav>
    </>
  );
};
export default Navbar;

const Nav = styled.nav`
  height: 2.5vw;
  background-color: gray;
  display: flexbox;
  margin-bottom: 2.5vw;
  align-items: center;
`;

const Title = styled.a`
  font-family: "NeoDunggeunmo";
  font-size: 5vw;
  width: 50vw;
  margin: 0;
  margin-right: 0vw;
  text-decoration: none;
  color: black;
`;

const Navbuttons = styled.a`
  margin: 0;
  font-family: "NeoDunggeunmo";
  margin-left: 2vw;
  width: 10px;
  text-decoration: none;
`;
