"use strict";

//Importo las clases de los otros ficheros
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "./objectsVideoSystem.js";
import { VideoSystem } from "./videoSystem.js";

//Función de testeo
(function () {

    console.log("Creo los actores que voy a utilizar");
    console.log('let actor1 = new Person("Antonio", "Banderas", "", new Date("12/12/2012"), "antonio.jpg")');
    console.log('let actor2 = new Person("Angelina", "Jolie", "", new Date("12/12/2012"), "angelina.jpg")');
    console.log('let actor3 = new Person("Hugh", "Grant", "", new Date("12/12/2012"), "hughgrant.jpg")');
    console.log('let actor4 = new Person("Rami", "Malek", "", new Date("12/12/2012"), "ramimalek.jpg")');
    console.log('let actor5 = new Person("Penelope", "Cruz", "", new Date("12/12/2012"), "penelope.jpg")');
    let actor1 = new Person("Antonio", "Banderas", "", new Date("12/12/2012"), "antonio.jpg");
    let actor2 = new Person("Angelina", "Jolie", "", new Date("12/12/2012"), "angelina.jpg");
    let actor3 = new Person("Hugh", "Grant", "", new Date("12/12/2012"), "hughgrant.jpg");
    let actor4 = new Person("Rami", "Malek", "", new Date("12/12/2012"), "ramimalek.jpg");
    let actor5 = new Person("Penelope", "Cruz", "", new Date("12/12/2012"), "penelope.jpg");

    console.log("\n");
    console.log("Creo los directores que voy a utilizar");
    console.log('let director6 = new Person("Ridley", "Scott", "", new Date("12/12/2012"), "ridley.jpg")');
    console.log('let director7 = new Person("Quentin", "Tarantino", "", new Date("12/12/2012"), "tarantino.jpg")');
    console.log('let director8 = new Person("Alfonso", "Cuarón", "", new Date("12/12/2012"), "cuaron.jpg")');
    console.log('let director9 = new Person("Aaron", "Sorkin", "", new Date("12/12/2012"), "sorkin.jpg")');
    console.log('let director10 = new Person("Kathryn", "Bigelow", "", new Date("12/12/2012"), "bigelow.jpg")');
    let director6 = new Person("Ridley", "Scott", "", new Date("12/12/2012"), "ridley.jpg");
    let director7 = new Person("Quentin", "Tarantino", "", new Date("12/12/2012"), "tarantino.jpg");
    let director8 = new Person("Alfonso", "Cuarón", "", new Date("12/12/2012"), "cuaron.jpg");
    let director9 = new Person("Aaron", "Sorkin", "", new Date("12/12/2012"), "sorkin.jpg");
    let director10 = new Person("Kathryn", "Bigelow", "", new Date("12/12/2012"), "bigelow.jpg");

    console.log("\n");
    console.log("Actores:");
    console.log("actor1.toString(): " + actor1.toString());
    console.log("actor2.toString(): " + actor2.toString());
    console.log("actor3.toString(): " + actor3.toString());
    console.log("actor4.toString(): " + actor4.toString());
    console.log("actor5.toString(): " + actor5.toString());

    console.log("\n");
    console.log("Directores:");
    console.log("director6.toString(): " + director6.toString());
    console.log("director7.toString(): " + director7.toString());
    console.log("director8.toString(): " + director8.toString());
    console.log("director9.toString(): " + director9.toString());
    console.log("director10.toString(): " + director10.toString());


    console.log("\n\n");
    console.log("Creo las categorías que voy a utilizar");
    console.log('let category1 = new Category("Acción", "")');
    console.log('let category2 = new Category("Romance", "")');
    console.log('let category3 = new Category("Misterio", "")');
    let category1 = new Category("Acción", "");
    let category2 = new Category("Romance", "");
    let category3 = new Category("Misterio", "");

    console.log("\n");
    console.log("Categorías:");
    console.log("category1.toString(): " + category1.toString());
    console.log("category2.toString(): " + category2.toString());
    console.log("category3.toString(): " + category3.toString());


    console.log("\n\n");
    console.log("Creo los resources que voy a utilizar");
    console.log('let resource1 = new Resource(135, "resource1")');
    console.log('let resource2 = new Resource(110, "resource2")');
    console.log('let resource3 = new Resource(120, "resource3")');
    console.log('let resource4 = new Resource(90, "resource4")');
    console.log('let resource5 = new Resource(85, "resource5")');
    console.log('let resource6 = new Resource(60, "resource6")');
    console.log('let resource7 = new Resource(65, "resource7")');
    console.log('let resource8 = new Resource(70, "resource8")');
    console.log('let resource9 = new Resource(35, "resource9")');
    console.log('let resource10 = new Resource(30, "resource10")');
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

    console.log("\n");
    console.log("Resources:");
    console.log("resource1.toString(): " + resource1.toString());
    console.log("resource2.toString(): " + resource2.toString());
    console.log("resource3.toString(): " + resource3.toString());

    console.log("\n\n");
    console.log("Excepción de crear objeto de Production:");
    try {
        console.log('let production = new Production("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "")');
        let production = new Production("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "");
    } catch (error) {
        console.log(error);
    }


    console.log("\n\n");
    console.log("Creo las Movies que voy a utilizar");
    console.log('let movie1 = new Movie("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "", resource1, [])');
    console.log('let movie2 = new Movie("Matrix", "EEUU", new Date("01/01/1999"), "", "", resource2, [])');
    console.log('let movie3 = new Movie("Shrek", "EEUU", new Date("01/01/2001"), "", "", resource3, [])');
    let movie1 = new Movie("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "", resource1, []);
    let movie2 = new Movie("Matrix", "EEUU", new Date("01/01/1999"), "", "", resource2, []);
    let movie3 = new Movie("Shrek", "EEUU", new Date("01/01/2001"), "", "", resource3, []);

    console.log("\n");
    console.log("Movies:");
    console.log("movie1.toString(): " + movie1.toString());
    console.log("movie2.toString(): " + movie2.toString());
    console.log("movie3.toString(): " + movie3.toString());


    console.log("\n\n");
    console.log("Creo las Series que voy a utilizar");
    console.log('let serie1 = new Serie("Game of Thrones", "EEUU", new Date("01/01/2009"), "La historia medieval de George R.R. Martin", "", [resource6, resource7, resource8], [], 7)');
    console.log('let serie2 = new Serie("Suits", "EEUU", new Date("01/01/2010"), "", "", [resource4, resource5], [], 10)');
    console.log('let serie3 = new Serie("Cobra Kai", "EEUU", new Date("01/01/2015"), "", "", [resource9, resource10], [], 5)');
    let serie1 = new Serie("Game of Thrones", "EEUU", new Date("01/01/2009"), "La historia medieval de George R.R. Martin", "", [resource6, resource7, resource8], [], 7);
    let serie2 = new Serie("Suits", "EEUU", new Date("01/01/2010"), "", "", [resource4, resource5], [], 10);
    let serie3 = new Serie("Cobra Kai", "EEUU", new Date("01/01/2015"), "", "", [resource9, resource10], [], 5);

    console.log("\n");
    console.log("Series:");
    console.log("serie1.toString(): " + serie1.toString());
    console.log("serie2.toString(): " + serie2.toString());
    console.log("serie3.toString(): " + serie3.toString());


    console.log("\n\n");
    console.log("Creo las Series que voy a utilizar");
    console.log('let user1 = new User("John", "john@gmail.com", "john1234")');
    console.log('let user2 = new User("Tim", "tim@gmail.com", "tim789")');
    console.log('let user3 = new User("Steve", "steve@gmail.com", "1234steve")');
    let user1 = new User("John", "john@gmail.com", "john1234");
    let user2 = new User("Tim", "tim@gmail.com", "tim789");
    let user3 = new User("Steve", "steve@gmail.com", "1234steve");

    console.log("\n");
    console.log("Users:");
    console.log("user1.toString(): " + user1.toString());
    console.log("user2.toString(): " + user2.toString());
    console.log("user3.toString(): " + user3.toString());


    console.log("\n\n");
    console.log("Creo objetos Coordinate:");
    console.log('let cord1 = new Coordinate(1234, 4321)');
    console.log('let cord2 = new Coordinate(75412345, 1235461426)');
    console.log('let cord3 = new Coordinate(1423, 6532)');
    console.log('let cord4 = new Coordinate(23465, 12345)');
    console.log('let cord5 = new Coordinate(8465, 1423)');
    console.log('let cord6 = new Coordinate(2634, 9657)');
    console.log('let cord7 = new Coordinate(8564, 234567)');
    console.log('let cord8 = new Coordinate(12345, 6435)');
    let cord1 = new Coordinate(1234, 4321);
    let cord2 = new Coordinate(75412345, 1235461426);
    let cord3 = new Coordinate(1423, 6532);
    let cord4 = new Coordinate(23465, 12345);
    let cord5 = new Coordinate(8465, 1423);
    let cord6 = new Coordinate(2634, 9657);
    let cord7 = new Coordinate(8564, 234567);
    let cord8 = new Coordinate(12345, 6435);

    console.log("\n");
    console.log("Coordinates:");
    console.log("cord1.toString(): " + cord1.toString());
    console.log("cord2.toString(): " + cord2.toString());
    console.log("cord3.toString(): " + cord3.toString());
    console.log("cord4.toString(): " + cord4.toString());
    console.log("cord5.toString(): " + cord5.toString());
    console.log("cord6.toString(): " + cord6.toString());
    console.log("cord7.toString(): " + cord7.toString());
    console.log("cord8.toString(): " + cord8.toString());


    console.log("\n\n");
    console.log("Instancia de VideoSystem:");
    console.log('let videoSystem = VideoSystem.getInstance()');
    let videoSystem = VideoSystem.getInstance();

    console.log("\n");
    console.log("VideoSystem:");
    console.log("videoSystem.name: " + videoSystem.name);
    console.log('videoSystem.name = "Playfix"');
    videoSystem.name = "Playfix";
    console.log("videoSystem.name: " + videoSystem.name);


    console.log("\n\n");
    console.log("Add Categories:");
    console.log("videoSystem.addCategory(category1): " + videoSystem.addCategory(category1));
    console.log("videoSystem.addCategory(category2): " + videoSystem.addCategory(category2));
    console.log("videoSystem.addCategory(category3): " + videoSystem.addCategory(category3));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una categoría ya existente en el sistema:");
    try {
        console.log("videoSystem.addCategory(category1): ");
        console.log("videoSystem.addCategory(category1): " + videoSystem.addCategory(category1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Categories:");
    console.log('for (let category of videoSystem.categories) {console.log(category.category.toString());}');
    for (let category of videoSystem.categories) {
        console.log(category.category.toString());
    }

    console.log("\n");
    console.log("Remove Categories:");
    console.log("videoSystem.removeCategory(category2): " + videoSystem.removeCategory(category2));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una categoría no existente en el sistema:");
    try {
        console.log("videoSystem.removeCategory(category2): ");
        console.log("videoSystem.removeCategory(category2): " + videoSystem.removeCategory(category2));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log('for (let category of videoSystem.categories) {console.log(category.category.toString());}');
    for (let category of videoSystem.categories) {
        console.log(category.category.toString());
    }


    console.log("\n\n");
    console.log("Add Users:");
    console.log("videoSystem.addUser(user1): " + videoSystem.addUser(user1));
    console.log("videoSystem.addUser(user2): " + videoSystem.addUser(user2));
    console.log("videoSystem.addUser(user3): " + videoSystem.addUser(user3));

    console.log("\n");
    console.log("Compruebo la excepción de añadir un usuario ya existente en el sistema:");
    try {
        console.log("videoSystem.addUser(user1): ");
        console.log("videoSystem.addUser(user1): " + videoSystem.addUser(user1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Users:");
    console.log('for (let user of videoSystem.users) {console.log(user.toString());}')
    for (let user of videoSystem.users) {
        console.log(user.toString());
    }

    console.log("\n");
    console.log("Remove Users:");
    console.log("videoSystem.removeUser(user2): " + videoSystem.removeUser(user2));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar un usuario no existente en el sistema:");
    try {
        console.log("videoSystem.removeUser(user2): ");
        console.log("videoSystem.removeUser(user2): " + videoSystem.removeUser(user2));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Users:");
    console.log('for (let user of videoSystem.users) {console.log(user.toString());}')
    for (let user of videoSystem.users) {
        console.log(user.toString());
    }


    console.log("\n\n");
    console.log("Add Productions(movies):");
    console.log("videoSystem.addProduction(movie1): " + videoSystem.addProduction(movie1));
    console.log("videoSystem.addProduction(movie2): " + videoSystem.addProduction(movie2));
    console.log("videoSystem.addProduction(movie3): " + videoSystem.addProduction(movie3));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una production ya existente en el sistema:");
    try {
        console.log("videoSystem.addProduction(movie1): ");
        console.log("videoSystem.addProduction(movie1): " + videoSystem.addProduction(movie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions:");
    console.log('for (let production of videoSystem.productions) {console.log(production.toString());}');
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Add Productions(series):");
    console.log("videoSystem.addProduction(serie1): " + videoSystem.addProduction(serie1));
    console.log("videoSystem.addProduction(serie2): " + videoSystem.addProduction(serie2));
    console.log("videoSystem.addProduction(serie3): " + videoSystem.addProduction(serie3));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una production ya existente en el sistema:");
    try {
        console.log("videoSystem.addProduction(serie1): ");
        console.log("videoSystem.addProduction(serie1): " + videoSystem.addProduction(serie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions:");
    console.log('for (let production of videoSystem.productions) {console.log(production.toString());}');
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Remove Productions(movies):");
    console.log("videoSystem.removeProduction(movie2): " + videoSystem.removeProduction(movie2));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una production no existente en el sistema:");
    try {
        console.log("videoSystem.removeProduction(movie2): ");
        console.log("videoSystem.removeProduction(movie2): " + videoSystem.removeProduction(movie2));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions:");
    console.log('for (let production of videoSystem.productions) {console.log(production.toString());}');
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }

    console.log("\n");
    console.log("Remove Productions(series):");
    console.log("videoSystem.removeProduction(serie2): " + videoSystem.removeProduction(serie2));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una production no existente en el sistema:");
    try {
        console.log("videoSystem.removeProduction(serie2): ");
        console.log("videoSystem.removeProduction(serie2): " + videoSystem.removeProduction(serie2));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions:");
    console.log('for (let production of videoSystem.productions) {console.log(production.toString());}');
    for (let production of videoSystem.productions) {
        console.log(production.toString());
    }


    console.log("\n\n");
    console.log("Add Actors:");
    console.log("videoSystem.addActor(actor1): " + videoSystem.addActor(actor1));
    console.log("videoSystem.addActor(actor2): " + videoSystem.addActor(actor2));
    console.log("videoSystem.addActor(actor3): " + videoSystem.addActor(actor3));

    console.log("\n");
    console.log("Compruebo la excepción de añadir un actor ya existente en el sistema:");
    try {
        console.log("videoSystem.addActor(actor1): ");
        console.log("videoSystem.addActor(actor1): " + videoSystem.addActor(actor1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Actors:");
    console.log('for (let actor of videoSystem.actors) {console.log(actor.actor.toString());}');
    for (let actor of videoSystem.actors) {
        console.log(actor.actor.toString());
    }

    console.log("\n");
    console.log("Remove Actos:");
    console.log("videoSystem.removeActor(actor2): " + videoSystem.removeActor(actor2));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar un actor no existente en el sistema:");
    try {
        console.log("videoSystem.removeActor(actor2): ");
        console.log("videoSystem.removeActor(actor2): " + videoSystem.removeActor(actor2));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Actors:");
    console.log('for (let actor of videoSystem.actors) {console.log(actor.actor.toString());}');
    for (let actor of videoSystem.actors) {
        console.log(actor.actor.toString());
    }


    console.log("\n\n");
    console.log("Add Directors:");
    console.log("videoSystem.addDirector(director6): " + videoSystem.addDirector(director6));
    console.log("videoSystem.addDirector(director7): " + videoSystem.addDirector(director7));
    console.log("videoSystem.addDirector(director8): " + videoSystem.addDirector(director8));

    console.log("\n");
    console.log("Compruebo la excepción de añadir un director ya existente en el sistema:");
    try {
        console.log("videoSystem.addDirector(director6): ");
        console.log("videoSystem.addDirector(director6): " + videoSystem.addDirector(director6));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Directors:");
    console.log('for (let director of videoSystem.directors) {console.log(director.director.toString());}');
    for (let director of videoSystem.directors) {
        console.log(director.director.toString());
    }

    console.log("\n");
    console.log("Remove Directors:");
    console.log("videoSystem.removeDirector(director7): " + videoSystem.removeDirector(director7));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar un director no existente en el sistema:");
    try {
        console.log("videoSystem.removeDirector(director7): ");
        console.log("videoSystem.removeDirector(director7): " + videoSystem.removeDirector(director7));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Directors:");
    console.log('for (let director of videoSystem.directors) {console.log(director.director.toString());}');
    for (let director of videoSystem.directors) {
        console.log(director.director.toString());
    }


    console.log("\n\n");
    console.log("Assign Category:");
    console.log("videoSystem.assignCategory(category1, movie1): " + videoSystem.assignCategory(category1, movie1));
    console.log("videoSystem.assignCategory(category2, movie1): " + videoSystem.assignCategory(category2, movie1));
    console.log("videoSystem.assignCategory(category2, movie2): " + videoSystem.assignCategory(category2, movie2));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una relación de category y production ya existente en el sistema:");
    try {
        console.log("videoSystem.assignCategory(category1, movie1): ");
        console.log("videoSystem.assignCategory(category1, movie1): " + videoSystem.assignCategory(category1, movie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions en Categories:");
    console.log('for (let category of videoSystem.categories) {console.log("Category: " + category.category.name + ", Productions: " + category.productions.toString());}');
    for (let category of videoSystem.categories) {
        console.log("Category: " + category.category.name + ", Productions: " + category.productions.toString());
    }

    console.log("\n");
    console.log("Deassign Category:");
    console.log("videoSystem.deassignCategory(category1, movie1): " + videoSystem.deassignCategory(category1, movie1));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una relación de category y production no existente en el sistema:");
    try {
        console.log("videoSystem.deassignCategory(category1, movie1): ");
        console.log("videoSystem.deassignCategory(category1, movie1): " + videoSystem.deassignCategory(category1, movie1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions en Categories:");
    console.log('for (let category of videoSystem.categories) {console.log("Category: " + category.category.name + ", Productions: " + category.productions.toString());}');
    for (let category of videoSystem.categories) {
        console.log("Category: " + category.category.name + ", Productions: " + category.productions.toString());
    }


    console.log("\n\n");
    console.log("Assign Director:");
    console.log("videoSystem.assignDirector(director6, movie1): " + videoSystem.assignDirector(director6, movie1));
    console.log("videoSystem.assignDirector(director6, movie2): " + videoSystem.assignDirector(director6, movie2));
    console.log("videoSystem.assignDirector(director7, movie2): " + videoSystem.assignDirector(director7, movie2));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una relación de director y production ya existente en el sistema:");
    try {
        console.log("videoSystem.assignDirector(director6, movie1): ");
        console.log("videoSystem.assignDirector(director6, movie1): " + videoSystem.assignDirector(director6, movie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions en Directors:");
    console.log('for (let director of videoSystem.directors) {console.log("Director: " + director.director.name + " " + director.director.lastname1 + ", Productions: " + director.productions.toString());}');
    for (let director of videoSystem.directors) {
        console.log("Director: " + director.director.name + " " + director.director.lastname1 + ", Productions: " + director.productions.toString());
    }

    console.log("\n");
    console.log("Deassign Director:");
    console.log("videoSystem.deassignDirector(director6, movie1): " + videoSystem.deassignDirector(director6, movie1));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una relación de director y production no existente en el sistema:");
    try {
        console.log("videoSystem.deassignDirector(director6, movie1): ");
        console.log("videoSystem.deassignDirector(director6, movie1): " + videoSystem.deassignDirector(director6, movie1));
    } catch (error) {
        console.log(error);
    }
    console.log("\n");
    console.log("Iterador de Productions en Directors:");
    console.log('for (let director of videoSystem.directors) {console.log("Director: " + director.director.name + " " + director.director.lastname1 + ", Productions: " + director.productions.toString());}');
    for (let director of videoSystem.directors) {
        console.log("Director: " + director.director.name + " " + director.director.lastname1 + ", Productions: " + director.productions.toString());
    }


    console.log("\n\n");
    console.log("Assign Actor:");
    console.log("videoSystem.assignActor(actor1, serie1): " + videoSystem.assignActor(actor1, serie1));
    console.log("videoSystem.assignActor(actor1, serie2): " + videoSystem.assignActor(actor1, serie2));
    console.log("videoSystem.assignActor(actor2, serie2): " + videoSystem.assignActor(actor2, serie2));

    console.log("\n");
    console.log("Compruebo la excepción de añadir una relación de actor y production ya existente en el sistema:");
    try {
        console.log("videoSystem.assignActor(actor1, serie1): ");
        console.log("videoSystem.assignActor(actor1, serie1): " + videoSystem.assignActor(actor1, serie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions en Actors:");
    console.log('for (let actor of videoSystem.actors) {console.log("Actor: " + actor.actor.name + " " + actor.actor.lastname1 + ", Productions: " + actor.productions.toString());}');
    for (let actor of videoSystem.actors) {
        console.log("Actor: " + actor.actor.name + " " + actor.actor.lastname1 + ", Productions: " + actor.productions.toString());
    }

    console.log("\n");
    console.log("Deassign Actor:");
    console.log("videoSystem.deassignActor(actor1, serie1): " + videoSystem.deassignActor(actor1, serie1));

    console.log("\n");
    console.log("Compruebo la excepción de eliminar una relación de actor y production ya existente en el sistema:");
    try {
        console.log("videoSystem.deassignActor(actor1, serie1): ");
        console.log("videoSystem.deassignActor(actor1, serie1): " + videoSystem.deassignActor(actor1, serie1));
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    console.log("Iterador de Productions en Actors:");
    console.log('for (let actor of videoSystem.actors) {console.log("Actor: " + actor.actor.name + " " + actor.actor.lastname1 + ", Productions: " + actor.productions.toString());}');
    for (let actor of videoSystem.actors) {
        console.log("Actor: " + actor.actor.name + " " + actor.actor.lastname1 + ", Productions: " + actor.productions.toString());
    }

    console.log("\n\n");
    console.log("Assign Director:");
    console.log("videoSystem.assignDirector(director7, movie1): " + videoSystem.assignDirector(director7, movie1));
    console.log("videoSystem.assignDirector(director7, movie2): " + videoSystem.assignDirector(director7, serie2));

    console.log("\n");
    console.log("Get Productions Director:");
    console.log('for (let production of videoSystem.getProductionsDirector(director7)) {console.log(production.toString());}');
    for (let production of videoSystem.getProductionsDirector(director7)) {
        console.log(production.toString());
    }

    console.log("\n\n");
    console.log("Assign Actor:");
    console.log("videoSystem.assignActor(actor2, movie1): " + videoSystem.assignActor(actor2, movie1));
    console.log("videoSystem.assignActor(actor2, serie3): " + videoSystem.assignActor(actor2, serie3));

    console.log("\n");
    console.log("Get Productions Actor:");
    console.log('for (let production of videoSystem.getProductionsActor(actor2)) {console.log(production.toString());}');
    for (let production of videoSystem.getProductionsActor(actor2)) {
        console.log(production.toString());
    }

    console.log("\n\n");
    console.log("Assign Category:");
    console.log("videoSystem.assignCategory(category2, serie2): " + videoSystem.assignCategory(category2, serie2));
    console.log("videoSystem.assignCategory(category2, movie3): " + videoSystem.assignCategory(category2, movie3));

    console.log("\n");
    console.log("Get Productions Category:");
    console.log('for (let production of videoSystem.getProductionsCategory(category2)) {console.log(production.toString());}');
    for (let production of videoSystem.getProductionsCategory(category2)) {
        console.log(production.toString());
    }

    console.log("\n\n");
    console.log("Get Cast:");
    console.log('for (let cast of videoSystem.getCast(serie2)) {console.log(cast.toString());}');
    for (let cast of videoSystem.getCast(serie2)) {
        console.log(cast.toString());
    }

    console.log("\n");
    try {
        let person9 = new Person("Jaime", "Poveda", "", 1234, "");
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    try {
        let movie3 = new Movie("Shrek", "EEUU", new Date("01/01/2001"), "", "", resource3, [new Coordinate(23, 42), 1234]);
    } catch (error) {
        console.log(error);
    }

    console.log("\n");
    try {
        let serie1 = new Serie("Game of Thrones", "EEUU", new Date("01/01/2009"), "La historia medieval de George R.R. Martin", "", [resource6, resource7, 1], [], 7);
    } catch (error) {
        console.log(error);
    }

})();