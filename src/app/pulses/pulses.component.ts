import { Component } from '@angular/core';
import { PulsesService } from '../pservice/pulses.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrl: './pulses.component.css'
})
export class PulsesComponent {

  pArray : any;

  constructor(private pulse:PulsesService, private a : Router, private cart: CartService){}

  

  addtocart(p:any){
    this.cart.addtocart(p);
    this.a.navigateByUrl('/navbar/cart')
  }

  ngOnInit(){
    this.pulse.getpulses().subscribe((res)=>
    {
      this.pArray = res
    })
  }

}
