Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("webcam");
Webcam.attach('#webcam');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedimage' src='"+ data_uri+"'>";
    });
}
console.log("ml5 version", ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ImseFTtjK/model.json',modelloaded);
function modelloaded(){
    console.log("model loaded succesfully");
}
function check(){
    var img= document.getElementById("capturedimage");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("resultobjectname").innerHTML=result[0].label;
        document.getElementById("resultobjectaccuracy").innerHTML= result[0].confidence.toFixed(3);
    }
}