import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() 
  loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  vendorCode: string = "";
  
  constructor(private authService: AuthService,
    private cakeRouterService: RouteService ) { }

  ngOnInit(): void {
  }

  validateVendorCode() {
    if(this.vendorCode === "admin") {
      this.authService.login();
      this.loggedIn.emit(true);
      this.cakeRouterService.navigateToTourRequestsView();
    }
  }
}
