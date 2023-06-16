import { useEffect, useState } from "react";
import useStore from "../store";
import firebase from "../fbase";
// Import the functions you need from the SDKs you need

function Create() {
  const { title, dis, settitle, setdis, list, addlist } = useStore();
  const [mounted, setmounted] = useState(false);
  const db = firebase.firestore();

  // Add a new document in collection "cities"

  const adddata = () => {
    db.collection("test")
      .doc()
      .set({
        title: title,
        dis: dis,
        date: new Date().getTime(),
      })
      .then(() => {
        alert("글 등록됨");
        settitle("");
        setdis("");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    setmounted(true);
    console.log("create페이지 마운트됨");
  }, []);

  return (
    <div className="App">
      <div>
        <input
          placeholder="제목"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
        />

        <input
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
          등록
        </button>
      </div>
      <a href="/">메인페이지</a>
    </div>
  );
}

export default Create;
