/*modified by Ricky Jj*/
//definng global variable.
var imageGallery = ( function ( ) {
var sliderInd = 0; //defining global index to count slide images.
homepageBanner = function() {
var i;
var banners = document.getElementsByClassName("banner");
for (i = 0; i < banners.length; i++) { //looping other baner images to hide.
banners[i].style.display = "none";
}
sliderInd++;
if (sliderInd > banners.length) {sliderInd = 1}
if( banners[sliderInd-1] != undefined){
banners[sliderInd-1].style.display = "block"; //applying styles for slider image
}
setTimeout(this.homepageBanner, 1000); //defining setTimeout to call recursive method with time of 3000 ms
},
addListeners=function(){
var items = document.getElementsByClassName("image"); //getting img elements by CSS class name to register event
for (let index = 0; index < items.length; index++) {
const element = items[index];
element.addEventListener("mouseover", this.loadFullImage, false);
}
  
},
loadFullImage =function (event) // mouse over event handler function to load full image
{ console.log(event.target.src);
document.getElementById("fullImage").innerHTML = '<img src="'+event.target.src+'"/>'; //adding full image to DIV
} ,
retObject = {

//public function in return object will be exposed to other members.
init :function ( ) {
  
homepageBanner(); // calling preive method to load slider
addListeners(); // calling pricate method to register mouse over events
  
  
}
};
//returning the object.
return retObject;
})();
//calling a privileged method of module
imageGallery.init();