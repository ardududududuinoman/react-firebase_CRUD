import { useEffect, useState } from "react";
import firebase from "../fbase";
import useStore from "../store";
import Uploadlist from "./Uploadlist";
import styled from "styled-components";
const Mainpage = () => {
  const { list, addlist, setoldTitle, setoldDis, setthisId } = useStore();

  const [newTitle, setNewTile] = useState("");
  const [newDis, setNewDis] = useState("");

  const db = firebase.firestore();
  const getData = () => {
    db.collection("test")
      .get()
      .then((docs) => {
        const newlist = [];
        docs.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const title = data.title;
          const dis = data.dis;
          const date = data.date;
          const lidata = { title: title, dis: dis, date: date, id: id };
          newlist.push(lidata);
        });
        addlist(newlist);
      });
  };

  const deleteDB = (id) => {
    db.collection("test")
      .doc(id)
      .delete()
      .then(() => {
        alert("데이터베이스에서만 삭제되고 재랜더링함");
        window.location.href = "/";
        // console.log(id.target.title);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const editClick = (obj) => {
    setoldTitle(obj.title);
    setoldDis(obj.dis);
    setthisId(obj.id);
    window.location.href = "/Update";
  };

  useEffect(() => {
    if (list.length === 0) {
      getData();
      console.log("메인페이지 마운트됨");
    }
  }, []);

  const Style = styled.div`
    display: flex;
    width: auto;
    flex-flow: row nowrap;
    margin-top: 10px;
  `;

  let TitleInput = styled.input`
    width: 100px;
    outline: black solid 1px;
    pointer-events: none;
  `;

  let DisInput = styled.input`
    width: 500px;
    outline: black solid 1px;
    pointer-events: none;
  `;

  return (
    <div>
      <h1>메인페이지다</h1>
      <a href="/Create">글쓰기</a>
      {list.map((obj) => (
        <>
          <Style>
            <TitleInput value={obj.title} />
            <DisInput value={obj.dis} />
            <button
              onClick={(obj) => {
                editClick(obj);
              }}
            >
              글수정
            </button>
            <button
              onClick={() => {
                deleteDB(obj.id);
              }}
            >
              글삭제
            </button>
          </Style>
        </>
      ))}
    </div>
  );
};

export default Mainpage;
