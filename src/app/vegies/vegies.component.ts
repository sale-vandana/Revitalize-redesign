import { Component } from '@angular/core';
import { VegiesService } from '../vservice/vegies.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-vegies',
  templateUrl: './vegies.component.html',
  styleUrl: './vegies.component.css'
})
export class VegiesComponent {

  constructor(private veg:VegiesService, private a : Router, private cart: CartService){}

  vArray:any;

  addtocart(p:any){
    this.cart.addtocart(p);
    this.a.navigateByUrl('/navbar/cart')
  }

  ngOnInit(){

  this.veg.getveg().subscribe((res)=>{
    this.vArray = res
  })

  }



}
