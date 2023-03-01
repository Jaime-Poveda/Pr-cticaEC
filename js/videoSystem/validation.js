function showFeedBack(input, valid, message) {
    let validClass = (valid) ? 'is-valid' : 'is-invalid';
    let div = (valid) ? input.nextAll("div.valid-feedback") : input.nextAll("div.invalid-feedback");
    input.nextAll('div').removeClass('d-block');
    div.removeClass('d-none').addClass('d-block');
    input.removeClass('is-valid is-invalid').addClass(validClass);
    if (message) {
        div.empty();
        div.append(message);
    }
}

function defaultCheckElement(event) {
    this.value = this.value.trim();
    if (!this.checkValidity()) {
        showFeedBack($(this), false);
    } else {
        showFeedBack($(this), true);
    }
}

function removeProductionValidation(handler) {
    let form = document.forms.fRemoveCategory;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.rProdName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.rProdName), false);
            firstInvalidElement = this.rProdName;
        } else {
            showFeedBack($(this.rProdName), true);
        }

        event.preventDefault();
        event.stopPropagation();
        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.rProdName.value);
        }

    })

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.rProdName).change(defaultCheckElement);
}

function newCategoryValidation(handler) {
    let form = document.forms.fNewCategory;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.ncName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncName), false);
            firstInvalidElement = this.ncName;
        } else {
            showFeedBack($(this.ncName), true);
        }

        if (!this.ncDesc.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncDesc), false);
            firstInvalidElement = this.ncDesc;
        } else {
            showFeedBack($(this.ncDesc), true);
        }

        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncName.value, this.ncDesc.value);
        }

        event.preventDefault();
        event.stopPropagation();
    })

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.ncName).change(defaultCheckElement);
    $(form.ncDesc).change(defaultCheckElement);
}

function removeCategoryValidation(handler) {
    let form = document.forms.fRemoveCategory;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.rcName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.rcName), false);
            firstInvalidElement = this.rcName;
        } else {
            showFeedBack($(this.rcName), true);
        }

        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.rcName.value);
        }

        event.preventDefault();
        event.stopPropagation();
    })

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.rcName).change(defaultCheckElement);
}

function removePersonValidation(handler) {
    let form = document.forms.fRemovePerson;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.rpName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.rpName), false);
            firstInvalidElement = this.rpName;
        } else {
            showFeedBack($(this.rpName), true);
        }
        
        event.preventDefault();
        event.stopPropagation();

        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.rpName.value);
        }

    })
    

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.rpName).change(defaultCheckElement);
}

export { removeProductionValidation, newCategoryValidation, removeCategoryValidation, removePersonValidation };