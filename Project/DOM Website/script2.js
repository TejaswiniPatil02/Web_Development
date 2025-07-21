let demo2 = document.getElementById("div1");

// Section 2 : Services

let div21 = document.createElement("div");
div21.setAttribute("class","container-fluid");
demo2.appendChild(div21);

let div22 = document.createElement("div");
div22.setAttribute("class","row p-4");
div21.appendChild(div22);

//Services Div1

let div23 = document.createElement("div");
div23.setAttribute("class","col-12 col-md-12 col-lg-5 ");
div22.appendChild(div23);

let div24 = document.createElement("div");
div24.setAttribute("class","para p-5 mt-lg-5");
div23.appendChild(div24);

let para21 = document.createElement("p");
div24.appendChild(para21);
let ptext21 = document.createTextNode("OUR SERVICES");
para21.appendChild(ptext21);

let p21h2 = document.createElement("h2");
div24.appendChild(p21h2);
let p21h2text = document.createTextNode("We Have Best Luxury Services For You");
p21h2.appendChild(p21h2text);

let Paragraph = document.createElement("p");
div24.appendChild(Paragraph);
let p21para = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
Paragraph.appendChild(p21para);

let button2 = document.createElement("button");
button2.setAttribute("class","btn border-warning text-warning m-auto d-block ");
div24.appendChild(button2);
let btn2Text = document.createTextNode("View Services");
button2.appendChild(btn2Text);


//Services Div2 with image


//background image
let div25 = document.createElement("div");
div25.setAttribute("class","img3 col-12 col-md-12 col-lg-7");
div22.appendChild(div25);

//container
let jet = document.createElement("div");
jet.setAttribute("class","container");
div25.appendChild(jet);

let jetrow = document.createElement("div");
jetrow.setAttribute("class","row mt-3");
jet.appendChild(jetrow);



//div1
let jetdiv1 = document.createElement("div");
jetdiv1.setAttribute("class","col-12 col-md-6 mt-3");
jetrow.appendChild(jetdiv1);

let alldiv = document.createElement("div");
alldiv.setAttribute("class","service border border-warning text-white p-3");
jetdiv1.appendChild(alldiv);

let telegram = document.createElement("i");
telegram.setAttribute("class","bi bi-send text-white fs-1 ");
alldiv.appendChild(telegram);

let jetpara = document.createElement("h5");
alldiv.appendChild(jetpara)
let private = document.createTextNode("Private Jet Charter");
jetpara.appendChild(private);

let privatePara = document.createElement("p");
alldiv.appendChild(privatePara);
let private2 = document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
privatePara.appendChild(private2);

//div2
let jetdiv2 = document.createElement("div");
jetdiv2.setAttribute("class","col-12 col-md-6 mt-3");
jetrow.appendChild(jetdiv2);

let alldiv2 = document.createElement("div");
alldiv2.setAttribute("class","service border border-warning text-white p-3");
jetdiv2.appendChild(alldiv2);

let setting = document.createElement("i");
setting.setAttribute("class","bi bi-gear text-white fs-1 ");
alldiv2.appendChild(setting);

let jetpara2 = document.createElement("h5");
alldiv2.appendChild(jetpara2)
let helicopter = document.createTextNode("Private Helicopter");
jetpara2.appendChild(helicopter);

let privatePara2 = document.createElement("p");
alldiv2.appendChild(privatePara2);
let private3 = document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
privatePara2.appendChild(private3);

//div3
let jetdiv3 = document.createElement("div");
jetdiv3.setAttribute("class","col-12 col-md-6 mt-3 mb-3");
jetrow.appendChild(jetdiv3);

let alldiv3 = document.createElement("div");
alldiv3.setAttribute("class","service border border-warning text-white p-3");
jetdiv3.appendChild(alldiv3);

let ambulanceicon = document.createElement("i");
ambulanceicon.setAttribute("class","bi bi-truck text-white fs-1 ");
alldiv3.appendChild(ambulanceicon);

let jetpara3 = document.createElement("h5");
alldiv3.appendChild(jetpara3)
let ambulance = document.createTextNode("Air Ambulance");
jetpara3.appendChild(ambulance);

let privatePara3 = document.createElement("p");
alldiv3.appendChild(privatePara3);
let private4 = document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
privatePara3.appendChild(private4);


//div4
let jetdiv4 = document.createElement("div");
jetdiv4.setAttribute("class","col-12 col-md-6 mt-3 mb-3");
jetrow.appendChild(jetdiv4);

let alldiv4 = document.createElement("div");
alldiv4.setAttribute("class","service border border-warning text-white p-3");
jetdiv4.appendChild(alldiv4);

let buisnessicon = document.createElement("i");
buisnessicon.setAttribute("class","bi bi-person-fill-add text-white fs-1 ");
alldiv4.appendChild(buisnessicon);

let jetpara4 = document.createElement("h5");
alldiv4.appendChild(jetpara4)
let buisness = document.createTextNode("Business Jet");
jetpara4.appendChild(buisness);

let privatePara4 = document.createElement("p");
alldiv4.appendChild(privatePara4);
let private5 = document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
privatePara4.appendChild(private5);


