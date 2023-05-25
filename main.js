img = "";
status = "";
objects = [];
function preload() {
    img = loadImage('animales.jpeg');
}
function setup() {
    canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status:Detectando objetos";
video.hide();
}


function modelLoaded() {
console.log ("Modelocargado");
status = true;
objectDetector.detect(video, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log (error);
    }
    objects = results;
    console.log(results);
    console.log(objects);
}
function draw() {
    image(video, 0,0,380,380);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult)
for(i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "estatus :objeto detectado";
    document.getElementById("numerodeobjetos").innerHTML = "numero de objetos detectados: " + objects.length;
    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15 , objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    
}
    }
    

 

