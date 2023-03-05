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


function createProductionValidation(handler) {
    let form = document.forms.fCreateProduction;
    $(form).attr('novalidate', true);

    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        event.preventDefault();
        event.stopPropagation();

        if (!this.title.checkValidity()) {
            isValid = false;
            showFeedBack($(this.title), false);
            firstInvalidElement = this.title;
        } else {
            showFeedBack($(this.title), true);
        }

        if (!this.prodType.checkValidity()) {
            isValid = false;
            showFeedBack($(this.prodType), false);
            firstInvalidElement = this.prodType;
        } else {
            showFeedBack($(this.prodType), true);
        }
        
        if (!this.nationality.checkValidity()) {
            isValid = false;
            showFeedBack($(this.nationality), false);
            firstInvalidElement = this.nationality;
        } else {
            showFeedBack($(this.nationality), true);
        }
        
        if (!this.published.checkValidity()) {
            isValid = false;
            showFeedBack($(this.published), false);
            firstInvalidElement = this.published;
        } else {
            showFeedBack($(this.published), true);
        }
        
        if (!this.synopsis.checkValidity()) {
            isValid = false;
            showFeedBack($(this.synopsis), false);
            firstInvalidElement = this.synopsis;
        } else {
            showFeedBack($(this.synopsis), true);
        }
        
        if (!this.productionImage.checkValidity()) {
            isValid = false;
            showFeedBack($(this.productionImage), false);
            firstInvalidElement = this.productionImage;
        } else {
            showFeedBack($(this.productionImage), true);
        }

        if (!this.director.checkValidity()) {
            isValid = false;
            showFeedBack($(this.director), false);
            firstInvalidElement = this.director;
        } else {
            showFeedBack($(this.director), true);
        }

        //console.log($("#castSelect :selected").toArray().map(item => item.value));

        if (!this.cast.checkValidity()) {
            isValid = false;
            showFeedBack($(this.cast), false);
            firstInvalidElement = this.cast;
        } else {
            showFeedBack($(this.cast), true);
        }

        //console.log($("#categoriesSelect :selected").toArray().map(item => item.value));

        if (!this.cProdCategories.checkValidity()) {
            isValid = false;
            showFeedBack($(this.cProdCategories), false);
            firstInvalidElement = this.cProdCategories;
        } else {
            showFeedBack($(this.cProdCategories), true);
        }


        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.title.value, this.prodType.value, this.nationality.value, this.published.value, this.synopsis.value, this.productionImage.value, this.director.value, $("#castSelect :selected").toArray().map(item => item.value), $("#categoriesSelect :selected").toArray().map(item => item.value));
        }

    })

    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input');
        inputs.removeClass('is-vlaid is-invalid');
    }));

    $(form.title).change(defaultCheckElement);
    $(form.prodType).change(defaultCheckElement);
    $(form.nationality).change(defaultCheckElement);
    $(form.published).change(defaultCheckElement);
    $(form.synopsis).change(defaultCheckElement);
    $(form.productionImage).change(defaultCheckElement);
    $(form.director).change(defaultCheckElement);
    //$(form.cast).change(defaultCheckElement);
    $(form.categories).change(defaultCheckElement);
}

function removeProductionValidation(handler) {
    let form = document.forms.fRemoveProduction;
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


        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.rProdName.value);
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

    $(form.rProdName).change(defaultCheckElement);
}

function assignProductionValidation(handler) {
    let form = document.forms.fAssignProduction;
    $(form).attr('novalidate', true);


    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.productionType.checkValidity()) {
            isValid = false;
            showFeedBack($(this.productionType), false);
            firstInvalidElement = this.productionType;
        } else {
            showFeedBack($(this.productionType), true);
        }

        if (!this.productionTitle.checkValidity()) {
            isValid = false;
            showFeedBack($(this.productionTitle), false);
            firstInvalidElement = this.productionTitle;
        } else {
            showFeedBack($(this.productionTitle), true);
        }

        if (!this.person.checkValidity()) {
            isValid = false;
            showFeedBack($(this.person), false);
            firstInvalidElement = this.person;
        } else {
            showFeedBack($(this.person), true);
        }

        if (!this.role.checkValidity()) {
            isValid = false;
            showFeedBack($(this.role), false);
            firstInvalidElement = this.role;
        } else {
            showFeedBack($(this.role), true);
        }

        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.productionType.value, this.productionTitle.value, this.person.value, this.role.value);
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

    $(form.productionType).change(defaultCheckElement);
    $(form.productionTitle).change(defaultCheckElement);
    $(form.person).change(defaultCheckElement);
    $(form.role).change(defaultCheckElement);
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

function createPersonValidation(handler) {
    let form = document.forms.fCreatePerson;
    $(form).attr('novalidate', true);


    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;

        if (!this.name.checkValidity()) {
            isValid = false;
            showFeedBack($(this.name), false);
            firstInvalidElement = this.name;
        } else {
            showFeedBack($(this.name), true);
        }

        if (!this.lastname1.checkValidity()) {
            isValid = false;
            showFeedBack($(this.lastname1), false);
            firstInvalidElement = this.lastname1;
        } else {
            showFeedBack($(this.lastname1), true);
        }

        if (!this.lastname2.checkValidity()) {
            isValid = false;
            showFeedBack($(this.lastname2), false);
            firstInvalidElement = this.lastname2;
        } else {
            showFeedBack($(this.lastname2), true);
        }

        if (!this.born.checkValidity()) {
            isValid = false;
            showFeedBack($(this.born), false);
            firstInvalidElement = this.born;
        } else {
            showFeedBack($(this.born), true);
        }

        if (!this.image.checkValidity()) {
            isValid = false;
            showFeedBack($(this.image), false);
            firstInvalidElement = this.image;
        } else {
            showFeedBack($(this.image), true);
        }

        if (!this.role.checkValidity()) {
            isValid = false;
            showFeedBack($(this.role), false);
            firstInvalidElement = this.role;
        } else {
            showFeedBack($(this.role), true);
        }


        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.name.value, this.lastname1.value, this.lastname2.value, this.born.value, this.image.value, this.role.value);
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

    $(form.name).change(defaultCheckElement);
    $(form.lastname1).change(defaultCheckElement);
    $(form.lastname2).change(defaultCheckElement);
    $(form.born).change(defaultCheckElement);
    $(form.image).change(defaultCheckElement);
    $(form.role).change(defaultCheckElement);
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

export { createProductionValidation, removeProductionValidation, assignProductionValidation, newCategoryValidation, removeCategoryValidation, createPersonValidation, removePersonValidation };