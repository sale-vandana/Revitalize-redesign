import { Injectable } from '@angular/core';
import { product } from '../vservice/vegies';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart : product[] =[]

  addtocart(pro1:product){
    this.cart.push(pro1);
  }

  getitem(){
    return of(this.cart)
  }
}
