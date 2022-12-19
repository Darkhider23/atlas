import { React, useState } from 'react'
import { Form, FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap'

// const useStyles = makesStyles({
//     root: {
//         width: 200,
//     },
// });

function LoginForm({ user, handleCancelClick, handleLoginfromSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form onSubmit={handleLoginfromSubmit}>
            <FormGroup>
                <FormLabel for="email">Email</FormLabel>
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
                <FormLabel for="password">Password</FormLabel>
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

export default LoginForm;
