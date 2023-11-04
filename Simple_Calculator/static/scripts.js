function append(value){
    const display=document.getElementById("input");
    display.textContent+=value;
}

function calc(){
    let x=document.getElementById("input").textContent;
    let y=eval(x);
    document.getElementById("input").textContent=y;
}

function allclr() { 
    document.getElementById("input").textContent = ""
}
function del() { 
    let x=document.getElementById("input").textContent;
    document.getElementById("input").textContent = x.substring(0, x.length - 1);
}

document.addEventListener("keydown", keyboard);

function keyboard(e) {
    const keyValue = e.key;
    if (/^[0-9\+\-\*\.\/]$/.test(keyValue)) {
        append(keyValue);
    } 
    else if (keyValue === "Enter") {
        calc();
    }
    else if(keyValue === "Backspace"){
        const display = document.getElementById("input");
        display.textContent = display.textContent.slice(0, -1);
    }
}
