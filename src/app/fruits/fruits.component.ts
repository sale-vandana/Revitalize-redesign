import { Component } from '@angular/core';
import { FruitsService } from '../fservice/fruits.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {
  
  fArray : any;

  constructor(private fservice:FruitsService, private a : Router, private cart: CartService){}


  addtocart(p:any){
    this.cart.addtocart(p);
    this.a.navigateByUrl('/navbar/cart')
  }

  ngOnInit(){
    this.fservice.getfruits().subscribe((res)=>
    {
      this.fArray = res
    })
  }

}
