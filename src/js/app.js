const base = document.getElementById('base');
const height = document.getElementById('height');

const calculatePerimeter = document.getElementById('calculatePerimeter');
const calculateArea = document.getElementById('calculateArea');

const perimeterResult = document.getElementById('perimeterResult');
const areaResult = document.getElementById('areaResult');


calculatePerimeter.addEventListener('click', function (){    
    let perimeter = 2 * (base.value + height.value);
    perimeterResult.innerHTML = `Perimeter: ${perimeter}`;
})

calculateArea.addEventListener('click', function (){    
    let area = base.value * height.value;
    areaResult.innerHTML = `Area: ${area}`;
})
