function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var pinkos=[];
var divisions=[];
var divisionHeight=300;

function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var k=0; k <=width; k=k+80){
divisions.push(new Divisions(K,height-divisionHeight/2,10,divisionHeight));
  
for (var j=0; j <particles.length; j++) {
 
  particles[j]. display();
}
}
for (var k=0; k <divisions.length;k++) {
  
  divisions[k].display();
}


for (var j = 40; j<=width;j=j+50) {
 pinkos.push = new Pinko[j,75];
  
}
for (var j=15; j<=width-10,j=j+50) {
  
  pinkos.push = new Pinko[j,175];
}



for (var j = 75; j<=width;j=j+50) {
 pinkos.push = new Pinko[j,275];
  
}
for (var j=5; j <=width-10, j=j+50) {
  
  pinkos.push = new Pinko[j,375];
}




if (frameCount%60===0) {
  particles.push(new particle(random(width/2-10,width/2+10)));
}


