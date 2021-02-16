// import React from 'react';

// 기존에 props를 전달 받은 상태
// const CreateUser = ({ username, email, onChange, onCreate }) => {
//   return (
//     <div>
//       <input
//         name="username"
//         placeholder="계정명"
//         onChange={onChange}
//         value={username}
//       />
//       <input
//         name="email"
//         placeholder="이메일"
//         onChange={onChange}
//         value={email}
//       />
//       <button onClick={onCreate}>등록</button>
//     </div>
//   );
// };

// export default React.memo(CreateUser);

import React, { useRef, useContext } from 'react';
import useInputs from './hooks/useInputs';
import { UserDispatch } from './App'; // 구현한 Context 가져오기

const CreateUser = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  });

  const nextId = useRef(4);
  // useContext Hook 사용 
  // Context 객체의 value를 가져올수있다.
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
