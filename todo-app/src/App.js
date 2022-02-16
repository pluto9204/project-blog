import { useState, useRef, useCallback } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  /*
    해야 할일을 저장할 state
  */
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  /*
    해야 할일 추가 이벤트
  */
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  /*
    해야 할일 삭제 이벤트
  */
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  /*
    해야 할일 완료 체크 이벤트
  */
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
