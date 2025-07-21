let demo3 = document.getElementById("div1");

//Section 3 : About

let div31 = document.createElement("div");
div31.setAttribute("class","container-fluid img4 ");
demo3.appendChild(div31);

let div32 = document.createElement("div");
div32.setAttribute("class","container");
div31.appendChild(div32);

let div33 = document.createElement("div");
div33.setAttribute("class","row");
div32.appendChild(div33);

//div1
let div34 = document.createElement("div");
div34.setAttribute("class","col-12 col-md-4");
div33.appendChild(div34);

let div35 = document.createElement("div");
div35.setAttribute("class","about-div text-center pt-5 pb-5 mt-5 mb-5");
div34.appendChild(div35);

//div 1 text:1
let flight = document.createElement("span");
div35.appendChild(flight);
let righticon = document.createElement("i");
righticon.setAttribute("class","bi bi-check-circle text-white fs-2 ")
flight.appendChild(righticon);
let flightspan = document.createElement("span");
flightspan.setAttribute("class","fs-2 ps-3")
div35.appendChild(flightspan);
let flightText = document.createTextNode("Luxury Flight");
flightspan.appendChild(flightText);

let flightpara = document.createElement("p");
flightpara.setAttribute("class","mt-2")
div35.appendChild(flightpara);
let fpara = document.createTextNode("Reach with us to reach your destination.");
flightpara.appendChild(fpara);

//div 1 text:2
let services = document.createElement("span");
div35.appendChild(services);
let righticon2 = document.createElement("i");
righticon2.setAttribute("class","bi bi-check-circle text-white fs-2 ")
services.appendChild(righticon2);
let flightspan2 = document.createElement("span");
flightspan2.setAttribute("class","fs-2 ps-3 ")
div35.appendChild(flightspan2);
let flightText2 = document.createTextNode("Best Services");
flightspan2.appendChild(flightText2);

let flightpara2 = document.createElement("p");
flightpara2.setAttribute("class","mt-2")
div35.appendChild(flightpara2);
let fpara2 = document.createTextNode("Reach with us to reach your destination.");
flightpara2.appendChild(fpara2);

//div 1 text:3

let pilot = document.createElement("span");
div35.appendChild(pilot);
let righticon3 = document.createElement("i");
righticon3.setAttribute("class","bi bi-check-circle text-white fs-2 ")
pilot.appendChild(righticon3);

let flightspan3 = document.createElement("span");
flightspan3.setAttribute("class","fs-2 ps-3")
div35.appendChild(flightspan3);
let flightText3 = document.createTextNode("Certified Pilot");
flightspan3.appendChild(flightText3);

let flightpara3 = document.createElement("p");
flightpara3.setAttribute("class","mt-2")
div35.appendChild(flightpara3);
let fpara3 = document.createTextNode("Reach with us to reach your destination.");
flightpara3.appendChild(fpara3);


//div2

let div36 = document.createElement("div");
div36.setAttribute("class","col-12 col-md-4 ");
div33.appendChild(div36);
let imgdiv = document.createElement("div");
imgdiv.setAttribute("class","mt-5 h-75")
div36.appendChild(imgdiv);
let piolatimg = document.createElement("img");
piolatimg.setAttribute("src","images/F-1-1.jpg");
piolatimg.setAttribute("class"," h-100 img-fluid border rounded-3 ")
imgdiv.appendChild(piolatimg);

//div3
let div37 = document.createElement("div");
div37.setAttribute("class","col-12 col-md-4");
div33.appendChild(div37);
let aboutFlight = document.createElement("div");
aboutFlight.setAttribute("class","img-5 mt-5 ps-3 mb-5 ");
div37.appendChild(aboutFlight);
let para1 = document.createElement("p");
para1.setAttribute("class","text-warning pt-4");
aboutFlight.appendChild(para1);
let AboutFlightPara = document.createTextNode("ABOUT FLIGHT");
para1.appendChild(AboutFlightPara);

let div38 = document.createElement("h3");
div38.setAttribute("class","text-white")
div38.innerHTML = "We Have Best"
aboutFlight.appendChild(div38);

let spantext = document.createElement("span");
spantext.setAttribute("class","text-warning h2");
div38.appendChild(spantext);
let spanpara = document.createTextNode(" Luxury Services ");
spantext.appendChild(spanpara);

let spanpara2 = document.createTextNode("For You");
div38.appendChild(spanpara2);

let aboutpara = document.createElement("p");
aboutpara.setAttribute("class","text-white mt-4")
aboutFlight.appendChild(aboutpara);
let aboutFlightpara2 = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
aboutpara.appendChild(aboutFlightpara2);

let flightbtn = document.createElement("button");
flightbtn.setAttribute("class","btn border border-warning text-warning mb-3");
let btnText2 = document.createTextNode("VIEW ABOUT");
aboutFlight.appendChild(flightbtn);
flightbtn.appendChild(btnText2);





