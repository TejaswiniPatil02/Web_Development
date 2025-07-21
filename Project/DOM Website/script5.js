let demo5 = document.getElementById("div1");

//Section 5 : About private jets

let div51 = document.createElement("div");
div51.setAttribute("class","container-fluid img7");
demo5.appendChild(div51);

let div52 = document.createElement("div");
div52.setAttribute("class","container py-3");
div51.appendChild(div52);

let div53 = document.createElement("div");
div53.setAttribute("class","row py-3 counter");
div52.appendChild(div53);

//count1 
let div54 = document.createElement("div");
div54.setAttribute("class","col-12 col-md-3 mt-3 mb-3 text-center");
div53.appendChild(div54);

let counticon1 = document.createElement("i");
counticon1.setAttribute("class","bi bi-person-vcard fs-2 text-warning");
div54.appendChild(counticon1);

let countspan1 = document.createElement("h2");
countspan1.setAttribute("class","text-white")
div54.appendChild(countspan1);
countspan1.innerHTML = "89"

let countpara1 = document.createElement("p");
countpara1.setAttribute("class","text-white")
div54.appendChild(countpara1);
countpara1.innerHTML = "Professional Pilots"

//count2 
let div55 = document.createElement("div");
div55.setAttribute("class","col-12 col-md-3 mt-3 mb-3 text-center");
div53.appendChild(div55);

let counticon2 = document.createElement("i");
counticon2.setAttribute("class","bi bi-globe-europe-africa fs-2 text-warning");
div55.appendChild(counticon2);

let countspan2 = document.createElement("h2");
countspan2.setAttribute("class","text-white")
div55.appendChild(countspan2);
countspan2.innerHTML = "269"

let countpara2 = document.createElement("p");
countpara2.setAttribute("class","text-white")
div55.appendChild(countpara2);
countpara2.innerHTML = "World Airports";

//count3
let div56 = document.createElement("div");
div56.setAttribute("class","col-12 col-md-3 mt-3 mb-3 text-center");
div53.appendChild(div56);

let counticon3 = document.createElement("i");
counticon3.setAttribute("class","bi bi-send fs-2 text-warning");
div56.appendChild(counticon3);

let countspan3 = document.createElement("h2");
countspan3.setAttribute("class","text-white")
div56.appendChild(countspan3);
countspan3.innerHTML = "589"

let countpara3 = document.createElement("p");
countpara3.setAttribute("class","text-white")
div56.appendChild(countpara3);
countpara3.innerHTML = "Jet Airplanes";

//count4
let div57 = document.createElement("div");
div57.setAttribute("class","col-12 col-md-3 mt-3 mb-3 text-center");
div53.appendChild(div57);

let counticon4 = document.createElement("i");
counticon4.setAttribute("class","bi bi-pin-map fs-2 text-warning");
div57.appendChild(counticon4);

let countspan4 = document.createElement("h2");
countspan4.setAttribute("class","text-white")
div57.appendChild(countspan4);
countspan4.innerHTML = "126"

let countpara4 = document.createElement("p");
countpara4.setAttribute("class","text-white")
div57.appendChild(countpara4);
countpara4.innerHTML = "Directions";