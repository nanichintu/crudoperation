import React, { useEffect, useState } from "react";
import Form from "./form";
import Table from "./table";
import { DeleteData, PostData, PutData, getData } from "./api";
import Button from "@mui/material/Button";

function App() {
  const [products, setProducts] = useState([]);
  const [openform, setOpenform] = useState(false);
  const [edit, setEdit] = useState(false);
  const [initialform, setInitialForm] = useState({
    name: "",
    role: "",
    salary: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
  };

  let deleteProduct = async (id) => {
    let res = await DeleteData(id);
    getProducts();
  };

  let addProduct = async (product) => {
    let data = {
      name: product.name,
      role: product.role,
      salary: product.salary,
    };
    if (edit) {
      await PutData(product.id, data);
    } else {
      await PostData(data);
    }
    getProducts();
    setOpenform(false);
    setEdit(false);
  };

  let editProduct = async (data) => {
    setInitialForm(data);
    setOpenform(true);
    setEdit(true);
  };

  let showForm = () => {
    setOpenform(true);
    setInitialForm({
      name: "",
      role: "",
      salary: "",
    });
    setEdit(false);
  };

  let closeForm = () => {
    setOpenform(false);
    setEdit(false);
  };

  return (
    <div className="App">
      <center className="card">
        <h1 className="text-primary card-body" style={{ marginTop: 50 }}>
          Crud operations
        </h1>
        <Button
          variant="contained"
          style={{ marginTop: 10, color: "white", width: 80, marginLeft: 700 }}
          onClick={showForm}
        >
          Add
        </Button>
        <Table products={products} delete={deleteProduct} edit={editProduct} />
        {openform && (
          <Form close={closeForm} data={initialform} add={addProduct} />
        )}
      </center>
    </div>
  );
}

export default App;
