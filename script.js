//buttons variable take all buttons
let buttons=document.querySelectorAll("button");
//accessing input as tag name here (#input accessing through id name is also possible ) to display what we click in input box
let input=document.querySelector("input") 
//here we used forEach method and also addEventListener  method both has callback
//  I need to apply event on each button so I used forEach method in that callback  is adding event 'click'
buttons.forEach((btn)=>{
 btn.addEventListener("click",()=>{
    let value=btn.innerText;
    if(value=="AC"){
        input.value="";
    }
    //simple java analogy to understand input.value 
    //input → the object itself, like 
    // Box b = new Box(); in Java
// input.value → the field inside the object, like b.text in Java
//  (input type is text )
        else if(value=="DEL"){
        input.value=input.value.slice(0, -1)
        //slice() is a string method used to cut part of a string.
        //Start from index 0
// Stop one character before the end i.e at -2 index 
        }
       else if(value=="="){
        //eval() is a built-in function in JavaScript. 
     try{
        // replace x with * so JS can calculate
        input.value=eval(input.value.replaceAll("x","*"));
     }
     catch{
        input.value="Error";
     }
    }
    else{// if  numbers and operators append it  
        input.value+=value;
    }
 });
});
let body=document.querySelector("body");

//summary 
//The input box stores the display as a string. Buttons are accessed using forEach, each click reads the button text (innerText) and updates input.value. Numbers/operators are appended, DEL removes last character, AC clears everything, = evaluates — all changes are reflected in input.value.