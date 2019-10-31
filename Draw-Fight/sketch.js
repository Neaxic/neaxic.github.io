
// COLOR PICKER
// var img
// var c = 0;
// function preload() {
//   img = loadImage("gradient.png");
// }

var r = 255;
var g = 255;
var b = 255;
var rainbow = 0;
var BrushNumber;
var Sweight;

function ColorWhite() {
  r = 255;
  g = 255;
  b = 255;
  //document.getElementById("myBtnGreen").innerHTML = "YOU CLICKED ME!";
}

function ColorGreen() {
  r = 152;
  g = 251;
  b = 152;
}

function ColorBlue() {
  r = 128;
  g = 206;
  b = 255;
}

function ColorPurple() {
  r = 194;
  g = 157;
  b = 253;
}

function ColorRed() {
  r = 255;
  g = 105;
  b = 97;
}

function ColorYellow() {
  r = 253;
  g = 253;
  b = 150;
}

function HeavyStroke(){
  Sweight = 1;
}

function NoStroke(){
  Sweight = .001;
}

var SelectedValue = document.getElementById('StrokeSelector').value;


console.log(Stroke_Selector);
console.log(SelectedValue);

// function ColorRainbow() {
//   // for (let i = 0; i < Rainbow; i++){
//   //   r = random([0], [255]);
//   //   g = random([0], [255]);
//   //   b = random([0], [255]);
//   // }
//   while (document.getElementById("ass") = true){
//     r = random([0], [255]);
//     g = random([0], [255]);
//     b = random([0], [255]);
//   }
// }

// while (document.getElementById("ass") = true){
//   r = random([0], [255]);
//   g = random([0], [255]);
//   b = random([0], [255]);
// }

function ColorEraser() {
  r = 0;
  g = 0;
  b = 0;
  //document.getElementById("myBtnGreen").innerHTML = "YOU CLICKED ME!";
}

function setup() {
    var canvas = createCanvas(1900, 580);
    canvas.parent('sketch-holder');
    background(0, 0, 0);
   
    // socket.on('mouse', newDrawing);
    // socket.on('positionEvent',newPositionMsg);
    //image(img, 0, 0, 400, 400);

    //Button Reset
      // button = createButton('Reset');
      // button.position(45, 950);
      // button.mousePressed(ResetButton);
      
      // function ResetButton(){
      //   const colorData = {
      //   f: 99
      // }      
        
      // }
  }

  btn = document.getElementById("myBtnWhite");
  btn.onclick = function setup() {
    r = 0;
  }

  // function newPositionMsg(posData) {
  //   // console.log("got: ");
  //   // console.log(posData);
  //   positionRecived(posData);
  // }

  // function positionRecived(posData){
  //   fill (0,0,255);
  //   noStroke();
  //   circle(posData.x,posData.y,50,50);
  // }

  function mouseDragged() {
    const x = mouseX;
    const y = mouseY;
    fill (r,g,b);
    strokeWeight(Sweight);
    // if(BrushNumber = 1){
    //   Brush = square(x,y,20);
    // }
    ellipse(x,y,20,20);
    //let pos = {
    //  x: x,
    //  y: y,
    //};
    // console.log(pos)
    // socket.emit("positionEvent",pos)
  }

  // function mousePressed() {
  //   ellipse(x,y,20,20);
  // }
  //function draw() {
    // image(imgToDraw, X, Y, width, height);
    // background(0, 0, 0);
    // image(img, 0, 0, 400, 400);

    // if (mouseIsPressed && mouseX <= 400 && mouseY <= 400) {
    //   c = get(mouseX, mouseY); 
    // }

    // console.log(pos)
    // socket.emit("positionEvent", pos)

  //}