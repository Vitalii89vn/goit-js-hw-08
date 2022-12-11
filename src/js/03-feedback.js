import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    }

const formData = {};
const STORAGE_KEY = 'feedback-form-state';
const refsEl = refs.form.elements;

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
        [...refsEl].forEach(element => {
            for (const key in parseValue) {
                if (element.name === key) {
                    element.value = parseValue[key] || '';
                }
            }
        });
     }
    }
    
    // if (savedData) {
    //     for (let i = 0; i < refsEl.length; i+=1) {
    //         const element = refsEl[i];
    //         for (const key in parseValue) {
    //         if (element.name === key) {
    //             element.value = parseValue[key] || '';
    //             }
    //         };
    //     }  
    // }

