import TodoComponent from './TodoComponent';


const TodoListComponent = ({ todos, onDelete, toggleTodo }) => {

    return (
        <TodoComponent todos={todos} onDelete={onDelete} toggleTodo={toggleTodo} />
    )
}

export default TodoListComponent