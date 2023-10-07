import { Component } from '@angular/core';
import { CakeReqest } from '../Models/cake-request';
import { CakeRequestService } from '../services/cake-request.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-cake-request',
  templateUrl: './cake-request.component.html',
  styleUrls: ['./cake-request.component.css']
})
export class CakeRequestComponent {
  displayedColumns: string[] = ['orderDate','cakeName','quantity', 'customerName', 'customerPhone','address'];
  cakeRequest: CakeReqest[] = []
  canDeactivate: any;
  private _liveAnnouncer: any;
  constructor(private cakeRequestService: CakeRequestService) { }

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      next: data => {
        this.cakeRequest = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
}