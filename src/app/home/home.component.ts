import { Component } from '@angular/core';
import { Cake } from '../Models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cakes: Cake[] = [];
  categoryFilter: string = "";
  canDeactivate: any;
  // Injecting the service 
  constructor(private cakeService: CakeService) {}

  // Calling the service
  ngOnInit(): void {
    this.cakeService.getCakes().subscribe({
      next: (data) => {
        this.cakes = data;
      },
      error: (error) => {
        alert('Failed to fetch cakes due to Server Error !!');
      },
    });
  }

  onSearchTextChanged(cakeName: string) {
    this.cakeService.getCakes().subscribe({
      next: (data) => {
        if (cakeName || cakeName !== '') {
          this.cakes = this.cakes.filter((cake) =>
            cake.name?.toLowerCase().includes(cakeName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
    });
  }

  onFilter(filter: string) {
    this.categoryFilter = filter;
    this.cakeService.getCakes().subscribe({
      next: data => {
        this.cakes = data.filter(cake => cake.category === this.categoryFilter)
        if(this.categoryFilter === "all") {
          this.cakes = data;
        }
      }
    })
  }
}
