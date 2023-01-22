"use strict";

import { BaseException, EmptyValueException, InvalidValueException, InvalidTypeException, AbstractClassException } from "./baseException.js";

class Person {
    #id;
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2, born, picture) {
        //Excepciones
        if (name === "") throw new EmptyValueException("name");
        if (lastname1 === "") throw new EmptyValueException("lastname1");
        if (born === "") throw new EmptyValueException("born");
        if (!(born instanceof Date)) throw new InvalidTypeException("born", "Date");

        this.#id = Person.id();
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;
    }

    static id() {
        if (!this.latestId) {
            this.latestId = 1;
        }
        else {
            this.latestId++;
        }

        return this.latestId;
    }

    get id() {
        return this.#id;
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
        return "Id: " + this.#id + ", Name: " + this.#name + ", Lastname1: " + this.#lastname1 + ", Lastname2: " + this.#lastname2 + ", Born: " + this.#born + ", Picture: " + this.#picture;
    }
}

class Category {
    #name;
    #description;

    constructor(name, description = "") {
        //Excepciones
        if (name === "") throw new EmptyValueException("name");

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
        if (duration === "") throw new EmptyValueException("duration");
        if (link === "") throw new EmptyValueException("link");
        if (Number.isNaN(duration)) throw new InvalidValueException("duration", duration);

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


//Clase abstracta de la que hererada Person
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new AbstractClassException("Abstract");
        }
    }
}

class Production extends Abstract {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nationality, publication, synopsis = "", image = "") {
        //Excepciones
        if (new.target === Production) {
            throw new AbstractClassException("Production");
        }
        if (title === "") throw new EmptyValueException("title");
        if (publication === "") throw new EmptyValueException("publication");
        if (!(publication instanceof Date)) throw new InvalidTypeException("publication", "Date");


        super();

        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;
    }


    get title() {
        return this.#title;
    }
    get nationality() {
        return this.#nationality;
    }
    get publication() {
        return this.#publication;
    }
    get synopsis() {
        return this.#synopsis;
    }
    get image() {
        return this.#image;
    }


    //Creo el toString
    toString() {
        return "Title: " + this.#title + ", Nationality: " + this.#nationality + ", Publication: " + this.#publication + ", Synopsis: " + this.#synopsis + ", Image: " + this.#image;
    }
}

class Movie extends Production {
    #resource;
    #locations;

    constructor(title, nationality, publication, synopsis = "", image = "", resource = null, locations = []) {
        //Excepciones
        if (!(Array.isArray(locations))) throw new InvalidTypeException("locations", "Array");
        if (!(resource instanceof Resource)) throw new InvalidTypeException("resource", "Resource");
        if (!(locations.every(function (element) { return (element instanceof Coordinate); }))) throw new InvalidTypeException("locations", "Location");

        super(title, nationality, publication, synopsis, image);

        this.#resource = resource;
        this.#locations = locations;
    }

    get resource() {
        return this.#resource;
    }

    get locations() {
        return this.#locations;
    }

    toString() {
        return super.toString() + ", Resource: { " + this.#resource + " }, Locations: " + this.#locations;
    }
}

class Serie extends Production {
    #resources;
    #locations;
    #seasons;

    constructor(title, nationality = "", publication, synopsis = "", image = "", resources = [], locations = [], seasons) {
        //Excepciones
        if (!(Array.isArray(locations))) throw new InvalidTypeException("locations", "Array");
        if (!(Array.isArray(resources))) throw new InvalidTypeException("resources", "Array");
        if (!(resources.every(function (element) { return (element instanceof Resource); }))) throw new InvalidTypeException("resources", "Resource");
        if (!(locations.every(function (element) { return (element instanceof Coordinate); }))) throw new InvalidTypeException("locations", "Location");
        if (Number.isNaN(seasons)) throw new InvalidValueException("seasons", seasons);


        super(title, nationality, publication, synopsis, image);

        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    get resources() {
        return this.#resources;
    }

    get locations() {
        return this.#locations;
    }

    get seasons() {
        return this.#seasons;
    }

    toString() {
        return super.toString() + ", Resource: { " + this.#resources + " }, Locations: { " + this.#locations + " }, Seasons: " + this.#seasons;
    }
}

class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        //Excepciones
        if (username === "") throw new EmptyValueException("username");
        if (email === "") throw new EmptyValueException("email");
        if (password === "") throw new EmptyValueException("password");

        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    toString() {
        return "Username: " + this.#username + ", Email: " + this.#email + ", Password: " + this.#password;
    }
}

class Coordinate {
    #latitude;
    #longitude;

    constructor(latitude = 0, longitude = 0) {
        //Excepciones
        if (Number.isNaN(latitude)) throw new InvalidValueException("latitude", latitude);
        if (Number.isNaN(longitude)) throw new InvalidValueException("longitude", longitude);

        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    toString() {
        return "Latitude: " + this.#latitude + ", Longitude: " + this.#longitude;
    }
}

//Exporto las clases que voy a utilizar
export { Person, Category, Resource, Production, Movie, Serie, User, Coordinate };