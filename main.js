status="";

function setup(){
    canvas=createCanvas( 480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd", modelloaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
input=document.getElementById("object").value;
}

function modelloaded(){
    console.log("modelloaded")
    status=true;
}

function draw(){
    image(video,0,0,480,380);
}