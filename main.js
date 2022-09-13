'use strict';
/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
const inputs=document.getElementsByTagName('input');
const arr=[...inputs]
arr.forEach(input=>{
    input.insertAdjacentHTML('beforebegin',`<label for="${input.id}" style="display:block;margin-block: 0.5rem">${input.id}</label>`)
    input.style.marginBottom='0.5rem'

})

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
const check=(e)=>{
   const errorMsg=e.target.parentElement.querySelector('span')
   if(e.target.value===''&& !errorMsg){
    e.target.insertAdjacentHTML('afterEnd','<span style="color:red;display:block">Required</span>')
   }
   if(e.target.value!==''&& errorMsg){
    errorMsg.remove()
   }
}
arr.forEach(input=>{
   input.addEventListener('blur',check)
})



/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

const confPassword=document.getElementById('confirmPassword');
const password=document.getElementById('password');
confPassword.addEventListener('blur',function(e){
    if(e.target.value!==''&& e.target.value!==password.value){
        e.target.insertAdjacentHTML('afterEnd','<span style="color:red;display:block">Passwords do not match</span>')
    }
})


/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

const button=document.querySelector('button');
button.disabled='disabled';
const form=document.getElementById('registrationForm')
form.addEventListener('change',(e)=>{
    const condition=arr.every(input=>input.value);
    if(condition){
        button.removeAttribute('disabled')
    }
    else{
        button.disabled='disabled'
    }
})


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const msg=document.createElement('p');
  msg.innerText='Successfull registration';
  document.body.append(msg)

})

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


