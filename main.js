const confirmResult = confirm();

let helloWorld = () => {
  if (confirmResult) {
    alert("HelloWorld");
  }
};

helloWorld();

// 2

const random = Math.floor(Math.random() * 101);
const promptWindow = prompt("Введіть число");

let randomNumber = () => {
    if (random === Number(promptWindow)) {
        alert("Ви вгадали число");
        console.log(`Рандомне число: ${random}`);
        console.log(`Ваше число: ${promptWindow}`)
    } else {
        alert("Ви не вгадали число");
        console.log(`Рандомне число: ${random}`);
        console.log(`Ваше число: ${promptWindow}`)
    }
}

randomNumber();

// 3

let clickCount = 0;

const clickCounter = () => {
  clickCount++;
  console.log(`Ви клікнули по сторінці ${clickCount} разів`);
};

document.addEventListener('click', clickCounter);

// 4

const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (x) => x * x;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

//  5

let discountPrice;

const calculateDiscountedPrice = (price, discount, callback) => {
    discountPrice = price - discount;
    callback(discountPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    alert(`Ціна разом зі знижкою: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
