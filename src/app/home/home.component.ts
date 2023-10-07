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
  filterByCategory: any;

  constructor(private cakeService: CakeService) {}

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
            cake.name?.toLowerCase().startsWith(cakeName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
    });
  }

  onFilter(filter: string) {
    if(!this.filterByCategory) {
      this.filterByCategory = "all";
    } else {
      this.filterByCategory.emit(this.filterByCategory)
    }
  }
}
