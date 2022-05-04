posX = 0;
posY = 0;

offsetX = -255;
offsetY = -90; 

// Load asset
function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300);
	canvas.center();
    video = createCapture(VIDEO);
	video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,300,300);
    image(mustache,posX,posY,32,32);
}

function takeSnapshot() {
    save('filtered.png');
}

function modelLoaded() {
    console.log("PoseNet Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        // console.log(results);
        posX = results[0].pose.nose.x + offsetX;
        posY = results[0].pose.nose.y + offsetY;
        console.log("Nose x: " + results[0].pose.nose.x);
        console.log("Nose y: " + results[0].pose.nose.y);
    }
}