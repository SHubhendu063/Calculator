
let getNumbers=document.getElementsByClassName('inputclass');
let setCalNum=document.querySelector('.textfild');
let calc="";
let value=document.createElement('p');
setCalNum.append(value);
let calculator=(event)=>{

    if (event.target.textContent == '=') {

    value.textContent=eval(setCalNum.textContent);
        
    }else if (event.target.textContent == 'C') {
        value.textContent="";
    }else if (event.target.textContent == 'x') {
        value.append('*');
    }
    else{
        calc=event.target.textContent;
        value.append(calc);
    }
    
}

let newArr=Array.from(getNumbers);
newArr.forEach((data)=>{
    data.addEventListener('click',calculator);
});
    
}

let newArr=Array.from(getNumbers);
newArr.forEach((data)=>{
    data.addEventListener('click',calculator);
});
