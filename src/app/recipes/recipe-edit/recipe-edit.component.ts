import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

	recipeId: number;
	editMode:boolean;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params)=>{
  		this.recipeId = params['id'];
  		this.editMode = params['id'] != null;//if the id not exist this mean we want to add new recipe
  	})
  	console.log(this.recipeId,this.editMode)
  }

}
