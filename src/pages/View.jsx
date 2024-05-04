import { Container } from "react-bootstrap";
import { Header } from "./Header";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LuIndianRupee } from "react-icons/lu";

export const View = () => {
  const [search, setSearch] = useState([]);
  const [view, setview] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  let alldata = search.length !== 0 ? search : view;
  const nevigate = useNavigate();

  if (view.length == 0) {
    nevigate("/");
  }
  const deletehandler = (id) => {
    const del = view.filter((item) => item.id != id);
    setview(del);
    localStorage.setItem("data", JSON.stringify(del));
  };

  const SearchFilter = (single) => {
    let val = single.target.value;
    let data = view.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setSearch(data);
  };
  return (
    <>
      <Header />
      <Container align="center">
        <h1>View Data</h1>

        <form>
          <input
            type="text"
            placeholder="Search By Name"
            className="form-control mb-3 w-50 "
            onChange={(e) => SearchFilter(e)}
          />
        </form>

        <Table striped bordered hover className="table-dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {alldata.map((val, i) => {
              i++;
              return (
                <tr key={val.id}>
                  <td>{i}</td>
                  <td>{val.name}</td>
                  <td>{val.description}</td>
                  <td>
                    <LuIndianRupee /> {val.price}
                  </td>
                  <td>{val.category}</td>
                  <td>
                    <Link to={`/edit/${val.id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button
                      onClick={() => deletehandler(val.id)}
                      className="btn btn-danger mx-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
