import { CheckCircleOutlined, CloseCircleOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';


const TodoComponent = ({ todos, onDelete, toggleTodo }) => {

    // const [data, setdata] = useState([...todos])


    return todos.map(todo => {
        return <div className='todo' key={todo.id} >
            {todo.done ?
             <CheckCircleOutlined onClick={(e) => toggleTodo(todo.id, e)} style={{ fontSize: '25px', color: 'green' }} />
             : <CloseCircleOutlined onClick={(e) => toggleTodo(todo.id, e)} style={{ fontSize: '25px', color: 'red' }} />}
            {/* <EditOutlined /> */}
            <h2>{todo.text}</h2>
            <p>{todo.day}</p>
            <CloseOutlined className='delete-todo' onClick={() => onDelete(todo.id)} />
        </div>
    })

}

export default TodoComponent