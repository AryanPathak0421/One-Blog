import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);
  console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/admins",
        {
          withCredentials: true,
        }
      );
      console.log(data.admins);
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);
  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Popular Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-full my-5">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            return (
              <div key={element._id}>
                <div className="">
                  <img
                    src={element.photo.url}
                    alt="blog"
                    className="md:w-56 md:h-56 object-cover border border-black rounded-full items-center "
                  />
                  <div className="text-center md:ml-[-130px]">
                    <p>{element.name}</p>
                    <p className="text-gray-600 text-xs">{element.role}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Creator;



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// // import Creators from '../pages/Creators'
// import { Link } from 'react-router-dom'

// function Creator() {
//   const [admin,setAdmin] = useState([])

//   useEffect(()=>{
//     const fetchAdmins = async()=> {
//       const {data}=await axios.get("http://localhost:4001/api/users/admins", { 
//         withCredentials:true,
//         })
//         console.log(data.admins)
//         setAdmin(data.ad)
//     }
//     fetchAdmins()
//   },[])
//   return (
//     <div>
//       {admin && blogs.length > 0 ? (
//           admin.slice(0, 4).map((element) => {
//             return (
//               <div
//                 key={element._id}
//                 className="p-4 bg-white border border-gray-400 rounded-lg shadow-md mx-2"
//               >
//                 <Link to={`/blog/${element._id}`}>
//                   <div className="relative">
//                     <img
//                       src={element.photo.url}
//                       alt="blog"
//                       className="w-full h-56 object-cover rounded-t-lg"
//                     />
//                     <div>
//                       <p>{element.name}</p>
//                       <p>{element.role}</p>
//                     </div>
//                   </div>
              
//                 </Link>
//               </div>
//             )
//           })
//         ) : (
//           <div></div>
//         )}
//     </div>
//   );

// export default Creator;