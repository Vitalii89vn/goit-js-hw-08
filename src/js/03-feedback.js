import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    }
let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const refsEl = refs.form.elements;

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateInput();

function onInput(event) {
   
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};
function onFormSubmit(event) {
    formData = {};
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};
function populateInput() {
   const parseValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parseValue) {
        [...refsEl].map(element => {
            for (const key in parseValue) {
                if (element.name === key) {
                    element.value = parseValue[key];
                } 
            }
        });
    }
}
    