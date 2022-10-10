import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import adimg from "./adminimg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  const [loginStatus, setLoginStatus] = useState("");
  
  let navigate = useNavigate();
  

  const submitHandler = (e) => {
    axios
      .post("http://localhost:8001/", {
        username: username,
        password: password,
        
      })
      .then(function (response) {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log(response.data)
          if (loginStatus === "Login Successfully") {
             navigate("./Addtask");
          }
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  }
  return (
    
    <div className="sform">
      
      <form onSubmit={submitHandler}>
        <Card style={{ width: "18rem" }}>
          <Card.Header id="ad-header-color" className="ah">
            <img
              src={adimg}
              className="float-start"
              width="50"
              height="50"
              alt=""
            />
            <h2 className="ename float-end">Admin</h2>
          </Card.Header>
          <Card.Body>
          
            <Card.Text>
              <label className="colo">Username</label>
              <input
                type="text"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <br />
              <br />
              <label className="colo">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <br/>
              <br/>
              
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
      
      <center>
        <h4>{loginStatus}</h4>
      </center>
    </div>
  );
};

export default Adminlogin;
