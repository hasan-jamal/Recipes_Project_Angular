import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipesWasSelected = new EventEmitter<Recipe>();
 @Input() Recipes:Recipe[]=[
  new Recipe(
    "Best Ever Banana Bread",
    "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Banana-Bread_EXPS_TOHDJ20_3309_E07_31_7b-41.jpg?resize=768,768"
  ),
  new Recipe(
    "Food Wishes",
    "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
    "https://www.allrecipes.com/thmb/rZREvzH2tAzMrU_tkMOEZxrhetE=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5692569_grilled-german-potato-salad_chef-john-a69267bbff6b47008138c0980b6abb17.jpg"
  )
 ]
 onRecipeSelect(recipe:Recipe){
    this.recipesWasSelected.emit(recipe);
 }
}
