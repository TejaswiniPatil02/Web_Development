let demo1 = document.getElementById("div1");

let sec1 = document.createElement("div");
sec1.setAttribute("class", "img1");
demo1.appendChild(sec1);

// Icon Section 

let div1 = document.createElement("div");
div1.setAttribute("class", "container");
sec1.appendChild(div1);

let div2 = document.createElement("div");
div2.setAttribute("class", "row d-flex justify-content-center align-items-center pt-5 text-center");
div1.appendChild(div2);

let div3 = document.createElement("div");
div3.setAttribute("class","col-2");
let i1 = document.createElement("i");
i1.setAttribute("class","icon bi bi-facebook  fs-2")
div3.appendChild(i1);
div2.appendChild(div3);


let div4 = document.createElement("div");
div4.setAttribute("class","col-2");
let i2 = document.createElement("i");
i2.setAttribute("class","icon bi bi-instagram fs-2")
div4.appendChild(i2);
div2.appendChild(div4);

let div5 = document.createElement("div");
div5.setAttribute("class","col-2");
let i3 = document.createElement("i");
i3.setAttribute("class","icon bi bi-twitter fs-2")
div5.appendChild(i3);
div2.appendChild(div5);

let div6 = document.createElement("div");
div6.setAttribute("class","col-2");
let i4 = document.createElement("i");
i4.setAttribute("class","icon bi bi-youtube fs-2")
div6.appendChild(i4);
div2.appendChild(div6);


// Aeroplane Div 

let div12 = document.createElement("div");
div12.setAttribute("class","container");
sec1.appendChild(div12);


let div13 = document.createElement("div");
div13.setAttribute("class","row pb-5");
div12.appendChild(div13);

let div14 =document.createElement("div");
div14.setAttribute("class","col-12 col-md-6");
div13.appendChild(div14);

let div15 = document.createElement("div");
div15.setAttribute("class","aeroplane-div mt-5")
div14.appendChild(div15);

let div16 = document.createElement("img");
div16.setAttribute("src","images/Png-2.png");
div16.setAttribute("class","w-100 h-100")
div15.appendChild(div16);

// Hero Paragraph Div

let div17 =document.createElement("div");
div17.setAttribute("class","col-12 col-md-6 text-white mt-5");
div13.appendChild(div17);

let p1 = document.createElement("h4");
p1.setAttribute("class","p-3 fst-italic")
div17.appendChild(p1);
let para = document.createTextNode("Welcome to Flights");
p1.appendChild(para);


let p2 = document.createElement("h2");
p2.setAttribute("class","ps-3 fst-italic")
div17.appendChild(p2);
let para2 = document.createTextNode("Private Charter with Global coverage");
p2.appendChild(para2);

let p3 = document.createElement("p");
p3.setAttribute("class","ps-3")
div17.appendChild(p3);
let para3 = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
p3.appendChild(para3);

let button1 = document.createElement("button");
button1.setAttribute("class","btn text-warning border ps-3 pe-3 m-auto d-block");
let btnText = document.createTextNode("Explore");
button1.appendChild(btnText);
div17.appendChild(button1);


