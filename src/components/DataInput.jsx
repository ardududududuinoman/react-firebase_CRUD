import styled from "styled-components";
import firebase from "firebase";

const DataInput = (props) => {
  const db = firebase.firestore();

  const deleteData = (id) => {
    console.log(id);
    db.collection("test")
      .doc(id)
      .delete()
      .then(() => {
        // alert("데이터베이스에서만 삭제되고 재랜더링함");
        window.location.href = "/";
        // console.log(id.target.title);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // const updateData = (id, editTitle, editDis) => {
  //   db.collection("test")
  //     .doc(id)
  //     .update({ title: editTitle, dis: editDis })
  //     .then(() => {})
  //     .catch();
  // };
  //! 주석들 써놓고 사용안한 함수들임
  // const onChage = async (e) => {
  //   console.log(e.target);
  //   if (e.target.id === "titleinput") {
  //     console.log(
  //       `타이틀값 변화감지됨 변화된값은${e.target.value}  해당글의 id값은 ${props.id}`
  //     );
  //     // setNewTile(e.target.value);
  //   } else if (e.target.id === "disinput") {
  //     console.log(
  //       `내용값  변화감지됨 변화된값은${e.target.value} 해당글의 id값은 ${props.id}`
  //     );
  //     // setNewDis(e.target.value);
  //   }
  // };
  // // useEffect(() => {
  // //   updateData(props.id, newTitle, newDis);
  // // }, [newTitle, newDis, updateData, props.id]);

  const outfocus = (e) => {
    const dataTag = e.target.dataset.tag;
    console.log(`${dataTag}이 포커스를잃음`);
    if (e.target.value === e.target.defaultValue) {
      console.log("값이 변화되지 않음");
    } else if (dataTag === "titleinput") {
      db.collection("test")
        .doc(props.id)
        .update({ title: e.target.value })
        .then(() => {
          console.log(`제목이 ${e.target.value}로 변경됨`);
        })
        .catch();
    } else if (dataTag === "disinput") {
      db.collection("test")
        .doc(props.id)
        .update({ dis: e.target.value })
        .then(() => {
          console.log(`내용이 ${e.target.value}로 변경됨`);
        })
        .catch();
    }
  };

  return (
    <div>
      <Style>
        <TitleInput
          id="titleinput"
          data-tag="titleinput"
          defaultValue={props.title}
          onBlur={(e) => {
            outfocus(e);
          }}
        />
        <DisInput
          id="disinput"
          data-tag="disinput"
          defaultValue={props.dis}
          onBlur={(e) => {
            outfocus(e);
          }}
        />
        <button
          onClick={() => {
            deleteData(props.id);
          }}
        >
          DEL
        </button>
      </Style>
    </div>
  );
};

const Style = styled.div`
  display: flex;
  width: auto;
  flex-flow: row nowrap;
  margin-top: 10px;
`;

let TitleInput = styled.textarea`
  width: 200px;
  outline: black solid 1px;
`;

let DisInput = styled.textarea`
  width: 1300px;
  outline: black solid 1px;
`;

export default DataInput;
