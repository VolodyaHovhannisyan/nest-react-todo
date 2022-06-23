import { Layout } from 'antd';
import { useId, useState } from 'react';
import FormComponent from './FormComponent';
import TodoListComponent from './TodoListComponent';
const { Content } = Layout;

const MainComponent = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      done: true
    },
    {
      id: 2,
      text: "Gym",
      day: "Feb 5th at 2:30pm",
      done: false
    },
    {
      id: 3,
      text: "University",
      day: "Feb 5th at 2:30pm",
      done: true
    },
    {
      id: 4,
      text: "Government meeting",
      day: "Jul 5th at 12:30pm",
      done: true
    },

  ])
  const [filteredTodos, setFilteredTodos] = useState([...todos])

  const filterTodos = (data) => {
    setFilteredTodos(todos)
    if (data) {
      const filteredData = filteredTodos.filter(todo => todo.text.toLowerCase().includes(data.toLowerCase()));
      console.log(filteredData);

      setFilteredTodos(filteredData)

    }
  }

  const addTodo = (text, day) => {
    const todo = {
      text,
      day,
      done: false,
      id: Math.floor(Math.random() * 10000)
    }

    setTodos((prev) => [...prev, todo])
  }
 
  return (
    <Content>
      <FormComponent searchTodo={filterTodos} addTodo={addTodo} />
      <TodoListComponent todos={filteredTodos || todos} />
    </Content>
  )
}

export default MainComponent