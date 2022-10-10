import React from 'react';
import './Home.css';
//import Marquee from "react-fast-marquee";
import Adminlogin from './Adminlogin';
import Employelogin from './Employelogin';
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div>
           <div className="imageshome"> 
  <img src="https://www.fbk.eu/wp-content/uploads/2019/07/hackathon-microsoft-FBK_1600x600.jpg"height='250px'width="100%" alt=""></img>
</div>
<div className="homebg">
        <NavLink to ="/"className="fl"><Adminlogin /></NavLink> 
        <NavLink to ="/"className="fl"><Employelogin /></NavLink>   
      
    <div className="footer">
    {/* <Marquee className="mar"> */}
    {/* <h4 >Employe has to login through their respective employe id's</h4> */}
    
  {/* </Marquee> */}
</div>
</div>
    
        </div>
    );
};

export default Home;