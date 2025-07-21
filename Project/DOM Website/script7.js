let demo7  = document.getElementById("div1");

//Section 7 : Client Says
let div71 = document.createElement("div");
div71.setAttribute("class","container-fluid client-says");
demo7.appendChild(div71);

let div72 = document.createElement("div");
div72.setAttribute("class","container");
div71.appendChild(div72);

//div1
let div73 = document.createElement("div");
div73.setAttribute("class","row");
div72.appendChild(div73);

let div74 = document.createElement("div");
div74.setAttribute("class","col-12 col-md-12 col-lg-4 mt-5 mb-5 ps-2");
div73.appendChild(div74);

let clientp1 = document.createElement("p");
clientp1.setAttribute("class","text-warning");
clientp1.innerHTML = "TESTIMONIALS";
div74.appendChild(clientp1);

let clienth2 = document.createElement("h2");
clienth2.setAttribute("class","text-white");
clienth2.innerHTML = "What Client Says About Flights";
div74.appendChild(clienth2);

let clientp2 = document.createElement("p");
clientp2.setAttribute("class","text-white");
clientp2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?";
div74.appendChild(clientp2);

let clientbtn = document.createElement("button");
clientbtn.setAttribute("class","btn text-warning border border-warning mx-auto d-block");
clientbtn.innerHTML = "VIEW TESTIMONIALS";
div74.appendChild(clientbtn);

//div2
let div75 = document.createElement("div");
div75.setAttribute("class","col-12 col-md-12 col-lg-8 p-5 text-center lh-5");
div73.appendChild(div75);

let review = document.createElement("p");
review.setAttribute("class","text-white p-lg-5");
review.innerHTML = "Nam antimperdiet ex. Sed eget eros suscipit erat condimentum vehicula et egestas nisi. Phasellus pulvinar cursus sem, non placerat nulla elementum eu. Aenean fermentum sem sed gravida tincidunt. Morbi vitae lacus mi. Proin arcu augue, euismod sodales molestie ac, varius e erat, aliquam eget enim sed";
div75.appendChild(review);

//figure testimonials
let figureDiv = document.createElement("div");
figureDiv.setAttribute("class","w-75 mx-auto");
div75.appendChild(figureDiv);

let figure = document.createElement("figure");
figure.setAttribute("class","w-50 mx-auto");
figureDiv.appendChild(figure);

let figureimg = document.createElement("img");
figureimg.setAttribute("src","images/t3.jpg");
figureimg.setAttribute("class","w-25 mx-auto");
figure.appendChild(figureimg);

let figcaption = document.createElement("figcaption");
figcaption.setAttribute("class","pt-3");
figure.appendChild(figcaption);

let figp1 = document.createElement("p");
figp1.setAttribute("class"," fw-light text-light mb-0 ");
figp1.innerHTML = "Colt Porter";
figcaption.appendChild(figp1);

let figp2 = document.createElement("p");
figp2.setAttribute("class"," fw-light text-warning ");
figp2.innerHTML = "Designation";
figcaption.appendChild(figp2);