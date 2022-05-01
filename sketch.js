//Album: Duality by Set It Off
let duality = 800;
let castor = ["Baa baa black sheep, have you any soul?", "I can't quite contain, or explain my evil ways...", "Jack be lethal,", "Fee fi fo fum, you better run and hide,", "Can't count the list of things, \n I know are wrong with me.", "We're young, we're young, we're dumb,"];
let pollux = ["No sir, by the way, what the hell are morals?", "Or explain why I'm not sane.", "Jack be slick.", "I smell the blood of a petty little coward.", "No need to justify them.", "and we don't care, no."];
let yin = "black";
let yang = "white";
let truth = "red";
let ideals = "blue";
let gemini = Math.floor(Math.random() * castor.length);
function setup() {
  createCanvas(duality, 700);
}

function draw() {
  background(yang);
  
  fill(yin);
  rect(duality / 2, 0, duality / 2, duality);
  noStroke();
  push();
  
  
  //text
  textSize(16);
  textFont("Serifa BT");
  textStyle(BOLD);
  
  if(frameCount > 100){
  fill(truth);
  text(castor[gemini], 440, 20);
  }
  if(frameCount > 200){
  fill(ideals);
  text(pollux[gemini], 80, 690);
  }
  //left
  half(yin, yang);
  //right
  translate(800, 700);
  rotate(PI)
  half(yang, yin);
  if(mouseX > 400){
    yin = "white"
    yang = "black"
    truth = "red"
    ideals = "blue"
  }else{
    yin = "black"
    yang = "white"
    truth = "blue"
    ideals = "red"
  }
  fill(255, 0, 0, 100);
  ellipse(mouseX, mouseY, 30, 30);
  pop();
  
  fill(0, 0, 255, 100);
  ellipse(mouseX, mouseY, 30, 30);

}
function half(color1, color2) {
  fill(color1);
  noStroke();
  arc(duality / 2, 100, 100, 100, HALF_PI, PI + HALF_PI);
  arc(duality / 2, 600, 100, 100, HALF_PI, PI + HALF_PI);
  rect(150, 100, 250, 500);
  wooltop(0, 0);
  wooltop(0, 500);
  woolside();

  fill(color2);
  //ears
  triangle(duality / 2, 600, duality / 2, 100, 150, 350);
  triangle(150, 350, 260, 250, 270, 100);
  //white nose
  triangle(duality / 2, 200, duality / 2, 140, 450, 190); 

  fill(color1);
  //eyes
  ellipse(310, 350, 70, 50);
  ellipse(343, 300, 20, 20);
  //black nose
  triangle(duality / 2, 200, duality / 2, 140, 350, 190); 
  //black bridge
  triangle(duality / 2, 500, duality / 2, 210, 350, 190);
  
  //fill("blue")
  fill(color2);
  //white bridge
  triangle(duality / 2, 500, duality / 2, 210, 450, 190);
  fill(color1);

  beginShape();
  vertex(400, 600);
  vertex(400, 500);
  vertex(424, 350);
  vertex(470, 490);
  vertex(500, 500);
  endShape(CLOSE); //bridge fix
  //rect(400, 500, 45, 50)
}

function wooltop(x, y) {
  for(let wooly = 190; wooly < 350; wooly += 50){
    ellipse(wooly + x, 100 + y, 100, 100);
  }
}

function woolside() {
  let fluffy = 150;

  for (let woolie = 140; woolie < 600; woolie += 60) {
    ellipse(fluffy, woolie, 100, 100);
    fluffy = fluffy - 10;
    if (fluffy == 130) {
      fluffy = fluffy + 10;
    }
  }

} //probably doesnt need to be a function
//this took more than 5 hours
