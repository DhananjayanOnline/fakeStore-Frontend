import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  displayProduct(){
    let options = {
      "method": "get",
      "headers": {
        "contect-type": "application/json"
      }
    }

    return fetch('https://fakestoreapi.com/products', options)
  }

  detialProduct(id:number){
    let options = {
      "method": "get",
      "headers": {
        "content-type": "application/json"
      }
    }
    return fetch(`https://fakestoreapi.com/products/${id}`, options)
  }

  listCategories(){
    let options = {
      "method": "get",
      "headers": {
        "content-type": "application/json"
      }
    }
    return fetch("https://fakestoreapi.com/products/categories", options)
  }

}
