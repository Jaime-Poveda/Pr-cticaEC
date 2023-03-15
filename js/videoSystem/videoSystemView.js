import { createProductionValidation, removeProductionValidation, assignProductionValidation, newCategoryValidation, removeCategoryValidation, createPersonValidation, removePersonValidation, loginUserValidation } from './validation.js';

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

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  showHeader() {
    this.main.empty();

    //console.log("User: " + this.getCookie("User"));

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
                    
                    ${this.getCookie("User") === "admin" ? `
                    <div class="text-white me-3">
                      Hola ${this.getCookie("User")}
                    </div>
                    <a class="me-3 btn btn-success" id="closeSession" href="#">Cerrar sesión</a>
                    <a class="me-3 btn btn-info" id="formsButton" href="#forms">Administración</a>
                    ` : `
                    <a class="me-3 btn btn-success" id="loginButton" href="#login">Login</a>
                    `}
                    
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
            <h1> Categorías </h1>
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

  showWindowProduction(window, production) {
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

  showForms(directors, productions, actors, categories) {
    this.main.empty();
    this.showHeader();

    //let persons = [].concat(directors, actors);

    this.main.append(`
        <div class="container my-4">
          <h1>Formularios</h1>
            <button id="bCreateProduction" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#createProduction">
              Crear producción
            </button>
            
            <button id="bDeleteProduction" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#deleteProduction">
              Eliminar producción
            </button>
            
            <button id="bAssignProduction" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#productionsAssignments">
              Asignaciones en producciones
            </button>
            
            <button id="bNewCategory" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#createCategory">
              Crear categoría
            </button>
            
            <button id="bDeleteCategory" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#deleteCategory">
              Eliminar categoría
            </button>
            
            <button id="bCreatePerson" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#createPerson">
              Crear persona
            </button>
            
            <button id="bRemovePerson" type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#deletePerson">
              Eliminar persona
            </button>

          <h1>Guardado</h1>
            <button id="saveButton" class="btn btn-secondary me-3">Save</button>
            
            <div class="modal fade" id="createProduction" tabindex="-1">
              <form name="fCreateProduction" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Crear producción</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form name="" role="form">

                          <div class="mb-3">
                          <label>
                            Tipo de producción
                          </label>
                            <select class="form-select" name="prodType" required>
                              <option>Película</option>
                              <option>Serie</option>
                            </select>
                            <div class="invalid-feedback">El tipo es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Título</label>
                            <input type="text" class="form-control" placeholder="Título" name="title" required>
                            <div class="invalid-feedback">El título es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>
                          
                          <div class="mb-3">
                            <label class="form-label">Nacionalidad</label>
                            <input type="text" class="form-control" placeholder="Nacionalidad" name="nationality" required>
                            <div class="invalid-feedback">La nacionalidad es obligatoria.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Publicación</label>
                            <input type="date" class="form-control" name="published" required>
                            <div class="invalid-feedback">La publicación es obligatoria.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>
                          
                          <div class="mb-3">
                            <label class="form-label">Sinopsis</label>
                            <input type="text" class="form-control" placeholder="Sinopsis" name="synopsis" required>
                            <div class="invalid-feedback">La sinopsis es obligatoria.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>
                          
                          <div class="mb-3">
                            <label class="form-label">Imagen</label>
                            <input type="text" class="form-control" placeholder="http://..." name="productionImage" required>
                            <div class="invalid-feedback">La imagen es obligatoria.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                              <label>
                                  Director
                              </label>
                              <select class="form-select personSelect" name="director" required>

                              </select>
                              <div class="invalid-feedback">El director es obligatorio.</div>
                              <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                              <label>
                                  Actor
                              </label>
                              <select id="castSelect" multiple class="form-select personSelect" name="cast" required>

                              </select>
                              <div class="invalid-feedback">El actor es obligatorio.</div>
                              <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                              <label>
                                  Categoría
                              </label>
                              <select id="categoriesSelect" multiple class="form-select categorySelect" name="cProdCategories" required>

                              </select>
                              <div class="invalid-feedback">La categoría es obligatoria.</div>
                              <div class="valid-feedback">Correcto.</div>
                          </div>

                          <button type="submit" class="btn btn-primary">Crear</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div class="modal fade" id="deleteProduction" tabindex="-1">
              <form name="fRemoveProduction" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar producción</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                          <label>
                              Producción
                          </label>
                          <select class="form-select productionSelect" name="rProdName">

                          </select>
                          <div class="invalid-feedback">La producción es obligatoria.</div>
                          <div class="valid-feedback">Correcto.</div>
                        </div>
                        <button type="submit" class="btn btn-danger">Eliminar</button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal fade" id="productionsAssignments" tabindex="-1">
              <form name="fAssignProduction" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Asignaciones de producciones</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                        <form>
                            <div class="mb-3">
                              <label>
                                Tipo
                              </label>
                                <select class="form-select" name="productionType" required>
                                  <option>Asignar</option>
                                  <option>Desasignar</option>
                                </select>
                                <div class="invalid-feedback">El tipo es obligatorio.</div>
							                  <div class="valid-feedback">Correcto.</div>
                            </div>

                            <div class="mb-3">
                              <label>
                                Producción
                              </label>
                                <select class="form-select productionSelect" name="productionTitle" required>

                                </select>
                                <div class="invalid-feedback">La producción es obligatoria.</div>
							                  <div class="valid-feedback">Correcto.</div>
                            </div>

                            <div class="mb-3">
                              <label>
                                Persona
                              </label>
                                <select class="form-select personSelect" name="person" required>

                                </select>
                                <div class="invalid-feedback">La persona es obligatoria.</div>
							                  <div class="valid-feedback">Correcto.</div>
                            </div>

                            
                            <div class="mb-3">
                              <label>
                                Rol
                              </label>
                                <select class="form-select" name="role" required>
                                  <option>Actor</option>
                                  <option>Director</option>
                                </select>
                                <div class="invalid-feedback">El rol es obligatorio.</div>
							                  <div class="valid-feedback">Correcto.</div>
                            </div>

                                <button type="submit" class="btn btn-primary">Realizar</button>
                          </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
              </form>
            </div>
                        
            <div class="modal fade" id="createCategory" tabindex="-1">
                <form name="fNewCategory" role="form" novalidate>
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear categoría</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Nombre</label>
                                <input type="text" class="form-control" name="ncName" placeholder="Nombre" required>
                                <div class="invalid-feedback">El nombre es obligatorio.</div>
							                  <div class="valid-feedback">Correcto.</div>
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Descripción</label>
                              <input type="text" class="form-control" name="ncDesc" placeholder="Descripción" required>
                              <div class="invalid-feedback">La descripcción es obligatoria.</div>
                              <div class="valid-feedback">Correcto.</div>
                            </div>

                          <button type="submit" class="btn btn-primary">Crear</button>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
                        
            <div class="modal fade" id="deleteCategory" tabindex="-1">
              <form name="fRemoveCategory" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar categoría</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                          <label>
                              Categoría
                          </label>
                          <select class="form-select categorySelect" name="rcName" required>

                          </select>
                          <div class="invalid-feedback">La categoría es obligatoria.</div>
                          <div class="valid-feedback">Correcto.</div>
                        </div>
                        <button type="submit" class="btn btn-danger">Eliminar</button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div class="modal fade" id="createPerson" tabindex="-1">
              <form name="fCreatePerson" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Crear persona</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                          <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" placeholder="Nombre" name="name" required>
                            <div class="invalid-feedback">El nombre es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Apellido1</label>
                            <input type="text" class="form-control" placeholder="Apellido1" name="lastname1" required>
                            <div class="invalid-feedback">El apellido1 es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Apellido2</label>
                            <input type="text" class="form-control" placeholder="Apellido2" name="lastname2" required>
                            <div class="invalid-feedback">El apellido2 es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Nacimiento</label>
                            <input type="date" class="form-control" name="born" required>
                            <div class="invalid-feedback">El nacimiento es obligatorio.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Imagen</label>
                            <input type="text" class="form-control" placeholder="http://..." name="image" required>
                            <div class="invalid-feedback">La imagen es obligatoria.</div>
                            <div class="valid-feedback">Correcto.</div>
                          </div>

                          <div class="mb-3">
                            <label>
                              Rol
                            </label>
                              <select class="form-select" name="role" required>
                                <option>Actor</option>
                                <option>Director</option>
                              </select>
                              <div class="invalid-feedback">El rol es obligatorio.</div>
                              <div class="valid-feedback">Correcto.</div>
                          </div>

                        <button type="submit" class="btn btn-primary">Crear</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal fade" id="deletePerson" tabindex="-1">
              <form name="fRemovePerson" role="form" novalidate>
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar persona</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                          <label>
                              Persona
                          </label>
                          <select class="form-select personSelect" name="rpName" required>

                          </select>
                          <div class="invalid-feedback">La persona es obligatoria.</div>
                          <div class="valid-feedback">Correcto.</div>
                        </div>
                        <button type="submit" class="btn btn-danger">Eliminar</button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

        </div>
        `);

    this.updateDirectors(directors);
    this.updateProductions(productions);
    this.updateActors(actors);
    this.updateCategories(categories);
  }

  updateDirectors(directors) {
    $(".personSelect").empty();
    $(".directorSelect").empty();
    for (let director of directors) {
      $(".directorSelect").append(`
                <option>` + director.director.name + " " + director.director.lastname1 + `</option>
            `);

      $(".personSelect").append(`
                <option value="`+ director.director.id + `">` + director.director.name + " " + director.director.lastname1 + `</option>
            `);
    }
  }

  updateProductions(productions) {
    $(".productionSelect").empty();
    for (let production of productions) {
      $(".productionSelect").append(`
                <option>`+ production.title + `</option>
            `);
    }
  }

  updateActors(actors) {
    $(".actorSelect").empty();
    for (let actor of actors) {
      $(".personSelect").append(`
                <option value="`+ actor.actor.id + `">` + actor.actor.name + " " + actor.actor.lastname1 + `</option>
            `);

      $(".actorSelect").append(`
                <option>`+ actor.actor.name + " " + actor.actor.lastname1 + `</option>
            `);
    }
  }

  updateCategories(categories) {
    $(".categorySelect").empty();
    for (let category of categories) {
      $(".categorySelect").append(`
                <option>`+ category.category.name + `</option>
            `);
    }
  }

  showResultModal(done, error, type, message) {
    $('main').append(`
    <div class="modal fade text-light resultModal" id="resultModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title">`+ type + `</h5>
            <button type="button" class="close bg-dark text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            `+ (done ? message : error) + `
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
    `);

    let newResultModal = $("#resultModal");
    newResultModal.modal("show");
    newResultModal.find('button').click(() => {
      newResultModal.on('hidden.bs.modal', function (event) {
        //document.fNewCategory.reset();
        //document.fNewCategory.ncName.focus();
        this.remove();
      });
      newResultModal.modal('hide');
    })
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
      //handler(event.target.name);
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

  bindForms(handler) {
    $("#formsButton").click((event) => {
      this.#excecuteHandler(handler, [], 'body', { action: 'forms' }, '#forms', event);
    })
  }

  bindAdminButtons(hCreateProduction, hRemoveProduction, hAssignProduction, hNewCategory, hRemoveCategory, hCreatePerson, hRemovePerson) {
    $('#bCreateProduction').click((event) => {
      hCreateProduction(event);
      //this.#excecuteHandler(hRemoveProduction, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bDeleteProduction').click((event) => {
      hRemoveProduction(event);
      //this.#excecuteHandler(hRemoveProduction, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bAssignProduction').click((event) => {
      hAssignProduction(event);
      //this.#excecuteHandler(hRemoveProduction, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bNewCategory').click((event) => {
      hNewCategory(event);
      //this.#excecuteHandler(hNewCategory, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bDeleteCategory').click((event) => {
      hRemoveCategory(event);
      //this.#excecuteHandler(hRemoveCategory, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bCreatePerson').click((event) => {
      hCreatePerson(event);
      //this.#excecuteHandler(hRemovePerson, [], 'body', { action: 'forms' }, '#forms', event);
    });
    $('#bRemovePerson').click((event) => {
      hRemovePerson(event);
      //this.#excecuteHandler(hRemovePerson, [], 'body', { action: 'forms' }, '#forms', event);
    });
  }

  bindCreateProductionForm(handler) {
    try {
      createProductionValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindRemoveProductionForm(handler) {
    try {
      removeProductionValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindAssignProductionForm(handler) {
    try {
      assignProductionValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindNewCategoryForm(handler) {
    try {
      newCategoryValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindRemoveCategoryForm(handler) {
    try {
      removeCategoryValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindCreatePersonForm(handler) {
    try {
      createPersonValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  bindRemovePersonForm(handler) {
    try {
      removePersonValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  /* bindForms(handler) {
    $("#formsButton").click((event) => {
      this.#excecuteHandler(handler, [], 'body', { action: 'forms' }, '#forms', event);
    })
  } */

  bindLoginButton(handler) {
    $("#loginButton").click((event) => {
      handler();
      //this.#excecuteHandler(handler, [], 'body', { action: 'login' }, '#login', event);
    })
  }

  showLogin() {
    this.main.empty();
    this.showHeader();

    this.main.append(`
    <div class="container border rounded d-flex justify-content-center align-items-center mt-5" style="max-width: 50vh;">
      <form class="p-3 text-center" name="fLoginUser" role="form" novalidate>
        <h1>Inicio de Sesión</h1>
        <div class="mb-3">
          <label for="userName" class="form-label">Usuario</label>
          <input type="text" class="form-control" name="userName" required>
          <div class="invalid-feedback">El usuario es obligatorio.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
        <div class="mb-3">
          <label for="userPassword" class="form-label">Contraseña</label>
          <input type="password" class="form-control" name="userPassword" required>
          <div class="invalid-feedback">La contraseña es obligatoria.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
    `)
  }

  bindLoginForm(handler) {
    try {
      loginUserValidation(handler);
    } catch (error) {
      console.log(error);
    }
  }

  showLoginResultModal(done, error, type, message) {
    $('main').append(`
    <div class="modal fade text-light resultModal" id="resultModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title">`+ type + `</h5>
            <button type="button" class="close bg-dark text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            `+ (done ? message : error) + `
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
    `);

    let newResultModal = $("#resultModal");
    newResultModal.modal("show");
    newResultModal.find('button').click(() => {
      newResultModal.on('hidden.bs.modal', function (event) {
        this.remove();
      });
      newResultModal.modal('hide');
    })
  }
  
  bindCloseSession(handler) {
    $("#closeSession").click((event) => {
      handler();
    })
  }

  bindSaveButton(handler) {
    $("#saveButton").click((event) => {
      //handler();
      this.#excecuteHandler(handler, [], 'body', { action: 'init' }, '#', event);
      //this.#excecuteHandler(handler, [], 'body', { action: 'forms' }, '#forms', event);
    })
  }

}

export { VideoSystemView }; 