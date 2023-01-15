"use strict";

class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2 = "", born, picture = "") {
        //Excepciones


        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;
    }

    get name() {
        return this.#name;
    }
    get lastname1() {
        return this.#lastname1;
    }
    get lastname2() {
        return this.#lastname2;
    }
    get born() {
        return this.#born;
    }
    get picture() {
        return this.#picture;
    }

    toString() {
        return "Name: " + this.#name + ", Lastname1: " + this.#lastname1 + ", Lastname2: " + this.#lastname2 + ", Born: " + this.#born + ", Picture: " + this.#picture;
    }
}

class Category {
    #name;
    #description;

    constructor(name, description = "") {
        //Excepciones

        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }

    toString() {
        return "Name: " + this.#name + ", Description: " + this.#description;
    }
}

class Resource {
    #duration;
    #link;

    constructor(duration, link) {
        //Excepciones

        this.#duration = duration;
        this.#link = link;
    }

    get duration() {
        return this.#duration;
    }
    get link() {
        return this.#link;
    }

    toString() {
        return "Duration: " + this.#duration + ", Link: " + this.#link;
    }
}

