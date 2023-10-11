import { Component, ViewChild } from '@angular/core';
import { CakeReqest } from '../Models/cake-request';
import { CakeRequestService } from '../services/cake-request.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cake-request',
  templateUrl: './cake-request.component.html',
  styleUrls: ['./cake-request.component.css']
})
export class CakeRequestComponent {
  displayedColumns: string[] = ['id','orderDate','cakeName','quantity', 'customerName', 'customerPhone','address'];
  cakeRequest: CakeReqest[] = []
  canDeactivate: any;
  dataSource:any;

  private _liveAnnouncer: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private cakeRequestService: CakeRequestService) { }

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      next: data => {
        this.cakeRequest = data;
        this.dataSource = new MatTableDataSource(this.cakeRequest);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => {
        alert(err);
      }
    });
  }
}