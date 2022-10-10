import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Addemployees.css";
export default function Addtask() {
  const [empname, setEmpname] = useState("");
  const [mailid, setMailid] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setDepartment] = useState("");
  const [joindate, setJoindate] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm();
  const displayOutput = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8001/Addtask", {
        empname: empname,
        mailid: mailid,
        mobile: mobile,

        department: department,
        joindate: joindate,
        password: password,
      })
      .then(() => {
        alert("Are you sure to add new employee");

        console.log(empname);
      });
  };
  return (
    <div className="form-content-right">
      <Form className="form" onSubmit={displayOutput}>
        <h1>New Employe Details</h1>
        <Form.Field>
          <i className="zmdi zmdi-account"></i>&nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;
          <input
            placeholder="Employe Name"
            type="text"
            name="empname"
            {...register("empname", { required: true, maxLength: 30 })}
            onChange={(event) => {
              setEmpname(event.target.value);
            }}
          />
        </Form.Field>
        <font color="red">
          {" "}
          {errors.empName && <p>Please check employe name</p>}
        </font>{" "}
        <Form.Field>
          <i className="zmdi zmdi-email"></i>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <input
            placeholder="Email"
            type="email"
            name="mailid"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={(event) => {
              setMailid(event.target.value);
            }}
          />
        </Form.Field>
        <font color="red">
          {" "}
          {errors.email && <p>Please check the Email</p>}
        </font>{" "}
        <Form.Field>
          <i className="zmdi zmdi-phone-in-talk"></i>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <input
            placeholder="Mobile number"
            type="text"
            name="mobile"
            {...register("mobileno", {
              required: true,
              pattern: /^\d{10}$/,
            })}
            onChange={(event) => {
              setMobile(event.target.value);
            }}
          />
        </Form.Field>
        <font color="red">
          {" "}
          {errors.mobileno && <p>Please check the mobile number</p>}
        </font>{" "}
        <Form.Field>
          <i className="zmdi zmdi-nature-people"></i>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <select
            name="department"
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            <option value={"select department"}>Department Of Work</option>
            <option value={"Sales"}>Sales</option>
            <option value={"Supervisiors"}>Supervisiors</option>
            <option value={"Labours"}>Labours</option>
            <option value={"Construction"}>Construction</option>
          </select>
        </Form.Field>
        <font color="red">
          {" "}
          {errors.departments && <p>Please select department</p>}
        </font>{" "}
        <Form.Field>
          <i className="zmdi zmdi-calendar-check"></i>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <input
            placeholder="joining date"
            type="date"
            name="joindate"
            onChange={(event) => {
              setJoindate(event.target.value);
            }}
          />
        </Form.Field>
        <font color="red">
          {" "}
          {errors.joindate && <p>Please select joining date</p>}
        </font>{" "}
        <Form.Field>
          <i className="zmdi zmdi-lock-open"></i>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Field>
        <font color="red">
          {" "}
          {errors.password && <p>Please check the Password</p>}
        </font>{" "}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
