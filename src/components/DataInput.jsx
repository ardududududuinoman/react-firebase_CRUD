import styled from "styled-components";
import firebase from "firebase";
import { useEffect, useState } from "react";

const DataInput = (props) => {
  const db = firebase.firestore();
  const [newTitle, setNewTile] = useState("");
  const [newDis, setNewDis] = useState("");

  const deleteData = (id) => {
    console.log(id);
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

  const updateData = (id, editTitle, editDis) => {
    db.collection("test")
      .doc(id)
      .update({ title: editTitle, dis: editDis })
      .then(() => {})
      .catch();
  };

  const onChage = async (e) => {
    console.log(e.target);
    if (e.target.id === "titleinput") {
      console.log(
        `타이틀값 변화감지됨 변화된값은${e.target.value}  해당글의 id값은 ${props.id}`
      );
      setNewTile(e.target.value);
    } else if (e.target.id === "disinput") {
      console.log(
        `내용값  변화감지됨 변화된값은${e.target.value} 해당글의 id값은 ${props.id}`
      );
      setNewDis(e.target.value);
    }
  };
  useEffect(() => {
    updateData(props.id, newTitle, newDis);
  }, [newTitle, newDis, updateData, props.id]);

  const Style = styled.div`
    display: flex;
    width: auto;
    flex-flow: row nowrap;
    margin-top: 10px;
  `;

  let TitleInput = styled.input`
    width: 100px;
    outline: black solid 1px;
  `;

  let DisInput = styled.input`
    width: 500px;
    outline: black solid 1px;
  `;

  return (
    <div>
      <Style>
        <TitleInput
          id="titleinput"
          onChange={(e) => {
            onChage(e);
          }}
          defaultValue={props.title}
        />
        <DisInput
          id="disinput"
          onChange={(e) => {
            onChage(e);
          }}
          defaultValue={props.dis}
        />
        <button
          onClick={(e) => {
            updateData(props.id);
          }}
        >
          글수정
        </button>
        <button
          onClick={() => {
            deleteData(props.id);
          }}
        >
          글삭제
        </button>
      </Style>
    </div>
  );
};
export default DataInput;
