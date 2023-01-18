"use strict";


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
                #images: [] // Array con las imágenes del gestor
        
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


            #findCategory(element) {
                return this.#categories.findIndex(c => c.name === element.name);
            }

            #findUser(element) {
                return this.#users.findIndex(u => u.username === element.username);
            }

            #findProduction(element) {
                return this.#productions.findIndex(p => p.title === element.title);
            }

            #findPerson(array, element) {
                return array.findIndex(p => p.id === element.id);
            }

            /* constructor(name){
        
            } */

            get name() {
                return this.#name;
            }

            set name(name) {
                this.#name = name;
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

                let categoryPosition = this.#findCategory(category);

                if (categoryPosition === -1) {
                    this.#categories.push(category);
                } else {
                    throw new Error("El elemento ya está");
                }

                return this.#categories.length();
            }

            removeCategory(category) {
                //Excepciones

                let categoryPosition = this.#findCategory(category);

                if (categoryPosition !== -1) {
                    this.#categories.splice(categoryPosition, 1);
                } else {
                    throw new Error("El elemento no está");
                }

                return this.#categories.length();
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

                let userPosition = this.#findUser(user);

                if (userPosition === -1) {
                    this.#users.push(user);
                } else {
                    throw new Error("El elemento ya está");
                }

                return this.#users.length();
            }

            removeUser(user) {
                //Excepciones

                let userPosition = this.#findUser(user);

                if (userPosition !== -1) {
                    this.#users.splice(userPosition, 1);
                } else {
                    throw new Error("El elemento no está");
                }

                return this.#users.length();
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

                let prodPosition = this.#findProduction(production);

                if (prodPosition === -1) {
                    this.#productions.push(production);
                } else {
                    throw new Error("El elemento ya está");
                }

                return this.#productions.length();
            }

            removeProduction(production) {
                //Excepciones

                let prodPosition = this.#findProduction(production);

                if (prodPosition !== -1) {
                    this.#productions.splice(prodPosition, 1);
                } else {
                    throw new Error("El elemento no está");
                }

                return this.#productions.length();
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

                let actorPosition = this.#findPerson(this.#actors, actor);

                if (actorPosition === -1) {
                    this.#actors.push(actor);
                } else {
                    throw new Error("El elemento ya está");
                }

                return this.#actors.length();
            }

            removeActor(actor) {
                //Excepciones

                let actorPosition = this.#findPerson(this.#actors, actor);

                if (actorPosition !== -1) {
                    this.#actors.splice(actorPosition, 1);
                } else {
                    throw new Error("El elemento no está");
                }

                return this.#actors.length();
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

                let directorPosition = this.#findPerson(this.#directors, director);

                if (directorPosition === -1) {
                    this.#directors.push(director);
                } else {
                    throw new Error("El elemento ya está");
                }


                return this.#directors.length();
            }

            removeDirector(director) {
                //Excepciones

                let directorPosition = this.#findPerson(this.#directors, director);

                if (directorPosition !== -1) {
                    this.#directors.splice(directorPosition, 1);
                } else {
                    throw new Error("El elemento no está");
                }

                return this.#directors.length();
            }

            assignCategory(category, production) {
                //Excepciones



            }

            deassingCategory(category, production) {
                //Excepciones


            }

            assignDirector(director, production) {
                //Excepciones


            }

            deassingDirector(director, production) {
                //Excepciones


            }

            assignActor(actor, production) {
                //Excepciones


            }

            deassingActor(actor, production) {
                //Excepciones


            }

            getCast(production) {
                //Excepciones


            }

            getProductionsDirector(director) {
                //Excepciones


            }

            getProductionsActor(actor) {
                //Excepciones


            }

            getProductionsCategory(category) {
                //Excepciones


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