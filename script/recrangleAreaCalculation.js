function rectangleAreaCalculation(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const widthR = rectangleWidth.value;
    const width = parseFloat(widthR);
    console.log(width)

    const rectangleLength = document.getElementById('rectangle-length');
    const lengthR = rectangleLength.value;
    const length = parseFloat(lengthR);

    const area = width * length;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}