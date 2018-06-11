import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl,FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

	recipeId: number;
	editMode: boolean;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
    ) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params)=>{
  		this.recipeId = params['id'];
  		this.editMode = params['id'] != null;//if the id not exist this mean we want to add new recipe
      this.createForm();
  	})
  	console.log(this.recipeId,this.editMode,)
  }

  private createForm() {
    let resipeName = '';
    let resipeDescription = '';
    let resipeImagePath = '';
    let resipeIngredients = new FormArray([]);

    if (this.editMode) {

      let resipe = this.recipeService.getRecipeByIndex(this.recipeId);
      resipeName = resipe.name;
      resipeDescription = resipe.description;
      resipeImagePath = resipe.imagePath;
      if (resipe.ingredients.length) {
        for (let ing of resipe.ingredients) {
          resipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name),
            'amount': new FormControl(ing.amount)

          }));

        }

      }

      console.log(resipe)
    }

    this.recipeForm = new FormGroup ({
      'name': new FormControl(resipeName),
      'description': new FormControl(resipeDescription),
      'imagePath': new FormControl(resipeImagePath),
      'ingredients': resipeIngredients

    })

    //console.log(this.recipeForm.get('ingredients'))

  }

  addIngredieant() {
    (<FormArray> this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()
    }));
  }

  onSubmit() {

  }

}