function triangleAreaCalculation(){
    // Get base
    const triangleBase = document.getElementById('base');
    const baseTriangle = triangleBase.value;
    const base = parseFloat(baseTriangle);

    // Get height
    const triangleHeight = document.getElementById('height');
    const heightTriangle = triangleHeight.value;
    const height = parseFloat(heightTriangle);

    // Area calculation
    const area = 0.5 * base * height;

    // display area
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = area;
}