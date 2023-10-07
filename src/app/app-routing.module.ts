import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"cake-cart/:id",component:CakeCartComponent
  },
  {
    path:"cake-request", component:CakeRequestComponent
  },
  {
    path:"**", component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
