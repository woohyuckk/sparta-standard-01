import React from "react";

  
const Form = ({submitFunc, name, age, setNameHandler,  setAgeHandler}) => {
  return (
    <form onSubmit={submitFunc}>
      {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={setNameHandler}  
      />
      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={setAgeHandler}
      />
      <button type="submit">사용자 추가</button>
    </form>
  );
};

export default Form;
