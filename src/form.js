import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form(props) {
  const [formData, setFormData] = useState(props.data);

  let changeFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-overlay">
      <form>
        <div className="form-group">
          <TextField
            label="Name"
            name="name"
            id="box"
            onChange={changeFormData}
            value={formData.name}
            style={{ width: 365 }}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Role"
            name="role"
            id="box"
            onChange={changeFormData}
            value={formData.role}
            style={{ width: 365 }}
          />
        </div>
        <div className="form-group ">
          <TextField
            label="Salary"
            name="salary"
            id="box"
            value={formData.salary}
            onChange={changeFormData}
            style={{ width: 365 }}
          />
        </div>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            props.add(formData);
          }}
        >
          Send
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="error"
          onClick={(e) => {
            e.preventDefault();
            props.close();
          }}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}


export default Form;
