import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import React from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSamples';
import UserList from './UserList';
import { useRef,useState  } from 'react';
import CreateUser from './CreateUser';
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
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
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
      active: true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: true
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  //1-14
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  //1-15
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
