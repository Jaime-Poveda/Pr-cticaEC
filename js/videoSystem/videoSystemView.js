class VideoSystemView {

	#excecuteHandler(handler, handlerArguments, scrollElement, data, url, event) {
		handler(...handlerArguments);
		$(scrollElement).get(0).scrollIntoView();
		history.pushState(data, null, url);
		event.preventDefault();
	}

    constructor() {
        this.main = $('main');
    }
    
    showHeader() {
        this.main.empty();

        this.main.append(`
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#narvars">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="narvars">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0" id="narvars-ul">

                        </ul>
                    </div>

                    <button id="close-windows" class="btn btn-danger me-3">Cerrar Ventanas</button>
                    <a id="init" class="navbar-brand" href="#">
                        <img src="img/logoBotonBlanco.png" alt="LogoBoton" style="height: 40px;">
                    </a>
                </div>
            </nav>
        </header>

        <div style="height: 65px;"></div>
        `);
    }

    showRandomProductions(productions) {
        this.main.append(`
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" style="height: 500px;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                    aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                    class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                    class=""></button>
            </div>
            <div class="carousel-inner h-100"></div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `);

        for (let prod of productions) {
            $(".carousel-inner").append(`
                <div class="carousel-item `+ ($(".carousel-inner").html() === "" ? `active` : ``) + ` h-100 bg-dark bg-gradient">
                    <div class="h-100 d-flex justify-content-center">
                        <img src="`+ prod.image + `">
                    </div>
                    <div class="container">
                        <div class="carousel-caption bg-dark text-light bg-opacity-50">
                            <h1><a class="productionText me-4 text-light text-decoration-none" class="nav-link active" href="#">`+ prod.title + `</a></h1>
                        </div>
                    </div>
                </div>
            `);
        }
    }

    showCategories(categories) {
        this.main.append(`
        <div class="container justify-content-center text-center">
            <h1> Cateogrías </h1>
            <div id="categories" class="container justify-content-center text-center row">

            </div>
        </div>
        `);

        for (let category of categories) {
            $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="category me-4 text-light text-decoration-none" class="nav-link active" href="#single-category">`+ category.category.name + `</a>
            </li>
            `);

            $("#categories").append(`
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <a href="#single-category" class="category card-link"> <h5 class="card-title">`+ category.category.name + `</h5></a>
                <p class="card-text">`+ category.category.description + `</p>
              </div>
            </div>
            `);
        }

    }

    showPersons(actors, directors) {
        this.main.append(`
        <div class="container justify-content-center text-center">
            <h1> Actores </h1>
            <div id="actorsInitSection" class="container justify-content-center text-center row">

            </div>
        </div>
        
        <div class="container justify-content-center text-center">
            <h1> Directores </h1>
            <div id="directorsInitSection" class="container justify-content-center text-center row">

            </div>
        </div>

        `);

        for (let actor of actors) {
            $("#actorsInitSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="actor" href="#single-actor">
                    <img src="`+ actor.actor.picture + `" class="rounded" alt="` + actor.actor.name + `" name="` + actor.actor.id + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }

        for (let director of directors) {
            $("#directorsInitSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="director" href="#single-director">
                    <img src="`+ director.director.picture + `" class="rounded" alt="` + director.director.name + `" name="` + director.director.id + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }
    }

    showCategory(category, productions) {
        this.main.empty();
        this.showHeader();

        this.main.append(`
        <div id="categorySection" class="row justify-content-center text-center mt-4">
            <h1>`+ category + `</h1>
        </div>
        `);

        for (let production of productions) {
            $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="productionText me-4 text-light text-decoration-none" class="nav-link active" href="#single-production">`+ production.title + `</a>
            </li>
            `);

            $("#categorySection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="productionImage" href="#single-production">
                    <img src="`+ production.image + `" class="rounded" alt="` + production.title + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }

    }

    showProduction(production, cast, directors) {
        this.main.empty();
        this.showHeader();

        this.main.append(`
        <div class="d-flex justify-content-center mt-4">
            <div class="card mb-3" style="max-width: 600px;">
                <div class="row g-0">
                  <div class="col-md-5">
                    <img src="`+ production.image + `" class="img-fluid h-100 rounded-start" alt="` + production.title + `">
                  </div>
                  <div class="col-md-7">
                    <div class="card-body text-center h-100">
                        <h5 class="card-title">`+ production.title + `</h5>
                        <p class="card-text">`+ production.synopsis + `</p>
                        <p class="card-text">`+ production.nationality + `</p>
                        <p class="card-text text-secondary">`+ production.publication.toLocaleDateString() + `</p>
                        <button class="production-window btn btn-primary">Ventana</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="container mt-2">
            <div class="row text-center">
                <h1 class="">Actores</h1>
                <div id="actorsSection" class="row justify-content-center">

                </div>
            </div>
        </div>
        <div class="container mt-2">
            <div class="row text-center">
                <h1 class="">Directores</h1>
                <div id="directorsSection" class="row justify-content-center">

                </div>
            </div>
        </div>
        `);

        for (let actor of cast) {
            /* $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="actor me-4 text-light text-decoration-none" class="nav-link active" href="#" name="`+ actor.id + `">` + actor.name + `</a>
            </li>
            `); */

            $("#actorsSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="actor" href="#single-actor">
                    <img src="`+ actor.picture + `" class="rounded" alt="` + actor.name + `" name="` + actor.id + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);

        }

        for (let director of directors) {
            $("#directorsSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="director" href="#single-director">
                    <img src="`+ director.picture + `" class="rounded" alt="` + director.name + `" name="` + director.id + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }
    }

    showPerson(person, productions) {
        this.main.empty();
        this.showHeader();

        this.main.append(`
        <div class="d-flex justify-content-center mt-4">
            <div class="card" style="width: 18rem;">
            <img src="`+ person.picture + `" class="img-fluid overflow-hidden h-100 rounded-start" alt="` + person.name + `">
                <div class="card-body text-center">
                    <h5 class="card-title">`+ person.name + ` ` + person.lastname1 + `</h5>
                    <p class="card-text">Nacimiento: `+ person.born.toLocaleDateString() + `</p>
                </div>
            </div>
        </div>
        <div class="container mt-2">
            <div class="row text-center">
                <h1 class="">Producciones</h1>
                <div id="productsSection" class="row justify-content-center">

                </div>
            </div>
        </div>
        `);

        for (let prod of productions) {
            /* $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="actor me-4 text-light text-decoration-none" class="nav-link active" href="#" name="`+ actor.id + `">` + actor.name + `</a>
            </li>
            `); */

            $("#productsSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="productionImage" href="#single-production">
                    <img src="`+ prod.image + `" class="rounded" alt="` + prod.title + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }
    }

    showWindowProduction(window, production){
        window.document.write(`
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>`+ production.title + `</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>

        <body>
            <main>
                <div class="d-flex justify-content-center mt-4">
                    <div class="card mb-3" style="max-width: 600px;">
                        <div class="row g-0">
                          <div class="col-md-5">
                            <img src="`+ production.image + `" class="img-fluid h-100 rounded-start" alt="` + production.title + `">
                          </div>
                          <div class="col-md-7">
                            <div class="card-body text-center h-100 row justify-content-center">
                                <h5 class="card-title">`+ production.title + `</h5>
                                <p class="card-text">`+ production.synopsis + `</p>
                                <p class="card-text">`+ production.nationality + `</p>
                                <p class="card-text text-secondary">`+ production.publication.toLocaleDateString() + `</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                crossorigin="anonymous"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        </body>
        `)
    }

    
	bindInit(handler) {
		$('#init').click((event) => {
			this.#excecuteHandler(handler, [], 'body', { action: 'init' }, '#', event);
		});
	}

    bindCategory(handler) {
        $(".category").click((event) => {
			this.#excecuteHandler(handler, [event.target.innerText], 'body', { action: 'singleCategory', category: event.target.innerText }, '#single-category', event);
            //handler(event.target.innerText);
        })
    }

    bindProduction(handler) {
        $(".productionText").click((event) => {
			this.#excecuteHandler(handler, [event.target.innerText], 'body', { action: 'singleProduction', category: event.target.innerText }, '#single-production', event);
            //handler(event.target.innerText);
        })
        $(".productionImage").click((event) => {
			this.#excecuteHandler(handler, [event.target.alt], 'body', { action: 'singleProduction', category: event.target.alt }, '#single-production', event);
            //handler(event.target.alt);
        })
    }

    bindActor(handler) {
        $(".actor").click((event) => {
			this.#excecuteHandler(handler, [event.target.name], 'body', { action: 'singleActor', category: event.target.name }, '#single-actor', event);
            //handler(event.target.name);
        })
        /* $(".actorImage").click((event) => {
            handler(event.target.alt);
        }) */
    }

    bindDirector(handler) {
        $(".director").click((event) => {
			this.#excecuteHandler(handler, [event.target.name], 'body', { action: 'singleDirector', category: event.target.name }, '#single-director', event);
            handler(event.target.name);
        })
    }

    bindProductionWindow(handler) {
        $(".production-window").click((event) => {
            handler($(".card-title").text());
        })
    }

    bindCloseWindows(handler) {
        $("#close-windows").click((event) => {
            handler();
        })
    }

}

export { VideoSystemView }; 