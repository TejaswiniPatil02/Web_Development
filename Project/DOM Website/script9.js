let demo9 = document.getElementById("div1");

//section9 : Enquire
let div91 = document.createElement("div");
div91.setAttribute("class","container-fluid enquire-img");
demo9.appendChild(div91);

let enquirediv = document.createElement("div");
enquirediv.setAttribute("class","w-75 m-auto d-block");
div91.appendChild(enquirediv)

let enquieqh2 = document.createElement("h3");
enquieqh2.setAttribute("class","text-center text-white p-lg-5 p-md-5 p-3");
enquieqh2.innerHTML = "Tell us your requirements and one of our charter experts will send you a quote.";
enquirediv.appendChild(enquieqh2);

let enquirep2 = document.createElement("p");
enquirep2.setAttribute("class","text-white text-center");
enquirep2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?";
enquirediv.appendChild(enquirep2);

let enquirebtn = document.createElement("button");
enquirebtn.setAttribute("class","btn text-warning border border-warning mx-auto d-block mt-3");
enquirebtn.innerHTML = "ENQUIRE NOW";
enquirediv.appendChild(enquirebtn);