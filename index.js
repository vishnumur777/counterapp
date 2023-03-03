let i = 0;
function incFunc(){
    i++;
    document.getElementById("count").innerHTML = i;
}
function decFunc(){
    i--;
    document.getElementById("count").innerHTML = i;
}
function resFunc(){
    i = 0;
    document.getElementById("count").innerHTML = i;
}