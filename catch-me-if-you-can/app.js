// function sum(x, y) {
//   try {
//     if (typeof x !== "number" || typeof y !== "number") {
//       throw new Error("Input must be a number");
//     }
//   } catch (err) {
//     console.log(err);
//   }

//   return x + y;
// }
// console.log(sum(8, 3));

let user = { username: "sam", password: "123abc" };
function login(username, password) {
  let errmsg = '';
    try {
    if (username !== "sam" || password !== "123abc") {
      if(username !== "sam"){
        errmsg = 'username'
      }else if(password !== "123abc"){
        errmsg = 'password'
      }
        throw new Error(`${errmsg} doesn't match`);
    } 
      console.log("success");
    
  } catch (err) {
    console.log(err);
  }
}
login(user.username,user.password)