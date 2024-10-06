let countEl=document.getElementById("count-el");

let count=0;

function increment(){
    // Get the html element count el and get it as variable as result you 
    // do countEL variable and assign to the inner text is assigned to count. 
    // That makes count add by plus one.
    count=count+1;
    countEl.innerText=count;

}
let saveEl=document.getElementById("save-el");

function save(){
let countStr= count + " - ";
// So the += adds the prior text and adds on to saveEL;
saveEl.textContent +=countStr;
countEl.textContent=0;
count=0;
   
}
