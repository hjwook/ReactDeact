import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSamples';
import UserList from './UserList';
import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';

import useInputs from './hooks/useInputs';


//1-17
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

//1-20


const initialState = {
  inputs: {
    username: '',
    email: ''
  },
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

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//         return {
//           inputs: initialState.inputs,
//           users: state.users.concat(action.user)
//         };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       };

//     default:
//       return state;
//   }
// }

//1-21
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  //1-3
  // return (
  //   <div>
  //       <Hello />
  //   </div>
  // );

  //1-4
  // const name = '허정욱';
  //   const style = {
  //       backgroundColor: 'blue',
  //       color: 'red',
  //       fonsize : 30,
  //       padding : '10rem'
  //   }
  //   return (
  //       <>
  //         {/* 주석은 보이지 않는다 이말이야.*/}
  //           <div style = {style}>
  //               <Hello />
  //               <Hello />
  //               <Hello />
  //               <input />
  //               <br />
  //           </div>
  //           <div className="gray-box">{name}</div>
  //           <>
  //           <Hello />
  //           <Hello />
  //           <Hello />
  //           <input />
  //           <br />
  //           </>
  //       </>
  //   );
  //1-5
  // return (
  //   <>
  //     <Hello name="허정욱" color = "blue" />
  //     <Hello  color = "blue" />
  //     <Hello />

  //     <Wrapper>
  //       <Hello color = "pink"/>
  //   </Wrapper>
  //   </>
  // );
  //1-6
  // return (
  //   <Wrapper>
  //     <Hello name="살려주세오" color="red" isSpecial={true}/>
  //     <Hello color="pink" />
  //   </Wrapper>
    
  // )

  //1-7
  // return (
  //   <Counter />
  // );

  //1-8
  // return (
  //   <InputSample />
  // );
  //1-11
  // return (
  //      <UserList />
  //    );
  //1-13
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;

//   const onChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       setInputs(inputs =>({
//         ...inputs,
//         [name]: value
//       }));
//     },
//     []
//   );
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: true
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: true
//     }
//   ]);

//   const nextId = useRef(4);

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     //setUsers([...users, user]);
//     //setUsers(users.concat(user));
//     setUsers(users => users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//     },
//     [username,email]
//   );
//   //1-14
//   const onRemove = useCallback(
//     id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//     },
//     []
//   );
//   //1-15
//   const onToggle = useCallback(
//     id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//     }
//     ,[]
//   );
//   const count = useMemo(() => countActiveUsers(users),[users]);//countActiveUsers(users);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

  //1-22
  const [{ username, email }, onChange, onReset] = useInputs({
    username: '',
    email: ''
  });

  //1-20

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  
  const { users } = state;
 // const { username, email } = state.inputs;


  //1-21
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  });



  const onCreate = useCallback(() => {
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
  }, [username, email]);

  //1-22 주석처리
  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );

}

export default App;