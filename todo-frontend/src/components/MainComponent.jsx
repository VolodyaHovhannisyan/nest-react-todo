import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import TodoService from '../services/TodoService';
import FormComponent from './FormComponent';
import TodoListComponent from './TodoListComponent';
const { Content } = Layout;

const MainComponent = () => {

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "Doctors Appointment",
    //   day: "Feb 5th at 2:30pm",
    //   done: true
    // },
    // {
    //   id: 2,
    //   text: "Gym",
    //   day: "Feb 5th at 2:30pm",
    //   done: false
    // },
    // {
    //   id: 3,
    //   text: "University",
    //   day: "Feb 5th at 2:30pm",
    //   done: true
    // },
    // {
    //   id: 4,
    //   text: "Government meeting",
    //   day: "Jul 5th at 12:30pm",
    //   done: true
    // },

  ])
  const [filteredTodos, setFilteredTodos] = useState([...todos])

  const filterTodos = (data) => {
    setFilteredTodos(todos)
    if (data.length !== 0) {
      const filteredData = filteredTodos.filter(todo => todo.text.toLowerCase().includes(data.toLowerCase()));
      console.log(filteredData);

      setFilteredTodos(filteredData)

    }
  }

  const { fetchTodos, addTodoFn, deleteTodoFn, toggleDone } = TodoService()

  const addTodo = async (text, day) => {
    const todo = {
      text,
      day,
      done: false,
    }

    const newTodo = await addTodoFn(todo)
    if (newTodo.text) {
      // console.log("New todos", newTodo);
      setTodos((prev) => [...prev, newTodo])
    }
  }

  const toggleTodo = async (id, e) => {
    e.stopPropagation()
    // console.log('toggled id', id);

    const updatedTodo = await toggleDone(todos,id)

    console.log('Updated todo', updatedTodo);

    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...updatedTodo } : todo
      )
    )

  }

  const deleteTodo = async (id) => {
    console.log('del id', id);
    deleteTodoFn(id)
    setTodos(todos.filter((todo) => todo._id !== id))

  }
  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos, setFilteredTodos])

  useEffect(() => {
    async function fetchData() {
      const tds = await fetchTodos()
      setTodos(tds)
    }
    fetchData();
  }, [])


  return (
    <Content>
      <FormComponent searchTodo={filterTodos} addTodo={addTodo} todos={todos} />
      <TodoListComponent toggleTodo={toggleTodo} onDelete={deleteTodo} todos={filteredTodos || todos} />
    </Content>
  )
}

export default MainComponent