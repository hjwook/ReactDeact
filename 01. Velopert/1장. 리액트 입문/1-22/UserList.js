import React, { useContext } from 'react';
import { UserDispatch } from './App';

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
                    dispatch({ type: 'TOGGLE_USER', id: user.id});
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email}) </span>
            <button 
                onClick={() => {
                    dispatch({ type: 'REMOVE_USER', id: user.id});        
                }}
            >
                삭제
            </button>
        </div>
    )
});

function UserList({ users }) { 
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}
/* map() : 동적인 배열을 렌더링 할 때, 사용
         : 배열안에 있는 각 원소를 변환하여 새로운 배열 생성
         : 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환*/
export default React.memo(UserList);