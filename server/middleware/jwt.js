
const jwt = require("jsonwebtoken");
const jwtPass = "sceret";

const obj = {
    email: "vkm@gmail.com",
    password: "1k2i3n4",
};

console.log("\n Object : " + JSON.stringify(obj,null,1));

const token = jwt.sign(obj,jwtPass);
console.log("\n\t Generated token : "+token);


// Object : {
//     "email": "vkm@gmail.com",
//     "password": "1k2i3n4"
//    }
   
//         Generated token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZrbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjFrMmkzbjQiLCJpYXQiOjE3MTkwNDU1ODR9.ZGbJvusoWpS9iBOpgFYMn5G7vFt3s-2v-Fb30egA4S4
   
   