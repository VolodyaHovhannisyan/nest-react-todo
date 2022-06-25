import { CheckCircleOutlined, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';


const TodoComponent = ({ todos, onDelete, toggleTodo }) => {

    return todos.map(todo => {
        return <div className='todo' key={todo._id} >
            {todo.done ?
             <CheckCircleOutlined onClick={() => toggleTodo(todo._id)} style={{ fontSize: '25px', color: 'green' }} />
             : <CloseCircleOutlined onClick={() => toggleTodo(todo._id)} style={{ fontSize: '25px', color: 'red' }} />}
            <h2>{todo.text}</h2>
            <p>{todo.day}</p>
            <CloseOutlined className='delete-todo' onClick={() => onDelete(todo._id)} />
        </div>
    })

}

export default TodoComponent