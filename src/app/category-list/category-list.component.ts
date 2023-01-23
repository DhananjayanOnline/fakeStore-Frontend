import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  constructor(private route: ActivatedRoute, private router:Router) { }

  navigateToItem(c:any) {
    let cate = this.router.navigate(['/caterory', c])
    console.log(cate);
    

  }

}
