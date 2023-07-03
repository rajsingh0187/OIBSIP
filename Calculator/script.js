let button = document.querySelectorAll('button');
let input = document.querySelector('input');
Array.from(button).forEach((e)=>{
    e.addEventListener('click',(btn)=>{
        let value = btn.target.innerHTML;
        if(value==='AC'){
            input.value="";
        }
        else if(value=='DEL'){
            input.value = input.value.substring(0, input.value.length-1);
        }
        else if(value=='%'){
            input.value=(eval(input.value)/100);
        }
        else if(value=='='){
            input.value=eval(input.value);
        }
        else{
            input.value+=value;
        }
    })
})