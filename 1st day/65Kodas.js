const studentForm = document.querySelector('form');

const initial_STUDENT_DATA = [
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: 30,
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: "type 1",
    },
    {
        Name: "Alius",

        Surname: "Grigaliūnas",
        
        Age: "23",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: "type 1",
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: "type 1",
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: "type 1",
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: "type 1",
    },
]

function renderInitialData(students){
   students.map(student=>{
    let studentName = student.Name;
    let studentSurname = student.Surname;
    let studentAge = student.Age;
    let studentPhone =  student.Phone;
    let studentEmail = student.Email;
    let studentItKnowledge =    student.IT_Knowledge;
    let studentGroup = student.group;
    
    let studentsList = document.querySelector('#students-list');
    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');
    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
    let ageElement = document.createElement('p');
    ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
    let phoneElement = document.createElement('p');

    phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
    let emailElement = document.createElement('p');

    emailElement.innerHTML = `<strong>Email:</strong> ****`;
    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
    let groupElement = document.createElement('p');
    groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;

    let privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Rodyti asmens duomenis';


    privateInfoButton.addEventListener('click', () => {
      if (!privateInfoButton.classList.contains('hide')) {
        phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
        emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
        privateInfoButton.textContent = 'Slėpti asmens duomenis';
      } else {      
        phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
        emailElement.innerHTML = `<strong>Email:</strong> ****`;
        privateInfoButton.textContent = 'Rodyti asmens duomenis';
      }
      privateInfoButton.classList.toggle('hide');
    });
    

    let removeButton = document.createElement('button');
    removeButton.textContent = 'RemoveStudent'
  
    removeButton.addEventListener('click',()=>{
      studentItem.remove();
      let messageRemoved = 'Student deleted'
      alertMessage(messageRemoved)
    })
    studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement,privateInfoButton,removeButton);
    studentsList.prepend(studentItem);
   })
}

renderInitialData(initial_STUDENT_DATA)

const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output');
itKnowledgeInputElement.addEventListener('input', (event) => {
  // console.log(itKnowledgeInputElement.value)
  // console.log(event.target.value);
  itKnowledgeOutputElement.textContent = event.target.value;
});
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.querySelector('#student-name').value;
  let studentSurname = document.getElementById('student-surname').value;
  let studentAge = event.target.querySelector('#student-age').value;
  let studentPhone = studentForm.querySelector('[name="phone"]').value;
  let studentEmail = event.target.elements.email.value;
  let studentItKnowledge = event.target.elements['it-knowledge'].value;
  let studentGroup = event.target.elements.group.value;
  let interests = document.querySelectorAll('input[name="interest"]:checked');
  let studentNameInput = document.querySelector('#student-name');
  studentNameInput.style.borderColor = '';
  let studentSurnameInput = document.querySelector('#student-surname')
  let studentAgeInput = event.target.querySelector('#student-age')
  let studentPhoneInput = studentForm.querySelector('[name="phone"]')

  let inputErrorMessage = document.querySelector('.input-error-message');
  if (inputErrorMessage) {
    inputErrorMessage.remove();
  }
  let validForm = true;
  let required = document.querySelectorAll('input.required');
    required.forEach(input=>{
    if (!input.value) {
        validForm = false;
        let alertText = 'Ne visi laukeliai užpildyti.';
        alertMessage(alertText, 'error-alert');
        input.style.borderColor = 'red';
        let inputError = document.createElement('span');
        inputError.textContent = 'Šis laukelis yra privalomas';
        inputError.classList.add('input-error-message');
        input.after(inputError);
      }
      if(input.value){
        input.style.borderColor = 'gray';
      }
})

    if(!validForm){
        return;
    }

//   if (!studentName) {
//     let alertText = 'Ne visi laukeliai užpildyti.';
//     alertMessage(alertText, 'error-alert');
//     studentNameInput.style.borderColor = 'red';
//     let inputError = document.createElement('span');
//     inputError.textContent = 'Šis laukelis yra privalomas';
//     inputError.classList.add('input-error-message');
//     studentNameInput.after(inputError);
//     return;
//   }

  let studentsList = document.querySelector('#students-list');
  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  let ThreeWordErrorMessage = document.querySelectorAll('.WordError');

  ThreeWordErrorMessage.forEach(element=>{
    if(element){
        element.remove();
      }
  })

  let nameElement = document.createElement('p');
  if(studentName.split('').length <= 3){
    let InputERROR = document.createElement('span');
    InputERROR.textContent = 'Vardas privalo būti bent 3 simbolių' ;
    InputERROR.classList.add('WordError');
    studentNameInput.after(InputERROR);
  }
  else{
    nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
  }

  
  let surnameElement = document.createElement('p');


  if(studentSurname.split('').length <=3){
    let InputERROR = document.createElement('span');
    InputERROR.textContent = 'Vardas privalo būti bent 3 simbolių' ;
    InputERROR.classList.add('WordError');
    studentSurnameInput.after(InputERROR);
  }
  else{
    surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
  }

  let ageElement = document.createElement('p');

  if(Number(studentAge) < 0){
    let InputERROR = document.createElement('span');
    InputERROR.textContent = 'Amžius privalo būti teigiamas' ;
    InputERROR.classList.add('WordError');
    studentAgeInput.after(InputERROR);
  }else if(Number(studentAge) > 120){
    let InputERROR = document.createElement('span');
    InputERROR.textContent = 'Įvestas amžius per teigiamas' ;
    InputERROR.classList.add('WordError');
    studentAgeInput.after(InputERROR);
  }
  else{
      ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
  }

  let phoneElement = document.createElement('p');

  console.log(studentPhone.split('').length)

  if(studentPhone.split('').length <9 || studentPhone.split('').length >12){
    let InputERROR = document.createElement('span');
    InputERROR.textContent = 'telefonas neteisingas' ;
    InputERROR.classList.add('WordError');
    studentPhoneInput.after(InputERROR);
  }
  else{
    phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
  }

//   phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

  let emailElement = document.createElement('p');

  console.log(!studentEmail.includes('@'))

  // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
  
  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;

  let interestWrapperElement = document.createElement('div');
  interestWrapperElement.classList.add('interest-wrapper');

  let interestTitleElement = document.createElement('h4');
  interestTitleElement.classList.add('interest-title');
  interestTitleElement.textContent = 'Interests:';

  let interestListElement = document.createElement('ul');
  interestListElement.classList.add('interest-list');

  interests.forEach(interest => {
    let interestItemElement = document.createElement('li');
    interestItemElement.textContent = interest.value;
    interestListElement.append(interestItemElement);
  });

  interestWrapperElement.append(interestTitleElement, interestListElement);

  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Rodyti asmens duomenis';

  // let hiddenData = true;

  // privateInfoButton.addEventListener('click', () => {
  //   if (hiddenData) {
  //     phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
  //     emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
  //     privateInfoButton.textContent = 'Slėpti asmens duomenis';
  //   } else {      
  //     phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
  //     emailElement.innerHTML = `<strong>Email:</strong> ****`;
  //     privateInfoButton.textContent = 'Rodyti asmens duomenis';
  //   }
  //   hiddenData = !hiddenData;
  // });
  
  privateInfoButton.addEventListener('click', () => {
    if (!privateInfoButton.classList.contains('hide')) {
      phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
      emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
      privateInfoButton.textContent = 'Slėpti asmens duomenis';
    } else {      
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
      privateInfoButton.textContent = 'Rodyti asmens duomenis';
    }
    privateInfoButton.classList.toggle('hide');
  });

  let removeButton = document.createElement('button');
  removeButton.textContent = 'RemoveStudent'

  removeButton.addEventListener('click',()=>{
    studentItem.remove();
    let messageRemoved = 'Student deleted'
    alertMessage(messageRemoved)
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton,removeButton);

  studentsList.prepend(studentItem);

  // studentForm.reset();
  event.target.reset();
  let alertText = `Student created (${studentName} ${studentSurname})`;
  alertMessage(alertText);
});
function alertMessage(text, elementClass = '') {
  const alertElement = document.querySelector('#alert');
  alertElement.textContent = text;
  if (elementClass) {
    alertElement.classList.add(elementClass);
  }
  setTimeout(() => {
    alertElement.textContent = '';
    alertElement.classList.remove(elementClass);
  }, 5000);
}

