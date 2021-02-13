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
  dimensions: 'a4',
  pixelsPerInch: 300,
  units: 'in'
};

const borderMargin = 0

//const colors = ["cyan", "red", "blue", "green", "yellow", "orange", "purple"]

const colors = color5
const lineWidth = 0.025

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    console.log("the context is ", context)
    // Margin in inches
    const margin = 0;

    // Off-white background
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.fill

    // Gradient foreground
    const fill = context.createLinearGradient(10, 0, width, height);
    for (const color in colors) {
      console.log("color", )
      fill.addColorStop(color/(colors.length), "#" + colors[color]);
    }

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    for (let i = 0; i < 50; i++) {
      console.log("creating line", i)
      //createCircle(width, height, context, 0.5, getRandomColor(), getRandomColor())
      //createLine(width, height, context)

      createBezierCurve(width, height, context)
    }

  };
};

const createBezierCurve = (width, height, context) => {
  context.beginPath();
  context.lineWidth = lineWidth
  const randomWidth1 = getRandomNumber(width-borderMargin, 0)
  const randomHeight1 = getRandomNumber(height-borderMargin, 0)
  context.moveTo(randomWidth1, randomHeight1);

  const rand1 = getRandomNumber(height, 0)
  const rand2 = getRandomNumber(width, 0)
  const rand3 = getRandomNumber(height, 0)
  const rand4 = getRandomNumber(width, 0)

  context.bezierCurveTo(randomWidth1, rand1, rand2, rand3, rand4, randomHeight1);
  context.strokeStyle = "#" + randomElement(colors);
  context.stroke();
}


const createLine = (width, height, context) => {
  context.beginPath();
  context.lineWidth = lineWidth
  const randomWidth1 = getRandomNumber(width-borderMargin, 0)
  const randomHeight1 = getRandomNumber(height-borderMargin, 0)
  const randomWidth2 = getRandomNumber(width-borderMargin, 0)
  const randomHeight2 = getRandomNumber(height-borderMargin, 0)

  // first draw a line
  context.moveTo(randomWidth1, randomHeight1);
  context.lineTo(randomWidth2, randomHeight2);
  // then draw a line from the beginning
  context.moveTo(randomWidth1, randomHeight1);
  context.lineTo(getRandomNumber(width-borderMargin, 0), getRandomNumber(height-borderMargin, 0));
  // then draw a line from the end
  context.moveTo(randomWidth2, randomHeight2);
  context.lineTo(getRandomNumber(width-borderMargin, 0), getRandomNumber(height-borderMargin, 0));
  
  context.strokeStyle = "#" + randomElement(colors);

  context.stroke();
}


const createCircle = (width, height, context, radius, color, strokeColor) => {
  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius*2), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = blackOrWhite()
  context.fill();
  // context.lineWidth = 0.001;
  // context.strokeStyle = strokeColor;
  // context.stroke();
}

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}


function getRandomNumber(max, min) {

  number = Math.floor(Math.random()* max) + min
  console.log("the number is", number)
  return number
}

function blackOrWhite() {
  if (Math.random() > 0.5) {
    return "white"
  } else {
    return "black"
  }
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