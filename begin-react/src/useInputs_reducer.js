import { useReducer, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      };
    case 'RESET':

      {
        username: 'asdf',
        email: 'asdf'
      }

      username, email
      {
      username : ''//1
      ,email : ''  //2
      }
      return Object.keys(state).reduce(
        function (acc, current)
        {
          acc[current] = '';//useInputs 배열의 [current] 참조하여 '' 로 초기화
          //acc 는 accumulator. current는 현재 값. [0,1,2,3,4,5] 면 accu 가 0, cur 이 1 인식..
          //
          return acc;
        }
        , {}
      );
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', name, value });
  }, []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
  return [form, onChange, reset];
}

export default useInputs;