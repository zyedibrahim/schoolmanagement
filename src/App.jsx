import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import { Students } from './Students';
import { Teachers } from './Teachers';
import { Staffs } from './Staffs';
import { Addstudent } from './Addstudent';
import { Editstudent } from './Editstudent';
import { AddTeacher } from './AddTeacher';
import { EditTeacher } from './EditTeacher';
import { Navbar } from './Navbar';



function App() {
 
const navigate = useNavigate()




const style1 ={
  backgroundColor:"rgba(0, 0, 0, 0.05)"
}







  return (
    <div className="App">

<Navbar/>

     <Routes>
        <Route path="/" element={< Students />} />
        <Route path="/students" element={< Students />} />
        <Route path="/teachers" element={< Teachers />} />
        <Route path="/staffs" element={< Staffs />} />
        <Route path="/addstudent" element={< Addstudent />} />
        <Route path="/addteacher" element={< AddTeacher />} />
        <Route path="/student/edit/:id" element={< Editstudent />} />
        <Route path="/teachers/edit/:id" element={< EditTeacher />} />
      </Routes>






      <footer className="text-center text-lg-start bg-dark text-light">

<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

  <div className="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>



  <div>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-google"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-github"></i>
    </a>
  </div>

</section>



<section className="">
  <div className="container text-center text-md-start mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3"></i>Company name
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>


      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" className="text-reset">Angular</a>
        </p>
        <p>
          <a href="#!" className="text-reset">React</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Vue</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Laravel</a>
        </p>
      </div>



      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" className="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Help</a>
        </p>
      </div>



      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>

    </div>

  </div>
</section>



<div className="text-center p-4" style={style1}>
  © 2021 Copyright:
  <a className="text-reset fw-bold" href="#">zyedme.com</a>
</div>

</footer>








    </div>
  )
}



export default App
