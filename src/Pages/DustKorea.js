import React, { useState } from "react";
import dataList from "../Data";
import "../Navigation";
import "../PagesCss/DustKorea.css";

function DustKorea() {
  const [list, setList] = useState(dataList);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // 더 보기 버튼을 useState로 관리하기 (초기값은 null)

  const handleLike = (index) => {
    const updatedList = [...list];
    updatedList[index].좋아요 += 1;
    setList(updatedList);
  };

  const handleDislike = (index) => {
    const updatedList = [...list];
    updatedList[index].싫어요 -= 1;
    setList(updatedList);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMoreInfo = (item) => {
    setSelectedItem(item); // 선택된 아이템을 저장하여 모달 표시하기,,, 하 어렵다
  };

  const closeModal = () => {
    setSelectedItem(null); // closeModal이 실행되면 창을 닫음
  };

  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "white", fontSize: "25px" }}>미세먼지 알림이</div>
        <input
          type="text"
          placeholder="원하는 지역 검색!"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredList.map((item, index) => (
        <div className="list" key={index}>
          <h3>{item.title}</h3>
          <div className="imgList">
            <img
              src={process.env.PUBLIC_URL + item.imgSrc}
              alt={`${item.title} 이미지`}
            />
          </div>
          <span onClick={() => handleLike(index)}>👍</span> {item.좋아요}
          <span onClick={() => handleDislike(index)}>😡</span> {item.싫어요}
          <p>{item.date}</p>
          <button onClick={() => handleMoreInfo(item)}>더보기</button>
          {/* 수정: 더보기 버튼 */}
          <hr />
        </div>
      ))}
      {selectedItem && ( // 모달 UI
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div>
              <h2>{selectedItem.title} 상세 정보</h2>
              {/* 원하는 세부 정보 표시 */}
              <p>{selectedItem.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DustKorea;
