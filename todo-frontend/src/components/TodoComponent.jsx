import { CheckCircleOutlined, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';


const TodoComponent = ({ todos }) => {

    const [data, setdata] = useState([...todos])

    
    return todos.map(todo => {
        return <div className='todo' key={todo.id}>
            {todo.done ?  <CheckCircleOutlined style={{fontSize: '25px', color: 'green'}} />: <CloseCircleOutlined style={{fontSize: '25px', color: 'red'}} /> }
            <h2>{todo.text}</h2>
            <p>{todo.day}</p>
            <CloseOutlined className='delete-todo' />
            </div>
    })

}

export default TodoComponent