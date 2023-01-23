import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:StoreService){}

  allProducts:any

  ngOnInit(){
    this.service.displayProduct().then((res:any)=> res.json()).then(data=> this.allProducts=data).catch(err=> alert(err))
  }  
}
