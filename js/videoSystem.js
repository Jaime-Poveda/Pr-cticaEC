"use strict";

class VideoSystem {
    #name;
    #users = [];
    #productions = [];
    #categories = [];
    #actors = [];
    #directors = [];

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
        return array.findIndex(p => p.name === element.title);
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
        //Excepción

        this.#categories.push(category);

        return this.#categories.length();
    }

    removeCategory(category) {

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
        //Excepción

        this.#users.push(user);

        return this.#users.length();
    }

    removeUser(user) {

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

    addProduction(prod) {
        //Excepción

        this.#productions.push(prod);

        return this.#productions.length();
    }

    removeProduction(prod) {

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
        //Excepción

        this.#actors.push(actor);

        return this.#actors.length();
    }

    removeActor(actor) {

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
        //Excepción

        this.#directors.push(director);

        return this.#directors.length();
    }

    removeDirector(director) {

    }

    

}