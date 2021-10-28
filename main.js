song = "";
leftWristX = "";
rightWristX = "";
leftWristY = "";
rightWristY = "";



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet.on('pose' , gotPoses );

    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded() {
 console.log("Posenet is Initailized");
}

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}

function gotPoses(results){

    if(results.length > 0 ){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        console.log( "leftWristX =  " + leftWristX  ,  "leftWristY = " + leftWristY  );

        rightWristX = results[0].pose.rightWrist.x;

        rightWristY = results[0].pose.rightWrist.y;
        
        console.log( "rightWristX =" + rightWristX ,   " + rightWristY" = rightWristY);
    }

}