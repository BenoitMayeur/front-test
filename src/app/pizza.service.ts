import {Injectable, Output, EventEmitter} from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  globalListPizza: Pizza[] = [];

  constructor() {}

  get(): Pizza[] {
    return this.globalListPizza;
  }

  update(listPizza: Pizza[]) {
    this.globalListPizza = listPizza;
  }

  reset() {
    this.globalListPizza = [];
  }
}
