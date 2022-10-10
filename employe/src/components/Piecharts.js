import React from 'react'
import {
  PieChart, Pie, BarChart, Bar, XAxis, YAxis,
  CartesianGrid,Legend
} from 'recharts';
import './styles.css';
function Piecharts(){
  const data = [
    { name: 'Working Hours', Std: 450, fill: 'green' },
    { name: 'Meeting hours', Std: 550, fill: 'blue' },
    { name: 'Non-working Hours', Std: 480, fill: 'red' },

  ];
  const data2 = [
    { name: 'Working Hours', Std: 450,fill: 'green'},
    { name: 'Meeting Hours', Std: 550,fill:'blue' },
    { name: 'Non-working Hours', Std: 480,fill:'red'},
    

  ];
  const data3 = [
    { name: 'Mon', Working_Hours: 140, Meeting_Hours: 45, NonWorking_Hours: 30 },
    { name: 'Tues', Working_Hours: 123, Meeting_Hours: 45, NonWorking_Hours: 33 },
    { name: 'Wed', Working_Hours: 142, Meeting_Hours: 23, NonWorking_Hours: 56 },
    { name: 'Thurs', Working_Hours: 123, Meeting_Hours: 50, NonWorking_Hours: 53 },
    { name: 'Fri', Working_Hours: 116, Meeting_Hours: 47, NonWorking_Hours: 33 },
    { name: 'Sat', Working_Hours: 118, Meeting_Hours: 35, NonWorking_Hours: 43 },
    { name: 'Sun', Working_Hours: 125, Meeting_Hours: 45, NonWorking_Hours: 53 },
  ];
  return (
    <>
    <h2>Welcome Our Dynamic Employee!</h2>
    <br></br>
    <div className='row'>
       <i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; Current Day &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;Previous Day</i>
      <PieChart width={500} height={500}>
        <Pie data={data} dataKey="Std" outerRadius={150} ></Pie>
      <Legend/>
      </PieChart> 
      <PieChart width={500} height={500}> <Pie data={data2} dataKey="Std" outerRadius={150} ></Pie>
      <Legend/>
      </PieChart>
      </div>
      <div className='barchart'> 
        <i>Weekly Report</i>
      <BarChart width={500} height={500} data={data3}>
        <CartesianGrid />
        <XAxis dataKey='name' />
        <YAxis />
        <Bar dataKey="Working_Hours" stackId="a" fill="#8884d8" />
        <Bar dataKey="Meeting_Hours" stackId="a" fill="#82ca9d" />
        <Bar dataKey='NonWorking_Hours' stackId='a' fill="#800000" />
    <Legend/>
      </BarChart>

    </div>
    </>
  )
  }
export default Piecharts;