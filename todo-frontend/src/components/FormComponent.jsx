import { useState } from "react"
import { Button, Form, Input, DatePicker } from 'antd';


const FormComponent = ({ searchTodo, addTodo, todos }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [search, setSearch] = useState(true)
    const [searchText, setSearchText] = useState('')

    const onFinish = () => {

        if (!text) {
            alert('Please add a todo')
            return
        }

        console.log(text, day);
        addTodo(text, day)

        setText('')
        setDay('')
    }

    const onSearch = (value) => {
        // setSearchText(value)
        // searchTodo(value)
        // alert(value)
    }

    return (
        <>
           {todos.length > 0 && <Button
                className="m20"
                block
                onClick={() => setSearch(prev => !prev)}>{search && todos.length > 0 ? 'Add todo' : 'Search todo'}</Button>}
            <h1>{text}</h1>
            <h1>{day}</h1>
            {(search && todos.length > 0)
                ?
                <Input.Search
                    placeholder="Search todo"
                    allowClear
                    enterButton="Search"
                    size="middle"
                    className="m20"
                    onSearch={onSearch}
                    onChange={(e) => searchTodo(e.target.value)}
                />
                :
                <Form className='add-form' onFinish={onFinish}>
                    <Form.Item label='Todo' name={'title'}>
                        <Input
                            name="title"
                            placeholder='Add Todo'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            allowClear
                        />
                    </Form.Item>
                    <Form.Item label='Day & time' name={'day'}>
                        <DatePicker
                            name='day'
                            placeholder='Add Day & Time'
                            value={day}
                            showTime
                            onChange={(date, dateString) => {
                                console.log(date, dateString);
                                setDay(dateString)
                            }
                            }
                            allowClear
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>Add todo</Button>
                    </Form.Item>
                </Form>
            }
        </>
    )
}

export default FormComponent