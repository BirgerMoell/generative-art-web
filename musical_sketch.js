const canvasSketch = require('canvas-sketch');
import 'audioworklet-polyfill';


const persianColors = ["51a3a3","75485e","cb904d","dfcc74","c3e991"]

const color2 = ["d8e2dc","ffffff","ffcad4","f4acb7","9d8189"]

const color3 = ["849483","4e937a","b4656f","948392","c7f2a7"]

const color4 = ["232020","553739","955e42","9c914f","748e54"]

const color5 = ["d9d0de","bc8da0","a04668","ab4967","0c1713"]

const color6 = ["cec2ff","b3b3f1","dcb6d5","cf8ba9","b15e6c"]

const color7 = ["4d9de0","e15554","e1bc29","3bb273","7768ae"]

const color8 = ["c5ebc3","b7c8b5","a790a5","875c74","54414e"]

const color9 = ["e06c9f","f283b6","edbfb7","b5bfa1","6e9887"]

const color10 = ["9e0031","8e0045","770058","600047","44001a"]

const color11 = ["96adc8","d7ffab","fcff6c","d89d6a","6d454c"]

const color12 = ["3c3744","090c9b","3d52d5","b4c5e4","fbfff1"]

const color13 = ["ffffff","84dcc6","a5ffd6","ffa69e","ff686b"]

const color14 = ["e95b7a","0b6121","0489b1","0b6121","04b486"]

const guld = ["f7d358","fe9a2e","fe642e","ffbf00","000000"]
const guld2 = ["f7d358","fe9a2e","fe642e","ffbf00","ffffff"]
const guld3 = ["f7d358","fe9a2e","f60e5e","ffbf00","ffffff"]

const color15 = ["861657","a64253","d56aa0","bbdbb4","fcf0cc"]
const color16 = ["034732","008148","c6c013","ef8a17","ef2917"]
const color17 = ["c52233","a51c30","a7333f","74121d","580c1f"]
const color18 = ["034732","a51c30","a7333f", "008148"]

const sunAndGrass = ["533a71","6184d8","50c5b7","9cec5b","f0f465"]
const sunAndGrassOnly = ["533a71","6184d8","50c5b7","9cec5b"]

const greyScale = ["000000", "222222", "444444", "666666", "888888", "aaaaaa", "cccccc", "eeeeee"]

const blackWhite = ["000000", "ffffff", "222222", "444444", "666666", "888888", "aaaaaa", "cccccc", "eeeeee"]

// Sketch parameters
const settings = {
  dimensions: 'a1',
  pixelsPerInch: 300,
  units: 'in'
};

const goldenRatio = 1.61803398875
const borderMargin = 0
const colors = guld
const lineWidth = 0.10
const outerLoop = 25
const innerLoop = 10
circleDivider1 = 8
circleDivider2 = 4


// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    console.log("the context is ", context)
    // Margin in inches
    const margin = 0;

    // Gradient foreground
    // const fill = context.createLinearGradient(10, 0, width, height);
    // for (const color in colors) {
    //   console.log("color", )
    //   fill.addColorStop(color/(colors.length), "#" + colors[color]);
    // }
    // Fill rectangle
    // context.fillStyle = fill;
    // context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    for(var i=0; i<outerLoop; i++){ 
      let random1 = getRandomNumber(10, 1)
      //drawRect(i, i/2, getRandomNumber(width, 0.1), getRandomNumber(height, 0.1), context)
      //drawLine({x: getRandomNumber(width, 0.1), y: getRandomNumber(height, 0.1)}, {x:10, y: i}, context)
      //drawTriangle({x: i, y:i},{x:width/4, y:13}, {x:width, y:random1}, context);
      //drawFract({x:j*10, y:i*10}, {x: i*20, y:i*20}, {x: 20, y:10}, 1, context) 
      createCircle(width, height, context, i/circleDivider1)
      for(var j=0; j<innerLoop; j++){
        let random2 = getRandomNumber(10, 1)
        //drawFract({x:j*10, y:i*10}, {x: i*20, y:j*20}, {x: 20, y:10}, 1, context)
        //drawLine({x: getRandomNumber(width, 0.1), y: getRandomNumber(height, 0.1)}, {x:10, y: j}, context)
        //drawTriangle({x: j, y:j},{x:width, y:2}, {x:j, y:j}, context);
        //drawRect(j, j, getRandomNumber(width, 0.7), getRandomNumber(height, 0.5), context)
        createCircle(width, height, context, j/circleDivider2)//j/64)
      }
    }

    // for(var i=0; i<25; i++){  
    //   createCircle(width, height, context, 3)
    // }
    //drawRect(height/3, width/2, width/2, height/3, context)

    //drawRectangles(10, 10, width, height, context, 5)
    //drawLine({x: 10, y:10} , {x:100, y:100}, context)
  };

};

const createCircle = (width, height, context, radius) => {
  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius*2), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255,255,255,0.3)"
  //context.fillStyle = "#" + randomElement(colors);

  // context.strokeStyle = "#" + randomElement(colors);
  // context.lineWidth = 0.1;
  // context.strokeStyle = "#" + randomElement(colors);
  //context.stroke();
  context.fill();

  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255,255,255,0.5)"
  context.fillStyle = "#" + randomElement(colors);
  // context.lineWidth = 0.1;
  // context.strokeStyle = "#" + randomElement(colors);
  //context.stroke();
  context.fill();

  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius/2), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255,255,255,0.5)"
  //context.fillStyle = "#" + randomElement(colors);
  // context.lineWidth = 0.1;
  // context.strokeStyle = "#" + randomElement(colors);
  //context.stroke();
  context.fill();

  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius/2*2), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255,255,255,0.2)"
  //context.fillStyle = "#" + randomElement(colors);
  // context.lineWidth = 0.1;
  // context.strokeStyle = "#" + randomElement(colors);
  //context.stroke();
  context.fill();

  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius/2*4), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = "rgba(255,255,255,0.1)"
  //context.fillStyle = "#" + randomElement(colors);
  // context.lineWidth = 0.1;
  // context.strokeStyle = "#" + randomElement(colors);
  //context.stroke();

  context.fill();

}



function drawLine(p0, p1, context) {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.strokeStyle = "#" + randomElement(colors);
  //context.strokeStyle = "rgba(255,255,255,0.25)"
  
  //context.strokeStyle = "white"
  //context.strokeStyle = "white";
  context.lineWidth = lineWidth/3
  context.stroke();
}

function drawTriangle(p0, p1, p2, context) {
  drawLine(p0, p1, context);
  drawLine(p1, p2, context)
  drawLine(p2, p0, context)
}

function drawRect(x, y, width, height, context) {
  context.beginPath();
  context.lineWidth = lineWidth/2
  context.strokeStyle = "#" + randomElement(colors);
  context.strokeStyle = "rgba(255,255,255,0.1)"
  //context.strokeStyle = "black"
  //context.strokeStyle = "#" + randomElement(colors);
  context.rect(x, y, width, height);
  context.stroke();
}


function drawRectangles(x, y, width, height, context, limit) {
  if(limit > 0){
    drawRectangles(x+50, y+50, width, height, limit-1, context);
}
else {
  drawRect(x, y, width, height, context);    
}
}

function drawFract(p0, p1, p2, limit, context){
  if(limit > 0){
      const pA = {
         x: p0.x + (p1.x - p0.x)/2,
         y: p0.y - (p0.y - p1.y)/2
      };
      const pB = {
         x: p1.x + (p2.x - p1.x)/2,
         y: p1.y - (p1.y - p2.y)/2
      };
      const pC = {
         x: p0.x + (p2.x - p0.x)/2,
         y: p0.y
      };
      drawFract(p0, pA, pC, limit-1, context);
      drawFract(pA, p1, pB, limit-1, context);
      drawFract(pC, pB, p2, limit-1, context);
  } 
  else {
      drawTriangle(p0,p1,p2, context);    
  }
}



const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(max, min) {
  number = Math.floor(Math.random()* max) + min
  return number
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Start the sketch


async function  loadSong(url, loadCompletedCallback) {
    console.log("loading", url )
    const response = await fetch(url);
    console.log(response)
    const song = await response.arrayBuffer();
    return this.context_.decodeAudioData(song);
}
// https://github.com/GoogleChromeLabs/web-audio-samples/blob/gh-pages/audio-worklet/src/bitcrusher-demo.js
 
function playSong() {
    console.log('Song')
    const audioContext = new AudioContext();
    loadSong('audio_files/Cat_Song.ogg').then((song) => {
        this.songBuffer = song;
      });

  }


var audioContext;
var playSoundBuffer;
var analyser;


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

document.querySelector('button')
function loadNote() {
    console.log('Note')
    var request = new XMLHttpRequest();
    request.open("GET", "audio_files/MysteriousSynthLead_1.wav", true);
    request.responseType = "arraybuffer";
    request.onload = function() {
        audioContext.decodeAudioData(request.response, function(buffer) {
            playSoundBuffer = buffer;
            playSound(); // don't start processing it before the response is there!
        }, function(error) {
            console.error("decodeAudioData error", error);
        });
    };
    request.send();//start doing something async
}


function playSound() {
    var source = audioContext.createBufferSource();
    source.buffer = playSoundBuffer;       // This is the line that generates the error
    var analyser = audioContext.createAnalyser();
    source.connect(analyser)
    analyser.connect(audioContext.destination);
    var bufferLength = analyser.frequencyBinCount;
    source.start(0);
    const sleep = (t) =>  ({ then: (r) => setTimeout(r, t) })
    
    sleep(1005)
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    console.log(dataArray);
    
    canvasSketch(sketch, settings);

}
init()


async function createWhiteNoise() {
  const audioContext = new window.AudioContext()
  console.log("hte audio context is", audioContext)
  await audioContext.audioWorklet.addModule('white-noise-processor.js')
  const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor')
  whiteNoiseNode.connect(audioContext.destination)
}

createWhiteNoise()
 
//playSong()
