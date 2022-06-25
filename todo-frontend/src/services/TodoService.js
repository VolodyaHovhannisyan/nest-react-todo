
function TodoService() {

    async function fetchTodos() {
        const res = await fetch('http://localhost:5000/todos')
        const data = await res.json().catch(err => console.log(err))
        return data
    }

    async function addTodoFn(todo) {
        const res = await fetch('http://localhost:5000/todos/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
        const data = await res.json().catch(err => console.log(err))

        const response = { _id: data._id, text: data.text, day: data.day, done: data.done }

        return response

    }

    async function deleteTodoFn(id) {
        const res = await fetch(`http://localhost:5000/todos/delete/${id}`, {
            method: 'DELETE',
            'Content-Type': 'application/json',

        })
        const data = await res.json().catch(err => console.log(err))
        return await data
    }

    async function toggleDone(todos, id) {
        const todoToToggle = todos.filter((todo) => todo._id === id)
        const updTodo = { ...(todoToToggle[0]), done: !todoToToggle[0].done }
       
        const res = await fetch(`http://localhost:5000/todos/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTodo),
        })

        const data = await res.json().catch(err => console.log(err))
        
        return data
    }

    return { fetchTodos, addTodoFn, deleteTodoFn, toggleDone }
}
export default TodoService
