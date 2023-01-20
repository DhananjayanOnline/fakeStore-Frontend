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

    return fetch('https://fakestoreapi.com/products')
  }
}
