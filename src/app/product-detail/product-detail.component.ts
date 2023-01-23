import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: StoreService) { }

  detail:any

  ngOnInit() {
    let id = this.route.snapshot.params['id']

    this.service.detialProduct(id).then((res:any)=> res.json()).then(data=> this.detail=data)
  }

}
