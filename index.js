const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-btn");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");
const availableNotes=[2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function calculateChange(){
hideMessage();
if(billAmount.value>0){
if(cashGiven.value>=billAmount.value){
const amountToBeReturned=cashGiven.value-billAmount.value;
changeToBeReturned(amountToBeReturned);
}else{
    showMessage("muft me khana chahate ho kya!!")
}
}else{
    showMessage("invalid bill amount")
}
});
function changeToBeReturned(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const change=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned%availableNotes[i]
        noOfNotes[i].innerText=change;
    }
   
}
function hideMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
