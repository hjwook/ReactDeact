import React, { useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

// 초기값
const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    // Action은 보통 대문자나 _로 구성
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state, // 새로운 상태를 만들때 불변성을 지켜주기 위해 spread 연산자 사용
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state, // 새로운 상태를 만들때 불변성을 지켜주기 위해 spread 연산자 사용
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
// 다른 컴포넌트에서 불러와서 사용 가능 하도록 export
export const UserDispatch = React.createContext(null);

function App() {
  // state : 상태
  // dispatch : 액션 발생 함수
  // initialState : 초기 상태
  // reducer는 현재 상태와 액션 객체를 받아와서 새로운 상태 반환
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  // 기존에 props 전달 삭제
  // return (
  //   <UserDispatch.Provider value={dispatch}>
  //     <CreateUser
  //       username={username}
  //       email={email}
  //       onChange={onChange}
  //       onCreate={onCreate}
  //     />
  //     <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
  //     <div>활성사용자 수 : {count}</div>
  //   </UserDispatch.Provider>
  // );

  //Provider Context에 변경사항 전달
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
