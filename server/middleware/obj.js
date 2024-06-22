const obj = { email: "vkm@gmail.com", password: "1k2i3n4" };
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === "password") {
    return undefined; // Exclude the password property
  }
  return value;
}, 2);
console.log(jsonString);
