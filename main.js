var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
// window.blahblah blha means web speeach api which aloows us to speak and make speech to text//

function start () {
document.getElementById("textbox").innerHTML = "";
recognition.start();
}
// this function will start to hear//

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
    speak();
    }
}
//this function will hold the text and onresult will get the text we say //
//

function speak() {
    var synth = window.speechSynthesis;
    // speak_data = document.getElementById("textbox").value;
    speak_data = "Taking your selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        console.log("Timeout is working");
        take_snapshot();
        save();
    }, 5000);
}

// this speak function will speak whatever we speak//
// synth is the api to speak something//

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
png_quality : 90
});

function take_snapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="snapshot_image" src ="'+data_uri+'"/> ';
});
}


function save() {
link = document.getElementById("link");
selfie = document.getElementById("snapshot_image").src ; 
link.href = selfie;
link.click();
}