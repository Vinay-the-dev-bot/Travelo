var timerSeconds = 20;
var timerInterval;
var isFirstLoad = true;

function startTimer() {
  var timerContainer = document.getElementById('timerContainer');
  timerContainer.style.display = 'block';
  updateTimerDisplay();

  timerInterval = setInterval(function () {
    timerSeconds--;

    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
    //   window.location.href = '../otp/otp.html';
    timerContainer.style.display = 'none';
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var timerContainer = document.getElementById('timerContainer');
  timerContainer.textContent = 'Enter otp in ' + timerSeconds + ' seconds';
}

function submitOtp() {
    var otpInputs = document.querySelectorAll('.otp-input');

    // Check if any OTP input is empty
    var isEmpty = Array.from(otpInputs).some(function (input) {
      return input.value.trim() === '';
    });

    if (isEmpty ) {
        if(isEmpty){
      alert('Wrong OTP! Please enter all four digits.');
        }
        else{
            alert('Please enter otp again');  
        }
    }
    // if(timerSeconds <= 0){
        
    //         alert('Please enter otp again');  
    //         window.location.href = '../otp/otp.html';
    // }
    else{
  clearInterval(timerInterval); // Stop the timer when the button is clicked
  window.location.href = '../success/success.html';
    }
 
}

// Start the timer when the page loads
// window.onload = function () {
    document.getElementById("resend").addEventListener("click",()=>{
        clearInterval(timerInterval);
        timerSeconds = 20;
        startTimer()
    });
    if (isFirstLoad) {
        startTimer();
        isFirstLoad = false;
      }
// };
