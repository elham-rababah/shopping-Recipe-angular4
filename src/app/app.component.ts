import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	route: string = 'Recipes';

	routeValue(route) {
		this.route = route;
	}
}
