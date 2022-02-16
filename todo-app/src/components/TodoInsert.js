import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

/*
    해야 할 일 추가 항목
*/
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    /*
        텍스트 입력 반영
    */
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    /*
        해야 할일 추가 이벤트
    */
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            //이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;