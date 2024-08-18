
//document.querySelector("button").addEventListener("click", handleClick) //we cant use habdleClick() as it will show the function when we refresh the page, so we add its name to be worked when the click is done
//function handleClick () {
    //alert("I Got Clicked");
//}
//it also can be added as an aynonemus function as document.queryelector("button").addEventListner("click", function () {alert("I Got clicked")})
// var noOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<noOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I Got Cliced");
//     });

// }//loops
// //  var noOfDrumButtons = document.querySelectorAll(".drum").length;
// //   for (var i = 0; i<noOfDrumButtons; i++) {
// //   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// //     this.style.color = "Blue";
// //   }); //used this when we try to add a thing to that function
    
// };
//loops


var noOfDrumButtons = document.querySelectorAll(".drum").length;
  for (var i = 0; i<noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "cyan";

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}); 
}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "h":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "m": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "e":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "n":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        
        case "f":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break; 

    default: console.log(key);

}
}
// to add animation and remove it fro the site//
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function() {
    activeButton.classList.remove("pressed")
    }, 100);
}
