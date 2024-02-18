// console.log("connected");

function calculateTriangleArea(){
    // console.log("Inside function");
    const triangleBaseInput = document.getElementById("triangelBase");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(triangleBaseText);
    // console.log(typeof base);
    // console.log(base);

    const triangleHeightInput = document.getElementById("triangleHeight");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    const area = 0.5 * base * height;
    console.log("The area of triangle is:", area);

    const triangleAreaSpan = document.getElementById("triangleArea");
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById("rectangleWidth");
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById("rectangleLength");
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    const area = width * length;

    const rectangleAreaSpan = document.getElementById("rectangleArea");
    rectangleAreaSpan.innerText = area;
}

function parallelogramArea(){
    const parallelogramBaseInput = document.getElementById("parallelogramBase");
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeightInput = document.getElementById("parallelogramHeight");
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);

    const area = base * height;
    if(typeof base !== "number" || isNaN(base) === true){
        return "Please provide a number";
    }
    else if(typeof height !== "number" || isNaN(height) === true){
        return "Please provide a number";
    }

    const parallelogramAreaSpan = document.getElementById("parallelogramArea");
    parallelogramAreaSpan.innerText = area;
}

function calculateRhombusArea(){
    const dimensionOne = getInputById("rhombusDimensionOne");
    // console.log("Dimension One value is:", dimensionOne);

    const dimensionTwo = getInputById("rhombusDimensionTwo");
    // console.log("Dimension two value is:", dimensionTwo);

    const area = 0.5 * dimensionOne * dimensionTwo;
    // console.log("Area of the Rhombus is:", area);

    setInnerTextById("rhombusArea", area);
}

function getInputById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField);
    // console.log(inputField.value);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const areaSpan = document.getElementById(elementId);
    areaSpan.innerText = area;
}

// Pentagon Area
function calculatePentagonArea(){
    const penta = getInputById("pentagonPenta");
    const base = getInputById("pentagonBase");

    const area = 0.5 * penta * base;

    setInnerTextById("pentagonArea", area);
}