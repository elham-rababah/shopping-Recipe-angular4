import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shaerd/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){

  	let ingname = this.nameInputRef.nativeElement.value;
  	let ingamount = this.amountInputRef.nativeElement.value;
  	let newIngrediant = new Ingredient(ingname,ingamount);
  	this.ingrediantAdded.emit(newIngrediant);
  }

}
