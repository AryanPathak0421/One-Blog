import axios from "axios";
import React, { createContext, useContext,  useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // token should be let type variable because its value will change in every login. (in backend also)
        let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
        console.log(token);
        if (token) {
          const { data } = await axios.get(
            "http://localhost:4001/api/users/my-profile",
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(data.user);
          setProfile(data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/blogs/all-blogs",
          { withCredentials: true }
        );
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);























































































































































































































// import axios from 'axios'
// // import axois from 'axios'
// import React, { createContext, useContext, useEffect, useState } from 'react'
// export const AuthContext = createContext()
// export const AuthProvider = ({children}) => {

//     const [blogs,SetBlogs] = useState()

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const { data } = await axios.get("http://localhost:4001/api/blogs/all-blogs");
//                 console.log(data)
//                 SetBlogs(data)
//             } catch (error) {
//                 console.log()
//             }
//         }
//         fetchBlogs();
//     },[])
//   return (
//    <AuthContext.Provider value={{blogs}}>{children}</AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext);   




// // // // // import React,{ createContext } from 'react'
// // // // // export AuthContext= createContext()

// // // // // export const AuthProvider = (children) => {
// // // // //     const [blogs]
// // // // //   return (
// // // // //     <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
// // // // //   )
// // // // // }





// // // import axios from 'axios'
// import axios from 'axios'

// import React, { createContext, useContext, useEffect, useState } from 'react'
// export const AuthContext=createContext()
// // import axios from 'axios'
// export const AuthProvider = ({children}) => {
//   const API= "http://localhost:4001/api/blogs/all-blogs"
//   const [blogs,setBlogs]=useState()


//   // useEffect(()=>{
//     const fetchBlogs = async()=> {
//       try {
//         const { data } = await axios.get(API)
//         console.log(data)
//         setBlogs(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     useEffect(()=>{
//     fetchBlogs()
//   },[])
//   return (
//     <AuthContext.Provider value={{blogs}}>{children}</AuthContext.Provider>
//   )
// }

// export const useAuth=() =>  useContext(AuthContext)





// // import axios from "axios";
// // import React, { createContext, useContext, useEffect, useState } from "react";

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [blogs, setBlogs] = useState();
// //   // const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
   

// //     const fetchBlogs = async () => {
// //       try {
// //         const { data } = await axios.get(
// //           "http://localhost:4001/api/blogs/all-blogs",
// //           { withCredentials: true }
// //         );
// //         console.log(data);
// //         setBlogs(data);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchBlogs();
 
// //   }, []);

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         blogs
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);







// import axios from 'axios'
// import React, { createContext, useContext, useEffect, useState } from 'react'

// export const AuthContext = createContext()

// export const AuthProvider = ({children}) => {
//   const API = "http://localhost:4001/api/blogs/all-blogs"
//   const [blogs, setBlogs] = useState()
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   const fetchBlogs = async() => {
//     try {
//       const token = localStorage.getItem('jwt') // Assuming you store the JWT in localStorage after login
//       const { data } = await axios.get(API, {
//         headers: {
//           'Authorization': `Bearer ${token}` // Add the JWT to the Authorization header
//         },
//         withCredentials: true // This is important if you're using cookies for authentication
//       })
//       console.log(data)
//       setBlogs(data)
//       setIsAuthenticated(true)
//     } catch (error) {
//       console.log(error)
//       setIsAuthenticated(false)
//     }
//   }

//   useEffect(() => {
//     fetchBlogs()
//   }, [])

//   return (
//     <AuthContext.Provider value={{blogs, isAuthenticated, setIsAuthenticated}}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)