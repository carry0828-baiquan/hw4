import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b style={{color:"white"}}>Add Todo</b></Form.Label>
      <Form.Control style={{backgroundColor:"black", color:"white"}} type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-2" type="submit" style={{marginTop:"16px"}}>
      Submit
    </Button>
  </Form>
  );
}

export default FormTodo;