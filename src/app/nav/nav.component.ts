import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(private service:StoreService){}
  
  categories:any

  ngOnInit(): void {
    this.service.listCategories().then((res:any)=> res.json()).then(data=> this.categories=data)
  }

}
