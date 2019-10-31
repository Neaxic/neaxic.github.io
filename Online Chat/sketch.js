//https://www.youtube.com/watch?v=rxzOqP9YwmM


var c;
const name = prompt('Whats your name?');
if (name.length <= 5){
  alert('Must be more than 5 charcters');
}
// DisplayText('Welcome'+ name);

const password = prompt('Whats the password?');
if (password != 1234){
  alert('GIVE ME THE REAL PASSWORD FUCKER');
  location.reload();
}

// var SelectedValue = document.getElementById('StrokeSelector').value;

function setup() {
    createCanvas(300, 580);
    background(255, 255, 255);
}

  // btn = document.getElementById("myBtnWhite");
  // btn.onclick = function setup() {
  //   r = 0;
  // }

  function DisplayText(){
    const TextElement = docoment.createElement('div')
    TextElement.innerText = message
  }

  function draw() {
    noStroke()
    fill(0,200,0)
    ellipse(100,100,20,20)
    fill(0,0,200)
    ellipse(130,100,20,20)
    fill(200,0,0)
    ellipse(160,100,20,20)
    
  }
  

    if (mouseIsPressed && mouseX <= 400 && mouseY <= 400) {
      c = get(mouseX, mouseY); 
      alert(c)
    }

    alert(c)

