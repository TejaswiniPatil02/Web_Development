let demo8  = document.getElementById("div1");

//Section 7 : Client Says
let div81 = document.createElement("div");
div81.setAttribute("class","container-fluid");
demo8.appendChild(div81);

let div82 = document.createElement("div");
div82.setAttribute("class","container");
div81.appendChild(div82);

let div83 = document.createElement("div");
div83.setAttribute("class","row");
div82.appendChild(div83);

//div1
let div84 = document.createElement("div");
div84.setAttribute("class","col-12 col-md-12 col-lg-4 mt-5");
div83.appendChild(div84);

let packagep1 = document.createElement("p");
packagep1.setAttribute("class","text-warning");
packagep1.innerHTML = "OUR PACKAGES";
div84.appendChild(packagep1);

let packageh2 = document.createElement("h2");
packageh2.setAttribute("class","")
packageh2.innerHTML = "We Have Best"
div84.appendChild(packageh2);

let packagespan = document.createElement("span");
packagespan.setAttribute("class","text-warning h2");
packageh2.appendChild(packagespan);
let packagespanpara = document.createTextNode(" Luxury Packages ");
packagespan.appendChild(packagespanpara);

let packagespanpara2 = document.createTextNode("For You");
packageh2.appendChild(packagespanpara2);

let packagepara = document.createElement("p");
packagepara.setAttribute("class","mt-4 mb-4");
packagepara.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?";
div84.appendChild(packagepara);

//div2
let div85 = document.createElement("div");
div85.setAttribute("class","col-12 col-md-6 col-lg-4");
div83.appendChild(div85);
let packageimg = document.createElement("div");
packageimg.setAttribute("class","package-img mt-5 ps-3 mb-5 text-center");
div85.appendChild(packageimg);

let packageimgh2 = document.createElement("h5");
packageimgh2.setAttribute("class","text-white fs-4 ps-5 pe-5 pt-5");
packageimgh2.innerHTML = "Modern glamour in Boston";
packageimg.appendChild(packageimgh2);

let packagep2 = document.createElement("p");
packagep2.setAttribute("class","text-white");
packagep2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
packageimg.appendChild(packagep2);

let packageicon = document.createElement("i");
packageicon.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg.appendChild(packageicon);
let packagep3 = document.createElement("p");
packagep3.setAttribute("class","text-white");
packagep3.innerHTML = "Nulla at maximus leo non molestie diam.";
packageimg.appendChild(packagep3);

let packageicon2 = document.createElement("i");
packageicon2.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg.appendChild(packageicon2);
let packagep4 = document.createElement("p");
packagep4.setAttribute("class","text-white");
packagep4.innerHTML = "Suspendisse auctor felis ipsum.";
packageimg.appendChild(packagep4);

let packageicon3 = document.createElement("i");
packageicon3.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg.appendChild(packageicon3);
let packagep5 = document.createElement("p");
packagep5.setAttribute("class","text-white pb-3");
packagep5.innerHTML = "Suspendisse auctor felis ipsum.";
packageimg.appendChild(packagep5);

//div3
let div86 = document.createElement("div");
div86.setAttribute("class","col-12 col-md-6 col-lg-4");
div83.appendChild(div86);
let packageimg2 = document.createElement("div");
packageimg2.setAttribute("class","package-img2 mt-5 ps-3 mb-5 text-center");
div86.appendChild(packageimg2);

let packageimgh22 = document.createElement("h5");
packageimgh22.setAttribute("class","text-white fs-4 ps-5 pe-5 pt-5");
packageimgh22.innerHTML = "Elegant oasis in Chicago";
packageimg2.appendChild(packageimgh22);

let packagep22 = document.createElement("p");
packagep22.setAttribute("class","text-white");
packagep22.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
packageimg2.appendChild(packagep22);

let packageicon22 = document.createElement("i");
packageicon22.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg2.appendChild(packageicon22);
let packagep31 = document.createElement("p");
packagep31.setAttribute("class","text-white");
packagep31.innerHTML = "Nulla at maximus leo non molestie diam.";
packageimg2.appendChild(packagep31);

let packageicon23 = document.createElement("i");
packageicon23.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg2.appendChild(packageicon23);
let packagep41 = document.createElement("p");
packagep41.setAttribute("class","text-white");
packagep41.innerHTML = "Suspendisse auctor felis ipsum.";
packageimg2.appendChild(packagep41);

let packageicon32 = document.createElement("i");
packageicon32.setAttribute("class","bi bi-check-circle text-warning fs-3");
packageimg2.appendChild(packageicon32);
let packagep51 = document.createElement("p");
packagep51.setAttribute("class","text-white pb-3");
packagep51.innerHTML = "Suspendisse auctor felis ipsum.";
packageimg2.appendChild(packagep51);

