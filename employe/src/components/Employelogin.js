import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "./employeimg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Employelogin = () => {
  const [mailid, setMailid] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");
  let navigate = useNavigate();
  const submitHandler = (e) => {
    axios
      .post("http://localhost:8001/", {
        mailid: mailid,
        password: password,
        
      })
      .then(function (response) {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log(response.data)
          if (loginStatus === "Login Successfully") {
             navigate("./EntryForm");
          }
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  };
  return (
    <div className="sform">
      <form onSubmit={submitHandler}>
        <Card style={{ width: "18rem" }}>
          <Card.Header className="eh" id="card-header-color">
            <img
              src={img}
              width="50"
              className="float-start"
              height="50"
              alt=""
            />
            <h2 className="ename float-end">Employe</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <label className="colo">Username</label>
              <input
                type="text"
                onChange={(e) => {
                  setMailid(e.target.value);
                }}
              ></input>
              <br />
              <br />
              <label className="colo">Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <br />
              <br />
             
              
              
            </Card.Text>
            <Button
              variant="success"
              type="submit"
              onClick={() => {
                submitHandler();
              }}
            >
              Login
            </Button>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
};

export default Employelogin;
