import { Component, ElementRef, Output, ViewChild ,EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@Output() ingrediantCreated = new EventEmitter<Ingredient>();

  @ViewChild('inputName') inputName!:ElementRef;
  @ViewChild('inputAmount') inputAmount!:ElementRef;

  onAddIngrediant(){
    const name = this.inputName.nativeElement.value;
    const amount =this.inputAmount.nativeElement.value;
    const ingrediant = new Ingredient(name,amount)
   this.ingrediantCreated.emit(ingrediant);
  }
}
