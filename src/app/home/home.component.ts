import { Component, OnInit, Input } from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketService } from "../basket.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  pizzas: Pizza[] = PIZZAS;
  totalPrice: number = 0;
  openModal: boolean =  false;

  constructor(private basketService: BasketService) {}

  ngOnInit() { }

  updateList(isIncrementing: boolean) {
    /* You should check if the value is incrementing or not and 
    change the value of the counter depending of the value of the boolean
    */
  }

  resetAll() {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    // Then, don't forget to also reset the counter
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    console.log("click")

    this.counter = 0;

    this.basketService.resetBasket()
  }

  getChildData(){  
    let amountPizza: number = 0;

    for(let pizza of this.pizzas){
      amountPizza = amountPizza + pizza.numberOrdered
    }

    this.counter = amountPizza;

  }  

  buyNow() {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */

    this.totalPrice = 0;
    let amountPizzas: number = 0;

    for(let pizza of this.pizzas){
      amountPizzas = amountPizzas + pizza.numberOrdered
    }

    for(let pizza of this.pizzas){
      this.totalPrice = this.totalPrice + (pizza.numberOrdered*pizza.price);
    }
      this.totalPrice = Math.round(this.totalPrice*100)/100;

      console.log("this.totalPrice", this.totalPrice)

    if(amountPizzas>0 && this.totalPrice<=200){
      this.openModal = true;
    }

  }

  closeModal(){
    this.openModal = false;
  }

  confirmPayment(){
    this.openModal = false;
  }


}
