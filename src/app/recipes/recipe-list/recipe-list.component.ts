import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 Recipes:Recipe[]=[
  new Recipe(
    "Best Ever Banana Bread",
    "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Banana-Bread_EXPS_TOHDJ20_3309_E07_31_7b-41.jpg?resize=768,768"
  ),
  new Recipe(
    "Best Ever Banana Bread",
    "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Banana-Bread_EXPS_TOHDJ20_3309_E07_31_7b-41.jpg?resize=768,768"
  )
 ]
}
