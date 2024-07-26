document.addEventListener("DOMContentLoaded",function(){

    
    var a = document.getElementById("bulb");
    var button = document.getElementById("button");

    var flag = 0

    button.addEventListener("click",function(){
        if(flag=0){

            a.style.backgroundColor = "Yellow"
        button.innerHtml = ("off")
        flag=1
        }
        else{
            a.style.backgroundColor = "white"
            button.innerHTML = ("on")
            flag=0
        }


    });
});