
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("Button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delect");
    item.appendChild(delBtn);
   
    /*let br = document.createElement("br");
    ul.append(br); */
    ul.appendChild(item);
    input.value = "";

    
});

ul.addEventListener("click", function(event){
  
    if( event.target.nodeName == "BUTTON" ){
        let listItem = event.target.parentElement;
        
       listItem.remove();
      
    } 
})
/*
ul.addEventListener("click" , function(event) {
    if(event.target.nodeName == "BR"){
        let br = event.target.parentElement;
        br.remove();
    }
}) */


/*
 




 let delBtns = document.querySelectorAll(".delete");
 for(delBtn of delBtns){
    delBtn.addEventListener("click", function() {
        let para = this.parentElement;
        para.remove();
    });
 }
*/



/*
delbtn.addEventListener("click", function() {
    ul.removeChild(item);
    ul.removeChild(br);
}) */


















