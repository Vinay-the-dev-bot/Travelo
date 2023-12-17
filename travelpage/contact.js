document.getElementById("add").addEventListener("click", () => {
  var newForm = createForm();
  document.getElementById("noppl").appendChild(newForm);
});

document.getElementById("btn1").addEventListener("click", () => {
  var termsCheckbox = document.getElementById("termsCheckbox");
  console.log(termsCheckbox.checked);
  if (termsCheckbox.checked) {
    saveDetails();
  } 
  else {
    window.location.href = "../travelpage/travel.html";

    alert('Please check the T&C before proceeding.');
   
     event.preventDefault();
     //event.stopPropagation();
  }
});
// function validateCheckbox() {
//   var termsCheckbox = document.getElementById("termsCheckbox");
//   return ;
// }

function createForm() {
  var form = document.createElement("form");
form.className="myForm";
  var nameLabel = document.createElement("label");
  nameLabel.textContent = "Enter Name:- ";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Enter Name";
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));

  var genderLabel = document.createElement("label");
  genderLabel.textContent = "Select Gender:- ";
  var maleRadio = document.createElement("input");
  maleRadio.type = "radio";
  maleRadio.id = "c1";
  maleRadio.name = "contact";
  maleRadio.value = "male";
  var maleLabel = document.createElement("label");
  maleLabel.textContent = "Male";
  var femaleRadio = document.createElement("input");
  femaleRadio.type = "radio";
  femaleRadio.id = "c3";
  femaleRadio.name = "contact";
  femaleRadio.value = "female";
  var femaleLabel = document.createElement("label");
  femaleLabel.textContent = "Female";
  form.appendChild(genderLabel);
  form.appendChild(maleRadio);
  form.appendChild(maleLabel);
  form.appendChild(femaleRadio);
  form.appendChild(femaleLabel);
  form.appendChild(document.createElement("br"));

  var ageLabel = document.createElement("label");
  ageLabel.textContent = "Enter Age:- ";
  var ageInput = document.createElement("input");
  ageInput.type = "number";
  form.appendChild(ageLabel);
  form.appendChild(ageInput);

  var deleteButton = document.createElement("button");
  deleteButton.className = "del";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
      deleteForm(form);
  });
  form.appendChild(deleteButton);

  return form;
}

function deleteForm(form) {
  form.remove();
  updateLocalStorage();
}

function updateLocalStorage() {
  var formsData = [];
  var formElements = document.querySelectorAll('#noppl form');

  formElements.forEach(function (form) {
    var formData = {
      name: form.querySelector('input[placeholder="Enter Name"]').value,
      gender: form.querySelector('input[name="contact"]:checked').value,
      age: form.querySelector('input[type="number"]').value
    };
    formsData.push(formData);
  });

  localStorage.setItem('formDetails', JSON.stringify(formsData));
}

function saveDetails() {
  updateLocalStorage();
  // Additional logic for continuing to the next page
  window.location.href = "../paymentcard/payment.html";
}

//Load existing form data from localStorage if any
// window.addEventListener('load', function () {
//   var storedFormsData = localStorage.getItem('formDetails');
//   if (storedFormsData) {
//       var formsData = JSON.parse(storedFormsData);
//       formsData.forEach(function (formData) {
//           var newForm = createForm();
//           newForm.querySelector('input[placeholder="Enter Name"]').value = formData.name;
//           newForm.querySelector('input[name="contact"][value="' + formData.gender + '"]').checked = true;
//           newForm.querySelector('input[type="number"]').value = formData.age;
//           document.getElementById("noppl").appendChild(newForm);
//       });
//   }
// });