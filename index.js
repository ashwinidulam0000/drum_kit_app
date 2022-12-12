let lengthOfButtons = document.getElementsByClassName("drum").length;
console.log(lengthOfButtons);

for (let i = 0; i < lengthOfButtons; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      let buttonInnerHTML =
        document.getElementsByClassName("drum")[i].innerHTML;
      drumSounds(buttonInnerHTML);
    });
  document.addEventListener("keypress", function (event) {
    drumSounds(event.key);
  });
}

function drumSounds(key) {
  switch (key) {
    case "w":
      let crash = new Audio("Asstes/sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("Asstes/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("Asstes/sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("Asstes/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("Asstes/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("Asstes/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("Asstes/sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log();
  }
}