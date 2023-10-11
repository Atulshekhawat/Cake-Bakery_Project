import { Component } from '@angular/core';
import { Cake } from '../Models/cake';
import { CakeReqest } from '../Models/cake-request';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute } from '@angular/router';
import { CakeRequestService } from '../services/cake-request.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css']
})
export class CakeCartComponent {
  currentDate:any = new Date();
  totalBill: any;
  quantity:any;

  getErrorMessage() {
    throw new Error('Method not implemented.');
    }
    
      cake?: Cake;
      stars: Array<number> = [];
      cakeRequest: CakeReqest = {
        address: []
      };
      submitStatus: boolean=false;
      email: any;
      name: any;
      price: any;
    
    minDate: Date = new Date();
      constructor(private activatedRoute: ActivatedRoute,
        private cakeService: CakeService,
        private cakeRequestService: CakeRequestService,
        private routeService: RouteService,
        private snackBar: MatSnackBar) { }
    
    
        canDeactivate() {
          if (!this.submitStatus)
              this.submitStatus = confirm("Are you sure you want to leave this page?");
          return this.submitStatus;
        }

        ngOnInit(): void {
          this.activatedRoute.paramMap.subscribe(param => {
              let id = param.get("id") ?? "";
              this.cakeService.getCake(id).subscribe(data => {
                  this.cake = data;
                  this.submitStatus = false;
              })
          })
        }
    
      makeRequest() {
        if (this.cakeRequest.customerName) {
          this.cakeRequest.cakeName = this.cake?.name;
          this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
            next: data => {
              this.snackBar.open("Request Submitted", "", {
                duration: 3000
              });
              this.submitStatus=true;

              this.routeService.toHome();
            },
            error: err => {
              alert(err);
            }
          })
        }
      }

      calculateTotalBill() {
        if (this.cake && typeof this.cake.price === 'number' && this.cakeRequest.quantity) {
          if( this.cakeRequest.quantity>0){
            this.totalBill = this.cake.price * this.cakeRequest.quantity;
          }
        } else {
          this.totalBill = 0;
        }    
            
      }

}
