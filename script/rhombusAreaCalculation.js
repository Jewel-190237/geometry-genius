function rhombusAreaCalculation() {
    const d1 = getValueById('d1');
    const d2 = getValueById('d2');

    const area = 0.5 * d1 * d2;

    setValueById('r-area', area);


}

function getValueById(idValue){
    const inputValue = document.getElementById(idValue);
    const innerValue = inputValue.value;
    const value = parseFloat(innerValue);

    return value;
}
function setValueById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}