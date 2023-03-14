import { VideoSystem } from "./videoSystemModel.js";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from "../entities/objectsVideoSystem.js";

class VideoSystemController {
    #videoSystem;
    #videoSystemView;

    #windows = [];

    #loadObjects() {
        let videoSystem = this.#videoSystem;

        let category1 = new Category("Acción", "Producciones con un toque de adrenalina. Incluyen acrobacias físicas, persecuciones rescates y batallas.");
        let category2 = new Category("Musical", "Música, emociones y coreografías espectaculares para disfrutar.");
        let category3 = new Category("Ciencia Ficción", "Combinación de ciencia futurista y dilemas éticos o espacio-temporales.");

        videoSystem.addCategory(category1);
        videoSystem.addCategory(category2);
        videoSystem.addCategory(category3);

        let resource1 = new Resource(135, "resource1");
        let resource2 = new Resource(110, "resource2");
        let resource3 = new Resource(120, "resource3");
        let resource4 = new Resource(90, "resource4");
        let resource5 = new Resource(115, "resource5");
        let resource6 = new Resource(95, "resource6");
        let resource7 = new Resource(85, "resource7");
        let resource8 = new Resource(125, "resource8");
        let resource9 = new Resource(130, "resource9");
        let resource10 = new Resource(140, "resource10");
        let resource11 = new Resource(145, "resource10");

        let resource12 = new Resource(60, "resource6");
        let resource13 = new Resource(65, "resource7");
        let resource14 = new Resource(70, "resource8");

        let movie1 = new Movie("Kingsman", "UK", new Date("12/13/2014"), "Una agencia de espías ultra secretos recluta a un joven de la calle en su competitivo programa de entrenamiento, cuando un genio tecnológico amenaza al mundo.", "img/kingsman.jpg", resource1, []);
        let movie2 = new Movie("X-Men Origins", "EEUU", new Date("04/30/2009"), "Nacido como mutante en 1845, Lobezno y su hermano huyen de su pueblo para inscribirse en el ejército, luchando en cada gran batalla americana. Un día son reclutados por el coronel Stryker para formar un ejército especial de mutantes. Lobezno acaba escapando e intenta seguir con una vida normal. Sin embargo, cuando descubre que Stryker le persigue se prepara para atacar de nuevo.", "img/xmen.jpg", resource2, []);
        let movie3 = new Movie("Spiderman 2", "EEUU", new Date("05/28/2004"), "Dos años después de la muerte de Norman Osborn, Peter Parker, también conocido como el superhéroe Spider-Man, se distancia tanto de su interés amoroso Mary Jane Watson como de su mejor amigo Harry Osborn; también descubre que su tía May se enfrenta al desalojo.", "img/spiderman-2.jpg", resource3, []);
        let movie4 = new Movie("Drive", "EEUU", new Date("12/28/2011"), "Un misterioso conductor especialista de cine y mecánico en un taller, por la noche se convierte en un talentoso chófer para delincuentes. Su jefe, Shannon le busca trabajos en películas de Hollywood o fugas para criminales. Sin embargo, su mundo cambia cuando conoce a Irene, una madre solitaria que tiene al marido en la cárcel, y se ve enredado en un robo que involucra a la alta esfera de la mafia.", "img/drive.jpg", resource4, []);
        let movie5 = new Movie("La La Land", "EEUU", new Date("01/13/2017"), "Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares. Un día sus caminos se cruzan e inmediatamente se enamoran. Los dos trabajan juntos para hacer realidad sus sueños, pero pronto se dan cuenta de que el mundo del arte pide sacrificios que ponen en peligro su relación.", "img/la-la-land.jpg", resource5, []);
        let movie6 = new Movie("Mamma Mia", "EEUU", new Date("08/13/2008"), "Versión cinematográfica del popular musical de ABBA. Una joven (Amanda Seyfried) que ha crecido en una pequeña isla griega, ha sido educada por una madre rebelde y poco convencional (Streep), que siempre se ha negado a revelarle la identidad de su padre. Cuando, por fin, parece que la joven está a punto de saberlo, aparecen tres posibles candidatos (Brosnan, Firth y Skarsgard).", "img/mamma-mia.jpg", resource6, []);
        let movie7 = new Movie("Sing", "EEUU", new Date("12/21/2016"), "Buster Moon ama su teatro y es capaz de cualquier cosa para salvarlo. Sabe que su sueño está a punto de desaparecer y solo tiene una oportunidad: organizar el concurso de canto más grande del mundo. Tras varias etapas, quedan 5 finalistas: Mike, un ratón con voz suave; Meena, una elefanta adolescente con miedo escénico; Rosita, la exhausta madre de 25 cerditos; Johnny, un joven gorila mafioso; y Ash, una puercoespín punk-rock que quiere deshacerse de su arrogante novio y cantar en solitario.", "img/sing.jpg", resource7, []);
        let movie8 = new Movie("El gran showman", "EEUU", new Date("12/29/2017"), "En el siglo XIX, P.T. Barnum es un visionario que surge de la nada y crea un fascinante espectáculo que se convertirá en una sensación mundial, el llamado Ringling Bros. and Barnum & Bailey Circus.", "img/el-gran-showman.jpg", resource8, []);
        let movie9 = new Movie("Dune", "EEUU", new Date("10/22/2021"), "Arrakis, también denominado 'Dune', se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.", "img/dune.jpg", resource9, []);
        let movie10 = new Movie("Blade Runner 2049", "EEUU", new Date("10/06/2017"), "Tras la rebelión de los replicantes creados por bioingeniería para ser utilizados como mano de obra esclava y la prohibición a Tyrell Corporation de seguir con su fabricación, el empresario Niander Wallace adquirió lo que quedaba de Tyrell Corp. y creó una nueva línea de replicantes mucho más obedientes. Ahora, en el año 2049, los viejos modelos Nexus 8 que continúan con vida están siendo retirados. Los que les persiguen aún reciben el nombre de Blade Runner.", "img/blade-runner-2049.jpg", resource10, []);
        let movie11 = new Movie("Star Wars: El Despertar de la Fuerza", "EEUU", new Date("12/18/2015"), "Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte, la galaxia tiene que enfrentarse a una nueva amenaza: el malvado Kylo Ren y la Primera Orden. Cuando el desertor Finn llega a un planeta desierto conoce a Rey, cuyo androide contiene un mapa secreto. Juntos, la joven pareja unirá fuerzas con Han Solo para asegurarse de que la resistencia encuentra a Luke Skywalker, el último de los caballeros Jedi.", "img/star-wars-7.jpg", resource11, []);

        videoSystem.addProduction(movie1);
        videoSystem.addProduction(movie2);
        videoSystem.addProduction(movie3);
        videoSystem.addProduction(movie4);
        videoSystem.addProduction(movie5);
        videoSystem.addProduction(movie6);
        videoSystem.addProduction(movie7);
        videoSystem.addProduction(movie8);
        videoSystem.addProduction(movie9);
        videoSystem.addProduction(movie10);
        videoSystem.addProduction(movie11);

        let serie1 = new Serie("Black Mirror", "EEUU", new Date("02/11/2013"), "Black Mirror es una serie de televisión antológica británica de ciencia ficción distópica/costumbrista creada por Charlie Brooker.", "img/black-mirror.jpg", [resource12, resource13, resource14], [], 5);

        videoSystem.addProduction(serie1);

        videoSystem.assignCategory(category1, movie1);
        videoSystem.assignCategory(category1, movie2);
        videoSystem.assignCategory(category1, movie3);
        videoSystem.assignCategory(category1, movie4);
        videoSystem.assignCategory(category2, movie5);
        videoSystem.assignCategory(category2, movie6);
        videoSystem.assignCategory(category2, movie7);
        videoSystem.assignCategory(category2, movie8);
        videoSystem.assignCategory(category3, movie9);
        videoSystem.assignCategory(category3, movie10);
        videoSystem.assignCategory(category3, movie11);
        videoSystem.assignCategory(category3, serie1);

        let actor1 = new Person("Taron", "Egerton", "", new Date("11/10/1989"), "img/taron-egerton.jpg");
        let actor2 = new Person("Colin", "Firth", "", new Date("09/10/1960"), "img/colin-firth.jpg");
        let actor3 = new Person("Hugh", "Jackman", "", new Date("10/12/1968"), "img/hugh-jackman.jpg");
        let actor4 = new Person("Ryan", "Reynolds", "", new Date("10/23/1976"), "img/ryan-reynolds.jpg");
        let actor5 = new Person("Tobey", "Maguire", "", new Date("06/27/1975"), "img/tobey-maguire.jpg");
        let actor6 = new Person("J.K.", "Simmons", "", new Date("01/09/1955"), "img/jk-simmons.jpg");
        let actor7 = new Person("Ryan", "Gosling", "", new Date("11/12/1980"), "img/ryan-gosling.jpg");
        let actor8 = new Person("Oscar", "Isaac", "", new Date("03/09/1979"), "img/oscar-isaac.jpg");
        let actor9 = new Person("Pierce", "Brosnan", "", new Date("05/16/1953"), "img/pierce-brosnan.jpg");
        let actor10 = new Person("Matthew", "McConaughey", "", new Date("11/04/1969"), "img/matthew-mcconaughey.jpg");
        let actor11 = new Person("Zendaya", "Zendaya", "", new Date("09/01/1996"), "img/zendaya.jpg");
        let actor12 = new Person("Harrison", "Ford", "", new Date("07/13/1942"), "img/harrison-ford.jpg");
        let actor13 = new Person("Domhall", "Gleeson", "", new Date("05/12/1983"), "img/domhall-gleeson.jpg");
        let actor14 = new Person("Hayley", "Atwell", "", new Date("04/05/1982"), "img/hayley-atwell.jpg");

        videoSystem.addActor(actor1);
        videoSystem.addActor(actor2);
        videoSystem.addActor(actor3);
        videoSystem.addActor(actor4);
        videoSystem.addActor(actor5);
        videoSystem.addActor(actor6);
        videoSystem.addActor(actor7);
        videoSystem.addActor(actor8);
        videoSystem.addActor(actor9);
        videoSystem.addActor(actor10);
        videoSystem.addActor(actor11);
        videoSystem.addActor(actor12);
        videoSystem.addActor(actor13);
        videoSystem.addActor(actor14);

        let director1 = new Person("Matthew", "Vaughn", "", new Date("03/07/1971"), "img/matthew-vaughn.jpg");
        let director2 = new Person("Gavin", "Hood", "", new Date("05/12/1963"), "img/gavin-hood.jpg");
        let director3 = new Person("Sam", "Raimi", "", new Date("10/23/1959"), "img/sam-raimi.jpg");
        let director4 = new Person("Nicolas", "Winding Refn", "", new Date("09/29/1970"), "img/nicolas-winding.jpg");
        let director5 = new Person("Damien", "Chazelle", "", new Date("01/19/1985"), "img/damien-chazelle.jpg");
        let director6 = new Person("Phyllida", "Lloyd", "", new Date("06/17/1957"), "img/phyllida-lloyd.jpg");
        let director7 = new Person("Garth", "Jennings", "", new Date("03/04/1972"), "img/garth-jennings.jpg");
        let director8 = new Person("Michael", "Gracey", "", new Date("07/16/1984"), "img/michael-gracey.jpg");
        let director9 = new Person("Denis", "Villeneuve", "", new Date("10/03/1967"), "img/denis-villeneuve.jpg");
        let director10 = new Person("Owen", "Harris", "", new Date("05/22/1972"), "img/owen-harris.jpg");
        let director11 = new Person("J.J.", "Abrams", "", new Date("06/27/1966"), "img/jj-abrams.jpg");

        videoSystem.addDirector(director1);
        videoSystem.addDirector(director2);
        videoSystem.addDirector(director3);
        videoSystem.addDirector(director4);
        videoSystem.addDirector(director5);
        videoSystem.addDirector(director6);
        videoSystem.addDirector(director7);
        videoSystem.addDirector(director8);
        videoSystem.addDirector(director9);
        videoSystem.addDirector(director10);
        videoSystem.addDirector(director11);


        videoSystem.assignActor(actor1, movie1);
        videoSystem.assignActor(actor2, movie1);
        videoSystem.assignDirector(director1, movie1);

        videoSystem.assignActor(actor3, movie2);
        videoSystem.assignActor(actor4, movie2);
        videoSystem.assignDirector(director2, movie2);

        videoSystem.assignActor(actor5, movie3);
        videoSystem.assignActor(actor6, movie3);
        videoSystem.assignDirector(director3, movie3);

        videoSystem.assignActor(actor7, movie4);
        videoSystem.assignActor(actor8, movie4);
        videoSystem.assignDirector(director4, movie4);

        videoSystem.assignActor(actor7, movie5);
        videoSystem.assignActor(actor6, movie5);
        videoSystem.assignDirector(director5, movie5);

        videoSystem.assignActor(actor2, movie6);
        videoSystem.assignActor(actor9, movie6);
        videoSystem.assignDirector(director6, movie6);

        videoSystem.assignActor(actor1, movie7);
        videoSystem.assignActor(actor10, movie7);
        videoSystem.assignDirector(director7, movie7);

        videoSystem.assignActor(actor3, movie8);
        videoSystem.assignActor(actor11, movie8);
        videoSystem.assignDirector(director8, movie8);

        videoSystem.assignActor(actor8, movie9);
        videoSystem.assignActor(actor11, movie9);
        videoSystem.assignDirector(director9, movie9);

        videoSystem.assignActor(actor7, movie10);
        videoSystem.assignActor(actor12, movie10);
        videoSystem.assignDirector(director9, movie10);

        videoSystem.assignActor(actor13, movie11);
        videoSystem.assignActor(actor12, movie11);
        videoSystem.assignDirector(director10, movie11);

        videoSystem.assignActor(actor13, serie1);
        videoSystem.assignActor(actor14, serie1);
        videoSystem.assignDirector(director11, serie1);

        let user1 = new User("admin", "admin@gmail.com", "admin");

        videoSystem.addUser(user1);

        /* console.log(JSON.stringify([...this.#videoSystem.actors][0].actor.toString()));
        let actorsJSON = JSON.stringify([...this.#videoSystem.actors]);
        console.log(actorsJSON);
        console.log(JSON.parse(actorsJSON)); */

        console.log("Usuarios: ");
        console.log(JSON.stringify([...this.#videoSystem.users]));
        console.log("\n\n")
        console.log("Producciones: ");
        console.log(JSON.stringify([...this.#videoSystem.productions]));
        console.log("\n\n")
        console.log("Categorías: ");
        console.log(JSON.stringify([...this.#videoSystem.categories]));
        console.log("\n\n")
        console.log("Actores: ");
        console.log(JSON.stringify([...this.#videoSystem.actors]));
        console.log("\n\n")
        console.log("Directores: ");
        console.log(JSON.stringify([...this.#videoSystem.directors]));
        console.log("\n\n")

        let actorsJSON = JSON.stringify([...this.#videoSystem.actors]);
        console.log(actorsJSON);
        console.log(JSON.parse(actorsJSON)[0].actor);
        console.log([...this.#videoSystem.actors]);

        this.saveJSON();
    }

    saveJSON() {
        /* let fs = require('fs');
        fs.writeFile("actors.JSON", JSON.stringify([...this.#videoSystem.actors])); */

        /* let file = new File(["actors"], "actors.json");
        console.log(file); */

        /* let htmlString = `<?php 
            echo "hola";
        ?>`
        alert(htmlString); */

        /* let blob = new Blob(["Hola"], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "static.txt"); */

        /* var a = document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob(["CONTENT"], { type: "text/plain" }));
        a.download = "demo.txt";
        a.click(); */

        /* const fileHandle = await window.showSaveFilePicker();
        const fileStream = await fileHandle.createWritable();
        await fileStream.write(new Blob(["CONTENT"], { type: "text/plain" }));
        await fileStream.close(); */

        /* var formData = new FormData();

        formData.append("username", "Groucho");
        formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

        // HTML file input user's choice...
        //formData.append("userfile", fileInputElement.files[0]);

        // JavaScript file-like object...
        var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
        var blob = new Blob([content], { type: "text/xml" });

        formData.append("webmasterfile", blob);

        var request = new XMLHttpRequest();
        request.open("POST", "json.json");
        request.send(formData); */

        /* let vfPostFile = $('#vfPostFile');
        let base = location.protocol + '//' + location.host + location.pathname;
        let url = new URL('submitForm.php', base);
        let formData = new FormData();
        formData.append('results', '8');
        formData.append('gender', 'female');
        //formData.append('webmasterfile', vfPostFile.get(0).files[0]);
        let product = {
            id: 123,
            name: 'PC',
            brand: 'HP',
            model: 'EliteBook'
        }
        let blob = new Blob([JSON.stringify(product)], { type: "text/xml" });
        formData.append("blobField", blob);
        formData.append("product", JSON.stringify(product));

        fetch(url, {
            method: 'post',
            body: formData
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.dir(data);
            $$result.log(data);
            $$result.log(JSON.stringify(data));
        }).catch(function (err) {
            $$result.log('No se ha recibido respuesta.');
            $$result.log(err.toString());
        }); */

        /* var data = new FormData();
        data.append("upfile", new Blob(["CONTENT"], { type: "text/plain" }));
        fetch("SERVER.SCRIPT", { method: "POST", body: data }); */

        /* var fileWriter = new Writer();
        var text = "This is a test string";
        var fileName = "Test.doc";
        fileWriter.writeToFile("sfopera.com", text, fileName, function (err, url) {
            if (err) {
                resp.error("Write failed");
            } else {
                resp.success(url);
            }
        }); */
    }

    /* function replacer(key, value) {
        if (key === "publication") {
            return new Date(value).toLocaleDateString();
        }
        return value;
    }

    function reviver(key, value){
        if (key === 'publication'){
            console.log(new Date(value));
            return new Date(value);
        }
        return value;
    } */

    constructor(model, view) {
        this.#videoSystem = model;
        this.#videoSystemView = view;

        this.onLoad();
        this.onInit();

        this.binds();
    }

    binds() {
        this.#videoSystemView.bindInit(this.handleInit.bind(this));
        this.#videoSystemView.bindCategory(this.handleCategory.bind(this));
        this.#videoSystemView.bindProduction(this.handleProduction.bind(this));
        this.#videoSystemView.bindActor(this.handleActor.bind(this));
        this.#videoSystemView.bindDirector(this.handleDirector.bind(this));
        this.#videoSystemView.bindProductionWindow(this.handleProductionWindow.bind(this));
        this.#videoSystemView.bindCloseWindows(this.handleCloseWindows.bind(this));
        this.#videoSystemView.bindForms(this.handleForms.bind(this));
        this.#videoSystemView.bindLoginButton(this.handleLogin.bind(this));
        this.#videoSystemView.bindCloseSession(this.handleCloseSession.bind(this));
    }

    onLoad = () => {
        this.#loadObjects();
    }


    onInit = () => {
        let randomProductions = [];

        while (randomProductions.length < 3) {
            let newProd = [...this.#videoSystem.productions][Math.floor(Math.random() * [...this.#videoSystem.productions].length)]
            if (randomProductions.indexOf(newProd) === -1) {
                randomProductions.push(newProd);
            }
        }

        this.#videoSystemView.showHeader();
        this.#videoSystemView.showRandomProductions(randomProductions);
        this.#videoSystemView.showCategories(this.#videoSystem.categories);
        this.#videoSystemView.showPersons(this.#videoSystem.actors, this.#videoSystem.directors);
    }

    handleInit = () => {
        this.onInit();
        this.binds();
    }

    onCreateProduction = () => {
        this.#videoSystemView.updateProductions([...this.#videoSystem.productions]);

        this.binds();
    }

    onDeleteProduction = () => {
        this.#videoSystemView.updateProductions([...this.#videoSystem.productions]);

        this.binds();
    }

    onAssignProduction = () => {
        //this.#videoSystemView.updateProductions([...this.#videoSystem.productions]);

        this.binds();
    }

    onAddCategory = () => {
        this.#videoSystemView.updateCategories([...this.#videoSystem.categories]);

        this.binds();
    }

    onDeleteCategory = () => {
        this.#videoSystemView.updateCategories([...this.#videoSystem.categories]);

        this.binds();
    }

    onCreatePersons = () => {
        this.#videoSystemView.updateDirectors([...this.#videoSystem.directors]);
        this.#videoSystemView.updateActors([...this.#videoSystem.actors]);

        this.binds();
    }

    onDeletePersons = () => {
        this.#videoSystemView.updateDirectors([...this.#videoSystem.directors]);
        this.#videoSystemView.updateActors([...this.#videoSystem.actors]);

        this.binds();
    }

    handleCategory = (category) => {
        let cat = new Category(category);

        this.#videoSystemView.showCategory(category, this.#videoSystem.getProductionsCategory(cat));
        this.binds();
    }

    handleProduction = (production) => {
        for (let prod of this.#videoSystem.productions) {
            if (prod.title === production) {
                this.#videoSystemView.showProduction(prod, this.#videoSystem.getCast(prod), this.#videoSystem.getDirectors(prod));
            }
        }
        this.binds();
    }

    handleActor = (actor) => {
        for (let act of this.#videoSystem.actors) {
            if (act.actor.id === Number(actor)) {
                this.#videoSystemView.showPerson(act.actor, this.#videoSystem.getProductionsActor(act.actor));
            }
        }
        this.binds();
    }

    handleDirector = (director) => {
        for (let dir of this.#videoSystem.directors) {
            if (dir.director.id === Number(director)) {
                this.#videoSystemView.showPerson(dir.director, this.#videoSystem.getProductionsDirector(dir.director));
            }
        }
        this.binds();
    }

    handleProductionWindow = (prodName) => {
        let production = [...this.#videoSystem.productions].find(prod => prod.title === prodName);

        this.#windows.push(window.open("production.html", production.title + " Window"));

        this.#videoSystemView.showWindowProduction(this.#windows[this.#windows.length - 1], production);
    }

    handleCloseWindows = () => {
        this.#windows.forEach(window => {
            window.close();
        });
    }

    handleForms = () => {
        this.#videoSystemView.showForms([...this.#videoSystem.directors], [...this.#videoSystem.productions], [...this.#videoSystem.actors], [...this.#videoSystem.categories]);

        this.#videoSystemView.bindAdminButtons(this.handleCreateProductionForm, this.handleRemoveProductionForm, this.handleAssignProductionForm, this.handleNewCategoryForm, this.handleRemoveCategoryForm, this.handleCreatePersonForm, this.handleRemovePersonForm);
        this.binds();
    }

    handleCreateProductionForm = () => {
        this.#videoSystemView.bindCreateProductionForm(this.handleCreateProduction);
    }

    handleCreateProduction = (title, prodType, nationality, published, synopsis, image, directorId, cast, categoriesSelected) => {
        let done, error;

        try {
            let newProduction;

            prodType === "Película" ? newProduction = new Movie(title, nationality, new Date(published), synopsis, image, new Resource(1, 1), []) : newProduction = new Serie(title, nationality, new Date(published), synopsis, image, [], [], 1);

            /* if (prodType === "Película") {
                newProduction = new Movie(title, "none", new Date(), "", "", new Resource(1, 1), [])
            } else {
                new Serie(title, "none", new Date(), "", "", [], [], 1)
            } */

            /* try {
                newProduction = new Serie(title, "none", new Date(), "", "", [], [], 1)
            } catch (error) {
                console.log(error);
            } */

            //insertar produccion
            this.#videoSystem.addProduction(newProduction);

            let director = "";
            [...this.#videoSystem.actors].find((act) => {
                if (act.actor.id === parseInt(directorId)) {
                    director = act.actor;
                }
                return act.actor.id === parseInt(directorId);
            })
            if (director === "") {
                [...this.#videoSystem.directors].find((dir) => {
                    if (dir.director.id === parseInt(directorId)) {
                        director = dir.director;
                    }
                    return dir.director.id === parseInt(directorId);
                });
            }

            //assign director
            this.#videoSystem.assignDirector(director, newProduction);

            cast.forEach(actorId => {
                let actor = "";
                [...this.#videoSystem.actors].find((act) => {
                    if (act.actor.id === parseInt(actorId)) {
                        actor = act.actor;
                    }
                    return act.actor.id === parseInt(actorId);
                })
                if (actor === "") {
                    [...this.#videoSystem.directors].find((dir) => {
                        if (dir.director.id === parseInt(actorId)) {
                            actor = dir.director;
                        }
                        return dir.director.id === parseInt(actorId);
                    });
                }

                //assign actor 
                this.#videoSystem.assignActor(actor, newProduction);
            });

            categoriesSelected.forEach(categoryName => {
                let cat;
                [...this.#videoSystem.categories].find((category) => {
                    if (category.category.name === categoryName) {
                        cat = category.category;
                    }
                    return category.category.name === categoryName;
                })

                //assign cat 
                this.#videoSystem.assignCategory(cat, newProduction);
            });

            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Creación de producción", "La producción ha sido creada correctamente");

        this.onCreateProduction();
    }

    handleRemoveProductionForm = () => {
        this.#videoSystemView.bindRemoveProductionForm(this.handleRemoveProduction);
    }

    handleRemoveProduction = (prodName) => {
        let done, error;
        try {
            let prod;
            [...this.#videoSystem.productions].find((production) => {
                if (production.title === prodName) {
                    prod = production;
                }
                return production.title === prodName;
            });
            this.#videoSystem.removeProduction(prod);
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Eliminación de producción", "La producción ha sido eliminada correctamente");

        this.onDeleteProduction();
    }

    handleAssignProductionForm = () => {
        this.#videoSystemView.bindAssignProductionForm(this.handleAssignProduction);
    }

    handleAssignProduction = (prodType, prodTitle, personId, role) => {
        let done, error;

        try {
            let prod;
            let person = "";
            [...this.#videoSystem.productions].find((production) => {
                if (production.title === prodTitle) {
                    prod = production;
                }
                return production.title === prodTitle;
            });

            [...this.#videoSystem.actors].find((act) => {
                if (act.actor.id === parseInt(personId)) {
                    person = act.actor;
                }
                return act.actor.id === parseInt(personId);
            })

            if (person === "") {
                [...this.#videoSystem.directors].find((dir) => {
                    if (dir.director.id === parseInt(personId)) {
                        person = dir.director;
                    }
                    return dir.director.id === parseInt(personId);
                });
            }

            if (prodType === "Asignar") {
                role === "Actor" ? this.#videoSystem.assignActor(person, prod) : this.#videoSystem.assignDirector(person, prod);
            } else {
                role === "Actor" ? this.#videoSystem.deassignActor(person, prod) : this.#videoSystem.deassignDirector(person, prod);
            }

            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }


        this.#videoSystemView.showResultModal(done, error, "Asignación de producción", "La producción ha sido " + (prodType === "Asignar" ? "asignada" : "desasignada") + "  correctamente");

        this.onAssignProduction();
    }


    handleNewCategoryForm = () => {
        this.#videoSystemView.bindNewCategoryForm(this.handleCreateCategory);
    }

    handleCreateCategory = (cName, cDesc) => {
        let cat = new Category(cName, cDesc);

        let done, error;
        try {
            this.#videoSystem.addCategory(cat);
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Creación de categoría", "La categoría ha sido añadida correctamente");

        this.onAddCategory();
    }

    handleRemoveCategoryForm = () => {
        this.#videoSystemView.bindRemoveCategoryForm(this.handleRemoveCategory);
    }

    handleRemoveCategory = (cName) => {
        let category = new Category(cName);

        let done, error;
        try {
            this.#videoSystem.removeCategory(category);
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Eliminación de categoría", "La categoría ha sido eliminada correctamente");

        this.onDeleteCategory();
    }

    handleCreatePersonForm = () => {
        this.#videoSystemView.bindCreatePersonForm(this.handleCreatePerson);
    }

    handleCreatePerson = (pName, pLastName1, pLastName2, pBorn, pImage, role) => {
        let person = new Person(pName, pLastName1, pLastName2, new Date(pBorn), pImage);

        let done, error;
        try {
            role === "Actor" ? this.#videoSystem.addActor(person) : this.#videoSystem.addDirector(person);
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Creación de persona", "La persona ha sido creada correctamente");

        this.onCreatePersons();
    }

    handleRemovePersonForm = () => {
        this.#videoSystemView.bindRemovePersonForm(this.handleRemovePerson);
    }

    handleRemovePerson = (pId) => {
        //let person = new Person(pId, "empty", "", new Date(), "");
        //person = this.#videoSystem.getPerson();

        let done, error;
        try {
            let person;
            //this.#videoSystem.removePerson(person);
            if ([...this.#videoSystem.actors].find((act) => {
                if (act.actor.id === parseInt(pId)) {
                    person = act.actor;
                }
                return act.actor.id === parseInt(pId);
            })) {
                this.#videoSystem.removeActor(person);
            } else {
                [...this.#videoSystem.directors].find((dir) => {
                    if (dir.director.id === parseInt(pId)) {
                        person = dir.director;
                    }
                    return dir.director.id === parseInt(pId);
                });
                this.#videoSystem.removeDirector(person);
            }


            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        this.#videoSystemView.showResultModal(done, error, "Eliminación de persona", "La persona ha sido eliminada correctamente");

        this.onDeletePersons();
    }

    handleLogin = () => {
        this.#videoSystemView.showLogin();
        this.#videoSystemView.bindLoginForm(this.handleLoginForm);
        this.binds();
    }

    handleLoginForm = (userName, password) => {
        let done, error;
        let message;

        let userExists = false;
        try {
            //this.#videoSystem.removePerson(person);
            userExists = [...this.#videoSystem.users].find((user) => {
                return user.username === userName && user.password === password;
            })
            userExists ? message = "Login correcto" : message = "Login incorrecto";
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }

        if (userExists) {
            document.cookie = `User=${userName};`;
            history.replaceState({ action: "init" }, null, "#");
            this.handleInit();
        }

        this.#videoSystemView.showLoginResultModal(done, error, "Login", message);

        //this.onDeletePersons();
    }

    handleCloseSession = () => {
        document.cookie = `User=;`
        history.replaceState({ action: "init" }, null, "#");
        this.handleInit();
        this.binds();
    }
}

/* (function() {
    document.cookie = `User=;`
})(); */

export { VideoSystemController };