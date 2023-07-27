import './Update.css'
import { useState } from "react";
import { Form, FormControl, FormText } from "react-bootstrap";

function Update() {
  const API_URL = "https://cse-dashboard-api.vercel.app/update";
  const [id, setid] = useState(null);
  const [placedCompany, setplacedCompany] = useState(null);
  const [placedRole, setplacedRole] = useState(null);
  const [placedPPO, setplacedPPO] = useState(null);
  const [placedDate, setplacedDate] = useState(null);

  const handlesubmit = async (e) => {
    if (
      id !== null &&
      placedCompany !== null &&
      placedRole!== null &&
      placedPPO !== null &&
      placedDate !== null
    ) {
      e.preventDefault();
      const userData = {
        id,
        placedCompany,
        placedRole,
        placedPPO,
        placedDate
      };
      console.log(userData);
      // try {
      // await axios.post(API_URL + '/register',JSON.stringify(userData)).then(res=>console.log(res)).catch(err => console.log(err.message))
      // console.log(response);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
      // } catch (error) {
      //   console.log(error.message);
      // }
    } else {
      e.preventDefault();
      alert("All fields must be filled");
    }
  };

  return (
    <div className="container">
      <Form className="form">
        <FormText className="heading">Placement Information</FormText>
        <FormControl
          type="text"
          name="id"
          placeholder="Enter Student ID"
          className="input"
          onChange={(e) => setid(e.target.value)}
        />
        <FormControl
          type="text"
          name="placedCompany"
          placeholder="Company Name"
          className="input"
          onChange={(e) => setplacedCompany(e.target.value)}
        />
        <FormControl
          type="text"
          name="placedRole"
          placeholder="Job Role"
          className="input"
          onChange={(e) => setplacedRole(e.target.value)}
        />
        <FormControl
          type="text"
          name="placedPPO"
          placeholder="PPO"
          className="input"
          onChange={(e) => setplacedPPO(e.target.value)}
        />
        <FormControl
          type="date"
          name="placedDate"
          className="input"
          onChange={(e) => setplacedDate(e.target.value)}
        />
        <button type="Submit" className="submit-button" onClick={handlesubmit}>
          Update
        </button>
      </Form>
    </div>
  );
}

export default Update;
