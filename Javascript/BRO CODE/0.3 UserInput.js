let Username ;

document.getElementById ("Submit").onclick = function(){
 Username =  document.getElementById ("Mytext").value ;
 document.getElementById("myh1").textContent =`Hello ${Username}`
 
 
}

