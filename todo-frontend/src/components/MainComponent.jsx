import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import TodoService from '../services/TodoService';
import FormComponent from './FormComponent';
import TodoListComponent from './TodoListComponent';
const { Content } = Layout;

const MainComponent = () => {

  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterTodos = (data) => {
    setFilteredTodos(todos)
    if (data === '') {
      setFilteredTodos(todos)
    } else {
      const filteredData = todos.filter(todo => todo.text.toLowerCase().includes(data.toLowerCase()));
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
      setTodos((prev) => [...prev, newTodo])
    }
  }

  const toggleTodo = async (id) => {
    const updatedTodo = await toggleDone(todos, id)

    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...updatedTodo } : todo
      )
    )
  }

  const deleteTodo = async (id) => {
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
      <TodoListComponent toggleTodo={toggleTodo} onDelete={deleteTodo} todos={filteredTodos} />
    </Content>
  )
}

export default MainComponent