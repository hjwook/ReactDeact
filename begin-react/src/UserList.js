//1-11
// import React from 'react';

// function User({ user }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//     </div>
//   );
// }

// function UserList() {
//   const users = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];

//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} />
//       ))}
//     </div>
//   );
// }

// export default UserList;

// 1-13
// import React from 'react';

// function User({ user }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//     </div>
//   );
// }

// function UserList({ users }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} />
//       ))}
//     </div>
//   );
// }

// export default UserList;

//1-14
// import React from 'react';

// function User({ user, onRemove }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} onRemove={onRemove} />
//       ))}
//     </div>
//   );
// }

// export default UserList;
//1-15
// import React from 'react';

// function User({ user, onRemove, onToggle }) {
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }

// export default UserList;
//1-16
//import React, { useEffect } from 'react';

// function User({ user, onRemove, onToggle }) {
//   useEffect(() => {
//     console.log('user 값이 설정됨')
//     console.log(user);
//     return () => {
//       console.log('user가 바뀌기 전..');
//       console.log(user);
//     };
//   }, [user]);
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function User({ user, onRemove, onToggle }) {
//   useEffect(() => {
//     console.log(user);
//   });
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }
// function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }

// export default React.memo(UserList);

//1-22
import React, {useContext} from 'react';
import {UserDispatch} from './App';


const User = React.memo(function User({ user }) {
  
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
          dispatch({type: 'TOGGLE_USER', id: user.id});

        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => {
        dispatch({type: 'REMOVE_USER', id: user.id});


      }}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User 
          user={user} 
          key={user.id} 
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);