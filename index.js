var numDrums = document.querySelectorAll(".drum").length;
//==============================Button Evemt Handler==========================//
for (i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML)
    buttonanimation(this.innerHTML)
      });
}
//============================Touch event Handler============================//
document.addEventListener("",function(){
  document.querySelector(".drum").classList.add("pressed");
  setTimeout(function(){
  document.querySelector(".drum").classList.remove("pressed");
  },100)
});

//===========================keyboard event Handler==========================//
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonanimation(event.key)
});

//==========================Sound Maker================================//
function makesound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3").play();
      break;
    default:console.log(this.innerHTML);
  }
}

function buttonanimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);
}
