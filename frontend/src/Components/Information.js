import { useState, useEffect } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import Student from './Student'
import axios from "axios";

import "./Information.css";

function Information() {
  const API_URL = "https://cse-dashboard-api.vercel.app/get-students";
  const [studentDetails, setstudentDetails] = useState([]);
  const [filterStudents, setfilterStudents] = useState([]);
  const [tobeSearch , settobeSearch] = useState([])
  // const [filter, setfilter] = useState("");
  // const [message , setmessage] = useState("")

  useEffect(() => {
    const getstudentDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        setstudentDetails(response.data);
        setfilterStudents(response.data);
      } catch (err) {}
    };
    getstudentDetails();
  }, [API_URL]);

  // console.log(filterStudents);

  const searchStudent = async (e) => {
    e.preventDefault();
    const searchInput = document
      .getElementById("search-input")
      .value.toUpperCase();
     
    try {
        const response = tobeSearch.filter(item => item.id.includes(searchInput))
        console.log(response);
        setfilterStudents(response)
    } catch (error) {
        console.log(error);
    }  
  };

  const handleChange = async (e) => {
    // e.preventDefault()
    // setfilter(e.target.value);
    // console.log(e.target.value);
    try {
      if(e.target.value === "All"){
          setfilterStudents(studentDetails)
          settobeSearch(studentDetails)
      }
      else if(e.target.value === "Placed"){
        const response = studentDetails.filter(item => item.isPlaced === true && item.higherStudies === "No")
        setfilterStudents(response)
        settobeSearch(response)
        console.log(e.target.value);
        console.log(response);
      }
      else if (e.target.value === "Not Placed"){
        const response = studentDetails.filter(item => item.isPlaced === false && item.higherStudies === "No")
        setfilterStudents(response)
        settobeSearch(response)
        console.log(e.target.value , "not");
        console.log(filterStudents);
      }
      else if(e.target.value === "Higher Studies"){
        const response = studentDetails.filter(item => item.higherStudies === "Yes")
        setfilterStudents(response)
        settobeSearch(response)
        console.log(e.target.value);
        console.log(filterStudents);
      }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="information-container">
      <div className="search-bar">
        <input type="search" id="search-input" onChange={searchStudent}></input>
        <button  className="search-button">
          Search
        </button>
        <select  onChange={handleChange} className="dropdown">
          <option value='All'>All</option>
          <option value="Placed">Placed</option>
          <option value="Not Placed" >Not Placed</option>
          <option value="Higher Studies">Higher Studies</option>
        </select>
      </div>
      <div className="student-container">
        {/* <h4>{message}</h4> */}
        {filterStudents ? filterStudents.map((item) => (
            <Student student={item} key={item._id}/>
          )) : alert("No students found")}
          {/* // <div className="student-card">
          //   <h5 className="student-name">{item.name}</h5>
          //   <h5 className="student-id">{item.id}</h5>
          //   <p className="student-info">{item.department}</p>
          //   <p className="student-info">{item.domain}</p>
          //   <p className="student-info">{item.phone}</p>
          //   <p className="student-info">{item.email}</p>
          // </div> */}  
      </div>
    </div>
  )
}
export default Information;
