var margin = document.createElement("div");
margin.setAttribute("class", "margin");

var row = document.createElement("div");
row.setAttribute("class", "row modified d-flex justify-content-between");

var col = document.createElement("div");
col.setAttribute("class", "col-sm-12 col-md-12 col-lg-3");

var form = document.createElement("form");
form.setAttribute("class", "mt-3 mb-5 form-style");

var title = document.createElement("h1");
title.innerText = "Form Submission:";

///////firstname////////////

var fname = lable("fname", "First Name:");
var Infname = input("text", "fname", "fname", "form-control", "First Name");
var br1 = brack();


///////lasttname////////////

var lname = lable("lname", "Last Name:");
var Inlname = input("text", "lname", "lname", "form-control", "Last Name");
var br2 = brack();


///////Address Line 1////////////

var addressLine1 = lable("address1", "Address Line 1:");
var InaddressLine1 = input("text", "address1", "address1", "form-control", "Address Line 1");
var br3 = brack();

///////Address Line 2////////////

var addressLine2 = lable("address2", "Address Line 2:");
var InaddressLine2 = input("text", "address2", "address2", "form-control", "Address Line 2");
var br4 = brack();


////////////PIN////////////

var PIN = lable("pin", "Pincode:");
var InPIN = input("number", "pin", "pin", "form-control", "Pincode");
var br5 = brack();

//////////////////gender//////////////////

var gender = lable("gender", "Gender:");
var br6 = brack();

var Inmale = input("radio", "gender", "gender", "gender m-2 mb-2", "Male");
Inmale.setAttribute("value", "Male");

var span1 = document.createElement("span");
span1.innerHTML = "Male";

var Infemale = input("radio", "gender", "gender", "gender m-2 mb-2", "female", "female");
Infemale.setAttribute("value", "female");

var span2 = document.createElement("span");
span2.innerHTML = "Female";

var br7 = brack();
var br8 = brack();


//////////food//////////////////

var food = lable("food", "Choice of Food");
var span3 = document.createElement("span");
span3.setAttribute("class", "span")
span3.innerHTML = "(must choose at least 2 out of 5 options)";
food.append(span3);
var br9 = brack();

var northIndian = inputfood("checkbox", "food", "north Indian", "food", "food m-2");
var span4 = document.createElement("span");
span4.innerHTML = "NorthIndian";
var br10 = brack();


var southIndian = inputfood("checkbox", "food", "south Indian", "food", "food m-2");
var span5 = document.createElement("span");
span5.innerHTML = "SouthIndian";
var br11 = brack();


var Chinese = inputfood("checkbox", "food", "Chinese", "food", "food m-2");
var span6 = document.createElement("span");
span6.innerHTML = "Chinese";
var br12 = brack();


var Japanese = inputfood("checkbox", "food", "japanese", "food", "food m-2");
var span7 = document.createElement("span");
span7.innerHTML = "Japanese";
var br13 = brack();


var SeaFood = inputfood("checkbox", "food", " sea-Food", "food", "food m-2");
var span8 = document.createElement("span");
span8.innerHTML = "Sea Food";
var br14 = brack();
var br15 = brack();

//////////state/////////////////

var state = lable("state", "State:");
var Instate = input("text", "state", "state", "form-control", "State");
var br16 = brack();

//////////country/////////////////

var country = lable("country", "Country:");
var Incountry = input("text", "country", "country", "form-control", "Country");
var br17 = brack();


///////button////////
var button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("id", "submit");
button.setAttribute("class", "form-control btn btn-primary");
button.innerHTML = "Submit";

/////////////////////////////////////////////

form.append(title, fname, Infname, br1, lname, Inlname, br2, addressLine1, InaddressLine1, br3, addressLine2, InaddressLine2, br4, PIN, InPIN, br5, gender, br6, Inmale, span1, Infemale, span2, br7, br8, food, br9, northIndian, span4, br10, southIndian, span5, br11, Chinese, span6, br12, Japanese, span7, br13, SeaFood, span8, br14, br15, state, Instate, br16, country, Incountry, br17, button);
col.append(form);


////////////////////////////////////////////////////////
var secCol = document.createElement("div");
secCol.setAttribute("class", "col col-sm-12 col-md-12 col-lg-8");

var h1 = document.createElement("h1");
h1.innerHTML = "Temporary Database";
var br18 = brack();

////////////table///////////////

var table = document.createElement("table");
table.setAttribute("class", "table table-striped");

/////////thead///////////////////
var thead = document.createElement("thead");
thead.setAttribute("class", "bg-light text-dark ");


/////////////tr///////////////////////

var tr = document.createElement("tr");

////////////td////////////

var Fn = td("First Name");
var Ln = td("Last Name");
var Ad = td("Address");
var Pi = td("Pincode");
var Gen = td("Gender");
var Fo = td("Food");
var St = td("State");
var Co = td("Country");

tr.append(Fn, Ln, Ad, Pi, Gen, Fo, St, Co);

thead.append(tr);



var tbody = document.createElement("tbody");
tbody.setAttribute("class", "tbody");
tbody.setAttribute("id", "tbody");


table.append(thead, tbody);
/////////////////////////////

secCol.append(h1, br18, table);

////////////////////////////
row.append(col, secCol);
margin.append(row);

document.body.append(margin);



/////////////////////////////lable///////////////////////
function lable(atval, content) {
    var lab = document.createElement("lable");
    lab.setAttribute("for", atval);
    lab.innerText = content;
    return lab;
}

///////////////////input////////////////////////////////////

function input(atval1, atval2, atval3, atval4, atval5) {
    var lab = document.createElement("input");
    lab.setAttribute("type", atval1);

    lab.setAttribute("id", atval2);

    lab.setAttribute("name", atval3);

    lab.setAttribute("class", atval4);

    lab.setAttribute("placeholder", atval5);


    return lab;
}



///////////////////input for food////////////////////////////////////

function inputfood(atval1, atval2, atval3, atval4, atval5, content) {
    var lab = document.createElement("input");
    lab.setAttribute("type", atval1);

    lab.setAttribute("name", atval2);

    lab.setAttribute("value", atval3);

    lab.setAttribute("id", atval4);

    lab.setAttribute("class", atval5);

    lab.innerText = content;
    return lab;
}

////////////line breaker//////////////////
function brack() {
    var ele = document.createElement("br");
    return ele
}



/////////////td//////////////
function td(content) {
    var ele = document.createElement("td");
    ele.innerHTML = content;
    return ele;
}





///////////////////////////////Js///////////////////////////////////////////

let submit = document.getElementById("submit")
submit.addEventListener("click", function (e) {
    e.preventDefault();
    let address = [];
    address.push(address1.value)
    address.push(address2.value)

    let gender = document.getElementsByName("gender")
    let genderValue;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value
        }
    }

    let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if (foodList.length >= 2) {
        result = foodList.join(", ")
    } else {
        result = alert("Choose atleast 2 options out of 5 in food")
    }

    createTable(fname.value, lname.value, address.join(" "), pin.value, genderValue, result, state.value, country.value)
    fname.value = ""
    lname.value = ""
    address1.value = ""
    address2.value = ""
    pin.value = ""
    gender.value = ""
    foodList = [];
    state.value = ""
    country.value = ""
})

fname = document.getElementById("fname")
lname = document.getElementById("lname")
let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let pin = document.getElementById("pin")
gender = document.getElementById("gender")
food = document.getElementById("food")
state = document.getElementById("state")
country = document.getElementById("country")


function createTable(fname, lname, address, pincode, gender, food, state, country) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
}