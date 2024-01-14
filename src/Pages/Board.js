import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import "../PagesCss/Board.css";

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modelOn, setModelOn] = useState(false);

  // useRef 훅을 사용하여 변수를 담는다
  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (data) => {
    // 데이터를 수정하는 코드 (중요함!)
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModelOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModelOn(false);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModelOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="title mt-5 mb-3">방문자 목록판!</div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3 table-header">번호</th>
            <th className="text-gray-300 px-4 py-3 table-header">이름</th>
            <th className="text-gray-300 px-4 py-3 table-header">이메일</th>
            <th className="text-gray-300 px-4 py-3 table-header">전화번호</th>
            <th className="text-gray-300 px-4 py-3 table-header">사이트</th>
            <th className="text-gray-300 px-4 py-3 table-actions">수정하기</th>
            <th className="text-gray-300 px-4 py-3 table-actions">삭제</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <Post onSaveData={handleSave} />
      {modelOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Board;
