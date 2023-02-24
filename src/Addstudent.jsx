import { useFormik } from "formik";
import {  useNavigate } from "react-router-dom";
import * as yup from "yup";

const formvalidationscheme =yup.object({
student:yup.string().required().min(6,"minimum character required"),
stdstandard:yup.string().required(" example eg 10th ").max(5,"maximum character 5 like eg 12th").min(2,"mainimum character required"),
stdage:yup.number().test('len', 'Max 2 numbers', (val) => val.toString().length <= 2).required("number Only required").typeError("That doesn't look like a number").min(2,"maximum character required").positive("number Only required")
})


export function Addstudent() {

const navigate =useNavigate();

 const {values,errors,handleBlur,touched,handleSubmit,handleChange} = useFormik({
 validationSchema:formvalidationscheme,

  initialValues:{
    std: "student",
student:'',
stdstandard:'',
stdage:''

  },




onSubmit: ((val) => addstudent(val) )


})


const addstudent = async (val) =>{
  console.log(val,'from addstudent')
    const api ="https://63e4a0fd8e1ed4ccf6e29153.mockapi.io/management"
  
    await fetch(api,{
      method: "POST",
      body: JSON.stringify(val),
      headers: {
       'Content-Type': 'application/json'
      },
      })
  navigate("/students")
  
  }
  



  return (
    <div className="container" >
<button className="btn mt-3 btn-success" onClick={(() => navigate(-1) )} >Back</button>

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
<input onBlur={handleBlur} className=" form-control " placeholder="StudentName" name="student" onChange={handleChange} type="text" value={values.student}  /><br />
{touched.student && errors.student ? errors.student : null}
</div>

<div className="mb-2">
<label className="form-label">Standard</label>
<input onBlur={handleBlur} className="form-control" placeholder="Standard" name="stdstandard" onChange={handleChange} type="text" value={values.stdstandard}  /><br />
{touched.stdstandard && errors.stdstandard ? errors.stdstandard : null}
</div>

<div className="mb-3">
<label className="form-label">Age</label>
<input onBlur={handleBlur} className="form-control" placeholder="Age" name="stdage" onChange={handleChange} type="text" value={values.stdage}  /><br />
{touched.stdage && errors.stdage ? errors.stdage : null}
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
