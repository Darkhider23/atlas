import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import LoginForm from './LoginForm'
import './Login.css'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

function Login(e) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
    axios.get('/api/users')
    .then(res=>{
        setUser(res.data);
    })
    },'');
    const handleLoginfromSubmit = async () => {
        console.log(email,password);
        const myData={
            email: email,
            password: password
        }
        const result = await fetch('',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(myData)
        })
    }
    return (
        <Form onSubmit={handleLoginfromSubmit}>
            <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </FormGroup>
            <Button type="submit" disabled={!email || !password}>Login</Button>
        </Form>
    );
}

export default Login;