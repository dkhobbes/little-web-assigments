var mega = document.querySelector(".megaman");

var position = 1;
var direction = "right";

setInterval(function() {
  switch(position) {
    case 1:
      mega.classList.add("position-1")
      mega.classList.remove("position-2")
      break;
    case 2:
      mega.classList.add("position-2")
      mega.classList.remove("position-1")
      mega.classList.remove("position-3")
      break;
    case 3:
      mega.classList.add("position-3")
      mega.classList.remove("position-2")
      break;
  };
  if (direction === "right") {
    position += 1;
  } else {
    position -= 1;
  };
  if (position >= 3) {
    direction = "left";
  };
  if (position <= 1) {
    direction = "right";
  };

}, 500)
