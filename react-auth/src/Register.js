import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const config = {
      method: 'POST',
      url: 'https://nodejs-mongodb-auth-app-tzd3.onrender.com/register',
      data: {
        email,
        password,
      },
    };
    // make the request
    axios(config)
    .then((response) => setRegister(true))
    .catch((error) => {error = new Error()});
  }
    return (
        <>
            <h2>Register</h2>
      <Form
        onSubmit={(e) => handleSubmit(e)} >
          {/* display success message */}
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          name='email'
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password"
            placeholder="Password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {/* submit button */}
        <Button 
        variant="primary"
         type="submit"
         onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
        </>
    )
}