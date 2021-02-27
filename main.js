var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
if(Content == "Mister robot take my selfie"){
    console.log("taking your selfie beep boop 60 seconds");
        speak();    
}

}

function speak(){
    var synth=window.speechSynthesis; 
    speak_data ="Taking you selfie in 1 minute ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis) ;
     Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();  
    save();  
},60000);
}   
function save()
{
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href = image;
link.click();   
}

camera = document.getElementById(camera);

Webcam.set({
width:360,
height:250,
img_format:'jpeg',

})

function takesnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_img src="'+data_url+'">';
    });
}