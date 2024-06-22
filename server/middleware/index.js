const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    console.log(usernameResponse,passwordResponse);
    console.log("\n\n");

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    },jwtPassword);
    return signature;
}
const ans = signJwt("kadnkfjkdj","ndkfkjsa9fja");
console.log(ans);
const v=signJwt("vkm@gmail.com","1234569");
console.log(v);


// { success: false, error: [Getter] } { success: true, data: 'ndkfkjsa9fja' }



// null
// { success: true, data: 'vkm@gmail.com' } { success: true, data: '1234569' }



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZrbUBnbWFpbC5jb20iLCJpYXQiOjE3MTkwNDY0MDR9.aW5FmTy2h7PbiUVMAtsJqQBpDNJVIDu26jD1JSuNyNs

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZrbUBnbWFpbC5jb20iLCJpYXQiOjE3MTkwNDY0MDR9.aW5FmTy2h7PbiUVMAtsJqQBpDNJVIDu26jD1JSuNyNs";

function decodeJwt(token){
    const decoded=jwt.decode(token);
    

    if(decoded){
        return `decoded sucessfully : ${JSON.stringify(decoded)}`;
        
    }
    else{
        return "Failed to decode the token";
    }
    

}

console.log(decodeJwt("fghjk"))    //Failed to decode the token

console.log(decodeJwt(token))   //decoded sucessfully



const verifyJwt=(token)=>{
    const verified = jwt.verify(token,jwtPassword);
  
    if(verified){
  
        return `verification sucess : ${JSON.stringify(verified)}`;
    }
    else{
        
        return `verification failed ..!`;
    }
  
    
}
console.log(verifyJwt(token));

// verification sucess 
// true

// decoded sucessfully : {"username":"vkm@gmail.com","iat":1719046404}
// verification sucess : {"username":"vkm@gmail.com","iat":1719046404}



function verification(token){
    let ans=true;
    try{
        jwt.verify(token,jwtPassword);

    }catch(e){
        ans=false;
    }
    return ans;
}
const vf=verification(token);
console.log(vf); //true
