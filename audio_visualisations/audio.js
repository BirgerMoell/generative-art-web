var audioContext;
var playSoundBuffer;
import { sketch } from "./sketch"


function init() {
    audioContext = new AudioContext();
    
    body = document.getElementsByTagName('body')[0];
    document.createElement("button")
    var button = document.createElement('button');
    button.addEventListener('click', function() {
        audioContext = new AudioContext();
        console.log("clik")
         
        loadNote();
    
      });
    body.appendChild(button); ;
}

function loadNote() {
    console.log('Note')
    var request = new XMLHttpRequest();
    request.open("GET", "audio_files/MysteriousSynthLead_1.wav", true);
    request.responseType = "arraybuffer";
    request.onload = function() {
        audioContext.decodeAudioData(request.response, function(buffer) {
            playSoundBuffer = buffer;
            playSound(); // don't start processing it before the response is there!
             sketch(400, 400)
        }, function(error) {
            console.error("decodeAudioData error", error);
        });
    };
    request.send();//start doing something async

}

document.querySelector('button')

function playSound() {
    var source = audioContext.createBufferSource();
    source.buffer = playSoundBuffer;       // This is the line that generates the error
    
    
    
    source.connect(audioContext.destination);

    source.start(0);
}
init()

