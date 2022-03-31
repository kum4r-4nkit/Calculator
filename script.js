let clear = document.getElementById("clear");
let buttons = document.querySelectorAll(".btn");
let equals = document.getElementById("equal");
let res = document.getElementById("result");

function clearScreen() {
    res.value = "";
}

function resultScreen() {
    res.value = eval(res.value || null);
}

equals.addEventListener("click", resultScreen);
clear.addEventListener("click", clearScreen);

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let text = e.target.value;
        if (!res.value) {
            res.value = "";
        }
        res.value += text;
    });
}

document.addEventListener("keydown", keyboardInputHandler);
function keyboardInputHandler(e) {
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }

    if (e.key === ".") {
        res.value += ".";
    }

    if (e.key === "Enter") {
        res.value = eval(result.value || null);
    }

    if (e.key === "Backspace") {
        let resultInput = res.value;
        res.value = resultInput.substring(0, res.value.length - 1);
    }
}
