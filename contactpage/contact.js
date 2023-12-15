var del=document.getElementById("del");
let divadd=document.getElementById("noppl");
var add=document.getElementById("add");
add.addEventListener("click",()=>{
    divadd.append(createform());
})
function createform(){
  

    // Create form element
    var form = createInputElement("form", { id: "myForm" });

    // Create label for "Enter Name"
    var nameLabel = createInputElement("label", { innerHTML: "Enter Name:-" });

    // Create input for "Enter Name"
    var nameInput = createInputElement("input", { type: "text", placeholder: "Enter your Name" });

    // Create delete button
    var deleteButton = createInputElement("button", { id: "del", innerHTML: "Delete", onclick: delbtn });
    // Create line break
    var lineBreak = document.createElement("br");

    // Append elements to form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(deleteButton);
    form.appendChild(lineBreak);

    // Create label for "Select Gender"
    var genderLabel = createInputElement("label", { innerHTML: "Select Gender:-" });

    // Create radio button for "Male"
    var maleRadio = createInputElement("input", { type: "radio", id: "contactChoice2", name: "contact", value: "male" });
    var maleLabel = createInputElement("label", { innerHTML: "Male", for: "contactChoice2" });

    // Create radio button for "Female"
    var femaleRadio = createInputElement("input", { type: "radio", id: "contactChoice3", name: "contact", value: "female" });
    var femaleLabel = createInputElement("label", { innerHTML: "Female", for: "contactChoice3" });

    // Create line break
    var lineBreak2 = document.createElement("br");

    // Append elements to form
    form.appendChild(genderLabel);
    form.appendChild(maleRadio);
    form.appendChild(maleLabel);
    form.appendChild(femaleRadio);
    form.appendChild(femaleLabel);
    form.appendChild(lineBreak2);

    // Create label for "Enter Age"
    var ageLabel = createInputElement("label", { innerHTML: "Enter Age:-" });

    // Create input for "Enter Age"
    var ageInput = createInputElement("input", { type: "number" });

    // Append elements to form
    form.appendChild(ageLabel);
    form.appendChild(ageInput);

    // Append form to formContainer
    
    return form;
  }
  function createInputElement(type, attributes) {
    var element = document.createElement(type);
    for (var key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  }


del.addEventListener("click",()=>{

  var form = document.getElementById("myForm");

  // Remove all child elements (form elements)
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
});

function delbtn(){
    var form = this.parentNode;
  
    // Remove all child elements (form elements)
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  }
  