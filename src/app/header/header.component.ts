import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	@Output() routeVlaue = new EventEmitter<string>();

	determineRouteValue(route){
		this.routeVlaue.emit(route);

	}
}