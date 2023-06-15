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
  const updateDB = (obj, editTitle, editDis) => {
    db.collection("test")
      .doc(obj.id)
      .update({ title: "수정된 제목", dis: "수정된내용" })
      .then(() => {
        alert("수정됨");
      })
      .catch();
  };

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
