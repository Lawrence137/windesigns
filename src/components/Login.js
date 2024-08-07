// import { Link, useNavigate } from "react-router-dom";

// export const Login = ({ setIsAuthenticated }) => {
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       navigate("/search");
//       setIsAuthenticated(true);
//     //   setShowBackground(false);
//     };


//     return (
//       <div className="h-screen bg-cover bg-white">
//         <div className="bg-opacity-80">
//           <div className="flex justify-around mt-5">
//             <div className="card col-4 mt-4 justify-center">
//               <h4 className="ms-5 m-3 mt-4 font-bold">please sign In to continue</h4>
//               <form className="col-8 ms-5" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="mb-2 font-bold">Email</label>
//                   <br />
//                   <input type="text" className="form-control" id="email" placeholder="Enter Your Email" required />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="mb-2 font-bold">Password</label>
//                   <br />
//                   <input type="password" className="form-control" id="password" placeholder="Enter password" required />
//                 </div>
//                 <button type="submit" className="btn btn-outline-warning me-4 mb-4">SIGN IN</button>
//                 <p className="font-bold">
//                   Don't have an account?
//                   <br />
//                   <Link to="/signup">
//                     <button className="btn btn-outline-warning ms-3">Sign up</button>
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }    