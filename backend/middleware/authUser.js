// import { User } from "../models/user.model.js"
// import jwt from "jsonwebtoken"
// import createTokenAndSaveCookies from "../jwt/AuthToken.js"

// import cors from "cors"
// // import
// // import isAdmin from "../middleware/isAdmin.js"




// //Authentication

// export const isAuthenticated = async(req,res,next) =>{
//     try {
//         const token = req.cookies.jwt;
//         console.log("middleware : ",token)
//         if(!token) {
//             return res.status(401).json({ error: "User not authenticated" })
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
//         const user = await User.findById(decoded.userId)
//         if(!user) {
//             return res.status(404).json({ error: "User not found" })
//         }
//         req.user = user;
//         next()
        
//     } catch (error) {
//         console.log("Error occuring in Authentication: " + error)
//         return res.status(401).json({error: "User not authenticated"})
        
//     }
// }








// //Authorization

// export const isAdmin = (...roles) => {
//     return (req,res,next) => {
//         if(!roles.includes(req.user.role)) {
//             return res.status(403).json({ error: `User with given role ${req.user.role} not allowed`})
//         }
//         next()
//     }
// }



import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import createTokenAndSaveCookies from "../jwt/AuthToken.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// export { isAuthenticated, isAdmin};

// Authentication middleware
export const isAuthenticated = async (req, res, next) => {
    
    try {
        const token = req.cookies.jwt;
        console.log("middleware : ", token);
        if (!token) {
            return res.status(401).json({ error: "User not authenticated" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error occurring in Authentication: " + error);
        return res.status(401).json({ error: "User not authenticated" });
    }
};

// Authorization middleware
export const isAdmin = (...roles) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({ error: "User not authenticated" });
            }

            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ error: `User with role ${req.user.role} is not allowed` });
            }

            next();
        } catch (error) {
            console.error("Error in isAdmin middleware:", error);
            return res.status(500).json({ error: "Internal server error", details: error.message });
        }
    };
 
};
// Export both middleware functions
// export { isAuthenticated, isAdmin };