// import { useDispatch } from "react-redux";
// import { Formik } from "formik";
// import React,{useState} from "react";
// import * as Yup from "yup";
// import { login } from "../../Redux/Createslice";

// // Creating schema
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is a required field")
//     .min(8, "Password must be at least 8 characters")
// });

// function Login() {
    
//   return (
//     <>
//       {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
//       <Formik
//         validationSchema={schema}
//         initialValues={{ email: "", password: "" }}
//         onSubmit={(values) => {
//           // Alert the input values of the form that we filled
//           fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             headers:{"Content-type": "application/json"},
//             body:JSON.stringify({
//                 username:values.email,
//                 password:values.password
//             })
//         })
                    
//             .then(res=>res.json())
//             .then(data=>dispatch(login(data)))
// }
//         }
//       >
//         const dispatch=useDispatch()
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit
//         }) => (
//           <div className="login">
//             <div className="form">
//               {/* Passing handleSubmit parameter tohtml form onSubmit property */}
//               <div noValidate onSubmit={handleSubmit}>
//                 <span>Login</span>
//                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                   placeholder="Enter email id / username"
//                   className="form-control inp_text"
//                   id="email"
//                 />
//                 {/* If validation is not passed show errors */}
//                 <p className="error">
//                   {errors.email && touched.email && errors.email}
//                 </p>
//                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                   placeholder="Enter password"
//                   className="form-control"
//                 />
//                 {/* If validation is not passed show errors */}
//                 <p className="error">
//                   {errors.password && touched.password && errors.password}
//                 </p>
//                 {/* Click on submit button to submit the form */}
//                 <button onClick={clickk} type="submit">Login</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </Formik>
//     </>
//   );
// }

// export default App;
