import { useState } from "react"
import { Button, Form, Input } from 'antd';


const FormComponent = ({ searchTodo, addTodo }) => {
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
            <Button
                className="m20"
                block
                onClick={() => setSearch(prev => !prev)}>{search ? 'Add todo' : 'Search todo'}</Button>
            <h1>{text}</h1>
            <h1>{day}</h1>
            {search
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
                        <Input
                            name='day'
                            placeholder='Add Day & Time'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
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