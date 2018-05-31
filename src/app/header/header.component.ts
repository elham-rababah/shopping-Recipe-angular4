import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	@Output() routeValue = new EventEmitter<string>();

	determineRouteValue(route){
		this.routeValue.emit(route);

	}
}