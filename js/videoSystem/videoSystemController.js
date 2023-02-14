import { VideoSystem } from "./videoSystemModel";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "../entities/objectsVideoSystem.js";

class VideoSystemController {
    #videoSystem;
    #videoSystemView;

    #loadObjects() {
        let category1 = new Category("Acción", "");
        let category2 = new Category("Romance", "");
        let category3 = new Category("Misterio", "");

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

        let movie1 = new Movie("El señor de los anillos", "EEUU", new Date("01/01/2001"), "La épica de fantasía de Tolkien", "", resource1, []);
        let movie2 = new Movie("Matrix", "EEUU", new Date("01/01/1999"), "", "", resource2, []);
        let movie3 = new Movie("Shrek", "EEUU", new Date("01/01/2001"), "", "", resource3, []);

        let serie1 = new Serie("Game of Thrones", "EEUU", new Date("01/01/2009"), "La historia medieval de George R.R. Martin", "", [resource6, resource7, resource8], [], 7);
        let serie2 = new Serie("Suits", "EEUU", new Date("01/01/2010"), "", "", [resource4, resource5], [], 10);
        let serie3 = new Serie("Cobra Kai", "EEUU", new Date("01/01/2015"), "", "", [resource9, resource10], [], 5);

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

        let user1 = new User("John", "john@gmail.com", "john1234");
    }

    constructor(model, view) {
        this.#videoSystem = model;
        this.#videoSystemView = view;

        this.onLoad();
        this.onInit();

        this.#videoSystemView.bindInit(this.handleInit);
        //this.#videoSystemView.bind();
    }

    onLoad = () => {
        this.#loadObjects();
        //this.#videoSystemView.show();
        this.onAddCategory();
    }

    onInit = () => {
        //this.#videoSystemView.show(this.#videoSystem.categories);
        //this.#videoSystemView.bind();
    }

    onAddCategory = () => {
        //this.#videoSystemView.show(this.#videoSystem.categories);
        //this.#videoSystemView.bind();
    }


}

export { VideoSystemController };