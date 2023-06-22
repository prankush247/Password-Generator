var reset=document.getElementById("reset")
reset.addEventListener("click",resetP)
var generate=document.getElementById("generate")
generate.addEventListener("click",generate_password)
var copy=document.getElementById("copy")
copy.addEventListener("click",copy_password)

var inputField=document.getElementById("password")

function generate_password(){
    var len=document.getElementById("length")
    var char=document.getElementById("character")
    var num=document.getElementById("number")
    // console.log(len.value)
    characterArr=["!","@","#","$","%","&","*","$","%","&","*"]
    var x=Math.floor(Math.random()*10**(number.value))
    console.log(x)
    var y=""
    for(let i=0; i<char.value; i++){
        y+=characterArr[Math.floor(Math.random()*10)]
    }
    console.log(y)
    zlen=Math.abs(len.value-char.value-number.value)

    var z = "";
    for (var i = 0; i < zlen; i++) {
        var randomCharCode = Math.floor(Math.random() * 26) + 97;
        var randomLetter = String.fromCharCode(randomCharCode);
        z += randomLetter;
    }
    str1=x+y+z
    inputField.value=str1
    //shuffle? For now NO
    
}
function resetP(){
    inputField.value=""
}
function copy_password(){
    navigator.clipboard.writeText(inputField.value)
    alert("Copied password to clipboard !!")
}