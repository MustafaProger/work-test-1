export default function phoneInput() {
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function (input) {
        // Возвращаем только цифры
        return input.value.replace(/\D/g, '');
    };

    let onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    };

    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "+7 ";

        // Если пользователь пытается удалить "+7"
        if (!inputNumbersValue || inputNumbersValue[0] !== "7") {
            input.value = formattedInputValue;
            return;
        }

        // Если редактирование в середине строки или вставка некорректных символов
        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        // Форматирование номера телефона
        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }

        input.value = formattedInputValue;
    };

    let onPhoneKeyDown = function (e) {
        let input = e.target,
            inputValue = getInputNumbersValue(input);

        // Блокируем удаление "+7"
        if (e.keyCode == 8 && input.selectionStart <= 3) {
            e.preventDefault();
        }
    };

    for (let phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);

        // Устанавливаем "+7 " по умолчанию
        if (!phoneInput.value) {
            phoneInput.value = "+7 ";
        }
    }
}