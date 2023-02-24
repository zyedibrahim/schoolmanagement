import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Students() {

const [student,setstudent] =useState()

const navigate = useNavigate()

const getstudent =()=>{

  const api ="https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management"
  
  fetch(api).then((data) => data.json()) 
  .then((data) =>  setstudent(data) )

}
useEffect(() => getstudent(),[] )



const deletestudent = async (id) =>{
  const api = `https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${id}`

 await fetch(api,{
    method: 'DELETE'})

    getstudent();

}



console.log(student,"from student");

const style1 ={
  maxWidth: "21rem"
  }
  


  return (
    <div className="container" >
      <div className="container">
<div className="row  d-flex justify-content-center mt-5 mb-4">
  <div  style={style1} className="col-md-6 mb-4">
    <div  style={style1} className="card bg-dark text-light">
      <div className="card-header">
        <h4 className="card-head">
          Add Student
        </h4>
      </div>
      <div className="card-body">
        <div className="card-text">
          Add Student to your Mangement
        </div>
<div className="card-footer">
<button onClick={(() => navigate("/addstudent") )} className="btn btn-success">AddStudent</button>

</div>
      </div>
    </div>
  </div>
  <div  style={style1} className="col-md-6 mb-3">
    <div  style={style1} className="card bg-dark text-light">
      <div className="card-header">
        <h4 className="card-head">
          Add Teacher
        </h4>
      </div>
      <div className="card-body">
        <div className="card-text">
          Add Teacher to your Management
        </div>
<div className="card-footer">
<button onClick={(() => navigate("/addteacher") )} className="btn btn-success">Addteacher</button>

</div>
      </div>
    </div>
  </div>
</div>

</div>

    <h1>Students</h1>


{student?.map((std) =>{
  console.log(std.std);
 if(std.std == "student"){
  return <div key={std.id} className="container"><div className="row p-4 rounded-3 std-row" key={std.id} >
  <div className="col-12">
<div className="row">
  <div className="col-12 mt-2 d-flex justify-content-start ">
  <div className="human-icon h3 " >
  <i className="me-2 fa-solid fa-person"></i>

  </div>
  <h4 className="card-text">{std.student}</h4>
  </div>
</div>
<div className="row mt-3 d-flex justify-content-around">
  <div className="col-6">Class : {std.stdstandard}</div>
  <div className="col-6">Age : {std.stdage}</div>


</div>
<div className="row mt-3 mb-3 d-flex justify-content-center ">
  <div className="col-md-6 d-grid col-6">
  <button className="btn btn-success" onClick={(() => navigate(`/student/edit/${std.id}`) )} >Edit</button>
  </div>
  <div className="col-md-6 d-grid col-6 ">
  <button className="btn btn-danger" onClick={(() =>{

deletestudent(std.id)
console.log(std.id);
} )} >Delete</button>
  </div>

  </div>


</div>






</div>
</div>

}

})}




   
   
  
</div>




  );




}
