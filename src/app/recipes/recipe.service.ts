import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    constructor(private shoppingListService:ShoppingListService){}
    recipeSelected = new EventEmitter<Recipe>();
    private Recipes:Recipe[]=[
        new Recipe(
          "Best Ever Banana Bread",
          "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Banana-Bread_EXPS_TOHDJ20_3309_E07_31_7b-41.jpg?resize=768,768",
          [
            new Ingredient("meat",10),
            new Ingredient("Tomato",5)
          ]
        ),
        new Recipe(
          "Food Wishes",
          "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good! —Gert Kaiser, Kenosha, Wisconsin",
          "https://www.allrecipes.com/thmb/rZREvzH2tAzMrU_tkMOEZxrhetE=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5692569_grilled-german-potato-salad_chef-john-a69267bbff6b47008138c0980b6abb17.jpg",
          [
            new Ingredient("Apple",10),
            new Ingredient("Tomato",5)
          ]
        )
    ]
    getRecipes(){
       return this.Recipes.slice();
    }
    AddIngredintsToShoppingList(ingredients:Ingredient[]){
     this.shoppingListService.AddIngredients(ingredients);
    }
}