import {Component} from "angular2/core";
import {MoviesListComponent} from "./components/movies-list.component"
import {FooterComponent} from "./components/footer.component"


@Component({
	selector: "my-app",
	templateUrl: "app/templates/movies.html",
	directives: [MoviesListComponent, FooterComponent],
	styleUrls: ["../assets/css/style.css"]
})

export class AppComponent {
	public title:string;
}