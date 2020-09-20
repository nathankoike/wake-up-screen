// get control of the canvas, its container, and context
let Cvs = document.getElementById('scrn');
let Ctx = Cvs.getContext("2d");

// this is the color of the canvas. it is a placeholder color and will be
// overwritten by the rest of the code
let Color = "#555555";

// this is the target timezone ans can be overwritten by the user in the future
let Timezone = 'America/New_York';

// this is the target time and can be overwritten by the user in the future
let Target = "04:23";

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
  // allow for drawing
  Ctx.beginPath;

  // set the fill color
  Ctx.fillStyle = Color;

  // console.log(Color);

  // select the whole canvas
  Ctx.rect(0, 0, Cvs.width, Cvs.height)

  // fill the canvas with the selected color
  Ctx.fill();

  // finish drawing
  Ctx.closePath();
}

// get the color that the screen should be
function getColor(time){
  // get the time difference
  let hDiff = Number(Target.split(':')[0]) - Number(time.split(':')[0]);
  let mDiff = Number(Target.split(':')[1]) - Number(time.split(':')[1]);

  // force the differences to be positive
  hDiff < 0? hDiff = 24 + hDiff: hDiff = hDiff;
  mDiff < 1? mDiff = 60 + mDiff: mDiff = mDiff;

  // get the total difference in minutes
  let tDiff = 60 * hDiff + mDiff

  // check to see if tDiff is 8 hours or less
  if (tDiff <= 480){
    // if the total difference is larger than 255, just max red and move on
    let red = (480 - tDiff >= 255? 255: 480 - tDiff)
    let green = (480 - tDiff >= 255? 480 - 255 - tDiff: 0).toString(16);

    // make sure the hex strings are properly formatted
    red < 10? red = '0' + red.toString(16): red = red.toString(16)
    green < 10? green = '0' + green.toString(16): green = green.toString(16)

    return "#" + red + green + "00";
  }

  // keep the color the same if there are more than 8 hours until wake-up time
  return Color;
}

// check to see if we need to change the color of the screen, then change it if
// necessary
function setColor(){
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
    console.log("redrawing");

    // change the global color
    Color = newColor;

    changeColor(); // change the color to reflect the chnge in time
  }
}

// run the setColor function once every 30 seconds
function loop(){
  console.log("looping");
  setTimeout(
    ()=>{
      setColor();
      loop()},
    30000);
}

init();
changeColor();
setColor();
loop();
