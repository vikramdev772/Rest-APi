const express = require("express");
const routers=express.Router();
const {m,f,r,fs}=require("../mod/main");


routers.get("/sum",m);
routers.get("/fact",f);
routers.get("/rev/:n", r); 
// // 20240613140353
// // http://localhost:4000/maths/rev/564

// {
//     "success": true,
//     "title": "Maths",
//     "original": "564",
//     "sum": "reverse of 0 : 465"
//   }
routers.get("/fib/:x",fs);






module.exports = routers;