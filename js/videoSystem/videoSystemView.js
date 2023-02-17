class VideoSystemView {

    constructor() {
        this.main = $('main');
    }

    showHeader() {
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

                    <a id="init" class="navbar-brand" href="#">
                        <img src="img/logoBotonBlanco.png" alt="LogoBoton" style="height: 40px;">
                    </a>
                </div>
            </nav>
        </header>

        <div style="height: 65px;"></div>
        `);
    }

    showCategories(categories) {
        this.main.empty();
        this.showHeader();

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
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                    </svg>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Example headline.</h1>
                        </div>
                    </div>
                </div>

                <div class="carousel-item h-100">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                    </svg>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Another example headline.</h1>
                        </div>
                    </div>
                </div>

                <div class="carousel-item h-100">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                    </svg>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>One more for good measure.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div id="categories" class="container justify-content-center text-center">
            <h1> Cateogrías <h2>

        </div>
        `);

        for (let category of categories) {
            $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="category me-4 text-light text-decoration-none" class="nav-link active" href="#">`+ category.category.name + `</a>
            </li>
            `);

            $("#categories").append(`
            <div>
                <a class="category " href="#">`+ category.category.name + `</a>
            </div>
            `);
        }
    }

    showCategory(category, productions) {
        this.main.empty();
        this.showHeader();

        this.main.append(`
        <div id="categorySection" class="row justify-content-center text-center">
            <h1>`+ category + `</h1>
        </div>
        `);

        for (let production of productions) {
            $("#narvars-ul").append(`
            <li class="nav-item">
                <a class="productionNav me-4 text-light text-decoration-none" class="nav-link active" href="#">`+ production.title + `</a>
            </li>
            `);

            $("#categorySection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a class="productionImage" href="#">
                    <img src="`+ production.image + `" class="rounded" alt="` + production.title + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }

    }

    showProduction(production, cast) {
        this.main.empty();
        this.showHeader();

        this.main.append(`
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="`+ production.image + `" class="card-img-top" alt="` + production.title + `">
                <div class="card-body text-center">
                  <h5 class="card-title">`+ production.title + `</h5>
                  <p class="card-text">`+ production.synopsis + `</p>
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
        `);

        for (let actor of cast) {
            $("#narvars-ul").append(`
            <li class="nav-item">
                <a class=" me-4 text-light text-decoration-none" class="nav-link active" href="#">`+ actor.name + `</a>
            </li>
            `);

            $("#actorsSection").append(`
            <div class="card col-m m-2 p-0" style="width: 200px; height: 240px;">
                <a href="#">
                    <img src="`+ actor.picture + `" class="rounded" alt="` + actor.name + `" style="width: 200px; height: 240px;">
                </a>
            </div>
            `);
        }
    }

    bindInit(handler) {
        $('#init').click((event) => {
            handler();
        })
    }

    bindCategory(handler) {
        $(".category").click((event) => {
            handler(event.target.innerText);
        })
    }

    bindProduction(handler) {
        $(".productionNav").click((event) => {
            handler(event.target.innerText);
        })
        $(".productionImage").click((event) => {
            handler(event.target.alt);
        })
    }

}

export { VideoSystemView }; 