import dotenv from "dotenv";

//Here we have created this file Inside the src/config folder so we have to provide it the path through which it can access the .env
//Generally both should be at the same path means at the root.
dotenv.config();

console.log(process.env.PORT);//currently it will be undefined.
