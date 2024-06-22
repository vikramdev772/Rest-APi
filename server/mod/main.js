const s = require("./maths/sum"); 
const fact=require("./maths/fact")
const rev=require("./maths/rev");
const fib=require("./maths/fib");

const m = (req, res) => {
    const v = parseInt(req.query.v);
    res.status(200).json({
        success: true,
        title: "Maths",
        value: `${v}`, 
        sum: `Sum of ${v} : ${s.sum(v)}` 
    });
};

const f=(req,res)=>{
    const f=req.query.v;
    res.status(200).json({
        success: true,
        title: "Maths",
        value: `${f}`, 
        sum: ` ${fact(f)}` 
    })
}

const r = (req, res) => {
    const value = req.params.n;
    res.status(200).json({
        success: true,
        title: "Maths",
        original: `${value}`, 
        sum: `${rev(value)}`
    });
};

const fs=(req,res)=>{
    const n=req.params.x;
    res.status(200).json({
        sucess:true,
        title:"maths",
        value: `${n}`,
        fibs:` ${fib(n)}`
    })
}

module.exports = {m,f,r,fs}; 
