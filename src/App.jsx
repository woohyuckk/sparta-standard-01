import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!name || !age) {
      return alert("이름과 나이를 입력해주세요.");
    }
    const newUser = {
      id: Date.now(),
      name,
      age,
    };
    setUsers([...users, newUser]);
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
  };

  const removeUser = (id) => {
    const removedUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(removedUsers);
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
  };

  const setNameHandler = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const setAgeHandler = (e) => {
    const { value } = e.target;
    setAge(Number(value));
  };
  return (
    <>
      <h1>사용자 리스트</h1>

      <Form
        submitFunc={addUser}
        name={name}
        age={age}
        setNameHandler={setNameHandler}
        setAgeHandler={setAgeHandler}
      ></Form>
      <ul>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <li>
                이름 : {user.name}, 나이 : {user.age}{" "}
              </li>
              <button onClick={() => removeUser(user.id)}>삭제</button>
            </div>
          );
        })}
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
      </ul>
    </>
  );
}

export default App;
