let base = document.getElementById('base');
let height = document.getElementById('height');

let perimeterResult = document.getElementById('perimeterResult');
let areaResult = document.getElementById('areaResult');
 
function perimeterCalculation(base, height) {
    perimeterResult = 2 * (base + height);
    perimeterResult.innerHTML = `Perimeter: ${perimeterResult}`;
}

perimeterCalculation();

function areaCalculation(base, height) {
    areaResult = base * height;
}

areaCalculation();