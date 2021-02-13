const canvasSketch = require('canvas-sketch');


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

const sunAndGrass = ["533a71","6184d8","50c5b7","9cec5b","f0f465"]
const sunAndGrassOnly = ["533a71","6184d8","50c5b7","9cec5b"]

const greyScale = ["000000", "222222", "444444", "666666", "888888", "aaaaaa", "cccccc", "eeeeee"]

// Sketch parameters
const settings = {
  dimensions: 'a3',
  pixelsPerInch: 300,
  units: 'in'
};

const borderMargin = 0

//const colors = ["cyan", "red", "blue", "green", "yellow", "orange", "purple"]

const colors = color4
const lineWidth = 0.001

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    console.log("the context is ", context)
    // Margin in inches
    const margin = 0;

    // Gradient foreground
    const fill = context.createLinearGradient(30, 0, width, height);
    for (const color in colors) {
      console.log("color", )
      fill.addColorStop(color/(colors.length), "#" + colors[color]);
    }
    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);
  
    //drawLine({x: 0, y:10},{x:10, y:0}, context)
    // for(var i=0; i<100; i++){ 
    //   let y = i * 4;
    //   drawTriangle({x: 0, y},{x:width/2, y:10}, {x:width, y}, context);
    // }
    //drawFract({x: 0, y:height},{x:width/2, y:0},  {x:width, y:height}, 3, context)
    // for(var i=0; i<10; i++){ 
    //   let y = i * 2;
    //   for(var j=0; j<5; j++){ 
    //     let x = j * 4;
    //     drawRect(y-getRandomNumber(1, x), y-getRandomNumber(5, 10), getRandomNumber(5, 10), getRandomNumber(5, 10), context)
    //     for(var k=0; k<10; k++){ 
    //       let z = k * 20;
    //       drawRect(getRandomNumber(0.1, z), getRandomNumber(z, 10), getRandomNumber(5, 10), getRandomNumber(5, 10), context)
    //     }
    //   }
    // }

    for(var i=0; i<100; i++){ 
      let random1 = getRandomNumber(10, 1)
      drawRect(i, i, getRandomNumber(width, 0.1), getRandomNumber(height, 0.1), context)
      drawLine({x: getRandomNumber(width, 0.1), y: getRandomNumber(height, 0.1)}, {x:10, y: i}, context)
      drawTriangle({x: 0, y:random1},{x:width/2, y:10}, {x:width, y:random1}, context);
      for(var j=0; j<25; j++){
        let random2 = getRandomNumber(10, 1)
        drawLine({x: getRandomNumber(width, 0.1), y: getRandomNumber(height, 0.1)}, {x:10, y: j}, context)
        drawTriangle({x: 0, y:random2},{x:width/2, y:10}, {x:width, y:random2}, context);
        drawRect(j, j, getRandomNumber(width, 0.1), getRandomNumber(height, 0.1), context)
      }
    }
    //drawRect(height/3, width/2, width/2, height/3, context)

    //drawRectangles(10, 10, width, height, context, 5)

  };

};

function drawLine(p0, p1, context) {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.strokeStyle = "#" + randomElement(colors);
  //context.strokeStyle = "white";
  context.lineWidth = lineWidth
  context.stroke();
}

function drawTriangle(p0, p1, p2, context) {
  drawLine(p0, p1, context);
  drawLine(p1, p2, context)
  drawLine(p2, p0, context)
}

function drawRect(x, y, width, height, context) {
  context.beginPath();
  context.lineWidth = lineWidth
  context.strokeStyle = "#" + randomElement(colors);
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
canvasSketch(sketch, settings);