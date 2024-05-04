import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const nevigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      name,
      description,
      price,
      category,
    };
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let merge = [...data, obj];
    localStorage.setItem("data", JSON.stringify(merge));
    setRecord(merge);
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    nevigate('/view')
  };

  return (
    <>
      <Header />
      <Container align="center">
        <h1 align="center">Home Page</h1>

        <Form onSubmit={formHandler} className="w-50">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Write Your Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <select  onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control">
              <option disabled value="" selected className="p-3"> Category </option>
              <option value="sports" > Sports </option>
              <option value="electronic" > Electronic </option>
              <option value="furniture" > Furniture </option>
            </select>
          </Form.Group>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Container>
    </>
  );
};
