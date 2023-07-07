import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient("Apple",10),
        new Ingredient("Tomato",5),
    ];
    getIngredient(){
       return this.ingredients.slice();
    }
    onAddedIngredint(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }
    AddIngredients(ingrediants:Ingredient[]){
        this.ingredients.push(...ingrediants);
        this.ingredientChange.emit(this.ingredients.slice());
    }
}