import { useState } from "react";
import { Form, FormCheck, FormControl, FormText } from "react-bootstrap";
import "./Register.css";

function Register() {
  const API_URL = "https://cse-dashboard-api.vercel.app/register";
  const [message , setmessage] = useState('')
  const [name, setname] = useState(null);
  const [id, setid] = useState(null);
  const [department, setdepartment] = useState(null);
  const [domain, setdomain] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);
  const [higherStudies, sethigherStudies] = useState(null);

  const handlesubmit = async (e) => {
    if (
      name !== null  && name!== "" &&
      id !== null && id!== "" &&
      department !== null && department !== "" &&
      domain !== null && domain !=="" &&
      phone !== null && phone!=="" &&
      email !== null && email!=="" &&
      higherStudies !== null 
    ) {
      e.preventDefault();
      const userData = {
        name,
        id,
        department,
        domain,
        phone,
        email,
        higherStudies,
      };
      console.log(userData);
      // try {
      const response = await axios.post(API_URL,userData)
      console.log(response.data);
      // console.log(response);
      // await fetch(API_URL, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });
      setmessage("Success")
      // } catch (error) {
      //   console.log(error.message);
      // }
    } else {
      e.preventDefault();
      setmessage("All the fields must be filled")
    }
  };

  return (
    <div className="container">
      <h4>{message}</h4>
      <Form className="form">
        <FormText className="heading">Student Registration</FormText>
        <FormControl
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="input"
          onChange={(e) => setname(e.target.value)}
        />
        <FormControl
          type="text"
          name="id"
          placeholder="Enter your ID"
          className="input"
          onChange={(e) => setid(e.target.value)}
        />
        <FormControl
          type="text"
          name="department"
          placeholder="Enter your Department"
          className="input"
          onChange={(e) => setdepartment(e.target.value)}
        />
        <FormControl
          type="text"
          name="domain"
          placeholder="Enter your Interested Domain"
          className="input"
          onChange={(e) => setdomain(e.target.value)}
        />
        <FormControl
          type="text"
          name="phone"
          placeholder="Enter your Phone Number"
          className="input"
          onChange={(e) => setphone(e.target.value)}
        />
        <FormControl
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="input"
          onChange={(e) => setemail(e.target.value)}
        />
        <FormText className="higherStudies-title">
          Are you Interested in Higher Studies?(Yes/No)
        </FormText>
        <div className="higherStudies">
          <FormCheck
            type="radio"
            label="Yes"
            name="higherStudies"
            onChange={(e) => sethigherStudies("Yes")}
          />
          <FormCheck
            type="radio"
            label="No"
            name="higherStudies"
            onChange={(e) => sethigherStudies("No")}
          />
        </div>
        <button type="Submit" className="submit-button" onClick={handlesubmit}>
          Register
        </button>
      </Form>
    </div>
  );
}

export default Register;
