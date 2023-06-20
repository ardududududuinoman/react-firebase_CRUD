import { useEffect, useState } from "react";
import { firebase } from "../fbase";
import useStore from "../store";
import styled from "styled-components";
import DataInput from "./DataInput";
import Create from "./Create";
import "../CSS/app.css";
import Navbar from "./Navbar";

// eslint-disable-next-line react-hooks/rules-of-hooks

const Mainpage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { docslist, setDocslist } = useStore();
  const loadDocsList = [];
  const db = firebase.firestore();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      console.log("컴포넌트가 처음 마운트되었습니다.");
      getData();
    } else if (isMounted) {
      return;
    }
  }, []);

  const getData = () => {
    db.collection("test")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data();
          const docVal = {
            title: data.title,
            dis: data.dis,
            date: data.date,
            id: doc.id,
          };
          loadDocsList.push(docVal);
        });
        setDocslist(loadDocsList);
      });
  };

  return (
    <div>
      <Create />
      {docslist.map((doc, key) => (
        <DataInput
          key={key}
          id={doc.id}
          title={doc.title}
          dis={doc.dis}
        ></DataInput>
      ))}
    </div>
  );
};

export default Mainpage;
