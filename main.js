noseX = 0;
noseY= 0;

function preload(){
maskFace = loadImage("Cool_mask.png");
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}



function gotPoses(results){
if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-225;
    noseY = results[0].pose.nose.y-165;
    
   }
}

function draw(){
    image(video,0,0,300,300);
    image(maskFace,noseX,noseY,120,120);
}

function takeSnapshot(){
    save("Funny.jpeg");
}

