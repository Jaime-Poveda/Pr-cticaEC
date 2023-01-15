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


//Clase abstracta de la que hererada Person
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("No es posible construir instancias de una clase abstracta");
        }
    }
}

class Production extends Abstract {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nationality = "", publication, synopsis = "", image = "") {
        if (new.target === Production) {
            throw new TypeError("No es posible construir instancias de una clase abstracta");
        }
        //Excepciones

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

    constructor(title, nationality = "", publication, synopsis = "", image = "", resourse = "", locations = []) {
        //Excepciones

        super(title, nationality, publication, synopsis, image);

        this.#resource = resourse;
        this.#locations = locations;
    }

    get resourse() {
        return this.#resource;
    }

    get locations() {
        return this.#locations;
    }

    toString() {
        return super.toString() + ", Resource: " + this.#resource + ", Locations: " + this.#locations;
    }
}

class Serie extends Production {
    #resources;
    #locations;
    #seasons;

    constructor(title, nationality = "", publication, synopsis = "", image = "", resourses = [], locations = [], seasons) {
        //Excepciones

        super(title, nationality, publication, synopsis, image);

        this.#resources = resourses;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    get resourses() {
        return this.#resources;
    }

    get locations() {
        return this.#locations;
    }

    get seasons() {
        return this.#seasons;
    }

    toString() {
        return super.toString() + ", Resource: " + this.#resources + ", Locations: " + this.#locations, ", Seasons: " + this.#seasons;
    }
}

class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        //Excepciones

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
        return "Username: " + this.#username + ", Email: " + this.#email, ", Password: " + this.#password;
    }
}

class User {
    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        //Excepciones

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
        return "latitude: " + this.#latitude + ", Longitude: " + this.#longitude;
    }
}