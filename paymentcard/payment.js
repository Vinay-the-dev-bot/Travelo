var confirm=document.querySelector('form');
confirm.addEventListener("submit",function(event){
event.preventDefault(); // Prevent the form from submitting
  var name = document.getElementById('name').value;
var cardno = document.getElementById('cardNo').value;
var cardcvv = document.getElementById('cardCvv').value;
var date1=document.getElementById('cardyear').value;
console.log(name);
console.log(cardcvv);
if (name =='' || cardno=='' || cardcvv=='' || date1=='') {
  alert("Any of the Given fields are empty");
} else {
  window.location.href = "../otp/otp.html";
}
});