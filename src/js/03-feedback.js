import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    
    }

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateInput();

function onFormSubmit(event) {
    event.preventDefault(); 
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
function populateInput() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseValue = JSON.parse(savedData);
   
    if (savedData) {
            refs.email.value = Object.values(parseValue)[0];
            refs.message.value = Object.values(parseValue)[1];
    }
        //   refs.form.name === parseValue.key
// refs.form.value = parseValue[0]       
        // for (const key in parseValue) {
        //    if (refs.form.name === key) {
        //        refs.form.value = parseValue[key];
               
        //     }
            
        // }
    
    // console.log(refs.form.name === parseValue.key);
    
}
