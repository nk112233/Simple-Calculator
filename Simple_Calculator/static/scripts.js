function append(value){
    const display=document.getElementById("input");
    display.textContent+=value;
}

function calc(){
    let x=document.getElementById("input").textContent;
    let y=eval(x);
    document.getElementById("input").textContent=y;
}

function clr() { 
    document.getElementById("input").textContent = ""
}

