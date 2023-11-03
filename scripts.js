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

