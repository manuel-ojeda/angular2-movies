System.register(["angular2/core", "../models/movie"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_1;
    var MoviesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }],
        execute: function() {
            MoviesListComponent = (function () {
                function MoviesListComponent() {
                    this.title = "Mis películas";
                    this.showData = false;
                    this.movie = new movie_1.Movie(1, "Cadena perpetua", "Frank Darabont", 2016);
                    this.choicedMovie = new movie_1.Movie(1, "Cadena perpetua", "Frank Darabont", 2016);
                    this.movies = [
                        new movie_1.Movie(1, "Cadena perpetua", "Frank Darabont", 2016),
                        new movie_1.Movie(2, "El padrino", "Francis Ford Coppola", 1972),
                        new movie_1.Movie(3, "El padrino II", "Francis Ford Coppola", 1974),
                        new movie_1.Movie(4, "El caballero oscuro", "Christopher Nolan", 2008),
                        new movie_1.Movie(5, "12 hombres sin piedad", "Sidney Lumet", 1957)
                    ];
                }
                MoviesListComponent.prototype.onShowHide = function (value) {
                    this.showData = value;
                };
                MoviesListComponent.prototype.onChangeMovie = function (movie) {
                    this.movie = movie;
                    this.choicedMovie = movie;
                };
                MoviesListComponent.prototype.debug = function (title) {
                    if (title === void 0) { title = null; }
                    if (title != null) {
                        console.log(this.title);
                    }
                    else {
                        console.log(this.movie);
                    }
                };
                MoviesListComponent = __decorate([
                    core_1.Component({
                        selector: "movies-list",
                        templateUrl: "app/templates/movies-list.html",
                        styleUrls: ["../assets/css/style.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoviesListComponent);
                return MoviesListComponent;
            }());
            exports_1("MoviesListComponent", MoviesListComponent);
        }
    }
});
//# sourceMappingURL=movies-list.component.js.map