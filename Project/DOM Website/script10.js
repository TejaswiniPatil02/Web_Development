let demo10 = document.getElementById("div1");

//section9 : Enquire
let div10 = document.createElement("div");
div10.setAttribute("class","container-fluid book-img");
demo10.appendChild(div10);

let div102 = document.createElement("div");
div102.setAttribute("class","row");
div10.appendChild(div102);

let div103 = document.createElement("div");
div103.setAttribute("class","col-12 col-md-4 col-lg-4");
div102.appendChild(div103);

let logodiv = document.createElement("div");
logodiv.setAttribute("class","h-100 w-50 m-auto d-block")
div103.appendChild(logodiv);

let imagelogo = document.createElement("img");
imagelogo.setAttribute("src","images/Logo1.png");
imagelogo.setAttribute("class","align-self-center img-fluid ")
logodiv.appendChild(imagelogo);

//div2
let div104 = document.createElement("div");
div104.setAttribute("class","col-12 col-md-8 col-lg-8 ");
div102.appendChild(div104);

//ul
let fnavbar = document.createElement("ul");
fnavbar.setAttribute("class","list-unstyled d-md-flex justify-content-evenly align-items-center text-white pt-4 fw-bold");
div104.appendChild(fnavbar);


let listarray = ["Home", "Packages", "Services", "About Us", "Contact"];
for(let i=0;i<listarray.length;i++){
    let list = document.createElement("li");
    list.innerHTML = listarray[i];
    list.setAttribute("class","text-center");
    fnavbar.appendChild(list);
}

//Booking Button

let bookbtn = document.createElement("button");
bookbtn.setAttribute("class","btn border border-warning text-warning m-auto d-block");
// bookbtn.setAttribute("target","")
bookbtn.innerHTML = "BOOK TICKET";
div104.appendChild(bookbtn);

//Subscriber Section
let ssection = document.createElement("div");
ssection.setAttribute("class"," mx-auto col-lg-7");
div104.appendChild(ssection);

//input field
let inputfield = document.createElement("input");
inputfield.setAttribute("type","email");
inputfield.setAttribute("placeholder","Enter your email");
inputfield.setAttribute("class","form-control mt-3 email-field");
ssection.appendChild(inputfield);

//subscriber button 
let subscriber = document.createElement("button");
subscriber.setAttribute("class","w-100 mb-2 btn border border-primary text-white bg-warning mt-2");
subscriber.innerHTML = "SUBSCRIBE";
ssection.appendChild(subscriber);

bookbtn.addEventListener("click",generateTicket)
function generateTicket() {
    window.location = "ticket.html"
}