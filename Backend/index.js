// mac.one(function(err,mac) {
//     console.log(mac);

// })
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const mac = require("macaddress");
const cors = require('cors')
require("dotenv").config();
const app = express();
const { student_details, placement_details } = require("./validation");
const student_schema = require("./models/student");

app.use(cors({
  origin : ["https://cse-dashboard.vercel.app"],
  methods:["POST","GET"],
  credentials:true
}))

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  console.log("DB Connected")
);

app.post("/register", async (req, res) => {

  console.log(req.body);
  const { error, result } = await student_details(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const data = await student_schema.findOne({ id: req.body.id.toUpperCase() });
  if (data) return res.status(404).send("Student Already Registered")

  const student = new student_schema({
    name: req.body.name,
    id: req.body.id.toUpperCase(),
    department: req.body.department,
    domain : req.body.domain,
    phone: req.body.phone,
    email: req.body.email,
    higherStudies: req.body.higherStudies,
  });

  try {
    await student.save();
    res.status(200).send("Student Registered Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/update", async (req, res) => {
  console.log(req.body);
  let mac_address;
  await mac.one(function (err, mac) {
    mac_address = mac;
  });
  console.log(req.body);
  if (mac_address === process.env.MAC_ADDRESS) {
    const { error, result } = await placement_details(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const data = await student_schema.findOne({
      id: req.body.id.toUpperCase(),
      isPlaced: false,
      higherStudies: "No",
    });
    if (!data)
      return res
        .status(400)
        .send(
          "Student Not Found or Already Placed or Interested in Higher Studies"
        );
    console.log("hello");
    await student_schema.findOneAndUpdate(
      { id: req.body.id.toUpperCase() },
      {
        $set: {
          placedCompany: req.body.placedCompany,
          placedRole: req.body.placedRole,
          placedDate: req.body.placedDate,
          placedPPO: req.body.placedPPO,
          isPlaced: true,
        },
      },
      { new: true }
    );
    console.log("hello");
    res.status(200).send("Updated Successfully");
  } else {
    return res.status(400).send("You cant Update Information");
  }
});

app.get("/get-students/:filter", async (req, res) => {
  const filter = req.params.filter;
  if (filter === "Placed") {
    try {
      const data = await student_schema.find({
        isPlaced: true,
        higherStudies: "No",
      });
      return res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  } else if (filter === "Not Placed") {
    try {
      const data = await student_schema.find({
        isplaced: false,
        higherStudies: "No",
      });
      return res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  } else if (filter === "Higher Studies") {
    try {
      const data = await student_schema.find({ higherStudies: "Yes" });
      return res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

app.get('/get-students', async (req,res)=>{
  try {
      console.log("hi");
      const data = await student_schema.find()
      res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.get("/", (req, res) => {
  res.status(200).send("Welcome to CSE Dashboard");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}`));
