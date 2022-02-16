import './TodoTemplate.scss';

//해야 할 일 전체 템플릿
const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;