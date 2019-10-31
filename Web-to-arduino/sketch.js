
// COLOR PICKER
var img
var c = 0;
function preload() {
  img = loadImage("gradient.png");
}

// CANVAS 1. Alpha, 2. Funktion, 3. Pin
function setup() {
    var canvas = createCanvas(400, 1000);
    canvas.parent('sketch-holder');
    background(189, 189, 189);
    //socket.on('mouse', newDrawing);
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

    // Slider Alpha (brightness)
    slider = createSlider(0,255,100);
    slider.position(125,800);
    slider.style('with', '80px');

    // Slider Funktion
    sliderf = createSlider(0,5,0,1);
    sliderf.position(125,835);
    sliderf.style('with', '80px');

    // Slider Pin
    sliderp = createSlider(0,9,0,1);
    sliderp.position(125,865);
    sliderp.style('with', '80px');

    // Slider Speed
    sliderss = createSlider(10,300,0,10);
    sliderss.position(125,895);
    sliderss.style('with', '80px');
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


  function draw() {
    // image(imgToDraw, X, Y, width, height);
    background(0, 0, 0);
    image(img, 0, 0, 400, 400);

    // if (mouseIsPressed && mouseX <= 400 && mouseY <= 400) {
    //   c = get(mouseX, mouseY); 
    // }

    // ALPHA VALUE & TEXT
    fill(255, 255, 255);
    text('Styrke', 40, 430);
    text('Value:', 280, 430);
    text(slider.value(), 330, 430);

    // FUNKTIONS VALUE & TEXT
    fill(255, 255, 255);
    text('Funktion', 40, 465);
    text('Value:', 280, 465);
    text(sliderf.value(), 330, 465);

    // PIN VALUE & TEXT
    fill(255, 255, 255);
    text('Pin', 40, 495);
    text('Value:', 280, 495);
    text(sliderp.value(), 330, 495);

    // SPEED VALUE & TEXT
    fill(255, 255, 255);
    text('Speed', 40, 525);
    text('Value:', 280, 525);
    text(sliderss.value(), 330, 525);

    // if(sliderf.value() == 1){
    //   sliderp.style('display', 'none');
    // }  
    
    // else {
    //   sliderp = createSlider(0,9,0,1);
    //   sliderp.position(125,560);
    //   sliderp.style('with', '80px');
    // }

    // COLOR PICKER COLOR
    if (mouseIsPressed && mouseX < 400 && mouseY < 400) {
      c = get(mouseX, mouseY); 
      var r = red(c); // get the red channel
      var g = green(c); // get the green channel
      var b = blue(c); // get the blue channel
      fill(r, g, b); // set the color
      stroke('white');
      ellipse(mouseX, mouseY, 50); // draw 
    }

  }

  // function mouseDragged() {
  //   const x = mouseX;
  //   const y = mouseY;
  //   fill (255,0,0);
  //   noStroke();
  //   ellipse(x,y,50,50);
  //   let pos = {
  //     x: x,
  //     y: y,
  //   };
  //   // console.log(pos)
  //   socket.emit("positionEvent",pos)
  // }
  
  // function draw() {
  //   const x = mouseX;
  //   const y = mouseY;
  //   fill (255,0,0);
  //   ellipse(x,y,20,20);
  //   let pos = {
  //     x: x,
  //     y: y,
  //   };
  //   console.log(pos)
  //   socket.emit("positionEvent", pos)
  // }