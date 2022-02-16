import TodoListItem from "./TodoListItem";
import './TodoList.scss';

/*
    해야 할 일 리스트 출력
*/
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TodoList;