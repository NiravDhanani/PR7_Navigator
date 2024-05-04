import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export const Edit = () => {
  const { editid } = useParams();
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );


  const formHandler = (e) => {
    e.preventDefault();
    let old = [...record];
    let up = old.map((val) => {
      if (val.id == editid) {
        return {
          ...val,
          name: name,
          description: description,
          price: price,
          category: category,
        };
      }
       return val;
    });
    setRecord(up)
    localStorage.setItem("data",JSON.stringify(up))
    navigator('/view')
  };

  useEffect(() => {
    let data = record.find((item) => item.id == editid);
    if (data) {
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setCategory(data.category);
    }
  }, [editid]);

  return (
    <>
      <Header />
      <Container align="center">
        <h1 align="center" className="mb-4">
          Update Data
        </h1>

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
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="form-control"
            >
              <option disabled value="" selected className="p-3">
                {" "}
                Category{" "}
              </option>
              <option value="sports"> Sports </option>
              <option value="electronic"> Electronic </option>
              <option value="furniture"> Furniture </option>
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
