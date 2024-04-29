import { Injectable } from '@angular/core';
import { fruits } from './fruits';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  fruitarr : fruits[] =[
    {
      pId:'1',
      pImg : 'assets/images/silver.jpeg',
      pName : 'Atasi International',
      
    },
    {
      pId:'2',
      pImg : 'assets/images/silver1.jpeg',
      pName : 'German silver oxidized ',
     
    },
    {
      pId:'3',
      pImg : 'assets/images/silver2.jpeg',
      pName : 'Pure Real sterling silver',
      
    },
    {
      pId:'4',
      pImg : 'assets/images/silver3.jpeg',
      pName : 'Silver Zircon Layered Ring',
     
    },
    {
      pId:'5',
      pImg : 'assets/images/silver4.jpeg',
      pName : 'Traditional Zircon Layered Ring',
     
    },
    {
      pId:'6',
      pImg : 'assets/images/silver10.jpeg',
      pName : 'Pure Silver Ring',
    
    },
    {
      pId:'7',
      pImg : 'assets/images/silver9.jpeg',
      pName : 'traditional Multilayer Chain Pendant Necklace', 
    },
    {
      pId:'8',
      pImg : 'assets/images/silver6.jpeg',
      pName : 'German Multilayer Chain Pendant Necklace ', 
    },
    {
      pId:'9',
      pImg : 'assets/images/silver8.jpeg',
      pName : 'Latest Stylish Traditional Oxidised silver Necklace',
      
    }
  ]

  getfruits(){
    return of (this.fruitarr)
  }
}
