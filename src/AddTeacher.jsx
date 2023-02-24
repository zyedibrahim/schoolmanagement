import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import * as yup from "yup";

const formvalidationscheme =yup.object({
teacher:yup.string().required().min(6,"minimum character required"),
subject:yup.string().required(" Subject Field is Required ").max(12,"maximum character 12").min(3,"mainimum character required 5"),
tecexperience:yup.number().test('len', 'Max 2 numbers', (val) => val.toString().length <= 2).required("Number values Only required").typeError("That doesn't look like a number").min(2,"minimum character required")





})




export function AddTeacher() {


  const navigate =useNavigate();
  
  const {values,handleBlur, handleSubmit,handleChange,errors,touched} = useFormik({
    
  validationSchema:formvalidationscheme,
   initialValues:{
    thr:"teacher",
 teacher:'',
 subject:'',
 tecexperience:'',
 
   },
 
 
 
 
 onSubmit: ((val) => {
  addteacher(val)
  console.log(val,"from addteacher") 
 }
  )
 



 
 })
 
 
 const addteacher = async (val) =>{
   console.log(val,'from addstudent')
     const api ="https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management"
   
     await fetch(api,{
       method: "POST",
       body: JSON.stringify(val),
       headers: {
        'Content-Type': 'application/json'
       },
       })
   navigate("/teachers")
   
   }
   
 



  return (



    <div className="container" >

<button className="btn mt-3 btn-success" onClick={(() => navigate(-1) )} >Back</button>


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
    <input onBlur={handleBlur} className=" form-control " placeholder="TeacherName" name="teacher" onChange={handleChange} type="text" value={values.teacher}  /><br />
    {touched.teacher && errors.teacher ? errors.teacher : null }
    </div>
    
    <div className="mb-2">
    <label  className="form-label">Subject</label>
    <input  onBlur={handleBlur} className="form-control" placeholder="Subject" name="subject" onChange={handleChange} type="text" value={values.subject}  /><br />
    {touched.subject && errors.subject ? errors.subject : null }
    </div>
    
    <div className="mb-3">
    <label htmlFor="" className="form-label">Experience</label>
    <input onBlur={handleBlur} className="form-control" placeholder="Experience" name="tecexperience" onChange={handleChange} type="text" value={values.tecexperience}  /><br />
    {touched.tecexperience && errors.tecexperience ? errors.tecexperience : null }
    </div>
    <div className=" d-grid">
    <button className="btn btn-outline-success" type="submit">Submit</button>
    
    </div>
    
    </form>
      
    
    </div>
    </div>
    </div>
    
    
      
    </div>
    
    
    
    
    
        </div>


  );




}
