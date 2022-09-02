
// Background Color
let colors = [[218, 183, 237], [159, 233, 237], [237, 196, 168], [224, 237, 173]];

let bg = document.getElementById('background');

function mix(a, b, t){
    let result = [0, 0, 0];
    result[0] = a[0] * (1 - t) + b[0] * t;
    result[1] = a[1] * (1 - t) + b[1] * t;
    result[2] = a[2] * (1 - t) + b[2] * t;
    return result;
}

bg.addEventListener(
    "mousemove", function (e) {
        tx = e.offsetX / screen.width;
        ty = e.offsetY / screen.height;

        let col1 = mix(colors[0], colors[1], tx);
        let col2 = mix(colors[2], colors[3], tx);
        let col = mix(col1, col2, ty);

        bg.style.backgroundColor = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
    }
);

