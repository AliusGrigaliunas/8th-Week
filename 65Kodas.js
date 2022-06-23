const studentForm = document.querySelector('form');

function renderStudent(student,form){
    let studentName = student.Name;
    let studentSurname = student.Surname;
    let studentAge = student.Age;
    let studentPhone =  student.Phone;
    let studentEmail = student.Email;
    let studentItKnowledge = student.IT_Knowledge;
    let studentGroup = student.Group[0]
    let interests = student.interests
      
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


    let interestWrapperElement = document.createElement('div');
    interestWrapperElement.classList.add('interest-wrapper');

    let interestTitleElement = document.createElement('h4');
    interestTitleElement.classList.add('interest-title');
    interestTitleElement.textContent = 'Interests:';

    let interestListElement = document.createElement('ul');
    interestListElement.classList.add('interest-list');

    interests.forEach(interest => {

      let interestItemElement = document.createElement('li');

      interestItemElement.textContent = interest;
      
      interestListElement.append(interestItemElement);
    });

    interestWrapperElement.append(interestTitleElement, interestListElement);


    let privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Rodyti asmens duomenis';


    privateInfoButton.addEventListener('click', () => {
      if (!privateInfoButton.classList.contains('hide')) {
        phoneElement.innerHTML = `<strong>Phone:</strong> ${form[3].value}`;
        emailElement.innerHTML = `<strong>Email:</strong> ${form[4].value}`;
        privateInfoButton.textContent = 'Slėpti asmens duomenis';
      } else {      
        phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
        emailElement.innerHTML = `<strong>Email:</strong> ****`;
        privateInfoButton.textContent = 'Rodyti asmens duomenis';
      }
      privateInfoButton.classList.toggle('hide');
    });


    // console.log(form.interest.forEach((element)=>{console.log(element)})


    let removeButton = document.createElement('button');
    removeButton.textContent = 'RemoveStudent'
  
    removeButton.addEventListener('click',()=>{
      studentItem.remove();
      let messageRemoved = 'Student deleted'
      alertMessage(messageRemoved)
    })
    let editbutton = document.createElement('button');
    editbutton.textContent = 'Edit Student Info'
  
    let submit = document.querySelector('#submit-button');
    let edit = document.createElement('button');
    editbutton.addEventListener('click', ()=>{
        form.name.value = studentName;
        form.surname.value = studentSurname;
        form.age.value = studentAge;
        form.phone.value = studentPhone;
        form.email.value = studentEmail;
        form['student-it-knowledge'].value = studentItKnowledge;
        form['it-knowledge-output'].value = studentItKnowledge;
        // console.log(document.querySelectorAll('[name=interest]:checked') = interests)
        console.log(form['interest'] = interests)
        edit.textContent = 'Save Changes'
        studentItem.append(edit)
        submit.setAttribute('hidden','true');
        editbutton.setAttribute('hidden','true');
        edit.removeAttribute('hidden','true')
    })

    // console.log(interests)

    // // console.log(form['interest'][1])
    // form['interest'].forEach((el)=>{
    //   console.log(el.value)
    //   interests = [];
    //   // if(el.checked == true){
    //   //   console.log(typeof el.value)
    //   //    interests.push(el.value)
    //   // }
    //   interests.push(el.value)
    // })

    // console.log(interests)

  
    edit.addEventListener('click',()=>{
      studentName = form.name.value;
      studentSurname = form.surname.value;
      studentAge =   form.age.value;
      studentPhone = form.phone.value;
      studentEmail = form.email.value;
      studentItKnowledge = form['student-it-knowledge'].value;
      studentGroup = form.group.value
      document.querySelectorAll('[name=interest]:checked').forEach(el =>{

          let interestItemElement = document.createElement('li');

          interestItemElement.textContent = el.value;
      })



      nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
      surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
      ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
      itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
      groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;
      

      submit.removeAttribute('hidden');
      editbutton.removeAttribute('hidden','true');
      edit.setAttribute('hidden','true');
    })

    document.querySelectorAll('[name=interest]').forEach(box => {
        
      box.addEventListener('click', () => {
        console.log()
        if(box.checked === true){

        } else {

        }
      })
    })

    studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement,groupElement,interestWrapperElement,privateInfoButton,removeButton,editbutton);
    studentsList.prepend(studentItem);
}

const initial_STUDENT_DATA = [
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: 30,
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: ["type 1",'Type 2', 'Type 3'],
        
        interests: ['C#','Python','JavaScript','C++']

    },
    {
        Name: "Alius",

        Surname: "Grigaliūnas",
        
        Age: "23",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: ["type 1",'Type 2', 'Type 3'],

        interests: ['C#','Python','JavaScript','C++']
        
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: ["type 1",'Type 2', 'Type 3'],

        interests: ['C#','Python','JavaScript','C++']
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: ["type 1",'Type 2', 'Type 3'],

        interests: ['C#','Python','JavaScript','C++']
    },
    {
        Name: "name",

        Surname: "Grigaliūnas",
        
        Age: "30",
        
        Phone: "860000000",
        
        Email: "al@g.com",
        
        IT_Knowledge: "5",
        
        Group: ["type 1",'Type 2', 'Type 3'],

        interests: ['C#','Python','JavaScript','C++']
    },
]



function renderInitialData(students,form){
   students.map(student=>{
      renderStudent(student,form)
   })
}



renderInitialData(initial_STUDENT_DATA,studentForm)

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
  console.log(interests);

  let studentNameInput = document.querySelector('#student-name');
  studentNameInput.style.borderColor = '';
  let studentSurnameInput = document.querySelector('#student-surname')
  let studentAgeInput = event.target.querySelector('#student-age')
  let studentPhoneInput = studentForm.querySelector('[name="phone"]')
  let studentEmailInput = event.target.elements.email;

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
    validForm = false;
    let text = 'Vardas privalo būti bent 3 simbolių' ;
    validation(text,studentNameInput);
  }
  
  let surnameElement = document.createElement('p');


  if(studentSurname.split('').length <=3){
    validForm = false;
    let text = 'Pavarde privalo būti bent 3 simbolių' ;
    validation(text,studentSurnameInput);
  }

  console.log(studentSurname.split('').length)

  let ageElement = document.createElement('p');

  if(Number(studentAge) < 0){
    validForm = false;
    text = 'Amžius privalo būti teigiamas' ;
    validation(text,studentAgeInput)
  }else if(Number(studentAge) > 120){
    validForm = false;
    text = 'Įvestas amžius per teigiamas' ;
    validation(text,studentAgeInput)
  }

  let phoneElement = document.createElement('p');

  console.log(studentPhone.split('').length)

  if(studentPhone.split('').length <9 || studentPhone.split('').length >12){
    validForm = false;
    text = 'telefonas neteisingas' ;
    validation(text,studentPhoneInput)
  }

  let emailElement = document.createElement('p');

  if(!studentEmail.includes('@') || studentEmail.indexOf('@') < 5){
    validForm = false;
    text = 'El.Paštas privalo būti bent 5 raidžių' ;
    validation(text,studentEmailInput)
  }

  if(!validForm){
    return;
}
  // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

  nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
  surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
  ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
//   phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

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
  

  let removeButton = document.createElement('button');
  removeButton.textContent = 'RemoveStudent'

  removeButton.addEventListener('click',()=>{
    studentItem.remove();
    let messageRemoved = 'Student deleted'
    alertMessage(messageRemoved)
  })

  let editbutton = document.createElement('button');
  editbutton.textContent = 'Edit Student Info'

  let edit = document.createElement('button');

  editbutton.addEventListener('click', ()=>{
      event.target.elements.name.value = studentName;
      event.target.elements.surname.value = studentSurname;
      event.target.elements.age.value = studentAge;
      event.target.elements.phone.value = studentPhone;
      event.target.elements.email.value = studentEmail;
      studentForm.elements.group.value = studentGroup
      event.target.elements['it-knowledge'].value = studentItKnowledge;

      let submit = document.querySelector('#submit-button');
      submit.setAttribute('hidden','true');
      edit.textContent = 'Submit Edit';
      studentItem.append(edit)
  })

  edit.addEventListener('click',()=>{
    let changedNameValue = event.target.elements.name.value;
    nameElement.innerHTML = `<strong>Name:</strong> ${changedNameValue}`;
    surnameElement.innerHTML = `<strong>Surname:</strong> ${event.target.elements.surname.value }`;
    ageElement.innerHTML = `<strong>Age:</strong> ${event.target.elements.age.value}`;
    itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
  })



  privateInfoButton.addEventListener('click', () => {
    if (!privateInfoButton.classList.contains('hide')) {
      phoneElement.innerHTML = `<strong>Phone:</strong> ${event.target.elements.phone.value}`;
      emailElement.innerHTML = `<strong>Email:</strong> ${event.target.elements.email.value}`;
      privateInfoButton.textContent = 'Slėpti asmens duomenis';
    } else {      
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
      privateInfoButton.textContent = 'Rodyti asmens duomenis';
    }
    privateInfoButton.classList.toggle('hide');
  });

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton,removeButton,editbutton);

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

function validation(text,place){
  let InputERROR = document.createElement('span');
  InputERROR.textContent = text;
  InputERROR.classList.add('WordError');
  place.after(InputERROR);
}
