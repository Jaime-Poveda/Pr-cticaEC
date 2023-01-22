"use strict";

//Importo las excepciones
import { BaseException, EmptyValueException, InvalidValueException, InvalidTypeException, AbstractClassException } from "./baseException.js";

//Clase Person
class Person {
    //Atributos privados
    #id;
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    //Constructor
    constructor(name, lastname1, lastname2, born, picture) {
        //Excepciones
        if (name === "") throw new EmptyValueException("name");
        if (lastname1 === "") throw new EmptyValueException("lastname1");
        if (born === "") throw new EmptyValueException("born");
        if (!(born instanceof Date)) throw new InvalidTypeException("born", "Date");

        //Asignación
        this.#id = Person.id();
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;
    }

    //Método estático para el id de los objetos Person creados
    static id() {
        if (!this.latestId) {
            this.latestId = 1;
        }
        else {
            this.latestId++;
        }

        return this.latestId;
    }

    //Getters
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

    //Método toString
    toString() {
        return "Id: " + this.#id + ", Name: " + this.#name + ", Lastname1: " + this.#lastname1 + ", Lastname2: " + this.#lastname2 + ", Born: " + this.#born + ", Picture: " + this.#picture;
    }
}

//Clase Category
class Category {
    //Atributos privados
    #name;
    #description;

    //Constructor
    constructor(name, description = "") {
        //Excepciones
        if (name === "") throw new EmptyValueException("name");

        //Asignación
        this.#name = name;
        this.#description = description;
    }

    //Getters
    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }

    //Método toString
    toString() {
        return "Name: " + this.#name + ", Description: " + this.#description;
    }
}

//Clase Resourse
class Resource {
    //Atributos privados
    #duration;
    #link;

    //Constructor
    constructor(duration, link) {
        //Excepciones
        if (duration === "") throw new EmptyValueException("duration");
        if (link === "") throw new EmptyValueException("link");
        if (Number.isNaN(duration)) throw new InvalidValueException("duration", duration);

        //Asignación
        this.#duration = duration;
        this.#link = link;
    }

    //Getters
    get duration() {
        return this.#duration;
    }
    get link() {
        return this.#link;
    }

    //Método toString
    toString() {
        return "Duration: " + this.#duration + ", Link: " + this.#link;
    }
}


//Clase Abstracta para heredar
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new AbstractClassException("Abstract");
        }
    }
}

//Clase abstracta Production que hereda Abstract
class Production extends Abstract {
    //Atributos privados
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    //Constructor
    constructor(title, nationality, publication, synopsis = "", image = "") {
        //Excepciones
        if (new.target === Production) {
            throw new AbstractClassException("Production");
        }
        if (title === "") throw new EmptyValueException("title");
        if (publication === "") throw new EmptyValueException("publication");
        if (!(publication instanceof Date)) throw new InvalidTypeException("publication", "Date");


        //Llamada al padre
        super();

        //Asignación
        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;
    }

    //Getters
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


    //Método toString
    toString() {
        return "Title: " + this.#title + ", Nationality: " + this.#nationality + ", Publication: " + this.#publication + ", Synopsis: " + this.#synopsis + ", Image: " + this.#image;
    }
}

//Clase Movie que hereda de Production
class Movie extends Production {
    //Atributos privados
    #resource;
    #locations;

    //Constructor
    constructor(title, nationality, publication, synopsis = "", image = "", resource = null, locations = []) {
        //Excepciones
        if (!(Array.isArray(locations))) throw new InvalidTypeException("locations", "Array");
        if (!(resource instanceof Resource)) throw new InvalidTypeException("resource", "Resource");
        if (!(locations.every(function (element) { return (element instanceof Coordinate); }))) throw new InvalidTypeException("locations", "Location");

        //Llamada al padre
        super(title, nationality, publication, synopsis, image);

        //Asignación
        this.#resource = resource;
        this.#locations = locations;
    }

    //Getters
    get resource() {
        return this.#resource;
    }
    get locations() {
        return this.#locations;
    }

    //toString
    toString() {
        return super.toString() + ", Resource: { " + this.#resource + " }, Locations: " + this.#locations;
    }
}

//Clase Serie que hereda de Production
class Serie extends Production {
    //Atributos privados
    #resources;
    #locations;
    #seasons;

    //Constructor
    constructor(title, nationality = "", publication, synopsis = "", image = "", resources = [], locations = [], seasons) {
        //Excepciones
        if (!(Array.isArray(locations))) throw new InvalidTypeException("locations", "Array");
        if (!(Array.isArray(resources))) throw new InvalidTypeException("resources", "Array");
        if (!(resources.every(function (element) { return (element instanceof Resource); }))) throw new InvalidTypeException("resources", "Resource");
        if (!(locations.every(function (element) { return (element instanceof Coordinate); }))) throw new InvalidTypeException("locations", "Location");
        if (Number.isNaN(seasons)) throw new InvalidValueException("seasons", seasons);

        //Llamada al padre
        super(title, nationality, publication, synopsis, image);

        //Asignación
        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    //Getters
    get resources() {
        return this.#resources;
    }
    get locations() {
        return this.#locations;
    }
    get seasons() {
        return this.#seasons;
    }

    //Método toString
    toString() {
        return super.toString() + ", Resource: { " + this.#resources + " }, Locations: { " + this.#locations + " }, Seasons: " + this.#seasons;
    }
}

//Clase User
class User {
    //Atributos privados
    #username;
    #email;
    #password;

    //Constructor
    constructor(username, email, password) {
        //Excepciones
        if (username === "") throw new EmptyValueException("username");
        if (email === "") throw new EmptyValueException("email");
        if (password === "") throw new EmptyValueException("password");

        //Asignación
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    //Getters
    get username() {
        return this.#username;
    }
    get email() {
        return this.#email;
    }
    get password() {
        return this.#password;
    }

    //Método toString
    toString() {
        return "Username: " + this.#username + ", Email: " + this.#email + ", Password: " + this.#password;
    }
}

//Clase Coordinate
class Coordinate {
    //Atributos privados
    #latitude;
    #longitude;

    //Constructor
    constructor(latitude = 0, longitude = 0) {
        //Excepciones
        if (Number.isNaN(latitude)) throw new InvalidValueException("latitude", latitude);
        if (Number.isNaN(longitude)) throw new InvalidValueException("longitude", longitude);

        //Asignación
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    //Getters
    get latitude() {
        return this.#latitude;
    }
    get longitude() {
        return this.#longitude;
    }

    //Método toString
    toString() {
        return "Latitude: " + this.#latitude + ", Longitude: " + this.#longitude;
    }
}

//Exporto las clases
export { Person, Category, Resource, Production, Movie, Serie, User, Coordinate };