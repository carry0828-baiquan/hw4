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
    <Form onSubmit={handleSubmit} >
    <Form.Group>
      <Form.Label><b style={{color:"white"}}>Add Todo</b></Form.Label>
      <Form.Control style={{backgroundColor:"black", color:"white"}}
                    type="text" className="input" value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Add new todo" />
    </Form.Group>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Button  className="add-btn" variant="primary mb-2" type="submit" >
          Add
        </Button>
      </div>

  </Form>
  );
}

export default FormTodo;