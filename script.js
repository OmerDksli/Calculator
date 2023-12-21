
let buttons=document.querySelectorAll(".dugme");

buttons.forEach(button=>{button.addEventListener("click",yazdir)})

var a=0;
function yazdir()
{
    switch (this.value) {
        case "=":
            document.getElementById("window").value=eval(document.getElementById("window").value);
            break;
        case "AC":
            document.getElementById("window").value="";
            break; 
        case "C":
            var DeleteSen=document.getElementById("window").value;
            document.getElementById("window").value=DeleteSen.slice(0,(DeleteSen.length-1));
            break;       
        default:
            document.getElementById("window").value+=this.value;
            break;
    }
    
 
}