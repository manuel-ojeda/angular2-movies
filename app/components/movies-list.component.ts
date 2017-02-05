import {Component} from "angular2/core";
import {Movie} from "../models/movie";

@Component({
	selector: "movies-list",
	templateUrl: "app/templates/movies-list.html",
	styleUrls: ["../assets/css/style.css"]
})

export class MoviesListComponent {
	public title:string;
	public movie:Movie;
	public choicedMovie:Movie;
	public showData:boolean;
	public movies;
	
	constructor() {
		this.title="Mis películas";
		this.showData = false;
		this.movie = new Movie(1, "Cadena perpetua", "Frank Darabont", 2016);
		this.choicedMovie = new Movie(1, "Cadena perpetua", "Frank Darabont", 2016);
		this.movies = [
			new Movie(1, "Cadena perpetua", "Frank Darabont", 2016),
			new Movie(2, "El padrino", "Francis Ford Coppola", 1972),
			new Movie(3, "El padrino II", "Francis Ford Coppola", 1974),
			new Movie(4, "El caballero oscuro", "Christopher Nolan", 2008),
			new Movie(5, "12 hombres sin piedad", "Sidney Lumet", 1957)
		];
	}

	onShowHide(value) {
		this.showData = value;
	}

	onChangeMovie(movie) {
		this.movie = movie;
		this.choicedMovie = movie;
	}

	debug(title=null) {
		if (title != null) {
			console.log(this.title);
		} else {
			console.log(this.movie);
		}
	}
}