


let input_box = document.getElementById("inputbox")
let buttons = document.querySelectorAll("button")

let string = ""
let arr = Array.from(buttons)

arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if( e.target.innerHTML == "="){
            string = eval(string)
            input_box.value = string;
        }
        
        else if( e.target.innerHTML == "AC"){
            string = ""
            input_box.value = string
        }

        else if(e.target.innerHTML == "⌫"){
            string = string.substring(0,string.length-1)
            input_box.value = string;
        }

        else{
            string += e.target.innerHTML
            input_box.value = string
        }
    })
})
