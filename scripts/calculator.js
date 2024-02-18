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