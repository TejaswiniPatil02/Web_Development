let demo6 = document.getElementById("div1");

//Section 6
let div61 = document.createElement("div");
div61.setAttribute("class","container-fluid");
demo6.appendChild(div61);

let div62 = document.createElement("div");
div62.setAttribute("class","container");
div61.appendChild(div62);

//Paragraph Div1
let div63 = document.createElement("div");
div63.setAttribute("class","row");
div62.appendChild(div63);

let div64 = document.createElement("div");
div64.setAttribute("class","col-12 text-center mt-5 mb-2");
div63.appendChild(div64);

let luxurypara = document.createElement("p");
luxurypara.setAttribute("class","text-warning");
div64.appendChild(luxurypara);
luxurypara.innerHTML = "OUR LUXURY CHARTER";

let luxuryh2 = document.createElement("h2");
luxuryh2.setAttribute("class","fw-bolder");
div64.appendChild(luxuryh2);
luxuryh2.innerHTML = "We Provide Luxury Deals for You";

let luxurypara2 = document.createElement("p");
luxurypara2.setAttribute("class","");
div64.appendChild(luxurypara2);
luxurypara2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?";

//Flight Names Div2

let FlightName = document.createElement("div");
FlightName.setAttribute("class","row d-flex justify-content-evenly align-items-center");
div64.appendChild(FlightName);

//img1
let FlightDiv = document.createElement("div");
FlightDiv.setAttribute("class","col-12 col-md-11 col-lg-3 img8 p-4 mt-3 mb-3");
FlightName.appendChild(FlightDiv);

let Flightp1 = document.createElement("p");
Flightp1.setAttribute("class","fw-bolder fs-2 text-white")
FlightDiv.appendChild(Flightp1);
Flightp1.innerHTML = "Airbus A380 - All Surya";

let Flightp2 = document.createElement("p");
Flightp2.setAttribute("class","fs-5 text-warning")
FlightDiv.appendChild(Flightp2);
Flightp2.innerHTML = "Nomaden 900";

let Flightp3 = document.createElement("p");
Flightp3.setAttribute("class","text-white")
FlightDiv.appendChild(Flightp3);
Flightp3.innerHTML = "5 - 16 Seats";

let Flightp4 = document.createElement("p");
Flightp4.setAttribute("class","fs-6 text-white")
FlightDiv.appendChild(Flightp4);
Flightp4.innerHTML = "Price: $10,000/ hr";

//img2
let FlightDiv2 = document.createElement("div");
FlightDiv2.setAttribute("class","col-12 col-md-11 col-lg-3 img9 p-4 mt-3 mb-3");
FlightName.appendChild(FlightDiv2);

let Flightp21 = document.createElement("p");
Flightp21.setAttribute("class","fw-bolder fs-2 text-white")
FlightDiv2.appendChild(Flightp21);
Flightp21.innerHTML = "Boeing 747-8 VIP - All Surya";

let Flightp22 = document.createElement("p");
Flightp22.setAttribute("class","fs-5 text-warning")
FlightDiv2.appendChild(Flightp22);
Flightp22.innerHTML = "Nomaden 900";

let Flightp23 = document.createElement("p");
Flightp23.setAttribute("class","text-white")
FlightDiv2.appendChild(Flightp23);
Flightp23.innerHTML = "5 - 10 Seats";

let Flightp24 = document.createElement("p");
Flightp24.setAttribute("class","fs-6 text-white")
FlightDiv2.appendChild(Flightp24);
Flightp24.innerHTML = "Price: $15,000/ hr";

//img3
let FlightDiv3 = document.createElement("div");
FlightDiv3.setAttribute("class","col-12 col-md-11 col-lg-3 img10 p-4 v");
FlightName.appendChild(FlightDiv3);

let Flightp31 = document.createElement("p");
Flightp31.setAttribute("class","fw-bolder fs-2 text-white")
FlightDiv3.appendChild(Flightp31);
Flightp31.innerHTML = "Boeing 767-33A - All Surya";

let Flightp32 = document.createElement("p");
Flightp32.setAttribute("class","fs-5 text-warning")
FlightDiv3.appendChild(Flightp32);
Flightp32.innerHTML = "Nomaden 900";

let Flightp33 = document.createElement("p");
Flightp33.setAttribute("class","text-white")
FlightDiv3.appendChild(Flightp33);
Flightp33.innerHTML = "15 - 20 Seats";

let Flightp34 = document.createElement("p");
Flightp34.setAttribute("class","fs-6 text-white")
FlightDiv3.appendChild(Flightp34);
Flightp34.innerHTML = "Price: $25,000/ hr";