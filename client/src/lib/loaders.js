import axios from "axios";

// Axios Config Defaults
axios.defaults.baseURL = "http://localhost:3001/";

export async function loadVendorData() {
  let d = null;
  await axios
    .get("/vendors")
    .then((r) => (d = r.data))
    .catch((error) => console.log(error));
  return d;
}

export async function loadSolarFacts() {
  let d = null;
  await axios
    .get("/facts-content")
    .then((r) => (d = r.data))
    .catch((error) => console.log(error));
  return d;
}
