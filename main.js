function setup(){
    canvas = createCanvas(350, 350);
    canvas.position(560, 150);
    video = createCapture(350, 350);
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model is loaded');
}

function draw() {
    background('#2552d9');
}

function gotPoses(results) {
    if(results.length>0)
    {
        console.log(results);
    }
}