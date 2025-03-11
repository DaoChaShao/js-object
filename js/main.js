const Gender = Object.freeze({
    MALE: "Male",
    FEMALE: "Female",
});

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomOption = (arr) => arr[Math.floor(Math.random() * arr.length)];

function randomColour(category = "rgb") {
    switch (category) {
        case "rgb":
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        case "hex":
            const hex = Math.floor(Math.random() * 16777215).toString(16);
            return `#${hex}`;
        default:
            return `${category} is not supported.`;
    }
}

function main() {
    const tom = {
        name: "Tom",
        age: 18,
        gender: Gender.MALE,
    };
    document.write(`${tom}`, "<br>");
    console.log(tom);
    document.write(`${typeof tom}`, "<br>");
    document.write(`${tom.name}`, "<br>");
    document.write(`${tom.age}`, "<br>");
    document.write(`${tom.gender}`, "<br>");

    tom.age = 24;
    document.write(`${tom.age}`, "<br>");

    tom.hobby = "Reading";
    document.write(`${tom}`, "<br>");
    console.log(tom);
    document.write(`${typeof tom}`, "<br>");
    document.write(`${typeof tom.hobby}`, "<br>");

    delete tom.hobby;
    document.write(`${tom["name"]}`, "<br>");
    document.write(`${tom["age"]}`, "<br>");
    document.write(`${tom["gender"]}`, "<br>");


    const jerry = {
        name: "Jerry",
        age: 18,
        gender: Gender.FEMALE,
        greet: function () {
            console.log(`Hello, my name is ${this.name}`);
        },
    };
    document.write(`${jerry}`, "<br>");
    document.write(`${typeof jerry}`, "<br>");
    document.write(`${jerry.name}`, "<br>");
    document.write(`${jerry.age}`, "<br>");
    document.write(`${jerry.gender}`, "<br>");
    jerry.greet();

    for (let property in jerry) {
        document.write(`${property}: ${jerry[property]}`, "<br>");
    }

    const titanic = [
        {name: "Jack", age: 24, gender: Gender.MALE},
        {name: "Rose", age: 22, gender: Gender.FEMALE},
    ];
    for (let i = 0; i < titanic.length; i++) {
        for (let p in titanic[i]) {
            console.log(`${p}: ${titanic[i][p]}`);
        }
    }

    const randInt = randomInt(3, 5);
    document.write(`${randInt}`, "<br>");

    const randFloat = randomFloat(3.0, 5.0);
    document.write(`${randFloat.toFixed(2)}`, "<br>");

    const fruits = ["Apple", "Banana", "Cherry"];
    const randFruit = randomOption(fruits);
    document.write(`${randFruit}`, "<br>");

    const randRGB = randomColour("rgb");
    document.write(`${randRGB}`, "<br>");
    const oRGB = document.getElementById("rgb");
    oRGB.style.backgroundColor = randRGB;

    const randHex = randomColour("hex");
    document.write(`${randHex}`, "<br>");
    const oHex = document.querySelector("#hex");
    oHex.style.backgroundColor = randHex;
}

main()