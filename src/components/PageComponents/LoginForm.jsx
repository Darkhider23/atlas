import { React, useState, useEffect } from 'react'
// import { Form, FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap'
import {Form,Input} from 'antd';

function LoginForm({ user, handleCancelClick, handleLoginfromSubmit }) {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        console.log(data);
        e.preventDefault();
        setSuccess(true);
;        
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item label="Email">
                <Input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
            </Form.Item>
            <Form.Item label="Password">
                <Input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                />
            </Form.Item>
            <Form.Item>
            <button type="submit">Login</button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;
