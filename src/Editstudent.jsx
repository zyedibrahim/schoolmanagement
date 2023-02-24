import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export function Editstudent() {

  const {id} = useParams()
 const [stdname,setsdtname]=useState(null)


 useEffect(() =>{   

   const api =`https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${id}`
    
   fetch(api,{
    method:"GET",
   })
   .then((data) => data.json()) 
   .then((data) =>  setsdtname(data) )


 },[id] )

 console.log(stdname, "stdname from edit field");

// get data from api to update it 



  
  return(

    stdname ? <Editforms stdname={stdname}  />  :<h1>loading</h1> 

  ) 
  
  
  }
  
  
  
  
  
  
  
  function Editforms({stdname}){

const navigate = useNavigate()

    const {id} = useParams()
  
    const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      std:stdname.std,
      student: stdname.student,
      stdstandard: stdname.stdstandard,
      stdage:stdname.stdage
    },

onSubmit:(valu) => {

updatafun(valu)

} 
    })


  



  const updatafun = async (valu)=>{
const api = `https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management/${id}`
    await fetch(api,{
      method: "PUT",
    body: JSON.stringify(valu)  ,
    headers: {
     'Content-Type': 'application/json'
    },
    })

    navigate("/students")


  }






  return (
    <div className="container" >

    <div className="row mt-5 d-flex justify-content-center ">
    
    <div className="d-flex justify-content-center ">
    <div className=" rounded-3 col-xlg-5 col-lg-5 col-md-7 col-11 p-3 bg-dark text-light">
      <div className=" p-3 ">
    <div className="card-header text-center">
          <h1 className="text-center">Addstudent</h1>
    
    </div>
      
    
    <form onSubmit={handleSubmit}>
    
    
    <div className="mb-2  form-outline">
      <label className="form-label" >Student Name</label>
    <input className=" form-control " placeholder="StudentName" name="student" onChange={handleChange} type="text" value={values.student}  /><br />
    </div>
    
    <div className="mb-2">
    <label className="form-label">Standard</label>
    <input className="form-control" placeholder="Standard" name="stdstandard" onChange={handleChange} type="text" value={values.stdstandard}  /><br />
    </div>
    
    <div className="mb-3">
    <label htmlFor="" className="form-label">Age</label>
    <input className="form-control" placeholder="Age" name="stdage" onChange={handleChange} type="text" value={values.stdage}  /><br />
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


  )



}
