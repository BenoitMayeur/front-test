import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketComponent } from "../basket/basket.component";
import { BasketService } from "../basket.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizzalist",
  templateUrl: "./pizzalist.component.html",
  styleUrls: ["./pizzalist.component.css"]
})
export class PizzalistComponent implements OnInit {
  // @Input() name: string;
  @Output() isAdded = new EventEmitter<boolean>();
  constructor(private basketService: BasketService) {}

  ngOnInit() {}
  pizzas = PIZZAS;
  pizzaList: Pizza[] = [];

  updateList(pizza: Pizza, addedToTotal: boolean) {
    this.basketService.addToTotalAmount(pizza.price, addedToTotal);
    this.isAdded.emit(addedToTotal);
  }

  decrementNumber(pizza: Pizza) {
    // Decrement the number of the ordered pizza
    // the total amount of the selected pizza should be reduced as well
    pizza.numberOrdered--;
    pizza.totalAmountProduct = pizza.price * pizza.numberOrdered;
    // call the update list
  
  }

  incrementNumber(pizza: Pizza) {
    // Increment the number of the ordered pizza
    // the total amount of the selected pizza should be augmented as well

    pizza.numberOrdered++;
    pizza.totalAmountProduct = pizza.price * pizza.numberOrdered;
    // call the update list

    let lengthList = this.pizzaList.length;

    if(lengthList !== 0){
      if(!(this.pizzaList.some( onePizza => onePizza.id === pizza.id ))){
        this.pizzaList.push(pizza);
      }
    }
    else{
      this.pizzaList.push(pizza);
    }

    console.log(this.pizzaList)
  }
}
