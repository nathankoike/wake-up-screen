// get control of the canvas, its container, and context
let Cvs = document.getElementById('scrn');
let Ctx = Cvs.getContext("2d");

// this is the color of the canvas. it is a placeholder color and will be
// overwritten by the rest of the code
let Color = "#555555";

// this is the target timezone ans can be overwritten by the user in the future
let Timezone = 'America/New_York';

// this is the target time and can be overwritten by the user in the future
let Target = "03:18";

// initialize the canvas
function init() {
  // set the height and width of the canvas to take up most of the screen
  Cvs.height = Math.ceil(window.screen.availHeight * 1); // 100% of the height
  Cvs.width = Math.ceil(window.screen.availWidth * .99); // 98% of the width

  // mostly center the canvas on the screen
  Cvs.style.marginLeft = "0";
  Cvs.style.marginRight = "1vw";
  Cvs.style.marginTop = "1vh";
  Cvs.style.marginBottom = "2vh";
}

// color the canvas
function changeColor() {
  // clear the current color
  Ctx.clearRect(0, 0, Cvs.width, Cvs.height)

  // allow for drawing
  Ctx.beginPath;

  // set the fill color
  Ctx.fillStyle = Color;

  // select the whole canvas
  Ctx.rect(0, 0, Cvs.width, Cvs.height)

  // fill the canvas with the selected color
  Ctx.fill();

  // finish drawing
  Ctx.closePath();
}

// get the color that the screen should be
function getColor(currentTime){
  console.log("getting color");

  // check to see if the time is equal to the target
  if (currentTime == Target)
    return "#FF8800";

  return "black";
}

// check to see if we need to change the color of the screen, then change it if
// necessary
function setColor(){
  console.log("setting color");

  // get the current date and time information
  let present = new Date(Date.now());

  // get the current time as a string
  let currentTime = present.toLocaleString('en-GB',
                                            {timeZone:Timezone})
                                            .split(",")[1].slice(1, 6)

  // get the new color of the screen
  let newColor = getColor(currentTime)

  // check to see if the color needs to be changes
  if (Color != newColor){
    // change the global color
    Color = newColor;

    changeColor(); // change the color to reflect the chnge in time
  }
}

init();
changeColor();

// while (true)
  setColor();
