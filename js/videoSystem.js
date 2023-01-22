"use strict";

import { BaseException, EmptyValueException, InvalidValueException, InvalidTypeException, AbstractClassException } from "./baseException.js";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "./objectsVideoSystem.js";

//Excepción para controlar el tipo no válido
class NullOrInvalidTypeException extends BaseException {
    constructor(param, correctType, fileName, lineNumber) {
        super(`Error: The paramenter "${param}" is null or has an invalid type. Type should be ` + correctType + '.', fileName, lineNumber);
        this.param = param;
        this.correctType = correctType;
        this.name = "NullOrInvalidTypeException";
    }
}

class AlreadyRegisteredException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is already registered.", fileName, lineNumber);
        this.value = value;
        this.name = "AlreadyRegisteredException";
    }
}

class NotRegisteredException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is not registered.", fileName, lineNumber);
        this.value = value;
        this.name = "NotRegisteredException";
    }
}

class AlreadyAssociatedProductionException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is already associated to the production.", fileName, lineNumber);
        this.value = value;
        this.name = "AlreadyAssociatedProductionException";
    }
}

class NotAssociatedProductionException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is not associated to the production.", fileName, lineNumber);
        this.value = value;
        this.name = "NotAssociatedProductionException";
    }
}

let VideoSystem = (function () {
    let instantiated;

    function init() {
        class VideoSystem {
            #name;

            #users = [];
            #productions = [];

            #categories = [];
            #actors = [];
            #directors = [];

            /*
                Estructura para almacenar los objetos
                #users: [] // Array con los usuarios
                
                #productions: [] // Array con las producciones
        
                #categories: [ // Array contiene objeto literal con la categoría y un array con las imágenes de esa categoría
                    { 
                        category: category,
                        productions: [ Production ] // El array contiene las referencias al objeto Production
                    }
                ]
        
                #directors: [ // Array contiene objeto literal con el director y un array con las imágenes de esa categoría
                    { 
                        director: director,
                        productions: [ Production ] // El array contiene las referencias al objeto Production
                    }
                ]
                
                #actors: [ // Array contiene objeto literal con el actor y un array con las imágenes de esa categoría
                    { 
                        actor: actor,
                        productions: [ Production ] // El array contiene las referencias al objeto Production
                    }
                ]
        
            */



            #findUser(array, user) {
                return array.findIndex(u => u.username === user.username || u.email === user.email);
            }

            #findProduction(array, production) {
                return array.findIndex(p => p.title === production.title);
            }
            #findProductionByTitle(array, production) {
                return array.findIndex(prodTitle => prodTitle === production.title);
            }
            #findTitleInProductions(array, prodTitle) {
                return array.findIndex(production => production.title === prodTitle);
            }

            /* #findPerson(array, person) {
                return array.findIndex(p => p.id === person.id);
            } */

            #findCategory(array, category) {
                return array.findIndex(c => c.category.name === category.name);
            }
            #findActor(array, actor) {
                return array.findIndex(a => a.actor.id === actor.id);
            }
            #findDirector(array, director) {
                return array.findIndex(d => d.director.id === director.id);
            }

            /* #findCategoryByName(array, name) {
                return array.findIndex(c => c.category.name === name);
            }
            #findActorById(array, id) {
                return array.findIndex(a => a.actor.id === id);
            }
            #findDirectorById(array, id) {
                return array.findIndex(d => d.director.id === id);
            } */

            /* #findProdCat(array, production) {
                return array.findIndex(p => p.title === production.title);
            }

            #findProdDir(array, production) {
                return array.findIndex(p => p.title === production.title);
            } */

            constructor(name = "Unknown") {
                //Validación que controla que no sea un new.target
                if (!new.target) throw new InvalidAccessConstructorException();

                this.#name = name;
            }

            get name() {
                return this.#name;
            }

            set name(name) {
                if (name === "") throw new EmptyValueException("name");

                this.#name = name;
            }

            get users() {
                let array = this.#users;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            addUser(user) {
                //Excepciones
                if (user === null || !(user instanceof User)) throw new NullOrInvalidTypeException("user", "User");

                let userPosition = this.#findUser(this.#users, user);

                if (userPosition === -1) {
                    this.#users.push(user);
                } else {
                    throw new AlreadyRegisteredException("username or email");
                }

                return this.#users.length;
            }

            removeUser(user) {
                //Excepciones
                if (user === null || !(user instanceof User)) throw new NullOrInvalidTypeException("user", "User");

                let userPosition = this.#findUser(this.#users, user);

                if (userPosition !== -1) {
                    this.#users.splice(userPosition, 1);
                } else {
                    throw new NotRegisteredException("user");
                }

                return this.#users.length;
            }

            get productions() {
                let array = this.#productions;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            addProduction(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let prodPosition = this.#findProduction(this.#productions, production);

                if (prodPosition === -1) {
                    this.#productions.push(production);
                } else {
                    throw new AlreadyRegisteredException("production");
                }

                return this.#productions.length;
            }

            removeProduction(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let prodPosition = this.#findProduction(this.#productions, production);

                if (prodPosition !== -1) {
                    this.#productions.splice(prodPosition, 1);
                } else {
                    throw new NotRegisteredException("production");
                }

                return this.#productions.length;
            }

            get categories() {
                let array = this.#categories;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            addCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                let categoryPosition = this.#findCategory(this.#categories, category);

                if (categoryPosition === -1) {
                    this.#categories.push(
                        {
                            category: category,
                            productions: []
                        }
                    );
                } else {
                    throw new AlreadyRegisteredException("category");
                }

                return this.#categories.length;
            }

            removeCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                let categoryPosition = this.#findCategory(this.#categories, category);

                if (categoryPosition !== -1) {
                    this.#categories.splice(categoryPosition, 1);
                } else {
                    throw new NotRegisteredException("category");
                }

                return this.#categories.length;
            }

            get actors() {
                let array = this.#actors;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            addActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                let actorPosition = this.#findActor(this.#actors, actor);

                if (actorPosition === -1) {
                    this.#actors.push(
                        {
                            actor: actor,
                            productions: []
                        }
                    );
                } else {
                    throw new AlreadyRegisteredException("actor");
                }

                return this.#actors.length;
            }

            removeActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                let actorPosition = this.#findActor(this.#actors, actor);

                if (actorPosition !== -1) {
                    this.#actors.splice(actorPosition, 1);
                } else {
                    throw new NotRegisteredException("actor");
                }

                return this.#actors.length;
            }

            get directors() {
                let array = this.#directors;

                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            addDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                let directorPosition = this.#findDirector(this.#directors, director);

                if (directorPosition === -1) {
                    this.#directors.push(
                        {
                            director: director,
                            productions: []
                        }
                    );
                } else {
                    throw new AlreadyRegisteredException("director");
                }


                return this.#directors.length;
            }

            removeDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                let directorPosition = this.#findDirector(this.#directors, director);

                if (directorPosition !== -1) {
                    this.#directors.splice(directorPosition, 1);
                } else {
                    throw new NotRegisteredException("director");
                }

                return this.#directors.length;
            }

            assignCategory(category, production) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Comprobar si existen
                let categoryPosition = this.#findCategory(this.#categories, category);
                if (categoryPosition === -1) {
                    this.addCategory(category);
                    categoryPosition = this.#findCategory(this.#categories, category);
                }

                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Comprobar si existe la producción dentro de la categoría
                let prodCatPosition = this.#findProductionByTitle(this.#categories[categoryPosition].productions, production);

                if (prodCatPosition === -1) {
                    this.#categories[categoryPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("category");
                }

                return this.#categories[categoryPosition].productions.length;
            }

            deassignCategory(category, production) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let categoryPosition = this.#findCategory(this.#categories, category);

                if (categoryPosition !== -1) {
                    let prodCatPosition = this.#findProductionByTitle(this.#categories[categoryPosition].productions, production);

                    if (prodCatPosition !== -1) {
                        this.#categories[categoryPosition].productions.splice(prodCatPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("category");
                    }
                } else {
                    throw new NotRegisteredException("category");
                }

                return this.#categories[categoryPosition].productions.length;
            }

            assignDirector(director, production) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let directorPosition = this.#findDirector(this.#directors, director);
                if (directorPosition === -1) {
                    this.addDirector(director);
                    directorPosition = this.#findDirector(this.#directors, director);
                }

                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Comprobar si existe la producción dentro de la categoría
                let prodDirPosition = this.#findProductionByTitle(this.#directors[directorPosition].productions, production);

                if (prodDirPosition === -1) {
                    this.#directors[directorPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("director");
                }

                return this.#directors[directorPosition].productions.length;
            }

            deassignDirector(director, production) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let directorPosition = this.#findDirector(this.#directors, director);
                if (directorPosition !== -1) {
                    let prodDirPosition = this.#findProductionByTitle(this.#directors[directorPosition].productions, production);

                    if (prodDirPosition !== -1) {
                        this.#directors[directorPosition].productions.splice(prodDirPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("director");
                    }
                } else {
                    throw new NotRegisteredException("director");
                }


                return this.#directors[directorPosition].productions.length;
            }

            assignActor(actor, production) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let actorPosition = this.#findActor(this.#actors, actor);
                if (actorPosition === -1) {
                    this.addActor(actor);
                    actorPosition = this.#findActor(this.#actors, actor);
                }

                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Comprobar que la relación entre actor y producción no exista
                let prodActPosition = this.#findProductionByTitle(this.#actors[actorPosition].productions, production);
                if (prodActPosition === -1) {
                    this.#actors[actorPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("actor");
                }

                return this.#actors[actorPosition].productions.length;
            }

            deassignActor(actor, production) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let actorPosition = this.#findActor(this.#actors, actor);
                if (actorPosition !== -1) {
                    let prodActPosition = this.#findProductionByTitle(this.#actors[actorPosition].productions, production);
                    if (prodActPosition !== -1) {
                        this.#actors[actorPosition].productions.splice(prodActPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("actor");
                    }
                } else {
                    throw new NotRegisteredException("actor");
                }

                return this.#actors[actorPosition].productions.length;
            }

            * getCast(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                let prodPosition = this.#findProduction(this.#productions, production);

                if (prodPosition !== -1) {
                    for (let actor of this.#actors) {

                        let prodActPosition = this.#findProductionByTitle(actor.productions, production);
                        if (prodActPosition !== -1) {
                            yield actor.actor;
                        }
                    }
                } else {
                    throw new NotRegisteredException("production");
                }
            }

            * getProductionsDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                let directorPosition = this.#findDirector(this.#directors, director);

                if (directorPosition !== -1) {
                    for (let prodTitle of this.#directors[directorPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);

                        yield this.#productions[prodPosition];
                    }
                } else {
                    throw new NotRegisteredException("director");
                }
            }

            * getProductionsActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                let actorPosition = this.#findActor(this.#actors, actor);

                if (actorPosition !== -1) {
                    for (let prodTitle of this.#actors[actorPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);

                        yield this.#productions[prodPosition];
                    }
                } else {
                    throw new NotRegisteredException("actor");
                }
            }

            * getProductionsCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                let categoryPosition = this.#findCategory(this.#categories, category);
                if (categoryPosition !== -1) {
                    for (let prodTitle of this.#categories[categoryPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);

                        yield this.#productions[prodPosition];
                    }
                } else {
                    throw new NotRegisteredException("category");
                }
            }

        }


        let instance = new VideoSystem();
        Object.freeze(instance);
        return instance;
    }
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }

            return instantiated;
        }
    };
})();

export { VideoSystem };