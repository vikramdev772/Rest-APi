const fact=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;
    }
    return ` factorial of ${n} : ${f} `;
}

module.exports=fact;