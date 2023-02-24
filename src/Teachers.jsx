import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Teachers() {
const navigate = useNavigate()

const[teacher,setteacher]=useState()




function getteacher(){


  const api ="https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management"
  
  fetch(api,{
    method: "GET",
  }).then((data) => data.json()) 
  .then((data) =>  setteacher(data) )

}  




useEffect(() => getteacher(),[] )





const teacherdelete = async (datadel) => {

  const api =`https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${datadel}`
  
  await fetch(api,{
    method: "DELETE",
  })
getteacher()

}


 

const style1 ={
maxWidth: "21rem"
}



  return (

<div className="container" >
<div className="container">
<div className="row d-flex justify-content-center mt-5 mb-4">
  <div style={style1} className="col-md-6 mb-4">
    <div  style={style1} className="card  bg-dark text-light">
      <div className="card-header">
        <h4 className="card-head">
          Add Student
        </h4>
      </div>
      <div className="card-body">
        <div className="card-text">
          Add Student to your Management
        </div>
<div className="card-footer">
<button onClick={(() => navigate("/addstudent") )} className="btn btn-success">AddStudent</button>

</div>
      </div>
    </div>
  </div>
  <div style={style1}className="col-md-6 mb-3">
    <div style={style1} className="card  bg-dark text-light">
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

<div className="h3">Teacher List</div>

{teacher?.map((ted) =>  {


if(ted.thr == "teacher"){

   return <div key={ted.id} className="container"> <  div className="row p-4 thr-row rounded-3" key={ted.id} >
  <div className="col-12">
<div className="row">
  <div className="col-12 mt-2 d-flex justify-content-start ">
  <div className="human-icon h3 " >
  <i class="me-2 fa-solid fa-graduation-cap"></i>

  </div>
  
  <h4 className="card-text">{ted.teacher}  </h4>
  </div>
</div>
<div className="row mt-3 d-flex justify-content-around">
  <div className="col-6">Experience :  {ted.tecexperience}</div>
  <div className="col-6">Subject : {ted.subject}</div>
 
</div>
<div className="row mt-3 mb-3 d-flex justify-content-center ">
  <div className="col-md-6 d-grid col-6">
  <button className="btn btn-success" onClick={(() => navigate(`/teachers/edit/${ted.id}`) )} >Edit</button>
  </div>
  <div className="col-md-6 d-grid col-6 ">
  <button className="btn btn-danger" onClick={(() =>{

teacherdelete(ted.id)
console.log(ted.id);
} )} >Delete</button>
  </div>

  </div>


</div>






</div>
</div>
}


 } )}
</div>


  );




}
