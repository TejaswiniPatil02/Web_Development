let demo4 = document.getElementById("div1");

//Section 4 : About private jets

let div41 = document.createElement("div");
div41.setAttribute("class","container-fluid");
demo4.appendChild(div41);

let div42 = document.createElement("div");
div42.setAttribute("class","container");
div41.appendChild(div42);

let div43 = document.createElement("div");
div43.setAttribute("class","row");
div42.appendChild(div43);

//div1
let div44 = document.createElement("div");
div44.setAttribute("class","col-12 col-md-12 col-lg-4");
div43.appendChild(div44);

let div45 = document.createElement("div");
div45.setAttribute("class","p-2 mt-4 mb-4");
div44.appendChild(div45);

let jetspan = document.createElement("span");
jetspan.setAttribute("class","text-warning");
div45.appendChild(jetspan);
let jetspantext = document.createTextNode("OUR BENEFIT");
jetspan.appendChild(jetspantext);

let div46 = document.createElement("h2");
div46.setAttribute("class","pt-3 pb-3")
div46.innerHTML = "Learn More About"
div45.appendChild(div46);

let jetspantext2 = document.createElement("span");
jetspantext2.setAttribute("class","text-warning h2");
div46.appendChild(jetspantext2);
let jetspanpara2 = document.createTextNode(" Private Jet ");
jetspantext2.appendChild(jetspanpara2);

let spanpara3 = document.createTextNode("Benefits");
div46.appendChild(spanpara3);

let privatejetpara = document.createElement("p");
div45.appendChild(privatejetpara);
privatejetpara.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?"

//div2

let div47 = document.createElement("div");
div47.setAttribute("class","col-12 col-md-12 col-lg-8 text-center");
div43.appendChild(div47);

let div48 = document.createElement("div");
div48.setAttribute("class","row benefits-div");
div47.appendChild(div48);

//div2:1
let safety = document.createElement("div");
safety.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(safety);

let safetypara1 = document.createElement("p");
safetypara1.setAttribute("class","fw-bolder")
safety.appendChild(safetypara1);
safetypara1.innerHTML = "0I";

let safetypara2 = document.createElement("p");
safetypara2.setAttribute("class","fw-bolder")
safety.appendChild(safetypara2);
safetypara2.innerHTML = "Safety and Security"

let safetypara3 = document.createElement("p");
safety.appendChild(safetypara3);
safetypara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."

//div2:2
let comfort = document.createElement("div");
comfort.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(comfort);

let comfortpara1 = document.createElement("p");
comfortpara1.setAttribute("class","fw-bolder")
comfort.appendChild(comfortpara1);
comfortpara1.innerHTML = "02";

let comfortpara2 = document.createElement("p");
comfortpara2.setAttribute("class","fw-bolder")
comfort.appendChild(comfortpara2);
comfortpara2.innerHTML = "Luxury and Comfort"

let comfortpara3 = document.createElement("p");
comfort.appendChild(comfortpara3);
comfortpara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."

//div2:3
let crew = document.createElement("div");
crew.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(crew);

let crewpara1 = document.createElement("p");
crewpara1.setAttribute("class","fw-bolder")
crew.appendChild(crewpara1);
crewpara1.innerHTML = "03";

let crewpara2 = document.createElement("p");
crewpara2.setAttribute("class","fw-bolder")
crew.appendChild(crewpara2);
crewpara2.innerHTML = "Experienced Crew Staff"

let crewpara3 = document.createElement("p");
crew.appendChild(crewpara3);
crewpara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."

//div2:4
let glob = document.createElement("div");
glob.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(glob);

let globpara1 = document.createElement("p");
globpara1.setAttribute("class","fw-bolder")
glob.appendChild(globpara1);
globpara1.innerHTML = "04";

let globpara2 = document.createElement("p");
globpara2.setAttribute("class","fw-bolder")
glob.appendChild(globpara2);
globpara2.innerHTML = "All Around the Globe"

let globpara3 = document.createElement("p");
glob.appendChild(globpara3);
globpara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."

//div2:5
let fast = document.createElement("div");
fast.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(fast);

let fastpara1 = document.createElement("p");
fastpara1.setAttribute("class","fw-bolder")
fast.appendChild(fastpara1);
fastpara1.innerHTML = "05";

let fastpara2 = document.createElement("p");
fastpara2.setAttribute("class","fw-bolder")
fast.appendChild(fastpara2);
fastpara2.innerHTML = "Fast and Affordable"

let fastpara3 = document.createElement("p");
fast.appendChild(fastpara3);
fastpara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."

//div2:6
let modern = document.createElement("div");
modern.setAttribute("class","col-12 col-md-5 col-lg-3 benefits mt-3");
div48.appendChild(modern);

let modernpara1 = document.createElement("p");
modernpara1.setAttribute("class","fw-bolder")
modern.appendChild(modernpara1);
modernpara1.innerHTML = "06";

let modernpara2 = document.createElement("p");
modernpara2.setAttribute("class","fw-bolder")
modern.appendChild(modernpara2);
modernpara2.innerHTML = "An Modern Aircrafts"

let modernpara3 = document.createElement("p");
modern.appendChild(modernpara3);
modernpara3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."