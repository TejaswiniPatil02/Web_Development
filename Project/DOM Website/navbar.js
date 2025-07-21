let navbar = document.getElementById("div1");

//Navabr
let nav = document.createElement("Section");
nav.setAttribute("class","header d-flex justify-content-between align-items-center bg-dark text-white p-3");
navbar.appendChild(nav);

let logo = document.createElement("div");
logo.setAttribute("class","ps-3");
nav.appendChild(logo);

let logoimg = document.createElement("img");
logoimg.setAttribute("src","images/Logo1.png");
logoimg.setAttribute("class","h-25 w-50");
logo.appendChild(logoimg);

//NavList
let Navlist = document.createElement("div");
Navlist.setAttribute("class","w-50 d-none d-lg-block");
nav.appendChild(Navlist);

let fnavbar1 = document.createElement("ul");
fnavbar1.setAttribute("class","list-unstyled d-flex justify-content-between align-items-center mt-3 fw-bold text-white");
Navlist.appendChild(fnavbar1);

let listarray1 = ["Home", "Packages", "Services", "About Us", "Contact"];
for(let i=0;i<listarray1.length;i++){
    let list1 = document.createElement("li");
    list1.innerHTML = listarray1[i];
    list1.setAttribute("class","text-center");
    fnavbar1.appendChild(list1);
}

//Book Now Btn
let bookingbtn = document.createElement("div");
bookingbtn.setAttribute("class","d-none d-lg-block");
nav.appendChild(bookingbtn);

let booknow = document.createElement("button");
booknow.setAttribute("class","btn border border-warning text-warning");
booknow.innerHTML = "BOOK TICKET";
bookingbtn.appendChild(booknow);


//Offcanvas

let Offcanvas = document.createElement("div");
Offcanvas.setAttribute("class","d-lg-none");
nav.appendChild(Offcanvas);

let Offcanvasbtn = document.createElement("button");
Offcanvasbtn.setAttribute("class","btn text-white fs-1");
Offcanvasbtn.setAttribute("type","button");
Offcanvasbtn.setAttribute("data-bs-toggle","offcanvas");
Offcanvasbtn.setAttribute("data-bs-target","#btn");
Offcanvas.appendChild(Offcanvasbtn);

let Listicon = document.createElement("i");
Listicon.setAttribute("class","bi bi-list");
Offcanvasbtn.appendChild(Listicon);

//Offcanvas Body

let offcanvasBody = document.createElement("div");
offcanvasBody.setAttribute("class","offcanvas offcanvas-start");
offcanvasBody.setAttribute("id","btn");
Offcanvas.appendChild(offcanvasBody);

let closebtn = document.createElement("button");
closebtn.setAttribute("class","btn btn-close m-2 ");
closebtn.setAttribute("data-bs-dismiss","offcanvas");
offcanvasBody.appendChild(closebtn);

let offcanvaslist = document.createElement("div");
offcanvaslist.setAttribute("class","offcanvas-body bg-dark");
offcanvasBody.appendChild(offcanvaslist);

//offcanvas list
let offcanvasnavbar = document.createElement("ul");
offcanvasnavbar.setAttribute("class","list-unstyled text-white");
offcanvaslist.appendChild(offcanvasnavbar);

let offcanvasarray = ["Home", "Packages", "Services", "About Us", "Contact"];
for(let i=0;i<offcanvasarray.length;i++){
    let offcanvaslist1 = document.createElement("li");
    offcanvaslist1.setAttribute("class","list-unstyled mb-4");
    offcanvaslist1.innerHTML = offcanvasarray[i];
    offcanvasnavbar.appendChild(offcanvaslist1);
}

let offcanvasbooknow = document.createElement("button");
offcanvasbooknow.setAttribute("class","btn border border-warning text-warning ");
offcanvasbooknow.innerHTML = "BOOK TICKET";
offcanvasnavbar.appendChild(offcanvasbooknow);


booknow.addEventListener("click",generateTicket)
function generateTicket() {
    window.location = "ticket.html"
}

offcanvasbooknow.addEventListener("click",generateTicket1)
function generateTicket1() {
    window.location = "ticket.html"
}

