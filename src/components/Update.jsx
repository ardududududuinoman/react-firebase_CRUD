import { useEffect, useState } from "react";
import firebase from "../fbase";
import useStore from "../store";
import Uploadlist from "./Uploadlist";
import styled from "styled-components";

const Update = () => {
  const {
    list,
    addlist,
    setoldTitle,
    setoldDis,
    setthisId,
    oldTitle,
    oldDis,
    thisId,
  } = useStore();

  const db = firebase.firestore();

  return (
    <Fregment>
      <a href="/">메인페이지</a>
      <input type="text" defaultValue={oldTitle} />
      <textarea defaultValue={oldDis}></textarea>
      <button>수정하기</button>
    </Fregment>
  );
};

const Fregment = styled.div`
  display: flex;
`;

export default Update;
