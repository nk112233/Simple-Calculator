function append(value){
    const display=document.getElementById("input");
    display.textContent+=value;

}

function calc(){
    let x=document.getElementById("input").textContent;
    x = x.replace("^","**");
    let y=eval(x);
    document.getElementById("input").textContent=y;
}

function allclr() { 
    document.getElementById("input").textContent = "";
}
function del() { 
    const display = document.getElementById("input");
    display.textContent = display.textContent.slice(0, -1);
}

document.addEventListener("keydown", keyboard);

function keyboard(e) {
    const keyValue = e.key;
    console.log(keyValue);
    if (/^[0-9\+\^\-\*\.\/]$/.test(keyValue)) {
        document.getElementById(keyValue).style.transform = `translateY(.125rem)`;
        document.getElementById(keyValue).style.backgroundColor = `#805eb1`;
        document.addEventListener('keyup', () => {
            document.getElementById(keyValue).style.transform = 'none';
            document.getElementById(keyValue).style.backgroundColor = `#27005D`;
        });
        append(keyValue);
    } 
    else if (keyValue === "Enter") {
        document.getElementById("result").style.transform = `translateY(.125rem)`;
        document.getElementById("result").style.backgroundColor = `#805eb1`;
        document.addEventListener('keyup', () => {
        document.getElementById("result").style.transform = 'none';
        document.getElementById("result").style.backgroundColor = `#4caf50`;
        });
        calc();
    }
    else if(keyValue === "Backspace"){
        document.getElementById("del").style.transform = `translateY(.125rem)`;
        document.getElementById("del").style.backgroundColor = `#805eb1`;
        document.addEventListener('keyup', () => {
        document.getElementById("del").style.transform = 'none';
        document.getElementById("del").style.backgroundColor = `#27005D`;
        });
        const display = document.getElementById("input");
        display.textContent = display.textContent.slice(0, -1);
    }
}
