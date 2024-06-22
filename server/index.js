

const express = require("express");
const dotenv=require("dotenv")
const app = express();
const routers=require("./routes/router")
dotenv.config();
const port=process.env.PORT || 3000;
const r=require("./routes/routes")

app.get("/",(req,res)=>{
    res.status(200).json({
        sucess:true,
        message:`\n\t Server is running on the ${port}🧑‍💻💻`,
        localhost:'127.0.0.1',
        ipv4:'192.168.137.1',        
    })
})

app.use("/maths",routers);


app.use("/middleware",r);


//Error handling middleware or Global catch (e)

app.use(function(err,req,res,next){
    res.status(500).json({
        msg: "Internal server error"
    })
})

app.listen(port,()=>{
    console.log(`\n\tServer is running on the ${port}🧑‍💻💻`);
})

