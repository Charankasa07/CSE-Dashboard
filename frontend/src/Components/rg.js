import Form from "react-bootstrap/Form";
import { useState } from "react";
import profile_pic from "../Assets/default-profile.png";

import "./rg.css";

function RG() {
  const [profile, setprofile] = useState({ profile_pic });
  const [name, setname] = useState(null);
  const [id, setid] = useState(null);
  const [department, setdepartment] = useState(null);
  const [domain, setdomain] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);
  const [higherStudies, sethigherStudies] = useState(null);

  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setprofile(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  }
  return (
    <div className="container">
      <div id="title"> Student Registration</div>
      <div className="content">
        <Form action="/donor/register" method="post">
          <div className="user-details">
            <div className="profile">
              {profile === "" || profile === null ? (
                ""
              ) : (
                <img src={profile} width={100} height={100} alt="Profile" />
              )}
              <input
                type="file"
                accept="image/"
                placeholder="Upload Picture"
                name="profile"
                required
                onChange={convertToBase64}
              />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Name" name="name" required onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Student ID" name="id" required onChange={(e) => setid(e.target.value)}/>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Department"
                name="department"
                required
                onChange={(e) => setdepartment(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Domain" name="domain" required onChange={(e) => setdomain(e.target.value)}/>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                required
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" name="email" required onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div className="input-box">
                <input type="radio" name="higherStudies" value="Yes">Yes</input>
            <div>
              </div>    
                <input type="radio" name="higherStudies" value="No">No</input>
            </div>
            {/* <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                name="higherStudes"
                type='radio'
                value="Yes"
              />
              <Form.Check
                inline
                label="No"
                name="higherStudes"
                type='radio'
                value="No"
              />
            </div> */}
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </Form>
      </div>
    </div>
  );
}
export default RG;
