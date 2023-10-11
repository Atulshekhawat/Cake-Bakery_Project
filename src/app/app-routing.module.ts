import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AuthGuard } from './services/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"cake-cart/:id",component:CakeCartComponent,canDeactivate:[CanDeactivateGuard]
  },
  {
    path:"cake-request", component:CakeRequestComponent,canActivate:[AuthGuard]
  },
  {
    path:"about-us", component:AboutUsComponent
  },
  {
    path:"contact-us", component:ContactUsComponent
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
