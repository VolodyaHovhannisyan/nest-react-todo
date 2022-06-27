import { useState } from "react"
import { Button, Form, Input, DatePicker } from 'antd';

const FormComponent = ({ searchTodo, addTodo, todos }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [search, setSearch] = useState(true)

    const onFinish = () => {

        if (text.length === 0) {
            alert('Please add a todo')
            return
        }
        if (day.length === 0) {
            alert('Please add a day & time')
            return
        }

        addTodo(text, day)
        setText('')
        setDay('')
    }

    return (
        <>
            {todos.length > 1 && <Button
                className="m20"
                block
                onClick={() => setSearch(prev => !prev)}>{search && todos.length > 1 ? 'Add todo' : 'Search todo'}</Button>}
            {(search && todos.length > 1)
                ?
                <Input.Search
                    placeholder="Search todo"
                    allowClear
                    enterButton="Search"
                    size="middle"
                    className="m20"
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
                                // console.log(date, dateString);
                                setDay(dateString)
                            }
                            }
                            style={{display: 'block'}}
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