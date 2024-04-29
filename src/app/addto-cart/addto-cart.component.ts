import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrl: './addto-cart.component.css'
})
export class AddtoCartComponent {

  cartarr:any
  obj:any;
  totalprice:any = 0;
  constructor(private cart:CartService){}

  calc(){
    for(this.obj of this.cartarr){
      this.totalprice+=parseInt(this.obj.pPrice)
    }
  }

  buy(){
    Swal.fire({
      title : `your appointment is booked successfully`,
      icon : `success`
    })
  }

  ngOnInit(){
    this.cart.getitem().subscribe((res)=>{
      this.cartarr=res
    })
    this.calc()
  }

}
