import { Link } from "react-router-dom";

export function Navbar() {


  return (



    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          <i class="me-2 fa-solid fa-graduation-cap"></i>
          School Management </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active "><Link to={"/students"} className="nav-link">Student</Link></li>
            <li className="nav-item  "><Link to={"/teachers"} className="nav-link">Teacher</Link></li>
            <li className="nav-item "><Link to={"/addstudent"} className="nav-link">AddStudent</Link></li>
            <li className="nav-item "><Link to={"/addteacher"} className="nav-link">AddTeacher</Link> </li>

            <li class="nav-item active"> <a class="nav-link" href="#">Login</a></li>
          </ul>


        </div>

      </div>

    </nav>




  );
}
