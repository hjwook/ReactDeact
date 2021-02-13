import React from 'react';

function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>

            <span>({user.email}) </span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) { 
    return (
        <div>
            {users.map(user => (
                <User 
                    user = {user} 
                    key = {user.id}
                    onRemove={onRemove}
                    onToggle={onToggle} 
                />
            ))}
        </div>
    )
}
/* map() : 동적인 배열을 렌더링 할 때, 사용
         : 배열안에 있는 각 원소를 변환하여 새로운 배열 생성
         : 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환*/
export default UserList;