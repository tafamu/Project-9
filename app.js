const text=document.querySelector("#textarea");
const add=document.querySelector(".add");
const container=document.querySelector(".container");

add.addEventListener("click",ekle);




function ekle(){
    let value=text.value;

    if(value){
    const new_list=document.createElement("div");
    const new_p=document.createElement("p");
    const new_input=document.createElement("input");
    const new_button=document.createElement("button");
    
    new_button.classList.add("toggle");
    new_input.classList.add("check");
    new_input.type= "checkbox";
    new_p.classList.add("text");
    new_list.classList.add("list-item");

    new_input.addEventListener("click",function(){
        new_p.classList.toggle("line");
    });

    new_button.addEventListener("click",function(){
        container.removeChild(new_list);
    })
    
    new_list.appendChild(new_p);
    new_list.appendChild(new_input);
    new_list.appendChild(new_button);

    container.appendChild(new_list);    
    
    new_p.innerHTML=value;
    text.value="";
    }


}