import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from './pulses';

@Injectable({
  providedIn: 'root'
})
export class PulsesService {

  constructor() { }

  pulsearr : product[] = [
    {
      pId : '1',
      pImg : 'assets/images/diamond.jpeg',
      pName : 'Glorious Green Pearl Diamond Plated Jewellery ',
      
    },
    {
      pId : '2',
      pImg : 'assets/images/diamond11.jpeg',
      pName : 'Pure American Diamond Ring',
     
    },
    {
      pId : '3',
      pImg : 'assets/images/diamond2.jpeg',
      pName : 'Rose Gold Plated White American Diamond',
     
    },
    {
      pId : '4',
      pImg : 'assets/images/diamond3.jpeg',
      pName : 'Diamond Plated Alloy Necklace Set',
      
    },
    {
      pId : '5',
      pImg : 'assets/images/diamond4.jpeg',
      pName : 'Traditional Wear of Diamond Plated Neklace Set',
      
    },
    {
      pId : '6',
      pImg : 'assets/images/diamond5.jpeg ',
      pName : 'Gold Plated Diamond Jewellery',
     
    },
    {
      pId : '7',
      pImg : 'assets/images/diamond6.jpeg',
      pName : 'Jewellary American Diamond Choker Necklace Set',
     
    },
    {
      pId : '8',
      pImg : 'assets/images/diamond10.jpeg',
      pName : 'Rhodium Plated American Diamond Ring',
     
    },
    {
      pId : '9',
      pImg : 'assets/images/diamond8.jpeg',
      pName : 'Pure Diamonds stud Earring ',
      
    }
    
  ]

  getpulses(){
    return of (this.pulsearr)
  }
}
