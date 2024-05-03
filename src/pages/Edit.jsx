
import { Container } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export const Edit = () => {

    const {editid} = useParams()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const nevigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault();
   let oldy = [...record]
   let up = oldy.map((val)=>{
       if(val.id == editid){
        return {
            ...val,
            name : name,
            phone : phone,
        }
       }
       return val;
   })
    localStorage.setItem("data", JSON.stringify(up));
    setRecord(up);
 
    nevigate('/view')
  };

  useEffect(()=>{
    let data = record.find(item=> item.id == editid)
    if(data){
        setName(data.name)
        setPhone(data.phone)
    }
  },[editid])

  return (
    <>
      <Header />
      <Container align="center">
        <h1 align="center">Edit Page</h1>
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
