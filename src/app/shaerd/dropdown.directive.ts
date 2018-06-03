import { Directive, HostListener,HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef) { }
  	@HostBinding('class.open') isOpen = false;
  	@HostListener('click') onClick(){
  		this.isOpen = !this.isOpen
  	}

	//implement the Dropdown in second way
	/*  @HostListener('click') onClick(){
	  	let classList = this.elementRef.nativeElement.classList.value;

	  	if (classList.indexOf("open") == -1) {
	  		this.elementRef.nativeElement.classList.add('open');
	  	} else {
	  		this.elementRef.nativeElement.classList.remove('open');

	  	}

	  }*/

}
