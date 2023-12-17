var confirm=document.querySelector('form');
confirm.addEventListener("submit",function(event){
event.preventDefault();
  var name = document.getElementById('name').value;
var cardno = document.getElementById('cardNo').value;
var cardcvv = document.getElementById('cardCvv').value;
var date1=document.getElementById('cardyear').value;
console.log(name);
console.log(cardcvv);
if (name =='' || cardno=='' || cardcvv=='' || date1=='') {
  alert("Please fill all the fields");
} else {
  window.location.href = "../otp/otp.html";
}
});