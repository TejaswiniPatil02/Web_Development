let ticket = document.getElementById("ticket");

//Ticket body
let ticketBody = document.createElement("section");
ticketBody.setAttribute("class","section1")
ticket.appendChild(ticketBody);

let ticketdiv = document.createElement("div");
ticketdiv.setAttribute("class","container px-5");
ticketBody.appendChild(ticketdiv);

let ticketdiv2 = document.createElement("div");
ticketdiv2.setAttribute("class","text-center py-3 text-center");
ticketdiv.appendChild(ticketdiv2);

let ticketdiv3 = document.createElement("div");
ticketdiv3.setAttribute("class","row justify-content-end border-bottom border-4 ");
ticketdiv2.appendChild(ticketdiv3);

let ticketimage = document.createElement("div");
ticketimage.setAttribute("class","col d-none d-md-block");
ticketdiv3.appendChild(ticketimage);

let ticketlogo = document.createElement("img");
ticketlogo.setAttribute("src","images/Logo1.png");
ticketlogo.setAttribute("class","w-25");
ticketimage.appendChild(ticketlogo);

let ticketh2 = document.createElement("div");
ticketh2.setAttribute("class","col align-self-center");
ticketdiv3.appendChild(ticketh2);

let ticketh2text = document.createElement("h2");
ticketh2text.setAttribute("class","text-light mb-0");
ticketh2text.innerHTML = "FILL THE DETAILS"
ticketh2.appendChild(ticketh2text);

//form 


let form = document.createElement("form");
form.setAttribute("id","form");
// form.setAttribute("action","action_page.php");
// form.setAttribute("method","post");
ticketdiv.appendChild(form);

//row1
let divrow1 = document.createElement("div");
divrow1.setAttribute("class","row");
form.appendChild(divrow1);

//first name
let namediv = document.createElement("div");
namediv.setAttribute("class","mb-3 col-md-6");
divrow1.appendChild(namediv);

let namelabel = document.createElement("label");
namelabel.setAttribute("class","form-label fw-bold fs-5");
namelabel.innerHTML = "First name"
namediv.appendChild(namelabel);

let nameinput = document.createElement("input");
nameinput.setAttribute("type","text");
nameinput.setAttribute("id","userName");
nameinput.setAttribute("name","fname");
nameinput.setAttribute("placeholder","Enter your first name");
nameinput.setAttribute("class","form-control ");
nameinput.setAttribute("required","");
namediv.appendChild(nameinput);


//last name
let lastnamediv = document.createElement("div");
lastnamediv.setAttribute("class","mb-3 col-md-6");
divrow1.appendChild(lastnamediv);

let namelabe2 = document.createElement("label");
namelabe2.setAttribute("class","form-label fw-bold fs-5");
namelabe2.innerHTML = "Last name"
lastnamediv.appendChild(namelabe2);

let lastnameinput = document.createElement("input");
lastnameinput.setAttribute("type","text")
lastnameinput.setAttribute("id","userLastName")
lastnameinput.setAttribute("placeholder","Enter your last name")
lastnameinput.setAttribute("class","form-control ");
lastnameinput.setAttribute("required","");
lastnamediv.appendChild(lastnameinput);

//select flight div
let divrow2 = document.createElement("div");
divrow2.setAttribute("class","row");
form.appendChild(divrow2);

let flightdiv = document.createElement("div");
flightdiv.setAttribute("class","mb-3 col-md-6");
divrow2.appendChild(flightdiv);

let flightlabel = document.createElement("label");
flightlabel.setAttribute("class","form-label fw-bold fs-5");
flightlabel.innerHTML = "Select Flight"
flightdiv.appendChild(flightlabel);

let selectoptions = document.createElement("select");
selectoptions.setAttribute("class","form-select");
selectoptions.setAttribute("id","flightno");
selectoptions.setAttribute("placeholder","Select your flight");
flightdiv.appendChild(selectoptions);

let flightoptions = ["Select your flight","FA001","FA002","FA003","FA004"];

for(i=0;i<flightoptions.length;i++){
    let options = document.createElement("option");
    options.setAttribute("value",flightoptions[i]);
    options.innerHTML = flightoptions[i];
    selectoptions.appendChild(options);
}

//Age div
let agediv = document.createElement("div");
agediv.setAttribute("class","mb-3 col-md-6");
divrow2.appendChild(agediv);

let agelabel = document.createElement("label");
agelabel.setAttribute("class","form-label fw-bold fs-5");
agelabel.innerHTML = "Age"
agediv.appendChild(agelabel);

let ageinput = document.createElement("input");
ageinput.setAttribute("type","number")
ageinput.setAttribute("id","age")
ageinput.setAttribute("placeholder","Enter your age")
ageinput.setAttribute("class","form-control ");
ageinput.setAttribute("required","");
agediv.appendChild(ageinput);

//travel date
let divrow3 = document.createElement("div");
divrow3.setAttribute("class","row");
form.appendChild(divrow3);

let datediv = document.createElement("div");
datediv.setAttribute("class","mb-3 col-md-6");
divrow3.appendChild(datediv);

let datelabel = document.createElement("label");
datelabel.setAttribute("class","form-label fw-bold fs-5");
datelabel.innerHTML = "Travel Date :"
datediv.appendChild(datelabel);

let dateinput = document.createElement("input");
dateinput.setAttribute("type","date")
dateinput.setAttribute("id","date")
dateinput.setAttribute("class","form-control ");
dateinput.setAttribute("required","");
datediv.appendChild(dateinput);

//Flight class select
let divrow4 = document.createElement("div");
divrow4.setAttribute("class","row");
form.appendChild(divrow4);

let flightclassdiv = document.createElement("div");
flightclassdiv.setAttribute("class","mb-3 col-md-6");
divrow4.appendChild(flightclassdiv);

let flightclasslabel = document.createElement("label");
flightclasslabel.setAttribute("class","form-label fw-bold fs-5");
flightclasslabel.innerHTML = "Select Flight"
flightclassdiv.appendChild(flightclasslabel);

let flightselectoptions = document.createElement("select");
flightselectoptions.setAttribute("class","form-select");
flightselectoptions.setAttribute("id","Flight_class");
flightselectoptions.setAttribute("placeholder","Select Flight Class");
flightclassdiv.appendChild(flightselectoptions);

let flightclassoptions = ["Select Flight Class","First Class"," Business Class","Economy Class"];

for(i=0;i<flightclassoptions.length;i++){
    let classoptions = document.createElement("option");
    classoptions.setAttribute("value",flightclassoptions[i]);
    classoptions.innerHTML = flightclassoptions[i];
    flightselectoptions.appendChild(classoptions);
}

//Select seat
let seatdiv = document.createElement("div");
seatdiv.setAttribute("class","mb-3 col-md-6");
divrow4.appendChild(seatdiv);

let seatlabel = document.createElement("label");
seatlabel.setAttribute("class","form-label fw-bold fs-5");
seatlabel.innerHTML = "Select Seat"
seatdiv.appendChild(seatlabel);

let seatselectoptions = document.createElement("select");
seatselectoptions.setAttribute("class","form-select");
seatselectoptions.setAttribute("id","Seat_no");
seatselectoptions.setAttribute("placeholder","Select Seat");
seatdiv.appendChild(seatselectoptions);

let seatoptions = ["Select Seat","A/001","B/002","C/003"];

for(i=0;i<flightclassoptions.length;i++){
    let seatoptions1 = document.createElement("option");
    seatoptions1.setAttribute("value",seatoptions[i]);
    seatoptions1.innerHTML = seatoptions[i];
    seatselectoptions.appendChild(seatoptions1);
}

//Select From 
let divrow5 = document.createElement("div");
divrow5.setAttribute("class","row");
form.appendChild(divrow5);

let fromdiv = document.createElement("div");
fromdiv.setAttribute("class","mb-3 col-md-6");
divrow5.appendChild(fromdiv);

let fromlabel = document.createElement("label");
fromlabel.setAttribute("class","form-label fw-bold fs-5");
fromlabel.innerHTML = "Select From City"
fromdiv.appendChild(fromlabel);

let fromselectoptions = document.createElement("select");
fromselectoptions.setAttribute("class","form-select");
fromselectoptions.setAttribute("id","From_city");
fromselectoptions.setAttribute("placeholder","Select From City");
fromdiv.appendChild(fromselectoptions);

let fromoptions = ["Select From City","Kolhapur","Mumbai","Pune","Banglore"];

for(i=0;i<=flightclassoptions.length;i++){
    let fromoptions1 = document.createElement("option");
    fromoptions1.setAttribute("value",fromoptions[i]);
    fromoptions1.innerHTML = fromoptions[i];
    fromselectoptions.appendChild(fromoptions1);
}

//Select To
let todiv = document.createElement("div");
todiv.setAttribute("class","mb-3 col-md-6");
divrow5.appendChild(todiv);

let tolabel = document.createElement("label");
tolabel.setAttribute("class","form-label fw-bold fs-5");
tolabel.innerHTML = "Select To City"
todiv.appendChild(tolabel);

let toselectoptions = document.createElement("select");
toselectoptions.setAttribute("class","form-select");
toselectoptions.setAttribute("id","To_city");
toselectoptions.setAttribute("placeholder","Select To City");
todiv.appendChild(toselectoptions);

let tooptions = ["Select To City","Goa","Delhi","Kedarnath","Ladakh"];

for(i=0;i<tooptions.length;i++){
    let tooptions1 = document.createElement("option");
    tooptions1.setAttribute("value",tooptions[i]);
    tooptions1.innerHTML = tooptions[i];
    toselectoptions.appendChild(tooptions1);
}

//Submit Button div
let btndiv = document.createElement("div");
btndiv.setAttribute("class","text-center py-5");
form.appendChild(btndiv)

let button = document.createElement("button");
button.setAttribute("class","btn border border-rounded bg-warning fw-bold");
button.innerHTML = "GENERATE TICKET";
button.setAttribute("type","button");
button.setAttribute("value","Submit");
button.setAttribute("onclick","flightTicket")
btndiv.appendChild(button);



// Flight Ticket 


button.addEventListener("click",flightTicket)
function flightTicket(){

    passangerFirstName = document.getElementById("userName").value;
    passangerLastName  = document.getElementById("userLastName").value;
    passangerFlight  = document.getElementById("flightno").value;
    passangerAge  = document.getElementById("age").value;
    passangerTravelDate  = document.getElementById("date").value;
    passangerFlightClass  = document.getElementById("Flight_class").value;
    passangerSeat  = document.getElementById("Seat_no").value;
    passangerFromCity  = document.getElementById("From_city").value;
    passangerToCity  = document.getElementById("To_city").value;



    let TicketDivFlight = document.createElement("div");
    TicketDivFlight.setAttribute("class","text-center");
    TicketDivFlight.setAttribute("id","maindiv");
    ticket.appendChild(TicketDivFlight);

    let ticketdiv1= document.createElement("div");
    ticketdiv1.setAttribute("class","bg-World row border-3 h-75 rounded-4 mx-auto py-3 my-5 justify-content-evenly ");
    TicketDivFlight.appendChild(ticketdiv1);

    let ticketinnerdiv = document.createElement("div");
    ticketinnerdiv.setAttribute("class","col-lg-7");
    ticketdiv1.appendChild( ticketinnerdiv);

    let ticketrowdiv = document.createElement("div");
    ticketrowdiv.setAttribute("class","row my-3");
    ticketinnerdiv.appendChild( ticketrowdiv);

    let ticketnamediv = document.createElement("div");
    ticketnamediv.setAttribute("class","col-12 name d-flex justify-content-evenly py-3");
    ticketrowdiv.appendChild( ticketnamediv);

    let passangerName = document.createElement("h5");
    passangerName.setAttribute("class","fw-bold mb-0 align-self-center text-uppercase ");
    passangerName.innerHTML = "Passanger Name -";
    ticketnamediv.appendChild(passangerName);

    let passangerNameh2 = document.createElement("h2");
    passangerNameh2.setAttribute("class","fw-bold text-uppercase ");
    passangerNameh2.innerHTML = passangerFirstName +" "+ passangerLastName;
    ticketnamediv.appendChild(passangerNameh2);

    //Flight No
    let ticketinnerdiv2 = document.createElement("div");
    ticketinnerdiv2.setAttribute("class","col-6 col-md-3 Flight");
    ticketrowdiv.appendChild( ticketinnerdiv2);

    let passangerFlightNo = document.createElement("h4");
    passangerFlightNo.setAttribute("class","fw-bold mb-0 align-self-center");
    passangerFlightNo.innerHTML = "Flight";
    ticketinnerdiv2.appendChild(passangerFlightNo);

    let passangerFlighth3 = document.createElement("h3");
    passangerFlighth3.setAttribute("class","fw-bold text-uppercase ");
    passangerFlighth3.innerHTML = passangerFlight;
    ticketinnerdiv2.appendChild(passangerFlighth3);

    //Date
    let ticketinnerdiv3 = document.createElement("div");
    ticketinnerdiv3.setAttribute("class","col-6 col-md-3 Flight");
    ticketrowdiv.appendChild( ticketinnerdiv3);

    let passangerFlightDate = document.createElement("h4");
    passangerFlightDate.setAttribute("class","fw-bold mb-0 align-self-center");
    passangerFlightDate.innerHTML = "Date";
    ticketinnerdiv3.appendChild(passangerFlightDate);

    let passangerDateh3 = document.createElement("h3");
    passangerDateh3.setAttribute("class","fw-bold ");
    passangerDateh3.innerHTML = passangerTravelDate;
    ticketinnerdiv3.appendChild(passangerDateh3);

    //Seat
    let ticketinnerdiv4 = document.createElement("div");
    ticketinnerdiv4.setAttribute("class","col-6 col-md-3 Flight");
    ticketrowdiv.appendChild( ticketinnerdiv4);

    let passangerFlightSeat = document.createElement("h4");
    passangerFlightSeat.setAttribute("class","fw-bold mb-0 align-self-center");
    passangerFlightSeat.innerHTML = "Seat";
    ticketinnerdiv4.appendChild(passangerFlightSeat);

    let passangerSeath3 = document.createElement("h3");
    passangerSeath3.setAttribute("class","fw-bold ");
    passangerSeath3.innerHTML = passangerSeat;
    ticketinnerdiv4.appendChild(passangerSeath3);

    //Class 
    let ticketinnerdiv5 = document.createElement("div");
    ticketinnerdiv5.setAttribute("class","col-6 col-md-3 Flight");
    ticketrowdiv.appendChild( ticketinnerdiv5);

    let passangerClass = document.createElement("h4");
    passangerClass .setAttribute("class","fw-bold mb-0 align-self-center");
    passangerClass .innerHTML = "Class";
    ticketinnerdiv5.appendChild(passangerClass );

    let passangerClassName = document.createElement("h3");
    passangerClassName.setAttribute("class","fw-bold ");
    passangerClassName.innerHTML = passangerFlightClass;
    ticketinnerdiv5.appendChild(passangerClassName);

    


    //Travel Root

    let root = document.createElement("div");
    root.setAttribute("class","row  px-2 text-center py-3 mx-3 border border-dark border-4 rounded-2");
    ticketinnerdiv.appendChild(root);

    //from
    let from = document.createElement("div");
    from.setAttribute("class","col-12 col-md-5 from_div align-self-center");
    root.appendChild(from);

    let fromh2 = document.createElement("h2");
    fromh2.setAttribute("class","mb-0 fw-bold");
    fromh2.innerHTML = passangerFromCity;
    from.appendChild(fromh2);

    //icon
    let aeroplaneIcon = document.createElement("div");
    aeroplaneIcon.setAttribute("class","col-12 col-md-2 fa-solid fa-plane fs-1");
    root.appendChild(aeroplaneIcon);

    //To
    let To = document.createElement("div");
    To.setAttribute("class","col-12 col-md-5 from_div align-self-center");
    root.appendChild(To);

    let Toh2 = document.createElement("h2");
    Toh2.setAttribute("class","mb-0 fw-bold");
    Toh2.innerHTML = passangerToCity;
    To.appendChild(Toh2);
    
    //Scanner Div

    let Scanner = document.createElement("div");
    Scanner.setAttribute("class","Gate_boarding row  px-3 pt-4 justify-content-evenly");
    ticketinnerdiv.appendChild(Scanner);

    let scanner1 = document.createElement("img");
    scanner1.setAttribute("src","images/istockphoto-828088276-612x612.jpg");
    scanner1.setAttribute("class","w-25 mb-3");
    Scanner.appendChild(scanner1);

    let gateNumber = document.createElement("div");
    gateNumber.setAttribute("class","gate_div col-6 col-md-3 To_div align-self-center ");
    Scanner.appendChild(gateNumber);

    let gateh2 = document.createElement("h4");
    gateh2.innerHTML = "Gate No."
    gateh2.setAttribute("class","fw-bold text-danger");
    gateNumber.appendChild(gateh2);

    let gateh3 = document.createElement("h3");
    gateh3.innerHTML = "G-02"
    gateh3.setAttribute("class","fw-bold");
    gateNumber.appendChild(gateh3);



    let boardingTime = document.createElement("div");
    boardingTime.setAttribute("class","bording_div col-6 col-md-3 To_div align-self-center  ");
    Scanner.appendChild(boardingTime);

    let Timeh2 = document.createElement("h4");
    Timeh2.innerHTML = "Boarding Time"
    Timeh2.setAttribute("class","fw-bold text-danger");
    boardingTime.appendChild(Timeh2);

    let date = new Date();
    let flightTime = date.getHours() + 4 + ":";
    let flightHours = date.getMinutes();


    let Timeh3 = document.createElement("h3");
    Timeh3.innerHTML = flightTime + "" + flightHours;
    Timeh3.setAttribute("class","fw-bold");
    boardingTime.appendChild(Timeh3);


    

    //Section 2 of Ticket

    let sideTicket = document.createElement("div");
    sideTicket.setAttribute("class","col-lg-4 orangeTwo");
    ticketdiv1.appendChild(sideTicket);

    let sideName = document.createElement("div");
    sideName.setAttribute("class"," name2 py-3 ");
    sideTicket.appendChild(sideName);

    let sideNamePassanger = document.createElement("h4");
    sideNamePassanger.setAttribute("class","text-light mb-0 text-uppercase");
    sideNamePassanger.innerHTML = "Passanger Name -";
    sideName.appendChild(sideNamePassanger);

    let sideNamePassangerh3 = document.createElement("h3");
    sideNamePassangerh3.setAttribute("class","text-light mb-0 text-uppercase");
    sideNamePassangerh3.innerHTML = passangerFirstName + " " + passangerLastName;
    sideName.appendChild(sideNamePassangerh3);

    //2nd row
    let sideFlight = document.createElement("div");
    sideFlight.setAttribute("class","row flight_seat py-3 ");
    sideTicket.appendChild(sideFlight);

    //Flight No
    let sideFlightSeat = document.createElement("div");
    sideFlightSeat.setAttribute("class","col-6 Flight");
    sideFlight.appendChild(sideFlightSeat);

    let sideFlighth4 = document.createElement("h4");
    sideFlighth4.setAttribute("class","text-light mb-0");
    sideFlighth4.innerHTML = "Flight";
    sideFlightSeat.appendChild(sideFlighth4);

    let sideFlighth3 = document.createElement("h3");
    sideFlighth3.setAttribute("class","text-light mb-0");
    sideFlighth3.innerHTML = passangerFlight;
    sideFlightSeat.appendChild(sideFlighth3);

    //Seat
    let sideSeat = document.createElement("div");
    sideSeat.setAttribute("class","col-6 Flight");
    sideFlight.appendChild(sideSeat);

    let sideSeath4 = document.createElement("h4");
    sideSeath4.setAttribute("class","text-light mb-0");
    sideSeath4.innerHTML = "Seat";
    sideSeat.appendChild(sideSeath4);

    let sideSeath3 = document.createElement("h3");
    sideSeath3.setAttribute("class","text-light mb-0");
    sideSeath3.innerHTML = passangerSeat;
    sideSeat.appendChild(sideSeath3);

    //date Row
    let sideDate = document.createElement("div");
    sideDate.setAttribute("class","row");
    sideTicket.appendChild(sideDate);

    //Date
    let sideFlightDate = document.createElement("div");
    sideFlightDate.setAttribute("class","col-6 Date2 mx-auto");
    sideDate.appendChild(sideFlightDate);

    let sideDateh4 = document.createElement("h4");
    sideDateh4.setAttribute("class","text-light ");
    sideDateh4.innerHTML = "Date";
    sideFlightDate.appendChild(sideDateh4);

    let sideDateh3 = document.createElement("h3");
    sideDateh3.setAttribute("class","text-light mb-0 fw-bold w-100");
    sideDateh3.innerHTML = passangerTravelDate;
    sideFlightDate.appendChild(sideDateh3);

    //Gate No
    let sideGate = document.createElement("div");
    sideGate.setAttribute("class","gate2_div col-6 To_div align-self-center ");
    sideDate.appendChild(sideGate);

    let sideGateh4 = document.createElement("h4");
    sideGateh4.setAttribute("class","fw-bold text-danger ");
    sideGateh4.innerHTML = "Gate No.";
    sideGate.appendChild(sideGateh4);

    let sideGateh3 = document.createElement("h3");
    sideGateh3.setAttribute("class","fw-bold text-light");
    sideGateh3.innerHTML = "G-02";
    sideGate.appendChild(sideGateh3);

    //Side Scanner

    let sideScanner = document.createElement("div");
    sideScanner.setAttribute("class","text-center mx-auto pt-5");
    sideTicket.appendChild(sideScanner);

    let scanner = document.createElement("img");
    scanner.setAttribute("src","images/istockphoto-828088276-612x612.jpg");
    scanner.setAttribute("class","w-50 mb-3");
    sideScanner.appendChild(scanner);
}