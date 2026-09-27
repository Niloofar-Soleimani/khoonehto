 import {compare, hash} from "bcryptjs"

 async function HashPassword(password) {
     const hashPassword=await hash(password , 12)
     return hashPassword
 }

   async function VerifyPassword(password , hashPassword) {
     const verifyPassword= await compare(password , hashPassword)
     return verifyPassword
   }
  export { HashPassword , VerifyPassword}