function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = creatCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose');
}

function draw()
{
    background('#596E79');
}

function modelLoaded()
{
    console.log("PoseNet is Intalized :3");
}





