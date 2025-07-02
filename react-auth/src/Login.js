import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app-tzd3.onrender.com/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("token", result.data.token, {
          path: "/",
         
      });
      window.location.href = "/auth"      
      .catch((error) => {
        error = new Error();
      });
  })

    return (
        <>
            <h2>Login</h2>
      <Form 
      onSubmit={(e)=>handleSubmit(e)}>
         {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={ (e) => setEmail(e.target.value)} />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
            name="password"
            value={password}
            placeholder="Password" 
            onChange={ (e) => setPassword(e.target.value)}/>
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit"
        onClick={(e)=>handleSubmit(e)}>
          Submit
        </Button>
      </Form>
        </>
    )
}