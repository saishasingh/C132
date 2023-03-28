tatus = "";
function preload(){
    img = loadImage("dog_cat.jpg");


}
function setup(){
    canvas = createCanvas(500,500)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "The object is getting detected";


}

function modelLoaded(){
    console.log("model is successfully loaded");
    Status = true;
    objectDetector.detect(img, gotResults);

}
function gotResults(error,results){
    if (error){
        console.log(error);

    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img,0,0,500,500);
    fill("#fc0703")
    stroke("#fc0703")
    noFill()
    rect(50,70,290,210)

    text("Dog",50,90)
    fill("#fc0703")
    stroke("#32a88b")
}