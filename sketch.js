let song;
let currentLyric = "";
let lyrics = [
  { time: 36, text: "It's just like magic," },
  { time: 37, text: "you're the only" },
  { time: 38, text: "1" },
  { time: 38.8, text: "You changed my horn" },
  { time: 40, text: "into the crown" },
  { time: 42, text: "Now all my days and nights" },
  { time: 44, text: "A spring breeze washes through" },
  { time: 45, text: "when" },
  { time: 45.3, text: "you" },
  { time: 45.7, text: "call" },
  { time: 45.9, text: "out" },
  { time: 46.2, text: "my name" }

];

let isPlaying = false; 
let customFont;

function preload() {
  song = loadSound('bluespring.mp3');
  lyricFont = loadFont("PlaywriteGBS-Italic-VariableFont_wght.ttf");
}

function setup() {
  createCanvas(800, 600);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  textFont(lyricFont);
}

function mousePressed() {
  if (!isPlaying) {
    song.play();
    song.jump(35);
    isPlaying = true;
  }
}

function draw() {
  background(78, 121, 173);

  if (isPlaying) {
    
    let currentTime = song.currentTime();

    // end song
    if (currentTime >= 47) {
      song.stop();
      isPlaying = false;
      currentLyric = "";
      return;
    }

    // displays lyrics at specific 
    for (let i = 0; i < lyrics.length; i++) {
      if (currentTime >= lyrics[i].time) {
        currentLyric = lyrics[i].text;
      }
    }

    if (currentTime >= 42 && currentTime < 43) {
      background(245, 235, 132);
    } else if (currentTime >= 43 && currentTime < 45) {
      background(0);
    } 

    if (currentTime >= 44 && currentTime < 45) {
      for (let i = 0; i < 5; i++) { 
        drawRandomCurve();
      }
    }

    if (currentTime >= 36 && currentTime < 37) {
      drawStar(random(width), random(height), 50); 
    }
  
    if (currentTime >= 38.8 && currentTime < 40) {
      drawHorn();
    }
  
    if (currentTime >= 40 && currentTime < 42) {
      drawCrown();
    }

    if (currentLyric === "1") {
      textSize(200);
      background(245, 193, 205);
    } else if (currentLyric === "my name") {
      textSize(60);
    } else {
      textSize(32); 
    }

    if (currentLyric === "my name") {
      fill(237, 159, 178);
    } else {
      fill(255);
    }
    
    if (currentLyric === "You changed my horn") {
      text(currentLyric, width / 2, 500); 
    } else if (currentLyric === "into the crown") {
        text(currentLyric, width / 2, 500); 
      } else if (currentLyric === "A spring breeze washes through") {
        text(currentLyric, width / 2, 500); 
      } else if (currentLyric === "when") {
        text(currentLyric,  300, 200);
      } else if (currentLyric === "you") {
        text(currentLyric, 400, 300); 
      } else if (currentLyric === "call") {
        text(currentLyric, 500, 400); 
      } else if (currentLyric === "out") {
        text(currentLyric, 400, 300); 
      } else if (currentLyric === "my name") {
        text(currentLyric, width/2, height/2); 
      } else {
      text(currentLyric, width / 2, height / 2); 
    }

  }
}

function drawRandomCurve() {
  stroke(255);
  strokeWeight(3);
  noFill();
  background(78, 121, 173);
  let x1 = random(width);  
  let y1 = random(height);
  let x2 = random(width);  
  let y2 = random(height);
  let x3 = random(width);    
  let y3 = random(height);
  let x4 = random(width);   
  let y4 = random(height);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}

function drawStar(x, y, size) {
  fill('yellow');
  noStroke();
  background(78, 121, 173);
  beginShape();
  vertex(x, y - size);
  vertex(x + size * 0.2, y - size * 0.2); 
  vertex(x + size, y); 
  vertex(x + size * 0.2, y + size * 0.2); 
  vertex(x, y + size); 
  vertex(x - size * 0.2, y + size * 0.2); 
  vertex(x - size, y); 
  vertex(x - size * 0.2, y - size * 0.2); 
  endShape(CLOSE);
}

function drawHorn() {
  noFill();
  stroke(222, 2, 50);
  strokeWeight(3);
  bezier(257, 119, 60, 180, 60, 590, 310, 357);
  bezier(257, 119, 240, 190, 190, 240, 310, 357);
  bezier(536, 118, 800, 220, 660, 570, 490, 360);
  bezier(536, 118, 500, 190, 600, 220, 490, 360);
}

function drawCrown() {
  fill(250, 236, 147);
  stroke(255);
  strokeWeight(3);
  beginShape();
  vertex(170, 110); 
  vertex(208, 380); 
  vertex(570, 380); 
  vertex(620, 110); 
  vertex(470, 230); 
  vertex(400, 110);
  vertex(330, 230); 
  vertex(170, 110);
  endShape();
}
