import './scss/main.scss';
import pixelCanvas32 from './data/32x32.json';
import pixelCanvas4 from './data/4x4.json'

//draw the initial 4by4 canvas
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    width = pixelCanvas4[0].length,
    height = pixelCanvas4.length,
    scale = 128; // Scales the whole image by this amount

canvas.width = width * scale;
canvas.height = height * scale;

// Loop through each color and draw that section
for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
        ctx.fillStyle = pixelCanvas4[row][col];
        ctx.fillRect(col * scale, row * scale, scale, scale);
    }
}

document.getElementById('4by4').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let width = pixelCanvas4[0].length,
        height = pixelCanvas4.length,
        scale = 128;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = pixelCanvas4[row][col];
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
});

document.getElementById('32by32').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let width = pixelCanvas32[0].length,
        height = pixelCanvas32.length,
        scale = 16;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = `rgba(${pixelCanvas32[row][col][0]},${pixelCanvas32[row][col][1]},${pixelCanvas32[row][col][2]},${pixelCanvas32[row][col][3]})`;
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
});

document.getElementById('256by256').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
