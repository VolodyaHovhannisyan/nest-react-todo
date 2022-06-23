// import { Layout } from 'antd';
import { useState } from 'react';
import TodoComponent from './TodoComponent';
// const { } = Layout;


const TodoListComponent = ({todos}) => {

    return (
        <TodoComponent todos={todos}/>
    )
}

export default TodoListComponent