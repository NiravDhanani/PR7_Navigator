import { Container } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const Home = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const nevigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      name,
      phone,
    };
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let merge = [...data, obj];
    localStorage.setItem("data", JSON.stringify(merge));
    setRecord(merge);
    setName("");
    setPhone("");
    nevigate('/view')
  };

  return (
    <>
      <Header />
      <Container align="center">
        <h1 align="center">Home Page</h1>
        <Form onSubmit={formHandler} className="w-50">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Form.Group>
          <button className="btn btn-primary" type="submit">
              Submit
            </button>
        </Form>
      </Container>
    </>
  );
};
