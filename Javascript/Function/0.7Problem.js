
/*function loginuser(username,password){
  if(username === "admin" && password === "123"){
    console.log("login Success")
  }
  else{
    console.log("Invalid User");
  }
}
loginuser("admin","123");*/

   //




function loginUser(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username === "admin" && password === "123"){

        document.getElementById("message").innerHTML =
            "Login Success";

        document.getElementById("message").style.color =
            "green";
    }
    else{

        document.getElementById("message").innerHTML =
            "Invalid User";

        document.getElementById("message").style.color =
            "red";
    }
}