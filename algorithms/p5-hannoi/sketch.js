function setup() {
  //move("a", "b");
  Hannoi(3, "grå", "sort", "gul");
}

function move(a,b){
  console.log(`Fra ${a.toUpperCase()} til ${b.toUpperCase()}`);
}

function movevia(f,v,t){
  move(t,v);
  move(v,t);
}

function Hannoi(antal,a,b,c){
  if (antal == 0){
  return;
  }
  
  Hannoi(antal-1,a,c,b);
  move(a,c);
  Hannoi(antal-1,b,a,c);
}
