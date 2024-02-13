import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'',component:ShopComponent},
  {path:'single/:id',component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
