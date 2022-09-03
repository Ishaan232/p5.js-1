function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,230,150,220,200);
    fill("red");
    stroke("green");
    circle(50,50,80);
    circle(580,50,80);
    circle(580,430,80);
    circle(50,430,80);
    fill("green");
    stroke("blue");
rect(90,40,450,20)
rect(90,420,450,20)
rect(40,90,20,300)
rect(570,90,20,300)
}
function take_snapshot(){
    save('mypicture.jpg');
}
