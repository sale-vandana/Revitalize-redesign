import { Component } from '@angular/core';
import { DummyService } from '../service/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {

  products : any;

  constructor(private service : DummyService){}

  ngOnInit(){
    this.service.getProd().subscribe((res)=>{
      this.products = res;
      console.table(this.products)
    })
  }

}
