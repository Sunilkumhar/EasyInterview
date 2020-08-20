// Form Blur Event Listeners
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const id = document.getElementById('id');
const process = document.getElementById('proceed');
const website = document.getElementById('website');
const msg = document.querySelector('.msg');

let namePresent=0;
let emailPresent=0;
let mobilePresent=0;
let idPresent=0;
let websitePresent=0;

name.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
id.addEventListener('blur', validateid);
website.addEventListener('blur', validatewebsite);
process.addEventListener('click', checkFilled);



function validateName() {
  const re = /^[a-zA-Z ]{2,30}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
    namePresent=0;
  } else {
    name.classList.remove('is-invalid');
    namePresent=1;
  }

}

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
    emailPresent=0;
  } else {
    email.classList.remove('is-invalid');
    emailPresent=1;
  }
}

function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
    mobilePresent=0;
  } else {
    phone.classList.remove('is-invalid');
    mobilePresent=1;
  }
}

function validateid() {
  const re = /^\(?\d{1,13}\)?$/;

  if(!re.test(id.value)){
    id.classList.add('is-invalid');
    idPresent=0;
  } else {
    id.classList.remove('is-invalid');
    idPresent=1;
  }
}
function validatewebsite() {
  const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  if(!re.test(website.value)){
    website.classList.add('is-invalid');
    websitePresent=0;
  } else {
    website.classList.remove('is-invalid');
    websitePresent=1;
  }
}

function errorMessage(color,messageoutput){
  msg.classList.add(color);

  msg.innerText = messageoutput;
  setTimeout(() => {
    msg.classList.remove(color);
    msg.innerText = ``;
  }, 2000);
}


function checkFilled(e) {

  // e.preventDefault();

  if(namePresent== '0' || emailPresent== '0' || mobilePresent== '0' || websitePresent== '0' || idPresent == '0'){
    errorMessage('error','Please enter valid details')
    // msg.innerText = '';
  }else{
    errorMessage('sucess','Your message is received')

    console.log( name.value)
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("ID", id.value);
    localStorage.setItem("website", website.value);

    // Clear fields
    name.value = '';
    email.value = '';
    phone.value = '';
    id.value = '';
    website.value = '';
    msg.value = '';

    location.replace("interview.html")
  }
  
  //  console.log(msg  )
  
}