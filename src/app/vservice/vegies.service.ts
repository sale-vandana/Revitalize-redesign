import { Injectable } from '@angular/core';
import { product } from './vegies';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VegiesService {



  vegarr : product[] = [
    {
      pId : '1',
      pImg : 'assets/images/gold.jpeg',
    pName : 'Traditional Wear Of The Golden Necklace set ',
    
    },
    {
      pId : '2',
      pImg : 'assets/images/gold1.jpeg',
    pName : 'Traditional Wear Of The Golden Necklace set',
   
    },
    {
      pId : '3',
      pImg : 'assets/images/gold2.jpeg',
    pName : 'Latest Stylish Design Fancy Pearl Necklace set',
    
    },
    {
      pId : '4',
      pImg : 'assets/images/gold3.jpeg',
    pName : 'Latest Stylish Design Fancy Pearl Choker',
    
    },
    {
      pId : '5',
      pImg : 'assets/images/gold4.jpeg',
    pName : "Traditional Design of Choker",
   
    },
    {
      pId : '6',
      pImg : 'assets/images/gold5.jpeg',
    pName : 'Stylish and Elegent Gold Necklace ',
   
    },
    {
      pId : '7',
      pImg : 'assets/images/gold6.jpeg',
    pName : 'Ethinc Gold Brass Ring',
    
    },
    {
      pId : '8',
      pImg : 'assets/images/gold7.jpeg',
    pName : 'Latest Stylish Design Fancy Pearl Necklace set',
   
    },
    {
      pId : '9',
      pImg : 'assets/images/gold.jpeg',
    pName : 'Traditional Wear Of The Golden Necklace set',
    
    }
  ]

  getveg(){
    return of(this.vegarr)
  }
}
