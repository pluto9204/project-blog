import { useEffect, useState, useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    }

    //const [name, setName] = useState('');
    //const [nickname, setNickname] = useState('');

    /*
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!')
        console.log({
            name,
            nickname
        });
    });
    */

    /*
        특정 값만 업데이트하고 싶으면, 두번째 파라미터인 []안에 특정 벨류네임을 넣는다.
    */
    /*
     useEffect(() => {
         console.log('effect');
         console.log(name);
         return () => {
             console.log('cleanup');
             console.log(name);
         }
     }, [name]);
 
     const onChangeName = e => {
         setName(e.target.value);
     }
 
     const onChangeNickname = e => {
         setNickname(e.target.value);
     }
     */

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네님:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;