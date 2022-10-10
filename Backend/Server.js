const express=require('express')
const mysql=require('mysql')
var bodyparser=require('body-parser');
const cors=require('cors')
const multer=require('multer');
const path=require('path');


const db=mysql.createPool({
    connectionLimit:100,
    host:"localhost",
    user:"root",
    password:"",
    database:"employee",
});

db.getConnection((err)=>{
if(err) throw err
    

else{
    console.log("Successfully connected")
}
});

app=express();
//app.use('/images',express.static("images"))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());

app.post("/",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    // const {username,password,role}=req.body.inputs;
    
        const sql="select * from admin where username = ? and  password = ? ";
        db.query(sql,[username,password,role],(err,result,fields)=>{
            if(err) throw err
            
    
               if(result.length > 0){
                res.send({message:"Login Successfully"});
               }else{
                res.send({message:"No user found"});
               }
                
            }
        )
    
   
})
app.get("/report",(req,res)=>{
    
     
     db.query('select * from employedetails ',(err,result)=>{
         if(err) throw err;
             
         
         else{
             console.log(result)
             res.send(result);
         }
     })
 })
app.post("/Addtask", function (req, res) {
    
    const  empname=req.body.empname;

    const mailid=req.body.mailid;
    const mobile=req.body.mobile;
    const department=req.body.department;
    const joindate=req.body.joindate;
    const password=req.body.password;
    const insertData = "insert into employedetails (empname,mailid,mobile,department,joindate,password) values(?,?,?,?,?,?)";
    db.query(insertData, [empname,mailid,mobile,department,joindate,password], (err, result) => {
          if (err) throw err;
          else{
            res.send(result);
            
          }
        
      });
    }
  );
app.listen(8001,()=>{
    console.log("server listening");
});