import './scss/main.scss';
import pixelCanvas32 from './data/32x32.json';
import pixelCanvas4 from './data/4x4.json'

let canvas = document.querySelector('canvas'), // Select our canvas element
    ctx = canvas.getContext('2d'), // Save the context we're going to use
    width = pixelCanvas4[0].length, // Get the width
    height = pixelCanvas4.length, // Get the height
    scale = 128; // Scales the whole image by this amount

canvas.width = width * scale; // Set the canvas width
canvas.height = height * scale; // Set the canvas height

// Loop through each color and draw that section
for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
        ctx.fillStyle = pixelCanvas4[row][col]; // Set the color to the one specified
        ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
    }
}

document.getElementById('4by4').addEventListener('click', () => {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let width = pixelCanvas4[0].length, // Get the width
        height = pixelCanvas4.length, // Get the height
        scale = 128; // Scales the whole image by this amount

    canvas.width = width * scale; // Set the canvas width
    canvas.height = height * scale; // Set the canvas height

// Loop through each color and draw that section
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = pixelCanvas4[row][col]; // Set the color to the one specified
            ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
        }
    }
});

document.getElementById('32by32').addEventListener('click', () => {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let width = pixelCanvas32[0].length, // Get the width
        height = pixelCanvas32.length, // Get the height
        scale = 16; // Scales the whole image by this amount

    canvas.width = width * scale; // Set the canvas width
    canvas.height = height * scale; // Set the canvas height

// Loop through each color and draw that section
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = `rgba(${pixelCanvas32[row][col][0]},${pixelCanvas32[row][col][1]},${pixelCanvas32[row][col][2]},${pixelCanvas32[row][col][3]})`; // Set the color to the one specified
            ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
        }
    }
});

document.getElementById('256by256').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
});

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
    module.hot.accept(); // eslint-disable-line no-undef
}
