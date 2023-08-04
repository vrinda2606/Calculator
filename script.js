let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let calc = "";
let result = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (x) => {
        console.log(x.target.innerHTML);
        if(x.target.innerHTML == '='){
            eval(`calc = ${eval(calc)}`);
            /*calc = eval(calc);*/
        }
        else if(x.target.innerHTML == "AC"){
            calc = '';
            result = '';
        }
        else if(x.target.innerHTML == "DEL"){
            calc = calc.substring(0,calc.length-1);
        }
        else{
        calc += x.target.innerHTML;
        } 
        input.value = calc;
    });
});

//keydown events 
document.addEventListener("keydown", (event) => {
    const key = event.key;
    let keyText = key;

    if(key == "Enter"){
        keyText = "=";
    }

if(/[0-9+\-*/=]/.test(keyText) || keyText === "Backspace" || keyText === "Delete"){
    if(keyText === '='){
        eval(`calc = ${eval(calc)}`);
    }else if (keyText === "Delete") {
        calc = '';
        result = '';
    } else if (keyText === "Backspace") {
        calc = calc.substring(0, calc.length - 1);
    } else {
        calc += keyText;
    }

    input.value=calc;
}
    console.log(key);
});