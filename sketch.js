var circles,imagine,img,x,c,mySound,cls,img1,myFont,telephone,angle,myFont,countSeconds;

function preload() {
  img = loadImage('iphone.png');
  img1=loadImage('iphone1.png');
   soundFormats('mp3', 'ogg');
  mySound = loadSound('song.mp3');
  myFont = loadFont('punkkid.ttf');
  telephone = loadModel('iphone0.obj');
}
function setup() {
  createCanvas(1530, 700, WEBGL);
  mySound.play();
  circles = [-700,-600,-500,-400,-300,-200,-100,100,200,300,400,500,600,700];
  specs = ['New Iphone 12 Pro','Ultra Gaming Performance','Best Design Look Ever',' 2020, October 13 Released','iOS 14.1 Upgradable to 14.2 ','Hexa-core (2x3.1 GHz Firestorm)','Up to 512GB Intern Memory','6GB of Ram NVMe','2815 mAh Battery Fast Charge','4K@24/30/60fps Video','Quad-Cameras 12 MPX','Just Buy it! Thank you.:)'];
  x = 500;
  c=0;
  angle=0;
  countSeconds = 0;
  noLoop();
  
}
function draw(){
  background(0);
  textSize(50);
  textFont(myFont);
  fill(255,255,255);
  text(specs[c], -250, -250);
  translate(0,0,0);
 for(let i = 0;i<circles.length;i++){
    ellipse(circles[i],-330,random(10,-10),random(10,-10));
   // ellipse(circles[i],60,random(10,-10),random(10,-10));
   // ellipse(circles[i],120,random(10,-10),random(10,-10));
    //ellipse(circles[i],180,random(10,-10),random(10,-10));
   // ellipse(circles[i],240,random(10,-10),random(10,-10));
    ellipse(circles[i],300,random(10,-10),random(10,-10));
    ellipse(circles[i],360,random(10,-10),random(10,-10));      
 }
 
 ambientLight(100);
 normalMaterial();
 scale(20);
 rotateX(4.8);
 rotateZ(angle);


 if(countSeconds>600){
  rotateX(angle);
}
if(countSeconds>1200){
  rotateY(angle);
}
if(countSeconds>4000){
  noCanvas();
}
  model(telephone);
  angle+=0.01;

  if(frameCount%150==0){
    c+=1;
  }

  countSeconds +=1;
  
}

function startAdvertise(){
 userStartAudio();
 loop();
 document.getElementById("button").innerHTML = "Stop Advertise";
 document.getElementById("button").style="display: none;";
 
}






