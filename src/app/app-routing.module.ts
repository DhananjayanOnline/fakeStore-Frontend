import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:'detail/:id', component:ProductDetailComponent},
  {path:"caterory/:c", component:CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
