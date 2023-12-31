import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import{MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FilterComponent } from './filter/filter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FooterComponent } from './footer/footer.component';
import { CakeService } from './services/cake.service';
import { RouteService } from './services/route.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CakeCardComponent,
    HeaderComponent,
    CakeCartComponent,
    NotfoundComponent,
    SearchComponent,
    LoginComponent,
    CakeRequestComponent,
    FilterComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,MatSnackBarModule,MatNativeDateModule,MatSlideToggleModule,MatButtonToggleModule,
    MatPaginatorModule,MatSortModule
  ],
  providers: [
    CakeService,
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
