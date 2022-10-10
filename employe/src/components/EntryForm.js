import { React, useState } from 'react'
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
function EntryForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (

    <div className="bgimg" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',

    }}>

      <Form className='task'>
        <Form.Group className='mb-3' controlId="exampleForm.ControlInput1">
          <Form.Label>Task Description:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Select Task</option>
            <option value='1'>Meetings and Work</option>
            <option value='2'>Working on a Project</option>
            <option value='3'>Break</option>
          </Form.Select>
        </Form.Group>
        <br></br>
        <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" selected={startDate} selectsStartstartDate={startDate}
          onChange={date => setStartDate(date)}
        />
        <br></br>
        <br></br>
        <label>Time for Complete a Task(in min):</label>
        <br></br>
        <input type='number'></input>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className='btn'>Submit</Button>
        <br></br>
        <br></br>
        <br></br>
      </Form>
    </div>


  )
}

export default EntryForm