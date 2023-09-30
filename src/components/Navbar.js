// import React, { useEffect } from "react";
// import { Link, useLocation, useHistory } from "react-router-dom";

// const Navbar = () => {
//   let history = useHistory();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     history.push("/login");
//   };
//   let location = useLocation();
//   useEffect(() => {
//     console.log(location.pathname);
//   }, [location]);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand mx-2" to="/" id="hh">
//           IcyText
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${
//                   location.pathname === "/" ? "active" : ""
//                 }`}
//                 aria-current="page"
//                 to="/"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${
//                   location.pathname === "/about" ? "active" : ""
//                 }`}
//                 to="/about"
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//           {!localStorage.getItem("token") ? (
//             <form className="d-flex">
//               <Link className="login mx-2" to="/login" role="button">
//                 {" "}
//                 Log in{" "}
//               </Link>
//               <Link className="signup mx-2" to="/signup" role="button">
//                 {" "}
//                 Sign up{" "}
//               </Link>
//             </form>
//           ) : (
//             <button onClick={handleLogout} className="logout mx-2">
//               Logout{" "}
//               <i
//                 className="fa-solid fa-arrow-right-from-bracket"
//                 id="logoutarrow"
//               ></i>
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/" id="hh">
          IcyText
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="login mx-2" to="/login" role="button">
                {" "}
                Log in{" "}
              </Link>
              <Link className="signup mx-2" to="/signup" role="button">
                {" "}
                Sign up{" "}
              </Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="logout mx-2">
              Logout{" "}
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                id="logoutarrow"
              ></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
