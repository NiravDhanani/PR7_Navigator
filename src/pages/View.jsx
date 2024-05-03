import { Container } from "react-bootstrap";
import { Header } from "./Header";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const View = () => {
    const [view,setview] = useState(JSON.parse(localStorage.getItem('data')) || []
)
const nevigate = useNavigate()

if(view.length == 0 ){
    nevigate('/')
}
    const deletehandler = (id) =>{
        const del = view.filter(item => item.id != id);
        setview(del)
        localStorage.setItem('data',JSON.stringify(del))
    }
  return (
    <>
      <Header />
      <Container align="center">
        <h1>View Data</h1>


    <Table striped bordered hover className="table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    {
        view.map((val,i)=>{i++
            return(
                <tr key={val.id} >
                    <td>{i}</td>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td>
                        <Link to={`/edit/${val.id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={()=>deletehandler(val.id)} className="btn btn-danger mx-3">Delete</button>
                    </td>
                </tr>
            )
        })
    }
      </tbody>
      
    </Table>
       
      </Container>
    </>
  );
};
