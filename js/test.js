"use strict";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "./objectsVideoSystem.js";
import { VideoSystem } from "./videoSystem.js";

(function () {

    let actor1 = new Person("Antonio", "Banderas", "", new Date("12/12/2012"), "antonio.jpg");
    let actor2 = new Person("Angelina", "Jolie", "", new Date("12/12/2012"), "angelina.jpg");
    let actor3 = new Person("Hugh", "Grant", "", new Date("12/12/2012"), "hughgrant.jpg");
    let actor4 = new Person("Rami", "Malek", "", new Date("12/12/2012"), "ramimalek.jpg");
    let actor5 = new Person("Penelope", "Cruz", "", new Date("12/12/2012"), "penelope.jpg");
    let director6 = new Person("Ridley", "Scott", "", new Date("12/12/2012"), "ridley.jpg");
    let director7 = new Person("Quentin", "Tarantino", "", new Date("12/12/2012"), "tarantino.jpg");
    let director8 = new Person("Alfonso", "Cuarón", "", new Date("12/12/2012"), "cuaron.jpg");
    let director9 = new Person("Aaron", "Sorkin", "", new Date("12/12/2012"), "sorkin.jpg");
    let director10 = new Person("Kathryn", "Bigelow", "", new Date("12/12/2012"), "bigelow.jpg");

    console.log("Actores:");
    console.log(actor1.toString());
    console.log(actor2.toString());
    console.log(actor3.toString());
    console.log(actor4.toString());
    console.log(actor5.toString());

    console.log("Directores:");
    console.log(director6.toString());
    console.log(director7.toString());
    console.log(director8.toString());
    console.log(director9.toString());
    console.log(director10.toString());


    console.log("\n\n");
    let category1 = new Category("Acción", "");
    let category2 = new Category("Romance", "");
    let category3 = new Category("Misterio", "");

    console.log("Categorías:");
    console.log(category1.toString());
    console.log(category2.toString());
    console.log(category3.toString());


    console.log("\n\n");
    let resource1 = new Resource(135, "resource1");
    let resource2 = new Resource(110, "resource2");
    let resource3 = new Resource(120, "resource3");
    let resource4 = new Resource(90, "resource4");
    let resource5 = new Resource(85, "resource5");
    let resource6 = new Resource(60, "resource6");
    let resource7 = new Resource(65, "resource7");
    let resource8 = new Resource(70, "resource8");
    let resource9 = new Resource(35, "resource9");
    let resource10 = new Resource(30, "resource10");

    console.log("Resources:");
    console.log(resource1.toString());
    console.log(resource2.toString());
    console.log(resource3.toString());

    try {
        let production = new Production("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "");
    } catch (error) {
        console.log(error);
    }


    console.log("\n\n");
    let movie1 = new Movie("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "", resource1, "");
    let movie2 = new Movie("Matrix", "EEUU", new Date("01/01/1999"), "", "", resource2, "");
    let movie3 = new Movie("Shrek", "EEUU", new Date("01/01/2001"), "", "", resource3, "");

    console.log("Movies:");
    console.log(movie1.toString());
    console.log(movie2.toString());
    console.log(movie3.toString());


    console.log("\n\n");
    let serie1 = new Serie("Game of Thrones", "EEUU", new Date("01/01/2009"), "La historia medieval de George R.R. Martin", "", [resource6, resource7, resource8], [], 7);
    let serie2 = new Serie("Suits", "EEUU", new Date("01/01/2010"), "", "", [resource4, resource5], [], 10);
    let serie3 = new Serie("Cobra Kai", "EEUU", new Date("01/01/2015"), "", "", [resource9, resource10], [], 5);

    console.log("Series:");
    console.log(serie1.toString());
    console.log(serie2.toString());
    console.log(serie3.toString());


    console.log("\n\n");
    let user1 = new User("John", "john@gmail.com", "john1234");
    let user2 = new User("Tim", "tim@gmail.com", "tim789");
    let user3 = new User("Steve", "steve@gmail.com", "1234steve");

    console.log("Users:");
    console.log(user1.toString());
    console.log(user2.toString());
    console.log(user3.toString());


    console.log("\n\n");
    let cord1 = new Coordinate(1234, 4321);
    let cord2 = new Coordinate(75412345, 1235461426);
    let cord3 = new Coordinate(1423, 6532);
    let cord4 = new Coordinate(23465, 12345);
    let cord5 = new Coordinate(8465, 1423);
    let cord6 = new Coordinate(2634, 9657);
    let cord7 = new Coordinate(8564, 234567);
    let cord8 = new Coordinate(12345, 6435);

    console.log("Coordinates:");
    console.log(cord1.toString());
    console.log(cord2.toString());
    console.log(cord3.toString());
    console.log(cord4.toString());
    console.log(cord5.toString());
    console.log(cord6.toString());
    console.log(cord7.toString());
    console.log(cord8.toString());


    console.log("\n\n");
    let videoSystem = VideoSystem.getInstance();

    console.log("VideoSystem:");
    console.log(videoSystem.name);
    videoSystem.name = "Playfix";
    console.log(videoSystem.name);


    console.log("\n\n");
    console.log("Add Categories:");
    console.log(videoSystem.addCategory(category1));
    console.log(videoSystem.addCategory(category2));
    console.log(videoSystem.addCategory(category3));

    try {
        console.log(videoSystem.addCategory(category1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Categories:");
    for (let category of videoSystem.categories) {
        console.log(category.category.toString());
    }

    console.log("\n");
    console.log("Remove Categories:");
    console.log(videoSystem.removeCategory(category2));
    try {
        console.log(videoSystem.removeCategory(category2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Categories:");
    for (let category of videoSystem.categories) {
        console.log(category.category.toString());
    }


    console.log("\n\n");
    console.log("Add Users:");
    console.log(videoSystem.addUser(user1));
    console.log(videoSystem.addUser(user2));
    console.log(videoSystem.addUser(user3));

    try {
        console.log(videoSystem.addUser(user1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Users:");
    for (let user of videoSystem.users) {
        console.log(user.toString());
    }

    console.log("\n");
    console.log("Remove Users:");
    console.log(videoSystem.removeUser(user2));
    try {
        console.log(videoSystem.removeUser(user2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Users:");
    for (let user of videoSystem.users) {
        console.log(user.toString());
    }


    console.log("\n\n");
    console.log("Add Productions(movies):");
    console.log(videoSystem.addProduction(movie1));
    console.log(videoSystem.addProduction(movie2));
    console.log(videoSystem.addProduction(movie3));

    try {
        console.log(videoSystem.addProduction(movie1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions:");
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Add Productions(series):");
    console.log(videoSystem.addProduction(serie1));
    console.log(videoSystem.addProduction(serie2));
    console.log(videoSystem.addProduction(serie3));

    try {
        console.log(videoSystem.addProduction(serie1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions:");
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Remove Productions(movies):");
    console.log(videoSystem.removeProduction(movie2));
    try {
        console.log(videoSystem.removeProduction(movie2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions:");
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Remove Productions(series):");
    console.log(videoSystem.removeProduction(serie2));
    try {
        console.log(videoSystem.removeProduction(serie2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions:");
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }


    console.log("\n\n");
    console.log("Add Actors:");
    console.log(videoSystem.addActor(actor1));
    console.log(videoSystem.addActor(actor2));
    console.log(videoSystem.addActor(actor3));

    try {
        console.log(videoSystem.addActor(actor1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Actors:");
    for (let actor of videoSystem.actors) {
        console.log(actor.actor.toString());
    }

    console.log("\n");
    console.log("Remove Actos:");
    console.log(videoSystem.removeActor(actor2));
    try {
        console.log(videoSystem.removeActor(actor2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Actors:");
    for (let actor of videoSystem.actors) {
        console.log(actor.actor.toString());
    }


    console.log("\n\n");
    console.log("Add Directors:");
    console.log(videoSystem.addDirector(director6));
    console.log(videoSystem.addDirector(director7));
    console.log(videoSystem.addDirector(director8));

    try {
        console.log(videoSystem.addDirector(director6));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Directors:");
    for (let director of videoSystem.directors) {
        console.log(director.director.toString());
    }

    console.log("\n");
    console.log("Remove Directors:");
    console.log(videoSystem.removeDirector(director7));
    try {
        console.log(videoSystem.removeDirector(director7));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Directors:");
    for (let director of videoSystem.directors) {
        console.log(director.director.toString());
    }


})();