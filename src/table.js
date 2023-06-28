import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Table(props) {
  return (
    <div>
      <table className="table" style={{ width: 600, marginTop: 50 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>salary</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.role}</td>
              <td>{data.salary}</td>
              <td>
                <DeleteIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => props.delete(data.id)}
                />
              </td>
              <td>
                <EditIcon
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    props.edit(data);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
