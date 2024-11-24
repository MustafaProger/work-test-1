export default function validation(form, inputName, inputPhone, inputEmail) {
    const nameInput = form.querySelector(inputName);
    const phoneInput = form.querySelector(inputPhone);
    const emailInput = form.querySelector(inputEmail);

    let isValid = true;

    let message = {
        name: {
            required: 'Введите имя пользователя',
            minLength: 'Введите не менее 2 символов',
            correct: 'Имя не должно содержать цифр'
        },
        phone: {
            required: 'Введите номер телефона',
            minLength: 'Введите не менее 11 символов',
            correct: 'Номер не должен содержать буквы',
        },
        email: {
            required: 'Введите электронную почту',
            correct: 'Введите корректный email'
        }
    }

    let { name, phone, email } = message;

    errorWork(nameInput, 'name', 2, /\d/, name);
    errorWork(phoneInput, 'phone', 11, /\D/, phone);

    emailErrorWork()

    return isValid;

    function errorWork(input, classError, length, regex, message) {
        createError(input, classError);
        const error = form.querySelector(`.${classError}__error`);

        const validateField = () => {
            validationNamePhone(input, error, length, regex, message);
        };

        input.removeEventListener('input', validateField);
        input.addEventListener('input', validateField);
        validateField();
    }

    function emailErrorWork() {
        createError(emailInput, 'email');
        const emailError = form.querySelector('.email__error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validateEmailField = () => {
            validationEmail(emailInput, emailError, emailRegex, email);
        };

        emailInput.removeEventListener('input', validateEmailField);
        emailInput.addEventListener('input', validateEmailField);
        validateEmailField();
    }

    function validationNamePhone(input, error, length, regex, message) {
        let fieldIsValid = true;

        if (input.value.trim() === '') {
            error.innerHTML = message.required;
            error.style.display = 'block';
            fieldIsValid = false;
        } else if (regex.test(input.value)) {
            error.innerHTML = message.correct;
            error.style.display = 'block';
            fieldIsValid = false;
        } else if (input.value.length < length) {
            error.innerHTML = message.minLength;
            error.style.display = 'block';
            fieldIsValid = false;
        } else {
            error.style.display = 'none';
        }

        if (!fieldIsValid) isValid = false;
    }

    function validationEmail(input, error, regex, message) {
        let fieldIsValid = true;

        if (input.value.trim() === '') {
            error.innerHTML = message.required;
            error.style.display = 'block';
            fieldIsValid = false;
        } else if (!regex.test(input.value)) {
            error.innerHTML = message.correct;
            error.style.display = 'block';
            fieldIsValid = false;
        } else {
            error.style.display = 'none';
        }

        if (!fieldIsValid) isValid = false;
    }

    function createError(input, name) {
        let error = form.querySelector(`.${name}__error`);
        if (!error) {
            error = document.createElement('span');
            error.classList.add('error', `${name}__error`);
            error.style.display = 'none';
            input.insertAdjacentElement('afterend', error);
        }
    }
}