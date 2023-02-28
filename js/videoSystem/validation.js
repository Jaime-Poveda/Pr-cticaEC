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

function newCategoryValidtion(handler) {
    let form = document.forms.fNewCategory;

    $(from).attr('novalidate', true);

    $(form).submit((event) => {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.ncName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncName), false);
            firstInvalidElement = this.ncTitle;
        } else {
            showFeedBack($(this.ncName), true);
        }

        event.preventDefault();
        event.stopPropagation();
    })

    form.addEventListener('reset', (function(event){
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.ncName).change(defaultCheckElement);
}