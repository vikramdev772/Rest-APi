const z=require("zod");

const schemaValidation = (email,password)=>{
    const emailValidation = z.string().email().endsWith("@gmail.com");
    const passwordValidation = z.string().min(6);

    const e=emailValidation.safeParse(email);
    const p=passwordValidation.safeParse(password);
    

    console.log(e);
    console.log(p);
}

// schemaValidation("vkm@gmail.com","1234567");
// { success: true, data: 'vkm@gmail.com' }
// { success: true, data: '1234567' }


// schemaValidation("vkm@gmai.com","1234567");
// { success: false, error: [Getter] }
// { success: true, data: '1234567' }
