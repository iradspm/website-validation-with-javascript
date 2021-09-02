/*modified by Ricky Jj*/
//Called when the button is clicked in the new form

function writeDataToSection(e){

//we fetch value of input and simply apply loop that many number of times to give the output.

var number=document.getElementsByName("numberOfGuests")[0].value;

for(let i=0;i<number;i++){

document.getElementById("pageForm").innerHTML +="<form onsubmit=\"return readData()\"><label for=\"recipientName\">Recipient name:</label><input type=\"text\" name=\"recipientName\" placeholder=\"Enter your Recipient Name\" /><label for=\"organizationName\">Organization name:</label><input type=\"text\" name=\"organizationName\" placeholder=\"Enter your Organization Name\" /><label for=\"eventDate\">Event Date:</label><input type=\"text\" name=\"eventDate\" placeholder=\"Enter your Event Date\" /><label for=\"websiteURL\">URL:</label><input type=\"text\" name=\"websiteURL\" placeholder=\"Enter your Website URL\" /><label for=\"hostName\">Host name:</label><input type=\"text\" name=\"hostName\" placeholder=\"Host Name\" /><input type=\"submit\" value=\"Submit\"></form>";

}

}

function readData() {

// read input data

var recipientName = document.getElementsByName("recipientName")[0].value;

var organizationName = document.getElementsByName("organizationName")[0].value;

var eventDate = document.getElementsByName("eventDate")[0].value;

var websiteURL = document.getElementsByName("websiteURL")[0].value;

var hostName = document.getElementsByName("hostName")[0].value;

// validating the input data (trim is user truncate the whitespaces)

if (

recipientName.trim() == "" ||

organizationName.trim() == "" ||

eventDate.trim() == "" ||

websiteURL.trim() == "" ||

hostName.trim() == ""

) {

alert("Please fill the data.");

} else {

// set all value to display content

document.getElementById("recipientName").innerText = recipientName;

document.getElementById("organizationName").innerText = organizationName;

document.getElementById("eventDate").innerText = eventDate;

document.getElementById("websiteURL").innerText = websiteURL;

document.getElementById("hostName").innerText = hostName;

}

return false; // making browser not to refresh

}