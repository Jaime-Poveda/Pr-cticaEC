"use strict";

//Importo las clases de los otros ficheros
import { BaseException, EmptyValueException, InvalidValueException, InvalidTypeException, AbstractClassException } from "../baseException.js";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "../entities/objectsVideoSystem.js";

//Excepción personalizada para controlar el tipo no válido
class NullOrInvalidTypeException extends BaseException {
    constructor(param, correctType, fileName, lineNumber) {
        super(`Error: The paramenter "${param}" is null or has an invalid type. Type should be ` + correctType + '.', fileName, lineNumber);
        this.param = param;
        this.correctType = correctType;
        this.name = "NullOrInvalidTypeException";
    }
}

//Excepción personalizada para controlar que el valor ya esté registrado
class AlreadyRegisteredException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is already registered.", fileName, lineNumber);
        this.value = value;
        this.name = "AlreadyRegisteredException";
    }
}

//Excepción personalizada para controlar que el valor no esté registrado
class NotRegisteredException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is not registered.", fileName, lineNumber);
        this.value = value;
        this.name = "NotRegisteredException";
    }
}

//Excepción personalizada para controlar que el valor ya esté asodiado con la production
class AlreadyAssociatedProductionException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is already associated to the production.", fileName, lineNumber);
        this.value = value;
        this.name = "AlreadyAssociatedProductionException";
    }
}

//Excepción personalizada para controlar que el valor ya esté asodiado con la production
class NotAssociatedProductionException extends BaseException {
    constructor(value, fileName, lineNumber) {
        super("Error: The " + value + " is not associated to the production.", fileName, lineNumber);
        this.value = value;
        this.name = "NotAssociatedProductionException";
    }
}

//Singleton VideoSystem
let VideoSystem = (function () {
    let instantiated;

    //Función que inicia el Singleton
    function init() {
        class VideoSystem {
            //Atributos privados de VideoSystem
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
        
                #categories: [ // Array contiene objeto literal con la categoría y un array con los titles que hacen referencia a las productions asociadas a esa categoría
                    { 
                        category: category,
                        productions: [ Production.title ]
                    }
                ]
        
                #directors: [ // Array contiene objeto literal con el director y un array con los titles que hacen referencia a las productions asociadas a esa categoría
                    { 
                        director: director,
                        productions: [ Production.title ]
                    }
                ]
                
                #actors: [ // Array contiene objeto literal con el actor y un array con los titles que hacen referencia a las productions asociadas a esa categoría
                    { 
                        actor: actor,
                        productions: [ Production.title ]
                    }
                ]
        
            */


            //Métodos privados que uso en varios métodos publicos de VideoSytem
            //Todos reciben un array y encuentran la posición del otro parámetro del método en función de un atributo
            #findUser(array, user) {
                return array.findIndex(u => u.username === user.username || u.email === user.email);
            }
            #findCategory(array, category) {
                return array.findIndex(c => c.category.name === category.name);
            }
            #findActor(array, actor) {
                return array.findIndex(a => a.actor.id === actor.id);
            }
            #findDirector(array, director) {
                return array.findIndex(d => d.director.id === director.id);
            }
            #findProduction(array, production) {
                return array.findIndex(p => p.title === production.title);
            }
            //Los dos siguientes métodos sirven para buscar dentro de la estructura de objetos que tengo montada para categories, directors y actors
            //Este método devuelve la posición de un objeto Production dentro de un array de títulos
            #findProductionByTitle(array, production) {
                return array.findIndex(prodTitle => prodTitle === production.title);
            }
            //Este método devuelve la posición de un título dentro de un array de objetos Production
            #findTitleInProductions(array, prodTitle) {
                return array.findIndex(production => production.title === prodTitle);
            }

            /* #findPerson(array, person) {
                return array.findIndex(p => p.id === person.id);
            } */


            //Constructor
            constructor(name = "Unknown") {
                //Validación que controla que no sea un new.target
                if (!new.target) throw new InvalidAccessConstructorException();

                //Asignación
                this.#name = name;
            }

            //Getter y setter de name
            get name() {
                return this.#name;
            }
            set name(name) {
                //Escepción
                if (name === "") throw new EmptyValueException("name");

                this.#name = name;
            }

            //Getter de users que devuelve el iterador
            get users() {
                // array utilizado en el generador ya que dentro se pierde la referencia this
                let array = this.#users;

                //Generador hecho para un getter con *[Symbol.iterator]()
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            //Método que añade un usuario al sistema
            addUser(user) {
                //Excepciones
                if (user === null || !(user instanceof User)) throw new NullOrInvalidTypeException("user", "User");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let userPosition = this.#findUser(this.#users, user);

                //Si el usuario no existe, lo añade, en caso contrario lanza una excepción
                if (userPosition === -1) {
                    this.#users.push(user);
                } else {
                    throw new AlreadyRegisteredException("username or email");
                }

                //Devuelvo el tamaño actual del array
                return this.#users.length;
            }

            //Método que elimina un usuario al sistema
            removeUser(user) {
                //Excepciones
                if (user === null || !(user instanceof User)) throw new NullOrInvalidTypeException("user", "User");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let userPosition = this.#findUser(this.#users, user);

                //Si el usuario existe, lo elimina, en caso contrario lanza una excepción
                if (userPosition !== -1) {
                    this.#users.splice(userPosition, 1);
                } else {
                    throw new NotRegisteredException("user");
                }

                //Devuelvo el tamaño actual del array
                return this.#users.length;
            }

            //Getter de productions que devuelve el iterador
            get productions() {
                // array utilizado en el generador ya que dentro se pierde la referencia this
                let array = this.#productions;

                //Generador hecho para un getter con *[Symbol.iterator]()
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            //Método que añade una producción al sistema
            addProduction(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let prodPosition = this.#findProduction(this.#productions, production);

                //Si la producción no existe, la añade, en caso contrario lanza una excepción
                if (prodPosition === -1) {
                    this.#productions.push(production);
                } else {
                    throw new AlreadyRegisteredException("production");
                }

                //Devuelvo el tamaño actual del array
                return this.#productions.length;
            }

            //Método que elimina una producción al sistema
            removeProduction(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let prodPosition = this.#findProduction(this.#productions, production);

                //Si la producción existe, la elimina, en caso contrario lanza una excepción
                if (prodPosition !== -1) {
                    this.#productions.splice(prodPosition, 1);
                } else {
                    throw new NotRegisteredException("production");
                }

                

                //Devuelvo el tamaño actual del array
                return this.#productions.length;
            }

            //Getter de categories que devuelve el iterador
            get categories() {
                // array utilizado en el generador ya que dentro se pierde la referencia this
                let array = this.#categories;

                //Generador hecho para un getter con *[Symbol.iterator]()
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            //Método que añade una categoría al sistema
            addCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let categoryPosition = this.#findCategory(this.#categories, category);

                //Si la categoría no existe, la añade, en caso contrario lanza una excepción
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

                //Devuelvo el tamaño actual del array
                return this.#categories.length;
            }

            //Método que elimina una categoría al sistema
            removeCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let categoryPosition = this.#findCategory(this.#categories, category);

                //Si la categoría existe, la elimina, en caso contrario lanza una excepción
                if (categoryPosition !== -1) {
                    this.#categories.splice(categoryPosition, 1);
                } else {
                    throw new NotRegisteredException("category");
                }

                //Devuelvo el tamaño actual del array
                return this.#categories.length;
            }

            //Getter de actors que devuelve el iterador
            get actors() {
                // array utilizado en el generador ya que dentro se pierde la referencia this
                let array = this.#actors;

                //Generador hecho para un getter con *[Symbol.iterator]()
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            //Método que añade un actor al sistema
            addActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let actorPosition = this.#findActor(this.#actors, actor);

                //Si el actor no existe, lo añade, en caso contrario lanza una excepción
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

                //Devuelvo el tamaño actual del array
                return this.#actors.length;
            }

            //Método que elimina un actor al sistema
            removeActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let actorPosition = this.#findActor(this.#actors, actor);

                //Si el actor existe, lo elimina, en caso contrario lanza una excepción
                if (actorPosition !== -1) {
                    this.#actors.splice(actorPosition, 1);
                } else {
                    throw new NotRegisteredException("actor");
                }

                //Devuelvo el tamaño actual del array
                return this.#actors.length;
            }

            //Getter de directors que devuelve el iterador
            get directors() {
                // array utilizado en el generador ya que dentro se pierde la referencia this
                let array = this.#directors;

                //Generador hecho para un getter con *[Symbol.iterator]()
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }

            //Método que añade un director al sistema
            addDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let directorPosition = this.#findDirector(this.#directors, director);

                //Si el actor no existe, lo añade, en caso contrario lanza una excepción
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

                //Devuelvo el tamaño actual del array
                return this.#directors.length;
            }

            //Método que elimina un director del sistema
            removeDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                //Compruebo la posición en el array del objeto que se intenta añadir
                let directorPosition = this.#findDirector(this.#directors, director);

                //Si el director existe, lo elimina, en caso contrario lanza una excepción
                if (directorPosition !== -1) {
                    this.#directors.splice(directorPosition, 1);
                } else {
                    throw new NotRegisteredException("director");
                }

                //Devuelvo el tamaño actual del array
                return this.#directors.length;
            }

            //Método que asigna una relación entre una categoría y una producción
            assignCategory(category, production) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Comprobar si existen los parámetros en el sistema, en caso contrario los añado y vuelvo a calcular la posición
                let categoryPosition = this.#findCategory(this.#categories, category);
                if (categoryPosition === -1) {
                    this.addCategory(category);
                    categoryPosition = this.#findCategory(this.#categories, category);
                }
                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Obtengo la posición de la producción dentro del array de productions de la categoría seleccionada
                let prodCatPosition = this.#findProductionByTitle(this.#categories[categoryPosition].productions, production);

                //Si no existe la producción dentro de la categoría, la añado, en caso contrario lanzo una excepción
                if (prodCatPosition === -1) {
                    this.#categories[categoryPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("category");
                }

                //Devuelvo el tamaño actual del array de producciones de la categoría seleccionada
                return this.#categories[categoryPosition].productions.length;
            }

            //Método que borra la relación de una categoría con una producción
            deassignCategory(category, production) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Obtengo la posición de la categoría dentro del array de categorías del sistema
                let categoryPosition = this.#findCategory(this.#categories, category);

                //Si existe la categoría dentro del sistema, intento borrar la relación con la producción, en caso contrario lanzo una excepción
                if (categoryPosition !== -1) {
                    //Obtengo la posición de la producción dentro del array de productions de la categoría seleccionada
                    let prodCatPosition = this.#findProductionByTitle(this.#categories[categoryPosition].productions, production);

                    //Si existe la producción dentro del array de productions de la categoría seleccionada, la borro, en caso contrario lanzo una excepción
                    if (prodCatPosition !== -1) {
                        this.#categories[categoryPosition].productions.splice(prodCatPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("category");
                    }
                } else {
                    throw new NotRegisteredException("category");
                }

                //Devuelvo el tamaño actual del array de producciones de la categoría seleccionada
                return this.#categories[categoryPosition].productions.length;
            }

            //Método que asigna una relación entre una categoría y un director
            assignDirector(director, production) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Comprobar si existen los parámetros en el sistema, en caso contrario los añado y vuelvo a calcular la posición
                let directorPosition = this.#findDirector(this.#directors, director);
                if (directorPosition === -1) {
                    this.addDirector(director);
                    directorPosition = this.#findDirector(this.#directors, director);
                }
                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Obtengo la posición de la producción dentro del array de productions del director seleccionado
                let prodDirPosition = this.#findProductionByTitle(this.#directors[directorPosition].productions, production);

                //Si no existe la producción dentro de del director, la añado, en caso contrario lanzo una excepción
                if (prodDirPosition === -1) {
                    this.#directors[directorPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("director");
                }

                //Devuelvo el tamaño actual del array de producciones del director seleccionado
                return this.#directors[directorPosition].productions.length;
            }

            //Método que borra la relación de un director con una producción
            deassignDirector(director, production) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Obtengo la posición del director dentro del array de directores del sistema
                let directorPosition = this.#findDirector(this.#directors, director);

                //Si existe el director dentro del sistema, intento borrar la relación con la producción, en caso contrario lanzo una excepción
                if (directorPosition !== -1) {
                    //Obtengo la posición de la producción dentro del array de productions del director seleccionado
                    let prodDirPosition = this.#findProductionByTitle(this.#directors[directorPosition].productions, production);

                    //Si existe la producción dentro del array de productions del director seleccionado, la borro, en caso contrario lanzo una excepción
                    if (prodDirPosition !== -1) {
                        this.#directors[directorPosition].productions.splice(prodDirPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("director");
                    }
                } else {
                    throw new NotRegisteredException("director");
                }

                //Devuelvo el tamaño actual del array de producciones del director seleccionado
                return this.#directors[directorPosition].productions.length;
            }

            //Método que asigna una relación entre una categoría y un actor
            assignActor(actor, production) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Comprobar si existen los parámetros en el sistema, en caso contrario los añado y vuelvo a calcular la posición
                let actorPosition = this.#findActor(this.#actors, actor);
                if (actorPosition === -1) {
                    this.addActor(actor);
                    actorPosition = this.#findActor(this.#actors, actor);
                }
                let prodPositon = this.#findProduction(this.#productions, production);
                if (prodPositon === -1) {
                    this.addProduction(production);
                }

                //Obtengo la posición de la producción dentro del array de productions del actor seleccionado
                let prodActPosition = this.#findProductionByTitle(this.#actors[actorPosition].productions, production);

                //Si no existe la producción dentro del actor, la añado, en caso contrario lanzo una excepción
                if (prodActPosition === -1) {
                    this.#actors[actorPosition].productions.push(production.title);
                } else {
                    throw new AlreadyAssociatedProductionException("actor");
                }

                //Devuelvo el tamaño actual del array de producciones del actor seleccionado
                return this.#actors[actorPosition].productions.length;
            }

            //Método que borra la relación de un actor con una producción
            deassignActor(actor, production) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Obtengo la posición del actor dentro del array de actores del sistema
                let actorPosition = this.#findActor(this.#actors, actor);

                //Si existe el actor dentro del sistema, intento borrar la relación con la producción, en caso contrario lanzo una excepción
                if (actorPosition !== -1) {
                    //Obtengo la posición de la producción dentro del array de productions del actor seleccionado
                    let prodActPosition = this.#findProductionByTitle(this.#actors[actorPosition].productions, production);
                    //Si existe la producción dentro del array de productions del actor seleccionado, la borro, en caso contrario lanzo una excepción
                    if (prodActPosition !== -1) {
                        this.#actors[actorPosition].productions.splice(prodActPosition, 1);
                    } else {
                        throw new NotAssociatedProductionException("actor");
                    }
                } else {
                    throw new NotRegisteredException("actor");
                }

                //Devuelvo el tamaño actual del array de producciones del actor seleccionado
                return this.#actors[actorPosition].productions.length;
            }

            //Método que devuelve el iterador de actores asociados a una producción
            * getCast(production) {
                //Excepciones
                if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

                //Busco la producción en el array del sistema. Si existe, devuelvo los actores, en caso contrario lanzo una excepción
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
            
            //Método que devuelve el iterador de directores asociados a una producción
            * getDirectors(production) {
            //Excepciones
            if (production === null || !(production instanceof Production)) throw new NullOrInvalidTypeException("production", "Production");

            //Busco la producción en el array del sistema. Si existe, devuelvo los actores, en caso contrario lanzo una excepción
            let prodPosition = this.#findProduction(this.#productions, production);
            if (prodPosition !== -1) {
                for (let director of this.#directors) {
                    let prodDirPosition = this.#findProductionByTitle(director.productions, production);
                    if (prodDirPosition !== -1) {
                        yield director.director;
                    }
                }
            } else {
                throw new NotRegisteredException("production");
            }
        }

            //Método que devuelve el iterador de producciones asociadas a un director
            * getProductionsDirector(director) {
                //Excepciones
                if (director === null || !(director instanceof Person)) throw new NullOrInvalidTypeException("director", "Person");

                //Busco el director en el array del sistema. Si existe, devuelvo las producciones, en caso contrario lanzo una excepción
                let directorPosition = this.#findDirector(this.#directors, director);
                if (directorPosition !== -1) {
                    for (let prodTitle of this.#directors[directorPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);
                        if (prodPosition !== -1) {
                            yield this.#productions[prodPosition];
                        }
                    }
                } else {
                    throw new NotRegisteredException("director");
                }
            }

            //Método que devuelve el iterador de producciones asociadas a un actor
            * getProductionsActor(actor) {
                //Excepciones
                if (actor === null || !(actor instanceof Person)) throw new NullOrInvalidTypeException("actor", "Person");

                //Busco el actor en el array del sistema. Si existe, devuelvo las producciones, en caso contrario lanzo una excepción
                let actorPosition = this.#findActor(this.#actors, actor);
                if (actorPosition !== -1) {
                    for (let prodTitle of this.#actors[actorPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);
                        if (prodPosition !== -1) {
                            yield this.#productions[prodPosition];
                        }
                    }
                } else {
                    throw new NotRegisteredException("actor");
                }
            }

            //Método que devuelve el iterador de producciones asociadas a una categoría
            * getProductionsCategory(category) {
                //Excepciones
                if (category === null || !(category instanceof Category)) throw new NullOrInvalidTypeException("category", "Category");

                //Busco la categoría en el array del sistema. Si existe, devuelvo las producciones, en caso contrario lanzo una excepción
                let categoryPosition = this.#findCategory(this.#categories, category);
                if (categoryPosition !== -1) {
                    for (let prodTitle of this.#categories[categoryPosition].productions) {
                        let prodPosition = this.#findTitleInProductions(this.#productions, prodTitle);
                        if (prodPosition !== -1) {
                            yield this.#productions[prodPosition];
                        }
                    }
                } else {
                    throw new NotRegisteredException("category");
                }
            }

        }


        //Se devuelve la instancia
        let instance = new VideoSystem();
        Object.freeze(instance);
        return instance;
    }
    return {
        //Utilizo una función para devolver la instancia
        getInstance: function () {
            //Compruebo si es la primera ejecución y llama al método init
            if (!instantiated) {
                instantiated = init();
            }

            return instantiated;
        }
    };
})();

//Exporto el Singleton
export { VideoSystem };