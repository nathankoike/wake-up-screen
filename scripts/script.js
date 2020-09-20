// get control of the canvas, its container, and context
let cvs = document.getElementById('scrn');
let ctx = cvs.getContext("2d");

// set the height and width of the canvas to take up most of the screen
cvs.height = Math.ceil(window.screen.availHeight * 1); // 100% of the height
cvs.width = Math.ceil(window.screen.availWidth * .99); // 98% of the width

// mostly center the canvas on the screen
cvs.style.marginLeft = "0";
cvs.style.marginRight = "1vw";
cvs.style.marginTop = "1vh";
cvs.style.marginBottom = "2vh";

let color = "#555555";

ctx.beginPath;
ctx.fillStyle = color;
ctx.rect(0, 0, cvs.width, cvs.height)
ctx.fill();
ctx.closePath();


let usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
console.log('USA time: '+ (new Date(usaTime)).toISOString())
