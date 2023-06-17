import { useEffect, useState } from "react";
import useStore from "../store";
import firebase from "../fbase";
import styled from "styled-components";
// Import the functions you need from the SDKs you need

function Create() {
  const { title, dis, settitle, setdis, list, addlist } = useStore();
  const [mounted, setmounted] = useState(false);
  const db = firebase.firestore();

  // Add a new document in collection "cities"

  const adddata = () => {
    if (title === "" || dis === "") {
      alert("제목이나 내용을 입력하세요");
      return;
    } else {
      db.collection("test")
        .doc()
        .set({
          title: title,
          dis: dis,
          date: new Date().getTime(),
        })
        .then(() => {
          // alert("글 등록됨");
          settitle("");
          setdis("");
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  };

  useEffect(() => {
    setmounted(true);
    console.log("create페이지 마운트됨");
  }, []);

  return (
    <div className="App">
      <Style>
        <TitleInput
          placeholder="제목"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
        />

        <DisInput
          placeholder="내용"
          type="text"
          value={dis}
          onChange={(e) => {
            setdis(e.target.value);
          }}
        />
        <button
          onClick={() => {
            adddata();
          }}
        >
          UP
        </button>
      </Style>
      {/* <a href="/">메인페이지</a> */}
    </div>
  );
}

const Style = styled.div`
  display: flex;
  width: auto;
  flex-flow: row nowrap;
  margin-top: 10px;
`;

let TitleInput = styled.textarea`
  width: 200px;
  outline: black solid 1px;
  background-color: #e2e2e2;
`;

let DisInput = styled.textarea`
  width: 1300px;
  outline: black solid 1px;
  background-color: #e2e2e2;
`;

export default Create;
