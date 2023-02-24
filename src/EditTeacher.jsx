import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




export function EditTeacher() {

  const {id} = useParams()


 const [teacheredit,setteacheredit]=useState(null)

useEffect(() =>{

  const api =`https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${id}`
  
  fetch(api,{
    method: 'GET',}
    ).then((data) => data.json()) 
  .then((data) =>  setteacheredit(data) )

},[id] )




return (

teacheredit ? <Editformsteacher teacheredit={teacheredit} /> : <h1>Teacherloading...</h1>

)

  





}



function Editformsteacher({teacheredit}){

const navigate = useNavigate()

console.log("form editform " , teacheredit );

  const {id} = useParams()
  
  const { values, handleSubmit, handleChange } = useFormik({
  initialValues: {
    thr:teacheredit.thr,
    teacher: teacheredit.teacher,
    subject:teacheredit.subject,
    tecexperience: teacheredit.tecexperience
  },

onSubmit:(valu) => {
updatafun(valu)

} 
  })



  const updatafun = async (values)=>{
    const api = `https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${id}`
        await fetch(api,{
          method: "PUT",
        body: JSON.stringify(values)  ,
        headers: {
         'Content-Type': 'application/json'
        },
        })
    
        navigate("/teachers")
    
    
      }
    

  return (

    <div className="container" >

    <div className="row mt-5 d-flex justify-content-center ">
    
    <div className="d-flex justify-content-center ">
    <div className=" rounded-3 col-xlg-5 col-lg-5 col-md-7 col-11 p-3 bg-dark text-light">
      <div className=" p-3 ">
    <div className="card-header text-center">
          <h1 className="text-center">AddTeacher</h1>
    
    </div>
      
    
    <form onSubmit={handleSubmit}>
    
    
    <div className="mb-2  form-outline">
      <label className="form-label" >Teacher Name</label>
    <input className=" form-control " placeholder="TeacherName" name="teacher" onChange={handleChange} type="text" value={values.teacher}  /><br />
    </div>
    
    <div className="mb-2">
    <label className="form-label">Subject</label>
    <input className="form-control" placeholder="Subject" name="subject" onChange={handleChange} type="text" value={values.subject}  /><br />
    </div>
    
    <div className="mb-3">
    <label htmlFor="" className="form-label">Experience</label>
    <input className="form-control" placeholder="Experience" name="tecexperience" onChange={handleChange} type="text" value={values.tecexperience}  /><br />
    </div>
    <div className=" d-grid">
    <button className="btn mb-2 btn-outline-success" type="submit">Submit</button>
    <button className="btn btn-danger" onClick={(() => navigate("/students") )}>Cancel</button>

    </div>
    
    </form>
      
    
    </div>
    </div>
    </div>
    
    
      
    </div>
    
    
    
    
    
        </div>


  );




}
