// import { Layout } from 'antd';
import { useState } from 'react';
import TodoComponent from './TodoComponent';
// const { } = Layout;


const TodoListComponent = ({todos, onDelete, toggleTodo}) => {

    return (
        <TodoComponent todos={todos} onDelete={onDelete} toggleTodo={toggleTodo}/>
    )
}

export default TodoListComponent