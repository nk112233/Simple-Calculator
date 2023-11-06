let history = {};
function append(value){
    const display=document.getElementById("input");
    let x = display.textContent;
    let lc = x.slice(-1);
    if(IsOperator(lc) && IsOperator(value)){
            console.log(x.slice(0,-1));
            display.textContent = x.slice(0,-1);
            display.textContent += value;
    }
    else{
        display.textContent+=value;
    }

}
function IsOperator(strr){
        const operators = [ "+", "-", "*", "/", "^"];
        return operators.includes(strr);
}
function calc(){
    let x=document.getElementById("input").textContent;
    document.getElementById("expr").textContent = x;
    x = x.replace("^","**");
    let y=eval(x);
    document.getElementById("input").textContent=y;
    x = x.replace("**","^");
    history[x] = y;
    let hl = document.getElementById("history-list");
    hl.scrollTop = hl.scrollHeight;
}

function allclr() { 
    document.getElementById("input").textContent = "";
    document.getElementById("expr").textContent = "";
    let hl = document.getElementById("history-list");
    hl.scrollTop = hl.scrollHeight;
}
function del() { 

    document.getElementById("expr").textContent = "";
    const display = document.getElementById("input");
    display.textContent = display.textContent.slice(0, -1);
}

document.addEventListener("keydown", keyboard);

function keyboard(e) {
    e.preventDefault();
    const keyValue = e.key;
    console.log(keyValue);
    if (/^[0-9\+\^\-\*\.\/]$/.test(keyValue)) {
        document.getElementById(keyValue).style.transform = `translateY(.125rem)`;
        document.getElementById(keyValue).style.backgroundColor = `#57595b`;
        document.addEventListener('keyup', () => {
            document.getElementById(keyValue).style.transform = 'none';
            document.getElementById(keyValue).style.backgroundColor = `#111111`;
        });
        append(keyValue);
    } 
    else if (keyValue === "Enter") {
        document.getElementById("result").style.transform = `translateY(.125rem)`;
        document.getElementById("result").style.backgroundColor = `#57595b`;
        document.addEventListener('keyup', () => {
        document.getElementById("result").style.transform = 'none';
        document.getElementById("result").style.backgroundColor = `#4caf50`;
        });
        calc();
    }
    else if(keyValue === "Backspace"){
        document.getElementById("del").style.transform = `translateY(.125rem)`;
        document.getElementById("del").style.backgroundColor = `#57595b`;
        document.addEventListener('keyup', () => {
        document.getElementById("del").style.transform = 'none';
        document.getElementById("del").style.backgroundColor = `#111111`;
        });
        const display = document.getElementById("input");
        display.textContent = display.textContent.slice(0, -1);
    }
    else if(keyValue === "Escape"){
    		document.getElementById("all-clear").style.transform = `translateY(.125rem)`;
        document.getElementById("all-clear").style.backgroundColor = `#cc2900`;
        document.addEventListener('keyup', () => {
        document.getElementById("all-clear").style.transform = 'none';
        document.getElementById("all-clear").style.backgroundColor = `#f44336`;
        });
        allclr();
    	
    }
}

function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; 
    for (const key in history) {
        const calculation = `<div class = "hsrecord">${key} = ${history[key]}</div>`;
        historyList.innerHTML += calculation;
    }
}
setInterval(updateHistory, 10);
function clearHistory(){
    history = {};
    document.getElementById("history-list").innerHTML = "";
}


