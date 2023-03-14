import axios from "axios";
import { Data } from "../types/CreateDataTypes";

function addData(values: Data) {
  return axios.post("/api/create", values);
}

export { addData };
