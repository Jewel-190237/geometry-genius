function parallelogramAreaCalculation(){
    const base = getValueById('p-base');
    const length = getValueById('p-length')

    const area = base * length;

    setInnerTextById('p-area', area)

    //const areaValue = document.getElementById('p-area');
    //areaValue.innerText = area;

}

function getValueById(idValue){
    const inputField = document.getElementById(idValue)
    const innerValue = inputField.value;
    const value = parseFloat(innerValue);

    return value;

}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
