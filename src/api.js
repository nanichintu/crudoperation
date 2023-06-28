import axios from "axios";

const url = "http://localhost:4000/Employees";
export async function getData() {
  return await axios.get(url);
}
export async function DeleteData(Id) {
  return await axios.delete(`${url}/${Id}`);
}
export async function PostData(data) {
  return await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function PutData(Id, data) {
  return await axios.put(url + "/" + Id, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
