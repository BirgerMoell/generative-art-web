const canvasSketch = require('canvas-sketch');

// Sketch parameters
const settings = {
  dimensions: 'a4',
  pixelsPerInch: 300,
  units: 'in'
};

const borderMargin = 2

const colors = ["cyan", "red", "blue", "green", "yellow", "orange", "purple"]

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    console.log("the context is ", context)
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.fill

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    for (const color in colors) {
      console.log("color", )
      fill.addColorStop(color/(colors.length), blackOrWhite());
    }

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    for (let i = 0; i < 50; i++) {
      console.log("creating circle number", i)
      createCircle(width, height, context, 0.5, getRandomColor(), getRandomColor())
    }
    

 
                // // Now draw a white rectangle in the center
                // context.strokeStyle = 'white';
                // context.lineWidth = 4;
                // context.strokeRect(width / 4, height / 4, width / 2, height / 2);
          
        

  };
};

const createCircle = (width, height, context, radius, color, strokeColor) => {
  context.beginPath();
  context.arc(getRandomNumber(width-borderMargin, radius*2), getRandomNumber(height-borderMargin, radius*2), radius, 0, 2 * Math.PI, false);
  context.fillStyle = blackOrWhite()
  context.fill();
  // context.lineWidth = 0.001;
  // context.strokeStyle = strokeColor;
  // context.stroke();
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