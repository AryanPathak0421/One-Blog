// import React, { useState } from "react";
// import { useAuth } from "../context/AuthProvider";
// import Sidebar from "../dashboard/Sidebar";
// import MyProfile from "../dashboard/MyProfile";
// import MyBlogs from "../dashboard/MyBlogs";
// import CreateBlog from "../dashboard/CreateBlog";
// import UpdateBlog from "../dashboard/UpdateBlog";
// import { Navigate } from "react-router-dom";
// function Dashboard() {
//   const { profile, isAuthenticated } = useAuth();
//   const [component, setComponent] = useState("My Blogs");
//   console.log(profile);
//   console.log(isAuthenticated);

//   if (!isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }
//   return (
//     <div>
//       <div>
//         <Sidebar component={component} setComponent={setComponent} />
//         {component === "My Profile" ? (
//           <MyProfile />
//         ) : component === "Create Blog" ? (
//           <CreateBlog />
//         ) : component === "Update Blog" ? (
//           <UpdateBlog />
//         ) : (
//           <MyBlogs />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React from 'react'

// function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard
// import React from 'react'
// import { useAuth } from "../context/AuthProvider";
// import Sidebar from "../dashboard/Sidebar";
// import MyProfile from "../dashboard/MyProfile";
// import MyBlogs from "../dashboard/MyBlogs";
// import UpdateBlog from "../dashboard/UpdateBlog";
// import CreateBlog from "../dashboard/CreateBlog";

// function Dashboard() {
//   const {profile,isAuthenticated}=useAuth()
//   const [component,setComponent]=useState("My Blogs")
//   console.log(profile)
//   console.log(isAuthenticated)
//   return ( 
//   <div>
//     <div>
//       <Sidebar component={component} setComponent={setComponent} />
//       {component==="My Profile" ?(<MyProfile/>):component==="Create Blog"?(<CreateBlog/>):component==="Update Blog"?(<UpdateBlog/>):(<MyBlogs/>)}
//     </div>
//   </div>
//   )
// }

// export default Dashboard







import React, { useState } from 'react';
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
// import {setComponent} from "./dashboard

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  
  console.log(profile);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return ( 
    <div>
      <div>
        <Sidebar component={component} setComponent={setComponent} />
        {component === "My Profile" ? <MyProfile /> :
         component === "Create Blog" ? <CreateBlog /> :
         component === "Update Blog" ? <UpdateBlog /> :
         <MyBlogs />}
      </div>
    </div>
  );
}

export default Dashboard;